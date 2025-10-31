import { serve } from 'std/server';

serve(async (req) => {
  try {
    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const body = await req.json();
    const { name, email, message } = body;

    // Process form submission here
    // For example, log it or save to a database
    console.log('Contact form submission:', { name, email, message });

    // Return success response
    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully!' }),
      { status: 200 }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
});
