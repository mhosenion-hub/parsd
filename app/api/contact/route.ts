import { NextResponse } from "next/server";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = clean(body.name);
    const phone = clean(body.phone);
    const subject = clean(body.subject) || "درخواست مشاوره";
    const message = clean(body.message);

    if (name.length < 2) {
      return NextResponse.json({ ok: false, message: "نام را کامل وارد کنید." }, { status: 400 });
    }

    if (phone.length < 7) {
      return NextResponse.json({ ok: false, message: "شماره تماس معتبر وارد کنید." }, { status: 400 });
    }

    if (message.length < 5) {
      return NextResponse.json({ ok: false, message: "توضیحات درخواست خیلی کوتاه است." }, { status: 400 });
    }

    // This endpoint validates and receives the request on the Next.js server.
    // Connect your email/CRM provider here when the final delivery destination is chosen.
    console.info("[Pars Dej] contact request received", {
      name,
      phone,
      subject,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "ارسال درخواست انجام نشد. دوباره تلاش کنید." },
      { status: 400 },
    );
  }
}
