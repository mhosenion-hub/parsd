"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "ثبت درخواست انجام نشد.");
      }

      form.reset();
      setState("success");
    } catch (error) {
      setState("error");
      setErrorMessage(error instanceof Error ? error.message : "خطایی در ارسال درخواست رخ داد.");
    }
  }

  const disabled = state === "sending";

  return (
    <form className="card contact-form-card" onSubmit={handleSubmit} noValidate>
      <h2>ثبت درخواست مشاوره</h2>
      <p>
        اطلاعات اولیه پروژه را وارد کنید تا درخواست شما برای ادامه هماهنگی ارسال شود.
      </p>

      <div className="form-grid">
        <label className="field">
          نام و نام خانوادگی
          <input name="name" placeholder="نام شما" autoComplete="name" minLength={2} required />
        </label>
        <label className="field">
          شماره تماس
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="شماره تماس"
            autoComplete="tel"
            required
          />
        </label>
        <label className="field full">
          موضوع درخواست
          <select name="subject" defaultValue="درخواست مشاوره">
            <option>درخواست مشاوره</option>
            <option>اعلام سرقت</option>
            <option>اعلام حریق</option>
            <option>CCTV و نظارت تصویری</option>
            <option>شبکه و VoIP</option>
            <option>پشتیبانی و نگهداری</option>
          </select>
        </label>
        <label className="field full">
          توضیحات
          <textarea
            name="message"
            placeholder="شرح کوتاه نیاز یا پروژه"
            minLength={5}
            rows={5}
            required
          />
        </label>
        <div className="field full">
          <button className="btn" type="submit" disabled={disabled} aria-busy={disabled}>
            {disabled ? "در حال ارسال..." : "ثبت درخواست"}
          </button>
        </div>
      </div>

      {state === "success" && (
        <div className="notice form-success form-success-ok" role="status">
          درخواست شما با موفقیت به سامانه ارسال شد.
        </div>
      )}

      {state === "error" && (
        <div className="notice form-success form-error" role="alert">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
