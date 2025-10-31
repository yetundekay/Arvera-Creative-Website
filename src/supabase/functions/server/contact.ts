import { serve } from 'std/server';

serve(async (req) => {
  try {
    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const body = await req.json();

    // Call Arvera API from server
    const response = await fetch('https://arvera-api.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ARVERA_API_KEY}`, // keep secret in Supabase
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    return new Response(JSON.stringify({ success: true, result }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
});
