import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, vehicle, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    await resend.emails.send({
      from: 'Southern Longview Automotive <hello@southernlongviewauto.com>',
      to: ['soloautomotive@hotmail.com'],
      reply_to: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9;">
          <div style="background: #111; padding: 24px; margin-bottom: 24px;">
            <img src="https://southernlongviewauto.com/southernlongviewlogowhite.png" alt="Southern Longview Automotive" style="height: 48px; width: auto;" />
          </div>
          <h2 style="color: #111; margin-bottom: 8px;">New Contact Form Submission</h2>
          <p style="color: #555; margin-bottom: 24px;">You have a new message from your website contact form.</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background: #fff; border-bottom: 1px solid #eee; font-weight: bold; width: 140px; color: #111;">Name</td>
              <td style="padding: 12px; background: #fff; border-bottom: 1px solid #eee; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #fff; border-bottom: 1px solid #eee; font-weight: bold; color: #111;">Email</td>
              <td style="padding: 12px; background: #fff; border-bottom: 1px solid #eee; color: #333;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 12px; background: #fff; border-bottom: 1px solid #eee; font-weight: bold; color: #111;">Phone</td>
              <td style="padding: 12px; background: #fff; border-bottom: 1px solid #eee; color: #333;">${phone}</td>
            </tr>` : ''}
            ${vehicle ? `
            <tr>
              <td style="padding: 12px; background: #fff; border-bottom: 1px solid #eee; font-weight: bold; color: #111;">Vehicle</td>
              <td style="padding: 12px; background: #fff; border-bottom: 1px solid #eee; color: #333;">${vehicle}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 12px; background: #fff; font-weight: bold; color: #111; vertical-align: top;">Message</td>
              <td style="padding: 12px; background: #fff; color: #333; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 24px; font-size: 13px; color: #999;">
            Reply directly to this email to respond to ${name} at ${email}.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
