import { Resend } from 'resend'
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(req: Request) {
  const { name, email, message, interest } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // 1. Notify YOU via Resend (to your verified email)
  const { error: notifyError } = await resend.emails.send({
    from: 'Ministry Website <onboarding@resend.dev>',
    to: process.env.GMAIL_USER!,
    replyTo: email,
    subject: `New message from ${name} — Ministry Website`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
        <h2 style="color: #1c1917;">New Contact Form Submission</h2>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <table style="width: 100%; font-size: 14px; color: #44403c;">
          <tr><td style="padding: 8px 0; color: #78716c; width: 140px;"><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #78716c;"><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #78716c;"><strong>Interested in</strong></td><td>${interest || 'Not specified'}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <p style="color: #78716c; font-size: 13px; margin-bottom: 4px;"><strong>Message:</strong></p>
        <p style="color: #1c1917; background: #f5f5f4; padding: 14px; border-radius: 8px;">${message || '(no message)'}</p>
        <p style="color: #a8a29e; font-size: 11px; margin-top: 24px; text-align: center;">YFC Colombo School Ministry · Sri Lanka</p>
      </div>
    `,
  })

  if (notifyError) {
    console.error('Notify error:', JSON.stringify(notifyError))
    return NextResponse.json({ error: notifyError.message }, { status: 500 })
  }

  // 2. Thank-you email via Gmail SMTP (can send to any address)
  try {
    await transporter.sendMail({
      from: `"YFC Colombo School Ministry" <${process.env.GMAIL_USER}>`,
      to: email,
      replyTo: process.env.GMAIL_USER,
      subject: `Thank you, ${name} — Here's how to support us 🙏`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 0; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb;">

          <div style="background: #1c1917; padding: 32px 28px; text-align: center;">
            <p style="color: #d08d12; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 8px;">YFC Colombo School Ministry</p>
            <h1 style="color: #ffffff; font-size: 28px; font-weight: 300; margin: 0;">Thank you, ${name}! 🙏</h1>
          </div>

          <div style="padding: 32px 28px; background: #ffffff;">
            <p style="color: #44403c; font-size: 15px; line-height: 1.7; margin-top: 0;">
              We've received your message and are so grateful you reached out.
              Our team will get back to you as soon as possible.
            </p>

            ${interest ? `<p style="color: #44403c; font-size: 14px;">You mentioned you're interested in: <strong style="color: #1c1917;">${interest}</strong></p>` : ''}

            <p style="color: #44403c; font-size: 15px; line-height: 1.7;">
              If you'd like to support us financially in the meantime, here are our bank details:
            </p>

            <div style="background: #fff8ed; border: 1px solid #f2d88a; border-radius: 12px; padding: 20px 24px; margin: 20px 0;">
              <p style="color: #d08d12; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 14px; font-weight: 600;">Bank Transfer Details</p>
              <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
                ${[
                  ['Bank', 'Commercial Bank'],
                  ['Account Name', 'Youth for Christ'],
                  ['Account No.', '1470021452'],
                  ['Branch', '98, High Level Road, Kirulapone'],
                  ['SWIFT Code', 'CCEYLKLX'],
                ].map(([label, val]) => `
                  <tr>
                    <td style="padding: 8px 0; color: #78716c; width: 140px; border-bottom: 1px solid #f2d88a;">${label}</td>
                    <td style="padding: 8px 0; color: #1c1917; font-weight: 600; border-bottom: 1px solid #f2d88a;">${val}</td>
                  </tr>
                `).join('')}
              </table>
              <p style="color: #a8a29e; font-size: 11px; margin: 14px 0 0; font-style: italic;">
                * For overseas donors, please reply to this email for USD/international transfer details.
              </p>
            </div>

            <p style="color: #44403c; font-size: 15px; line-height: 1.7;">
              Every gift goes directly to reaching young people across Dematagoda, Wattala,
              Wellawatte, Kirulapone, and Kotahena with the love of Christ.
            </p>

            <div style="border-left: 3px solid #d08d12; padding: 12px 16px; margin: 24px 0; background: #fafaf9;">
              <p style="color: #57534e; font-style: italic; font-size: 15px; margin: 0;">
                "How beautiful are the feet of those who bring good news!"
              </p>
              <p style="color: #d08d12; font-size: 11px; margin: 6px 0 0; letter-spacing: 0.1em; text-transform: uppercase;">Romans 10:15</p>
            </div>

            <p style="color: #44403c; font-size: 14px; margin-bottom: 4px;">God bless you,</p>
            <p style="color: #1c1917; font-size: 15px; font-weight: 600; margin: 0;">The YFC Colombo School Ministry Team</p>
          </div>

          <div style="background: #f5f5f4; padding: 16px 28px; text-align: center;">
            <p style="color: #a8a29e; font-size: 11px; margin: 0;">
              YFC Colombo School Ministry · Youth For Christ NHQ, Western Province, Sri Lanka<br/>
              📞 +94 75 797 1821 · ✉️ colombo.schoolministry@gmail.com
            </p>
          </div>

        </div>
      `,
    })
  } catch (gmailError) {
    console.error('Gmail SMTP error:', gmailError)
    // Don't fail — notify already sent
  }

  return NextResponse.json({ success: true })
}