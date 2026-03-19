"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [isMember, setIsMember] = useState(false);

  return (
    <main style={{ minHeight: "100vh", background: "#0f172a", color: "white", padding: "2rem" }}>

      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} style={{fontSize:"3rem"}}>
        Premium Product Vault
      </motion.h1>

      <p style={{color:"#aaa", marginTop:"1rem"}}>
        Exclusive affiliate deals, product picks, and insights.
      </p>

      <button 
        onClick={() => setIsMember(true)}
        style={{marginTop:"2rem", padding:"1rem 2rem", background:"#22c55e", border:"none", borderRadius:"10px"}}
      >
        Subscribe – $9.99/month
      </button>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:"1rem", marginTop:"3rem"}}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{background:"#1e293b", padding:"1rem", borderRadius:"10px"}}>
            <div style={{height:"120px", background:"#334155", marginBottom:"1rem"}}></div>
            <h3>Product #{i}</h3>
            {isMember ? (
              <a href="#" style={{display:"block", marginTop:"1rem", background:"#22c55e", padding:"0.5rem", textAlign:"center"}}>
                View Deal
              </a>
            ) : (
              <p style={{color:"red", marginTop:"1rem"}}>Members Only</p>
            )}
          </div>
        ))}
      </div>

      <p style={{marginTop:"3rem", fontSize:"0.8rem", color:"#888"}}>
        Affiliate Disclosure: We may earn commissions from purchases.
      </p>

    </main>
  );
}