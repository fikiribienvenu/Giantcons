import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // If RESEND_API_KEY is set, send via Resend; otherwise log to console (dev mode)
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "Giant Consult Website <no-reply@giantconsult.com>",
        to: ["giantconsult@gmail.com"],
        replyTo: email,
        subject: `[Website Enquiry] ${subject} — from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0B1F3A; padding: 24px; border-radius: 8px 8px 0 0;">
              <h2 style="color: #C99A3C; margin: 0; font-size: 18px;">New Website Enquiry</h2>
              <p style="color: #fff; margin: 4px 0 0; font-size: 12px; opacity: 0.7;">Giant Consult Ltd — giantconsult.com</p>
            </div>
            <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #374151;">
                <tr><td style="padding: 8px 0; font-weight: bold; width: 100px;">Name:</td><td>${name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}" style="color: #C99A3C;">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone || "—"}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Subject:</td><td>${subject}</td></tr>
              </table>
              <hr style="margin: 16px 0; border: none; border-top: 1px solid #e5e7eb;" />
              <p style="font-weight: bold; font-size: 14px; color: #374151; margin-bottom: 8px;">Message:</p>
              <p style="font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      });
    } else {
      // Development fallback — log to console
      console.log("📧 Contact form submission (no RESEND_API_KEY set):", {
        name,
        email,
        phone,
        subject,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
