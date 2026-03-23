import Stripe from "stripe";

export async function POST() {
  try {
    const stripe = new Stripe(process.env.sk_test_51TDICA3jp4ml1gaIbEouJkhaK7D6jPgYwVRZ2qxHP5rmPGiH8DOGLSbLgcaAhYjnc4hfb425iRDiDXJWZrJBjG0W006GrLnrEW);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1TDINw3jp4ml1gaIRq5yVlYG", // <-- put your real price ID here
          quantity: 1,
        },
      ],
      success_url: "https://affiliate-7nax0whym-joshua-leatherwoods-projects.vercel.app",
      cancel_url: "https://affiliate-7nax0whym-joshua-leatherwoods-projects.vercel.app",
    });

    return Response.json({ url: session.url });

  } catch (error) {
    console.error("STRIPE ERROR:", error);
    return Response.json({ error: error.message });
  }
}
