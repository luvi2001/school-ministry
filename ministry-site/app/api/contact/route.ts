import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message, interest } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Ministry Website <onboarding@resend.dev>',  // change after domain setup
    to: process.env.RESEND_TO_EMAIL!,
    replyTo: email,
    subject: `New message from ${name} — Ministry Website`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
        <h2 style="color: #1c1917; margin-bottom: 4px;">New Contact Form Submission</h2>
        <p style="color: #78716c; font-size: 13px; margin-top: 0;">From your ministry website</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <table style="width: 100%; font-size: 14px; color: #44403c;">
          <tr><td style="padding: 8px 0; color: #78716c; width: 130px;"><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #78716c;"><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #78716c;"><strong>Interested in</strong></td><td>${interest || 'Not specified'}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="color: #78716c; font-size: 13px; margin-bottom: 4px;"><strong>Message:</strong></p>
        <p style="color: #1c1917; background: #f5f5f4; padding: 14px; border-radius: 8px; margin: 0;">${message || '(no message)'}</p>
        <p style="color: #a8a29e; font-size: 11px; margin-top: 24px; text-align: center;">Reaching the Unreached Ministry · Colombo, Sri Lanka</p>
      </div>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}