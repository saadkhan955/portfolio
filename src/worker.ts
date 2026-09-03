export interface Env {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
  RESEND_API_KEY?: string;
}

interface ContactPayload {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface ResendSuccessResponse {
  id: string;
}

interface ResendErrorResponse {
  message: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle Contact Form API Endpoint
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const apiKey = env.RESEND_API_KEY;
        if (!apiKey) {
          return new Response(
            JSON.stringify({
              success: false,
              error: 'RESEND_API_KEY secret is not configured on Cloudflare Worker.'
            }),
            {
              status: 500,
              headers: { 'Content-Type': 'application/json' }
            }
          );
        }

        // SAFETY: Incoming JSON body from validated POST request conforms to the ContactPayload shape before field access
        const payload = (await request.json()) as Partial<ContactPayload>;
        const name = String(payload.name ?? '').trim();
        const email = String(payload.email ?? '').trim();
        const projectType = String(payload.projectType ?? 'General Consultation').trim();
        const message = String(payload.message ?? '').trim();

        if (!name || !email || !message) {
          return new Response(
            JSON.stringify({
              success: false,
              error: 'Name, email, and message are required fields.'
            }),
            {
              status: 400,
              headers: { 'Content-Type': 'application/json' }
            }
          );
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeProjectType = escapeHtml(projectType);
        const safeMessage = escapeHtml(message);

        // 1. Notification Email to Saad Khan (contact@khansaad.dev)
        const adminEmailHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { margin: 0; padding: 0; background-color: #090d16; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
              .container { max-width: 600px; margin: 32px auto; background-color: #0f172a; border-radius: 16px; border: 1px solid #1e293b; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); }
              .header { background: linear-gradient(135deg, #0f172a 0%, #1e1e38 100%); padding: 32px 28px 24px; border-bottom: 1px solid #1e293b; position: relative; }
              .badge { display: inline-block; padding: 4px 12px; background-color: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 9999px; color: #38bdf8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
              .title { margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
              .subtitle { margin: 6px 0 0 0; color: #94a3b8; font-size: 13px; }
              .content { padding: 28px; }
              .info-card { background-color: #131d31; border: 1px solid #1e293b; border-radius: 12px; padding: 18px; margin-bottom: 20px; }
              .info-row { margin-bottom: 10px; font-size: 13px; color: #cbd5e1; }
              .info-row:last-child { margin-bottom: 0; }
              .label { color: #64748b; font-weight: 600; width: 120px; display: inline-block; }
              .value { color: #f1f5f9; font-weight: 600; }
              .value-link { color: #38bdf8; text-decoration: none; }
              .tag { background-color: rgba(56, 189, 248, 0.2); color: #38bdf8; padding: 2px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; }
              .message-box { background-color: #131d31; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 28px; }
              .message-title { margin: 0 0 10px 0; color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
              .message-text { margin: 0; color: #e2e8f0; font-size: 14px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; }
              .cta-wrap { text-align: center; margin-bottom: 8px; }
              .btn { display: inline-block; background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%); color: #04111d !important; padding: 12px 28px; border-radius: 10px; font-weight: 700; font-size: 13px; text-decoration: none; }
              .footer { padding: 20px 28px; border-top: 1px solid #1e293b; text-align: center; color: #64748b; font-size: 12px; background-color: #0b1120; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="badge">Portfolio Inquiry</div>
                <h1 class="title">New Client Message Received</h1>
                <p class="subtitle">Dispatched via the contact form on <strong style="color: #cbd5e1;">khansaad.dev</strong></p>
              </div>
              <div class="content">
                <div class="info-card">
                  <div class="info-row"><span class="label">Sender Name:</span> <span class="value">${safeName}</span></div>
                  <div class="info-row"><span class="label">Email Address:</span> <a href="mailto:${safeEmail}" class="value-link">${safeEmail}</a></div>
                  <div class="info-row"><span class="label">Area of Interest:</span> <span class="tag">${safeProjectType}</span></div>
                </div>
                <div class="message-box">
                  <div class="message-title">Inquiry Message</div>
                  <p class="message-text">${safeMessage}</p>
                </div>
                <div class="cta-wrap">
                  <a href="mailto:${safeEmail}?subject=Re: [Portfolio Inquiry] ${encodeURIComponent(projectType)}" class="btn">Reply Directly to ${safeName} &rarr;</a>
                </div>
              </div>
              <div class="footer">
                Automated notification from Saad Khan Developer Portfolio &bull; khansaad.dev
              </div>
            </div>
          </body>
          </html>
        `;

        // 2. Receipt / Confirmation Auto-Reply Email to Visitor
        const visitorReceiptHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { margin: 0; padding: 0; background-color: #090d16; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
              .container { max-width: 600px; margin: 32px auto; background-color: #0f172a; border-radius: 16px; border: 1px solid #1e293b; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); }
              .header { background: linear-gradient(135deg, #0f172a 0%, #0e2238 100%); padding: 32px 28px 24px; border-bottom: 1px solid #1e293b; }
              .badge { display: inline-block; padding: 4px 12px; background-color: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 9999px; color: #38bdf8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
              .title { margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
              .content { padding: 28px; }
              .greeting { color: #f1f5f9; font-size: 15px; font-weight: 600; margin: 0 0 14px 0; }
              .lead-text { color: #cbd5e1; font-size: 14px; line-height: 1.6; margin: 0 0 24px 0; }
              .summary-card { background-color: #131d31; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
              .summary-header { color: #38bdf8; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0; }
              .summary-row { font-size: 13px; color: #94a3b8; margin-bottom: 8px; }
              .summary-label { font-weight: 600; color: #64748b; }
              .summary-value { color: #e2e8f0; font-weight: 600; }
              .summary-message { margin: 12px 0 0 0; padding-top: 12px; border-top: 1px solid #1e293b; color: #cbd5e1; font-size: 13px; line-height: 1.6; white-space: pre-wrap; font-style: italic; }
              .timeline-box { background-color: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 10px; padding: 14px 18px; margin-bottom: 24px; color: #bae6fd; font-size: 13px; line-height: 1.5; }
              .signoff { color: #e2e8f0; font-size: 14px; line-height: 1.5; margin: 0; padding-top: 12px; }
              .signoff-name { font-weight: 800; color: #ffffff; font-size: 15px; margin-top: 4px; }
              .signoff-role { color: #64748b; font-size: 12px; }
              .footer { padding: 20px 28px; border-top: 1px solid #1e293b; text-align: center; color: #64748b; font-size: 12px; background-color: #0b1120; }
              .footer-links { margin-bottom: 8px; }
              .footer-links a { color: #38bdf8; text-decoration: none; margin: 0 8px; font-weight: 600; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="badge">Inquiry Confirmation</div>
                <h1 class="title">Thanks for Reaching Out!</h1>
              </div>
              <div class="content">
                <p class="greeting">Hi ${safeName},</p>
                <p class="lead-text">
                  I've received your note regarding <strong>${safeProjectType}</strong> through my portfolio (<a href="https://khansaad.dev" style="color: #38bdf8; text-decoration: none;">khansaad.dev</a>).
                </p>

                <div class="summary-card">
                  <div class="summary-header">Inquiry Summary</div>
                  <div class="summary-row"><span class="summary-label">Area of Interest:</span> <span class="summary-value">${safeProjectType}</span></div>
                  <div class="summary-row"><span class="summary-label">Sender Email:</span> <span class="summary-value">${safeEmail}</span></div>
                  <div class="summary-message">&ldquo;${safeMessage}&rdquo;</div>
                </div>

                <div class="timeline-box">
                  <strong>&bull; Response Timeline:</strong> I review inquiries personally and will respond within <strong>12 to 24 business hours</strong>.
                </div>

                <p class="signoff">
                  Best regards,<br>
                  <div class="signoff-name">Saad Khan</div>
                  <div class="signoff-role">Full-Stack &amp; Drupal Architect &bull; <a href="https://khansaad.dev" style="color: #38bdf8; text-decoration: none;">khansaad.dev</a></div>
                </p>
              </div>
              <div class="footer">
                <div class="footer-links">
                  <a href="https://khansaad.dev">Portfolio</a> &bull;
                  <a href="https://github.com/saadkhan955">GitHub</a> &bull;
                  <a href="mailto:contact@khansaad.dev">contact@khansaad.dev</a>
                </div>
                <div>&copy; 2026 Saad Khan. All rights reserved.</div>
              </div>
            </div>
          </body>
          </html>
        `;

        // Dispatch Admin Notification to Saad
        const adminSendPromise = fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey.trim()}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Saad Khan Portfolio <contact@khansaad.dev>',
            to: ['contact@khansaad.dev'],
            reply_to: email,
            subject: `[Portfolio Inquiry] ${projectType} - from ${name}`,
            html: adminEmailHtml
          })
        });

        // Dispatch Automated Receipt Confirmation to the Visitor
        const receiptSendPromise = fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey.trim()}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Saad Khan <contact@khansaad.dev>',
            to: [email],
            reply_to: 'contact@khansaad.dev',
            subject: `Inquiry Received: We'll be in touch soon — Saad Khan`,
            html: visitorReceiptHtml
          })
        });

        // Run both dispatches in parallel
        const [adminResponse, receiptResponse] = await Promise.all([adminSendPromise, receiptSendPromise]);

        if (!adminResponse.ok) {
          // SAFETY: Resend error response schema when dispatch fails
          const errorJson = (await adminResponse.json().catch(() => ({}))) as Partial<ResendErrorResponse>;
          const errorMsg = errorJson.message ?? 'Failed to dispatch notification to contact@khansaad.dev.';
          console.error('Admin Email Dispatch Failed:', errorMsg);
          return new Response(
            JSON.stringify({
              success: false,
              error: errorMsg
            }),
            {
              status: adminResponse.status,
              headers: { 'Content-Type': 'application/json' }
            }
          );
        }

        if (!receiptResponse.ok) {
          // Non-blocking log if receipt failed, but notify caller that inquiry was safely received
          console.warn('Visitor receipt email delivery note: non-blocking failure.');
        }

        // SAFETY: Resend success response schema containing email id
        const successJson = (await adminResponse.json().catch(() => ({}))) as Partial<ResendSuccessResponse>;

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Inquiry and confirmation receipt dispatched successfully!',
            emailId: successJson.id
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : 'Unknown server error';
        return new Response(
          JSON.stringify({ success: false, error: errorMsg }),
          {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    // Default static assets handler
    return env.ASSETS.fetch(request);
  }
};
