"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  programType: string;
  message: string;
  company: string; // honeypot
}

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  programType: "",
  message: "",
  company: "",
};

export default function InquiryForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  }

  function validate(d: FormData) {
    const errs: Record<string, string> = {};
    if (!d.name.trim()) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) errs.email = "Enter a valid email.";
    if (d.message.trim().length < 10) errs.message = "Please provide at least 10 characters.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length) return;
    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        setData(initialData);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 md:p-8 w-full">
      {/* honeypot */}
      <input type="text" name="company" value={data.company} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name *</label>
          <input id="name" name="name" value={data.name} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email *</label>
          <input id="email" type="email" name="email" value={data.email} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" value={data.phone} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="organization">Organization</label>
          <input id="organization" name="organization" value={data.organization} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="programType">Program type</label>
          <select id="programType" name="programType" value={data.programType} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600">
            <option value="">Select an option</option>
            <option value="corporate">Corporate Team Building</option>
            <option value="schools">Schools & Youth</option>
            <option value="leadership">Leadership & Skills</option>
            <option value="adventure">Adventure Expeditions</option>
            <option value="custom">Custom Program</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows={5} value={data.message} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
          {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button type="submit" disabled={status === "submitting"} className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-white font-semibold hover:bg-green-800 disabled:opacity-60">
          {status === "submitting" ? "Sending..." : "Send Enquiry"}
        </button>
        {status === "success" && <span className="text-green-700">Thanks! We’ll be in touch shortly.</span>}
        {status === "error" && <span className="text-red-600">Something went wrong. Please try again.</span>}
      </div>
    </form>
  );
}
