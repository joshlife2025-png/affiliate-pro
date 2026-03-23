const handleSubscribe = async () => {
  const res = await fetch("/api/checkout", {
    method: "POST",
  });

  const data = await res.json();
  window.location.href = data.url;
};"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [isMember, setIsMember] = useState(false);

  const handleSubscribe = async () => {
    alert("clicked"); // keep this for testing

    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0f172a", color: "white", padding: "2rem" }}>

      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} style={{fontSize:"3rem"}}>
        The Vault
      </motion.h1>

     <button onClick={handleSubscribe}>
  Subscribe – Unlock The Vault ($9.99/month)
</button>

    </main>
  );
}
