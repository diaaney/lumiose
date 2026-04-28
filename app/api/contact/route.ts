import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO = ['david.cintora@lumiose.studio', 'diane.cintora@lumiose.studio'];
const FROM = 'Lumiose Web <notifications@send.lumiose.studio>';
const REPLY_FROM_ES = 'Equipo de Lumiose <notifications@send.lumiose.studio>';
const REPLY_FROM_EN = 'Lumiose Team <notifications@send.lumiose.studio>';
const TEAM_REPLY_TO = ['david.cintora@lumiose.studio', 'diane.cintora@lumiose.studio'];

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

function autoReplyText(locale: 'es' | 'en', name: string) {
  if (locale === 'es') {
    return `Hola ${name},

Recibimos tu mensaje en Lumiose. Lo leemos personalmente y te respondemos dentro de 1 día hábil.

Equipo de Lumiose
lumiose.studio`;
  }
  return `Hi ${name},

We got your message at Lumiose. We read it personally and will reply within 1 business day.

Lumiose Team
lumiose.studio`;
}

function autoReplyHtml(locale: 'es' | 'en', name: string) {
  const safeName = escapeHtml(name);
  const c = locale === 'es'
    ? {
        lang: 'es',
        title: 'Recibimos tu mensaje — Lumiose',
        preheader: 'Lo leemos personalmente y te respondemos en 1 día hábil.',
        eyebrow: 'Equipo de Lumiose · Mensaje recibido',
        h1a: `Hola ${safeName},`,
        h1b: 'tu mensaje aterrizó.',
        body: 'Gracias por escribir a <strong style="color:#1a1f2b;font-weight:600">Lumiose</strong>. Lo leemos personalmente y te respondemos dentro de',
        bodyHighlight: '1 día hábil',
        bodyEnd: '.',
        statusDot: 'En cola',
        footerName: 'Lumiose Studio',
      }
    : {
        lang: 'en',
        title: 'We got your message — Lumiose',
        preheader: 'We read it personally and reply within 1 business day.',
        eyebrow: 'Lumiose Team · Message received',
        h1a: `Hi ${safeName},`,
        h1b: 'your message landed.',
        body: 'Thanks for writing to <strong style="color:#1a1f2b;font-weight:600">Lumiose</strong>. We read every message personally and reply within',
        bodyHighlight: '1 business day',
        bodyEnd: '.',
        statusDot: 'In queue',
        footerName: 'Lumiose Studio',
      };

  // External SVG clouds hosted at lumiose.studio/email/.
  // Loaded via <img> tag (Gmail/Apple Mail/Proton render external SVG; Outlook desktop falls back to alt text).
  const ASSET_BASE = 'https://lumiose.studio/email';
  const cloudImg = (file: string, w: number, h: number, op: number) =>
    `<img src="${ASSET_BASE}/${file}" width="${w}" height="${h}" alt="" style="display:block;border:0;outline:none;text-decoration:none;opacity:${op};max-width:${w}px;" />`;
  const cloud3 = (w: number, op: number) => cloudImg('cloud-3.svg', w, Math.round((w * 60) / 130), op);
  const cloud2 = (w: number, op: number) => cloudImg('cloud-2.svg', w, Math.round((w * 40) / 100), op);
  const cloud1 = (w: number, op: number) => cloudImg('cloud-1.svg', w, Math.round((w * 28) / 60), op);

  return `<!doctype html>
<html lang="${c.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
  <title>${c.title}</title>
</head>
<body style="margin:0;padding:0;background-color:#a7d2ee;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1a1f2b;-webkit-font-smoothing:antialiased;">
  <div style="display:none;font-size:1px;color:#a7d2ee;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${c.preheader}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#a7d2ee;background:linear-gradient(180deg,#bfdcf3 0%,#a7d2ee 55%,#8ec4e8 100%);">
    <tr><td align="center" style="padding:30px 16px 50px;">

      <!-- TOP CLOUDS — row 1 -->
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;">
        <tr>
          <td align="left" valign="top" width="55%" style="padding:0 0 4px 8px;">
            ${cloud3(150, 0.95)}
          </td>
          <td align="right" valign="top" width="45%" style="padding:14px 16px 4px 0;">
            ${cloud1(54, 0.7)}
          </td>
        </tr>
      </table>

      <!-- TOP CLOUDS — row 2 -->
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;">
        <tr>
          <td align="left" valign="top" width="38%" style="padding:0 0 18px 80px;">
            ${cloud2(76, 0.78)}
          </td>
          <td align="right" valign="top" width="62%" style="padding:0 36px 18px 0;">
            ${cloud3(100, 0.88)}
          </td>
        </tr>
      </table>

      <!-- CARD -->
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;background:#fffdf5;border-radius:24px;box-shadow:0 12px 28px rgba(26,31,43,0.10),0 2px 6px rgba(26,31,43,0.06);">
        <tr><td style="padding:44px 44px 40px;">

          <p style="margin:0 0 26px;font-family:'JetBrains Mono','SF Mono',Menlo,Consolas,monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#6a7080;">
            <span style="display:inline-block;width:6px;height:6px;background:#d94f3a;border-radius:50%;vertical-align:middle;margin-right:8px;"></span>${c.eyebrow}
          </p>

          <h1 style="margin:0 0 20px;font-family:'Fraunces','Cormorant Garamond',Georgia,'Times New Roman',serif;font-weight:400;font-size:34px;line-height:1.08;letter-spacing:-0.02em;color:#1a1f2b;">
            ${c.h1a}<br>
            <em style="font-style:italic;font-weight:400;color:#3a414f;">${c.h1b}</em>
          </h1>

          <p style="margin:0;font-size:16.5px;line-height:1.65;color:#3a414f;">
            ${c.body} <strong style="color:#1a1f2b;font-weight:600;border-bottom:1.5px solid #d94f3a;padding-bottom:1px;">${c.bodyHighlight}</strong>${c.bodyEnd}
          </p>

          <div style="margin:34px 0 0;padding-top:24px;border-top:1px dashed #e1d9c5;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="left" style="font-family:'JetBrains Mono','SF Mono',Menlo,Consolas,monospace;font-size:10.5px;letter-spacing:0.12em;text-transform:uppercase;color:#6a7080;">
                  <span style="color:#d94f3a;">●</span>&nbsp;&nbsp;${c.statusDot}
                </td>
                <td align="right" style="font-family:'Fraunces',Georgia,serif;font-style:italic;font-size:13.5px;color:#6a7080;">
                  ${c.footerName}
                </td>
              </tr>
            </table>
          </div>

        </td></tr>
      </table>

      <!-- BOTTOM CLOUDS — row 1 -->
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;">
        <tr>
          <td align="left" valign="top" width="42%" style="padding:20px 0 0 32px;">
            ${cloud2(80, 0.72)}
          </td>
          <td align="right" valign="top" width="58%" style="padding:26px 100px 0 0;">
            ${cloud1(44, 0.6)}
          </td>
        </tr>
      </table>

      <!-- FOOTER LINK -->
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;">
        <tr>
          <td align="center" style="padding:18px 0 0;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12.5px;color:#26303f;letter-spacing:0.02em;">
            <a href="https://lumiose.studio" style="color:#26303f;text-decoration:none;opacity:0.85;">lumiose.studio</a>
          </td>
        </tr>
      </table>

      <!-- BOTTOM CLOUDS — row 2 (final big puff) -->
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;">
        <tr>
          <td align="center" valign="top" style="padding:18px 0 0;">
            ${cloud3(132, 0.7)}
          </td>
        </tr>
      </table>

    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'email service not configured' }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 });
  }

  if (String(body.website ?? '').trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? '').trim().slice(0, 200);
  const email = String(body.email ?? '').trim().slice(0, 200);
  const business = String(body.business ?? '').trim().slice(0, 200);
  const phone = String(body.phone ?? '').trim().slice(0, 50);
  const need = String(body.need ?? '').trim().slice(0, 200);
  const message = String(body.message ?? '').trim().slice(0, 5000);
  const locale: 'es' | 'en' = body.locale === 'es' ? 'es' : 'en';

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'missing or invalid fields' }, { status: 400 });
  }

  const subject = `New lead — ${name}${business ? ` · ${business}` : ''}`;

  const notifyText = [
    `Name: ${name}`,
    business && `Business: ${business}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    need && `Needs: ${need}`,
    `Locale: ${locale}`,
    '',
    'Message:',
    message || '(no message)',
  ]
    .filter(Boolean)
    .join('\n');

  const notifyHtml = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:14px;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px;font-weight:600">Nuevo lead del formulario</h2>
      <table style="border-collapse:collapse;margin-bottom:16px">
        <tr><td style="padding:4px 16px 4px 0;color:#666">Nombre</td><td><strong>${escapeHtml(name)}</strong></td></tr>
        ${business ? `<tr><td style="padding:4px 16px 4px 0;color:#666">Negocio</td><td>${escapeHtml(business)}</td></tr>` : ''}
        <tr><td style="padding:4px 16px 4px 0;color:#666">Correo</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding:4px 16px 4px 0;color:#666">Teléfono</td><td>${escapeHtml(phone)}</td></tr>` : ''}
        ${need ? `<tr><td style="padding:4px 16px 4px 0;color:#666">Necesita</td><td>${escapeHtml(need)}</td></tr>` : ''}
        <tr><td style="padding:4px 16px 4px 0;color:#666">Idioma</td><td>${locale}</td></tr>
      </table>
      <h3 style="margin:20px 0 8px;font-weight:600">Mensaje</h3>
      <p style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:6px;margin:0">${escapeHtml(message || '(sin mensaje)')}</p>
    </div>
  `;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const notify = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      text: notifyText,
      html: notifyHtml,
    });
    if (notify.error) {
      console.error('[contact] notify error:', notify.error);
      return NextResponse.json({ error: 'send failed' }, { status: 502 });
    }
  } catch (err) {
    console.error('[contact] notify exception:', err);
    return NextResponse.json({ error: 'send failed' }, { status: 502 });
  }

  try {
    const reply = await resend.emails.send({
      from: locale === 'es' ? REPLY_FROM_ES : REPLY_FROM_EN,
      to: email,
      replyTo: TEAM_REPLY_TO,
      subject: locale === 'es' ? 'Recibimos tu mensaje — Lumiose' : 'We got your message — Lumiose',
      text: autoReplyText(locale, name),
      html: autoReplyHtml(locale, name),
    });
    if (reply.error) {
      console.error('[contact] auto-reply error:', reply.error);
    }
  } catch (err) {
    console.error('[contact] auto-reply exception:', err);
  }

  return NextResponse.json({ ok: true });
}
