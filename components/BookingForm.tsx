// components/BookingForm.tsx
"use client";

import { useState } from "react";

interface FieldState {
  value: string;
  error?: string;
}

/**
 * A client‑side booking form with simple validation. The form collects
 * information necessary to start a conversation about scheduling a speaking
 * engagement. On submit it sends a POST request to a dummy API route and
 * displays a confirmation message.
 */
export default function BookingForm() {
  const [name, setName] = useState<FieldState>({ value: "" });
  const [email, setEmail] = useState<FieldState>({ value: "" });
  const [organization, setOrganization] = useState<FieldState>({ value: "" });
  const [eventDate, setEventDate] = useState<FieldState>({ value: "" });
  const [message, setMessage] = useState<FieldState>({ value: "" });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const validate = () => {
    let valid = true;
    if (!name.value.trim()) {
      setName((prev) => ({ ...prev, error: "Name is required" }));
      valid = false;
    } else {
      setName((prev) => ({ ...prev, error: undefined }));
    }
    if (!email.value.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
      setEmail((prev) => ({ ...prev, error: "Valid email is required" }));
      valid = false;
    } else {
      setEmail((prev) => ({ ...prev, error: undefined }));
    }
    if (!eventDate.value) {
      setEventDate((prev) => ({ ...prev, error: "Event date is required" }));
      valid = false;
    } else {
      setEventDate((prev) => ({ ...prev, error: undefined }));
    }
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          organization: organization.value,
          eventDate: eventDate.value,
          message: message.value,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setName({ value: "" });
        setEmail({ value: "" });
        setOrganization({ value: "" });
        setEventDate({ value: "" });
        setMessage({ value: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
          value={name.value}
          onChange={(e) => setName({ value: e.target.value })}
          required
        />
        {name.error && (
          <p className="mt-1 text-sm text-red-600">{name.error}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
          value={email.value}
          onChange={(e) => setEmail({ value: e.target.value })}
          required
        />
        {email.error && (
          <p className="mt-1 text-sm text-red-600">{email.error}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Organization (optional)
        </label>
        <input
          id="organization"
          type="text"
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
          value={organization.value}
          onChange={(e) => setOrganization({ value: e.target.value })}
        />
      </div>
      <div>
        <label
          htmlFor="event-date"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Event Date
        </label>
        <input
          id="event-date"
          type="date"
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
          value={eventDate.value}
          onChange={(e) => setEventDate({ value: e.target.value })}
          required
        />
        {eventDate.error && (
          <p className="mt-1 text-sm text-red-600">{eventDate.error}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message (optional)
        </label>
        <textarea
          id="message"
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
          value={message.value}
          onChange={(e) => setMessage({ value: e.target.value })}
          rows={4}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center rounded-md bg-brand px-6 py-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
        >
          {status === "submitting" ? "Submitting…" : "Submit"}
        </button>
        {status === "success" && (
          <p className="mt-3 text-sm text-green-600">
            Thank you! We’ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </form>
  );
}
