import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: "price_1TDINw3jp4ml1gaIRq5yVlYG",
        quantity: 1,
      },
    ],
    success_url: "https://affiliate-7nax0whym-joshua-leatherwoods-projects.vercel.app/success",
    cancel_url: "https://affiliate-7nax0whym-joshua-leatherwoods-projects.vercel.app/cancel",
  });

  return Response.json({ url: session.url });
}
