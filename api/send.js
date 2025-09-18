// /api/send.js
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  // Parse raw body (Vercel Node functions don’t auto-parse)
  let body = '';
  for await (const chunk of req) body += chunk;
  let data = {};
  try {
    data = JSON.parse(body || '{}');
  } catch (e) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const { name = 'Sin nombre', email = 'sin-email@unknown', message = '' } = data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const result = await resend.emails.send({
      // Use this FROM until your domain is verified on Resend:
      from: 'Bonsaii Studio <onboarding@resend.dev>',
      // Once verified, switch to your domain:
      // from: 'Bonsaii Studio <info@bonsaiistudio.com>',
      to: 'info@bonsaiistudio.com',
      reply_to: email,
      subject: `Nuevo mensaje: ${name}`,
      html: `
        <h2>Nuevo mensaje desde Bonsaii Studio</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b></p>
        <p>${(message || '').replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ ok: true, id: result?.id || null });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Email failed', detail: String(error?.message || error) });
  }
}
