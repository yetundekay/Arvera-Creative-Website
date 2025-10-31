// functions/contact.ts
import { Hono } from 'hono';
import { json } from 'hono/json';

const app = new Hono();

app.post('/', async (c) => {
  try {
    const { name, email, message } = await c.req.json();

    // Here you can process the form: save to DB, send email, etc.
    console.log('Contact form submission:', { name, email, message });

    return json({ success: true, message: 'Form submitted successfully!' });
  } catch (err: any) {
    return json({ success: false, error: err.message }, 500);
  }
});

export default app;
