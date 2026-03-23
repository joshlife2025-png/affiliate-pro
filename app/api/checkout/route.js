import Stripe from "stripe";

export async function POST() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_REPLACE_THIS", // <-- your real price ID
          quantity: 1,
        },
      ],
      success_url: "https://affiliate-pro-nine.vercel.app",
      cancel_url: "https://affiliate-pro-nine.vercel.app",
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("STRIPE ERROR:", error);

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
