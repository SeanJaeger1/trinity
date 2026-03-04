"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Initial Consultation",
    description:
      "Contact our team to book a consultation. We will assess your eligibility, explain the requirements, and outline exactly how your application will be processed.",
  },
  {
    number: "2",
    title: "Document Preparation",
    description:
      "We provide a clear checklist of all required documents. Our team professionally prepares and organises everything, including support with financial documentation if needed.",
  },
  {
    number: "3",
    title: "Application Submission",
    description:
      "Once payment is received and all documents are prepared, we professionally compile and submit your application to the online portal for the appropriate embassy or consulate.",
  },
  {
    number: "4",
    title: "Processing Period",
    description:
      "Document preparation typically takes 1\u20132 business days. Once submitted, processing is typically up to 5 business days. We actively monitor your application and keep you updated.",
  },
  {
    number: "5",
    title: "Approval & Entry",
    description:
      "Upon approval, you receive your E-Visa. Travel to Thailand and receive your 180-day DTV stamp on arrival.",
  },
];

const documents = [
  "Passport bio data page",
  "Passport-sized photo",
  "Bank statement showing 500,000 THB (or equivalent currency)",
  "Email address and phone number",
  "Home address (must match your bank statement)",
  "Accommodation or hotel address in Thailand",
  "Passport exit stamp from Thailand",
  "Arrival stamp of the new country (when applying after leaving Thailand)",
];

export default function Home() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(product: "visa" | "bank_docs") {
    setLoading(product);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="TRINITY DTV"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              TRINITY <span className="text-primary">DTV</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#process" className="hover:text-gray-900 transition-colors">
              Process
            </a>
            <a href="#documents" className="hover:text-gray-900 transition-colors">
              Documents
            </a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
          <a
            href="#pricing"
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-50 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Soft Skills Muay Thai DTV Visa
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Your 5-Year Thailand Visa,{" "}
            <span className="text-primary">Made Simple</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            TRINITY DTV specialises in securing 5-Year Destination Thailand
            Visas. We handle the complexity so you can focus on living, training,
            and experiencing everything Thailand has to offer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="bg-primary text-white px-8 py-3.5 rounded-lg font-medium hover:bg-primary-dark transition-colors text-lg"
            >
              Start Your Application
            </a>
            <a
              href="#process"
              className="text-gray-600 px-8 py-3.5 rounded-lg font-medium hover:text-gray-900 transition-colors text-lg"
            >
              Learn More &darr;
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Start Your Thailand Journey With Confidence
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Our mission is to make the application process smooth, clear, and
            stress-free. Our experienced team guides you through each step and
            keeps you informed throughout the entire process. If any assistance
            is needed &mdash; including support with financial documentation
            &mdash; we will help you step-by-step.
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Process
            </h2>
            <p className="text-gray-600">
              Five simple steps to your Thailand visa
            </p>
          </div>
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 bg-blue-200 flex-1 my-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section id="documents" className="py-20 px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Required Documents
            </h2>
            <p className="text-gray-600">
              To process your application, the following will be required
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <ul className="space-y-4">
              {documents.map((doc) => (
                <li key={doc} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">
              Additional details may be requested if necessary. Assistance with
              bank documents is available if needed.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What&apos;s Included
            </h2>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  30 Muay Thai Training Sessions
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With our service, you receive access to 30 Muay Thai training
                  sessions as part of the Soft Skills programme. There is no
                  obligation to attend the classes, but they are available for
                  you to use if you wish.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We have two options of well-known gyms to choose from in{" "}
                  <strong>Chalong</strong> &amp; <strong>Kathu</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-20 px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Important Information
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Must Exit Thailand First
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you are currently in Thailand, you must exit the country
                before applying. Our team typically recommends applying from
                Vietnam due to processing efficiency.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Processing Time
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Up to 5 business days from payment and submission. For
                applications submitted outside of Thailand, processing times may
                vary depending on the embassy and country of application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Payment */}
      <section id="pricing" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
            <p className="text-gray-600">
              Simple, transparent pricing for your visa application
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Visa Application */}
            <div className="bg-white rounded-2xl border-2 border-primary shadow-lg p-8 relative">
              <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Visa Application
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Full DTV visa application service with 30 Muay Thai sessions
                included
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  30,000
                </span>
                <span className="text-gray-500 ml-1">THB</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Complete application handling
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Document preparation &amp; submission
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  30 Muay Thai training sessions
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Full support throughout process
                </li>
              </ul>
              <button
                onClick={() => handleCheckout("visa")}
                disabled={loading === "visa"}
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 cursor-pointer"
              >
                {loading === "visa" ? "Redirecting..." : "Pay Now"}
              </button>
            </div>

            {/* Bank Document */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bank Document Assistance
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Help preparing your financial documentation to meet visa
                requirements
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">3,500</span>
                <span className="text-gray-500 ml-1">THB</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Financial document preparation
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Step-by-step guidance
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Meets all visa criteria
                </li>
              </ul>
              <button
                onClick={() => handleCheckout("bank_docs")}
                disabled={loading === "bank_docs"}
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {loading === "bank_docs" ? "Redirecting..." : "Pay Now"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer
        id="contact"
        className="py-16 px-6 bg-gray-900 text-white scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400">
              Ready to start your Thailand journey? Contact us today.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <a
              href="https://wa.me/66628321073"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400">WhatsApp</p>
              <p className="font-medium">+66 628321073</p>
            </a>
            <a
              href="https://instagram.com/TrinityDTV"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400">Instagram</p>
              <p className="font-medium">@TrinityDTV</p>
            </a>
            <a href="mailto:info@trinitydtv.com" className="group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">info@trinitydtv.com</p>
            </a>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TRINITY DTV. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
