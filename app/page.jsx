"use client";
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

      <button 
        onClick={handleSubscribe}
        style={{
          marginTop:"2rem",
          padding:"1rem 2rem",
          background:"#22c55e",
          border:"none",
          borderRadius:"10px",
          cursor:"pointer"
        }}
      >
        Subscribe – Unlock The Vault ($9.99/month)
      </button>

    </main>
  );
}
