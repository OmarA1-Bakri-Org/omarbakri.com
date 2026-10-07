import { NextResponse } from "next/server";

export const dynamic = "force-static";

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Omar Al-Bakri Email Signature</title>
</head>
<body style="margin:0;padding:24px;background:#ffffff;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="640" style="width:640px;max-width:640px;border-collapse:collapse;background:#202938;font-family:Arial,'Helvetica Neue',sans-serif;">
<tr>
<td width="132" style="width:132px;padding:12px 0 12px 18px;vertical-align:middle;text-align:center;">
<img src="https://omarbakri.com/email-signature-assets/monogram?v=2" width="97" height="160" alt="OAB monogram" style="display:block;width:97px;height:160px;border:0;outline:none;text-decoration:none;margin:0 auto;">
</td>
<td style="padding:18px 24px 18px 22px;vertical-align:middle;">
<div style="font-size:30px;line-height:34px;font-weight:300;letter-spacing:.2px;color:#C5A15A;white-space:nowrap;">Omar Al-Bakri</div>
<div style="margin-top:2px;font-size:15.5px;line-height:21px;font-weight:500;color:#F3EFE7;">Applied AI Engineer</div>
<div style="height:1px;background:#756D61;margin:10px 0 11px 0;font-size:0;line-height:0;">&nbsp;</div>
<div style="font-size:12.5px;line-height:18px;font-weight:500;color:#B6AA95;white-space:nowrap;">AI · FinTech · Payments · FI · Agentic Systems</div>
<div style="margin-top:4px;font-size:12.3px;line-height:18px;font-weight:500;color:#B6AA95;white-space:nowrap;">UK: +44 7542 857742 · Thailand: +66 95 916 7050</div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:9px;">
<tr>
<td style="padding:0 10px 0 0;vertical-align:middle;line-height:0;"><a href="https://x.com/omarbakri" target="_blank" style="text-decoration:none;border:0;"><img src="https://omarbakri.com/email-signature-assets/x" width="18" height="18" alt="X" style="display:block;border:0;outline:none;width:18px;height:18px;"></a></td>
<td style="padding:0 10px 0 0;vertical-align:middle;line-height:0;"><a href="https://www.linkedin.com/in/omaralbakri/" target="_blank" style="text-decoration:none;border:0;"><img src="https://omarbakri.com/email-signature-assets/linkedin" width="18" height="18" alt="LinkedIn" style="display:block;border:0;outline:none;width:18px;height:18px;"></a></td>
<td style="padding:0 8px 0 0;vertical-align:middle;line-height:0;"><a href="https://omarbakri.com" target="_blank" style="text-decoration:none;border:0;"><img src="https://omarbakri.com/email-signature-assets/web" width="18" height="18" alt="Web" style="display:block;border:0;outline:none;width:18px;height:18px;"></a></td>
<td style="padding:0;vertical-align:middle;"><a href="https://omarbakri.com" target="_blank" style="font-size:12.3px;line-height:18px;font-weight:500;color:#F3EFE7;text-decoration:none;white-space:nowrap;">omarbakri.com</a></td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;

export async function GET() {
  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
