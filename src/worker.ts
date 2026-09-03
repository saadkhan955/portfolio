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

        const htmlContent = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; color: #0f172a;">
            <div style="padding-bottom: 16px; border-bottom: 2px solid #38bdf8; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #0f172a; font-size: 20px;">New Portfolio Inquiry</h2>
              <span style="color: #64748b; font-size: 13px;">Received from khansaad.dev</span>
            </div>
            
            <div style="margin-bottom: 16px; background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Sender Name:</strong> ${name}</p>
              <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></p>
              <p style="margin: 0; font-size: 14px;"><strong>Area of Interest:</strong> <span style="background-color: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-weight: 600; font-size: 12px;">${projectType}</span></p>
            </div>

            <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
              <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Message Content:</h4>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #334155;">${message}</p>
            </div>

            <div style="text-align: center; padding-top: 12px;">
              <a href="mailto:${email}?subject=Re: [Portfolio Inquiry] ${encodeURIComponent(projectType)}" style="display: inline-block; background-color: #0284c7; color: #ffffff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 13px;">Reply Directly to ${name}</a>
            </div>
          </div>
        `;

        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey.trim()}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Saad Khan Portfolio <contact@khansaad.dev>',
            to: ['saadkhan955@gmail.com'],
            reply_to: email,
            subject: `[Portfolio Inquiry] ${projectType} - from ${name}`,
            html: htmlContent
          })
        });

        if (!resendResponse.ok) {
          // SAFETY: Resend error response object schema when status code is non-2xx
          const errorJson = (await resendResponse.json().catch(() => ({}))) as Partial<ResendErrorResponse>;
          const errorMsg = errorJson.message ?? 'Failed to dispatch email via Resend API.';
          return new Response(
            JSON.stringify({
              success: false,
              error: errorMsg
            }),
            {
              status: resendResponse.status,
              headers: { 'Content-Type': 'application/json' }
            }
          );
        }

        // SAFETY: Resend success response object schema containing the generated email id
        const successJson = (await resendResponse.json().catch(() => ({}))) as Partial<ResendSuccessResponse>;

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Inquiry sent successfully to Saad Khan!',
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
