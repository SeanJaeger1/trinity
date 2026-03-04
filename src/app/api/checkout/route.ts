import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const products = {
  visa: {
    name: "DTV Visa Application",
    description:
      "Full 5-Year Destination Thailand Visa application with 30 Muay Thai sessions",
    amount: 3000000, // 30,000 THB in satang
  },
  bank_docs: {
    name: "Bank Document Assistance",
    description: "Financial documentation preparation for DTV visa application",
    amount: 350000, // 3,500 THB in satang
  },
};

export async function POST(req: NextRequest) {
  try {
    const { product } = await req.json();

    if (!product || !(product in products)) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }

    const item = products[product as keyof typeof products];
    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "thb",
            product_data: {
              name: item.name,
              description: item.description,
            },
            unit_amount: item.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
