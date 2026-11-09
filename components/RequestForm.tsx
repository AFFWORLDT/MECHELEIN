"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import { FORM_TO } from "@/lib/site";
import { ArrowIcon } from "./ui";

// No backend yet: submitting opens the visitor's email app with the request filled in.
export default function RequestForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const missing = (["name", "phone"] as const)
      .map((n) => form.elements.namedItem(n) as HTMLInputElement)
      .find((f) => !f.value.trim());
    if (missing) {
      missing.focus();
      return;
    }
    const f = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const body = `Name: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\nArea: ${f.area}\n\n${f.message}`;
    window.location.href = `mailto:${FORM_TO}?subject=${encodeURIComponent("Site visit request: " + f.service)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className={sent ? "form done" : "form"} noValidate onSubmit={onSubmit}>
      <h3>Tell us about the job</h3>
      <label className="field">
        Name
        <input name="name" autoComplete="name" required />
      </label>
      <label className="field">
        Phone
        <input name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label className="field">
        Service
        <select name="service">
          {services.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Something else</option>
        </select>
      </label>
      <label className="field">
        Area in Dubai
        <input name="area" autoComplete="address-level2" placeholder="e.g. JLT" />
      </label>
      <label className="field field--full">
        What needs doing
        <textarea name="message" placeholder="The job, the type of building and any deadline" />
      </label>
      <button className="btn" type="submit">
        Request a site visit <ArrowIcon />
      </button>
      <p className="form__sent" role="status">
        Your email app has opened with the request filled in. Press send and we will get back to you.
      </p>
      <p className="form__note">We will get back to you as soon as we can.</p>
    </form>
  );
}
