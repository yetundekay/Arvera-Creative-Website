import { serve } from 'std/server';
import { createClient } from '@supabase/supabase-js';

// Use environment variables for security
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body = await req.json();

    // Optional: Validate input
    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name, email, and message are required.' }),
        { status: 400 }
      );
    }

    // Insert into Supabase table "contacts"
    const { data, error } = await supabase.from('contacts').insert([body]);

    if (error) {
      console.error('Supabase insert error:', error);
      throw new Error(error.message);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully!', data }),
      { status: 200 }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
});
