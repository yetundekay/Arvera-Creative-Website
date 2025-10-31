import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-6a419bf5/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/make-server-6a419bf5/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, company, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.log("Contact form submission error: RESEND_API_KEY not configured");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Send email using Resend API
    const emailPayload = {
      from: "Arvera Creative <onboarding@resend.dev>",
      to: ["arveracreative@gmail.com"],
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1C1C1C; border-bottom: 2px solid #C6A664; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p style="margin: 10px 0;"><strong>Project Type:</strong> ${projectType}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #1C1C1C;">Message:</h3>
            <p style="background-color: #f5f5f5; padding: 15px; border-left: 3px solid #C6A664; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>This message was sent from the Arvera Creative contact form.</p>
          </div>
        </div>
      `,
    };

    console.log(`Attempting to send email with payload:`, { 
      from: emailPayload.from, 
      to: emailPayload.to, 
      reply_to: emailPayload.reply_to,
      subject: emailPayload.subject 
    });

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailResponse.ok) {
      let errorData;
      try {
        errorData = await emailResponse.json();
      } catch {
        errorData = await emailResponse.text();
      }
      console.log(`Email sending error - Status: ${emailResponse.status}, Response:`, JSON.stringify(errorData));
      
      // Return more detailed error for debugging
      return c.json({ 
        error: "Failed to send email",
        details: typeof errorData === 'object' ? errorData : { message: errorData },
        status: emailResponse.status
      }, 500);
    }

    const emailData = await emailResponse.json();
    console.log(`Contact form email sent successfully: ${emailData.id}`);

    // Store the submission in the KV store for record keeping
    const timestamp = new Date().toISOString();
    const submissionKey = `contact_${timestamp}_${email}`;
    await kv.set(submissionKey, {
      name,
      email,
      company,
      projectType,
      message,
      timestamp,
    });

    return c.json({ 
      success: true, 
      message: "Email sent successfully" 
    });

  } catch (error) {
    console.log(`Contact form submission error: ${error.message}`);
    return c.json({ 
      error: "An error occurred while processing your request",
      details: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);