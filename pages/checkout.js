import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Nav from "../src/components/Nav/Nav";
// Next
import Router from "next/router";
import Checkout from "../src/components/Checkout/Checkout";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PreviewPage({ setPaid, isLogged, course, setCourse }) {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setPaid(true);
      localStorage.setItem("Paid", "true");
      Router.push("/registrer");
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <>
      <Nav isLogged={isLogged} />
      <Checkout course={course} />
    </>
  );
}
