import { EmailTemplate } from '@/ui/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, business, phone, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['killian.boularand@icloud.com'], // Remplacez par votre email
      subject: `New message from ${name}`,
      react: EmailTemplate({
        firstName: name,
        email,
        business,
        phone,
        message,
      }),
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("API Error:", error.message);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    } else {
      console.error("Unknown Error:", error);
      return new Response(JSON.stringify({ error: "An unknown error occurred" }), { status: 500 });
    }
  }
}
