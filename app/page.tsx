"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const OR  = "#e8931a";
const OR2 = "#c47a10";
const OR3 = "#fef6ed";
const OR4 = "#fde3b0";
const INK   = "#0f0f0f";
const MID   = "#3d3d3d";
const MUTED = "#7a7a7a";
const SOFT  = "#f9f6f2";
const CREAM = "#fdf9f4";
const WHITE = "#ffffff";
const BORDER = "#ede8e0";
const F = "'Inter', sans-serif";
const S = "'Instrument Serif', serif";

const marqueeItems = [
  "Home Finance & Refinance","Investment Property Finance","Financial Mentoring",
  "Financial Health Check","Finance Restructuring","Values-based Advice","Manuka, Canberra",
];

const pillars = [
  { num:"01", icon:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",            title:"Trust & Accountability",   body:"We are focused on trust and accountability. We are industry leaders, demonstrating best practice and excellent customer relationships." },
  { num:"02", icon:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", title:"Long-term Relationships",  body:"We aren't about getting you a loan and forgetting about you. We build lasting relationships and ensure your finances are cared for at every stage of life." },
  { num:"03", icon:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 6v6l4 2",       title:"Life-stage Planning",     body:"We'll show you how to plan for a new baby, extended travel or study — without affecting your home loan or wealth creation goals." },
];

const services = [
  { cat:"Home Finance",      title:"Home Finance & Refinance",     icon:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",                                                                          body:"Get the home loan that lets you own your home sooner. We structure finance so you can comfortably meet repayments at every stage of life.", href:"/services" },
  { cat:"Investment Finance", title:"Investment Property Finance",  icon:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",                                                                              body:"Build your property portfolio so your finances and personal wealth are in place for the long term. Structured finance aligned to your goals.", href:"/services" },
  { cat:"Mentoring",         title:"Financial Mentoring",          icon:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",  body:"More than education — we help you set goals, understand what's holding you back and build real, lasting wealth. 25 years of proven results.", href:"/services" },
  { cat:"Health Check",      title:"Financial Health Check",       icon:"M22 12h-4l-3 9L9 3l-3 9H2",                                                                                                              body:"A comprehensive review of your current financial position, cash flow, loans and goals. Free to start — no obligation.", href:"/services" },
  { cat:"Restructuring",     title:"Finance Restructuring",        icon:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",         body:"We identify opportunities to reduce your repayments, consolidate debt and improve your overall financial position.", href:"/services" },
];

const testimonials = [
  { quote:"I was very happy with the services I received from Deden. The staff were very thorough and knew exactly what was going on with my application for refinance at all times. I didn't expect that they would be able to save me so much money on my home loan repayments, so I am glad I did the Financial Health Check.", name:"Simon", location:"Fisher, ACT", initials:"S", tag:"Home Finance" },
  { quote:"We have been working with Deden for 12 years now. In that time Michael has helped us go from massive credit card debt and no assets, to a portfolio of six investment properties. Without them we wouldn't have the amazing life that we are so fortunate to be living.", name:"Natalie and David", location:"Sydney, NSW · 12 years", initials:"ND", tag:"Mentoring" },
];

const trustItems = [
  { val:"25",     label:"Years of values-based financial services in Canberra" },
  { val:"Manuka", label:"Office in Manuka, ACT · Serving clients nationally" },
  { val:"ACL",    label:"Nationally licensed Australian Credit Licence holder" },
  { val:"6+",     label:"Investment properties — what mentoring clients achieve" },
];

const Badge = ({ label, dark = false }: { label: string; dark?: boolean }) => (
  <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background: dark ? "rgba(255,255,255,0.08)" : WHITE, border:`1px solid ${dark ? "rgba(255,255,255,0.12)" : BORDER}`, borderRadius:"40px", padding:"5px 14px", marginBottom:"16px" }}>
    <span style={{ fontFamily:F, fontSize:"11px", fontWeight:500, color: dark ? "rgba(255,255,255,0.5)" : MUTED }}>
      {label}
    </span>
  </div>
);

const IconBox = ({ icon, white = false }: { icon: string; white?: boolean }) => (
  <div style={{ width:"44px", height:"44px", borderRadius:"12px", background: white ? "rgba(255,255,255,0.2)" : OR3, border:`1px solid ${white ? "rgba(255,255,255,0.2)" : OR4}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"16px" }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={white ? "#fff" : OR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={icon}/>
    </svg>
  </div>
);

function TestimonialCarousel({ items }: { items: typeof testimonials }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dir, setDir] = useState<"left"|"right">("right");

  useEffect(() => {
    const t = setInterval(() => go((active+1)%items.length,"right"), 5000);
    return () => clearInterval(t);
  },[active]);

  function go(idx:number, d:"left"|"right") {
    if (!visible || idx===active) return;
    setDir(d); setVisible(false);
    setTimeout(() => { setActive(idx); setVisible(true); }, 320);
  }

  const t = items[active];
  const anim: React.CSSProperties = { animation:`${visible?(dir==="right"?"slideInR":"slideInL"):(dir==="right"?"slideOutL":"slideOutR")} 0.32s ease both` };

  return (
    <div>
      <div style={{ ...anim, background:WHITE, borderRadius:"20px", padding:"48px 52px", border:`1px solid ${BORDER}`, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:"3px", background:OR }} />
        <div style={{ fontFamily:S, fontSize:"4.5rem", color:OR, opacity:0.15, lineHeight:0.8, marginBottom:"14px", userSelect:"none" }}>"</div>
        <p style={{ fontFamily:S, fontSize:"1.1rem", fontStyle:"italic", color:INK, lineHeight:1.8, marginBottom:"32px" }}>{t.quote}</p>
        <div style={{ height:"1px", background:BORDER, marginBottom:"20px" }} />
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
            <div style={{ width:"42px", height:"42px", borderRadius:"50%", background:OR, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:F, fontSize:"12px", fontWeight:600, color:"#fff", flexShrink:0 }}>{t.initials}</div>
            <div>
              <div style={{ fontFamily:F, fontSize:"14px", fontWeight:600, color:INK }}>{t.name}</div>
              <div style={{ fontFamily:F, fontSize:"12px", color:MUTED, marginTop:"3px" }}>{t.location}</div>
            </div>
          </div>
          <span style={{ fontFamily:F, fontSize:"10.5px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", padding:"5px 14px", borderRadius:"40px", background:OR3, color:OR, border:`1px solid ${OR4}` }}>{t.tag}</span>
        </div>
      </div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"20px" }}>
        <div style={{ display:"flex", gap:"8px" }}>
          {items.map((_,i) => (
            <button key={i} onClick={() => go(i,i>active?"right":"left")} style={{ width:i===active?"28px":"8px", height:"8px", borderRadius:"4px", background:i===active?OR:BORDER, border:"none", cursor:"pointer", transition:"all 0.3s", padding:0 }} />
          ))}
        </div>
        <div style={{ display:"flex", gap:"8px" }}>
          <button onClick={() => go(active===0?items.length-1:active-1,"left")} style={{ width:"40px", height:"40px", borderRadius:"50%", background:SOFT, border:`1px solid ${BORDER}`, color:MUTED, fontSize:"16px", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}
            onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = OR3}
            onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = SOFT}
          >←</button>
          <button onClick={() => go((active+1)%items.length,"right")} style={{ width:"40px", height:"40px", borderRadius:"50%", background:OR, border:"none", color:"#fff", fontSize:"16px", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}
            onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = OR2}
            onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = OR}
          >→</button>
        </div>
      </div>
    </div>
  );
}

const Orbs = () => (
  <>
    <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(232,147,26,0.15) 1px, transparent 1px)", backgroundSize:"32px 32px", opacity:0.5, pointerEvents:"none", zIndex:0 }} />
    <div style={{ position:"absolute", width:"420px", height:"420px", borderRadius:"50%", background:"rgba(232,147,26,0.08)", top:"-60px", right:"-80px", animation:"float1 9s ease-in-out infinite", pointerEvents:"none", zIndex:0 }} />
    <div style={{ position:"absolute", width:"260px", height:"260px", borderRadius:"50%", background:"rgba(232,147,26,0.06)", bottom:"-40px", right:"120px", animation:"float2 12s ease-in-out infinite", pointerEvents:"none", zIndex:0 }} />
    <div style={{ position:"absolute", width:"140px", height:"140px", borderRadius:"50%", background:"rgba(232,147,26,0.1)", top:"120px", right:"340px", animation:"float3 7s ease-in-out infinite", pointerEvents:"none", zIndex:0 }} />
  </>
);

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background:CREAM, padding:"80px 5% 72px", display:"flex", alignItems:"center", minHeight:"580px", position:"relative", overflow:"hidden" }}>
        <Orbs />

        {/* Left */}
        <div style={{ flex:1, paddingRight:"64px", borderRight:`1px solid ${BORDER}`, position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:WHITE, border:`1px solid ${BORDER}`, borderRadius:"40px", padding:"6px 14px", marginBottom:"28px", animation:"fadeUp 0.6s 0.1s ease both" }}>
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:OR }} />
            <span style={{ fontFamily:F, fontSize:"11px", fontWeight:500, color:MUTED, letterSpacing:"0.02em" }}>Personalised Finance Solutions · Canberra</span>
          </div>

          <h1 style={{ fontFamily:S, fontSize:"clamp(3.2rem,6vw,6rem)", color:INK, lineHeight:1.0, letterSpacing:"-0.03em", marginBottom:"20px", fontWeight:400, animation:"fadeUp 0.6s 0.2s ease both" }}>
            Make a plan for<br />
            <em style={{ color:OR, fontStyle:"italic" }}>your finances.</em>
          </h1>

          <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, lineHeight:1.8, maxWidth:"420px", marginBottom:"36px", fontWeight:300, animation:"fadeUp 0.6s 0.3s ease both" }}>
            Are you busy and finding it hard to make time for your personal finances? You aren't alone — 75% of people fail to understand their cash flow. As little as 15 minutes a week is all it takes to change that.
          </p>

          <div style={{ display:"flex", gap:"14px", marginBottom:"40px", animation:"fadeUp 0.6s 0.4s ease both" }}>
            <Link href="/contact" style={{ background:OR, color:"#fff", padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>
              Book a Free Consultation
            </Link>
            <Link href="/services" style={{ background:"transparent", color:INK, border:`1.5px solid ${BORDER}`, padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:500, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>
              Our Services →
            </Link>
          </div>

          <div style={{ display:"flex", gap:"8px", flexWrap:"wrap", animation:"fadeUp 0.6s 0.5s ease both" }}>
            {["Values-based advice","25 years experience","Manuka, Canberra","ACL licensed"].map(c => (
              <span key={c} style={{ fontFamily:F, fontSize:"11.5px", fontWeight:500, color:MUTED, padding:"5px 14px", border:`1px solid ${BORDER}`, borderRadius:"40px", background:WHITE }}>{c}</span>
            ))}
          </div>
        </div>

        {/* Right — stat cards */}
        <div style={{ width:"44%", paddingLeft:"64px", position:"relative", zIndex:1 }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
            <div style={{ background:WHITE, borderRadius:"20px", padding:"28px", border:`1px solid ${BORDER}` }}>
              <IconBox icon="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <div style={{ fontFamily:S, fontSize:"2.8rem", color:INK, lineHeight:1, letterSpacing:"-0.03em", marginBottom:"8px" }}>75%</div>
              <div style={{ fontFamily:F, fontSize:"12.5px", color:MUTED, lineHeight:1.5, fontWeight:300 }}>of Australians never make a financial plan</div>
            </div>

            <div style={{ background:OR, borderRadius:"20px", padding:"28px", border:`1px solid ${OR}` }}>
              <IconBox icon="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 6v6l4 2" white />
              <div style={{ fontFamily:S, fontSize:"2.8rem", color:"#fff", lineHeight:1, letterSpacing:"-0.03em", marginBottom:"8px" }}>15min</div>
              <div style={{ fontFamily:F, fontSize:"12.5px", color:"rgba(255,255,255,0.7)", lineHeight:1.5, fontWeight:300 }}>a week is all it takes to get back on track</div>
            </div>

            <div style={{ background:WHITE, borderRadius:"20px", padding:"22px 28px", border:`1px solid ${BORDER}`, gridColumn:"1/-1", display:"flex", alignItems:"center", gap:"20px" }}>
              <div style={{ width:"48px", height:"48px", borderRadius:"14px", background:OR3, border:`1px solid ${OR4}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={OR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily:S, fontSize:"2rem", color:INK, lineHeight:1, letterSpacing:"-0.03em", marginBottom:"4px" }}>25 years</div>
                <div style={{ fontFamily:F, fontSize:"12.5px", color:MUTED, lineHeight:1.5, fontWeight:300 }}>empowering Canberra clients with values-based finance since 1999</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ background:INK, padding:"12px 0", overflow:"hidden", whiteSpace:"nowrap" }}>
        <div style={{ display:"inline-flex", animation:"marquee 32s linear infinite" }}>
          {[...marqueeItems,...marqueeItems].map((item,i) => (
            <span key={i} style={{ display:"inline-flex", alignItems:"center" }}>
              <span style={{ fontFamily:F, fontSize:"11px", fontWeight:500, letterSpacing:"0.16em", textTransform:"uppercase", color:"rgba(255,255,255,0.45)", padding:"0 24px" }}>{item}</span>
              <span style={{ color:OR, opacity:0.5, fontSize:"10px" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── MISSION — CREAM ── */}
      <section style={{ background:CREAM, padding:"88px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:"0", alignItems:"start" }}>
          <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
            <Badge label="Our philosophy" />
            <h2 style={{ fontFamily:S, fontSize:"clamp(2.2rem,4vw,3.4rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.03em" }}>
              Empowerment through{" "}
              <em style={{ color:OR, fontStyle:"italic" }}>values-based</em>{" "}
              strategies
            </h2>
          </div>
          <div style={{ paddingLeft:"64px" }}>
            <p style={{ fontFamily:F, fontSize:"15px", color:MID, lineHeight:1.85, marginBottom:"16px", fontWeight:300 }}>
              Deden has been empowering clients through financial services, education, mentoring and support for 25 years. We have condensed everything we have learned into services that include mentoring and education, finance restructuring, home finance and refinance, and investment finance.
            </p>
            <p style={{ fontFamily:F, fontSize:"15px", color:MID, lineHeight:1.85, marginBottom:"20px", fontWeight:300 }}>
              The first step on any journey starts with a decision to change. With the support of Deden <strong style={{ color:INK, fontWeight:600 }}>YOU</strong> can educate yourself and take control of your finances.
            </p>
            <div style={{ borderLeft:`2px solid ${OR}`, paddingLeft:"18px", margin:"24px 0", fontFamily:S, fontSize:"1.05rem", fontStyle:"italic", color:INK, lineHeight:1.6 }}>
              Don't put off until tomorrow what you can achieve today.
            </div>
            <Link href="/contact" style={{ fontFamily:F, fontSize:"12px", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:OR, textDecoration:"none" }}>
              Call us today →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PILLARS — SOFT ── */}
      <section style={{ background:SOFT, padding:"88px 5%" }}>
        <div style={{ textAlign:"center", marginBottom:"52px" }}>
          <Badge label="What drives us" />
          <h2 style={{ fontFamily:S, fontSize:"clamp(2.2rem,4vw,3.2rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.03em" }}>
            Built on <em style={{ color:OR, fontStyle:"italic" }}>three pillars</em>
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" }}>
          {pillars.map(p => (
            <div key={p.num}
              style={{ background:WHITE, borderRadius:"20px", padding:"36px", border:`1px solid ${BORDER}`, transition:"transform 0.2s, border-color 0.2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform="translateY(-4px)"; el.style.borderColor=OR; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform="translateY(0)"; el.style.borderColor=BORDER; }}
            >
              <div style={{ fontFamily:S, fontSize:"2.2rem", color:OR, opacity:0.22, lineHeight:1, marginBottom:"14px" }}>{p.num}</div>
              <IconBox icon={p.icon} />
              <h3 style={{ fontFamily:S, fontSize:"1.25rem", color:INK, marginBottom:"10px" }}>{p.title}</h3>
              <p style={{ fontFamily:F, fontSize:"13.5px", color:MUTED, lineHeight:1.75, fontWeight:300 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES — WHITE ── */}
      <section style={{ background:WHITE, padding:"88px 5%" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"48px" }}>
          <div>
            <Badge label="Let's consider your finances together" />
            <h2 style={{ fontFamily:S, fontSize:"clamp(2.2rem,4vw,3.2rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.03em" }}>
              Services we <em style={{ color:OR, fontStyle:"italic" }}>offer</em>
            </h2>
          </div>
          <Link href="/services" style={{ background:OR, color:"#fff", padding:"11px 24px", fontFamily:F, fontSize:"12px", fontWeight:600, textDecoration:"none", borderRadius:"40px", whiteSpace:"nowrap", flexShrink:0 }}>
            View All Services
          </Link>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"18px" }}>
          {services.map(s => (
            <div key={s.title}
              style={{ background:SOFT, borderRadius:"20px", border:`1px solid ${BORDER}`, overflow:"hidden", display:"flex", flexDirection:"column", transition:"transform 0.2s, border-color 0.2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform="translateY(-4px)"; el.style.borderColor=OR; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform="translateY(0)"; el.style.borderColor=BORDER; }}
            >
              <div style={{ padding:"28px 28px 0", flex:1 }}>
                <IconBox icon={s.icon} />
                <p style={{ fontFamily:F, fontSize:"10.5px", fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:OR, marginBottom:"6px" }}>{s.cat}</p>
                <h3 style={{ fontFamily:S, fontSize:"1.2rem", color:INK, lineHeight:1.2, marginBottom:"10px" }}>{s.title}</h3>
                <p style={{ fontFamily:F, fontSize:"13.5px", color:MUTED, lineHeight:1.75, fontWeight:300, marginBottom:"20px" }}>{s.body}</p>
              </div>
              <div style={{ padding:"16px 28px 24px", borderTop:`1px solid ${BORDER}` }}>
                <Link href={s.href} style={{ fontFamily:F, fontSize:"12px", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:OR, textDecoration:"none" }}>Learn more →</Link>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div style={{ background:OR, borderRadius:"20px", padding:"36px", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
            <div>
              <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:"rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"16px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 style={{ fontFamily:S, fontSize:"1.5rem", color:"#fff", lineHeight:1.2, marginBottom:"12px" }}>Ready to get started?</h3>
              <p style={{ fontFamily:F, fontSize:"13.5px", color:"rgba(255,255,255,0.7)", lineHeight:1.75, fontWeight:300, marginBottom:"28px" }}>Your first consultation is free, confidential and carries no obligation.</p>
            </div>
            <Link href="/contact" style={{ background:"#fff", color:OR, padding:"12px 24px", fontFamily:F, fontSize:"12px", fontWeight:700, textDecoration:"none", borderRadius:"40px", display:"inline-block", alignSelf:"flex-start" }}>Book now →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND — ORANGE ── */}
      <section style={{ background:OR, padding:"80px 5%" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:"48px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:"#fff", lineHeight:1.05, marginBottom:"12px", letterSpacing:"-0.02em" }}>
              Want to know more?<br />
              <em style={{ fontStyle:"italic", color:"rgba(255,255,255,0.72)" }}>We aren't the same as other brokers.</em>
            </h2>
            <p style={{ fontFamily:F, fontSize:"15px", color:"rgba(255,255,255,0.65)", maxWidth:"440px", lineHeight:1.75, fontWeight:300 }}>
              Don't put off until tomorrow what you can achieve today. A free, no-obligation consultation is all it takes to get started.
            </p>
          </div>
          <Link href="/contact" style={{ background:"#fff", color:OR, padding:"14px 36px", fontFamily:F, fontSize:"13px", fontWeight:700, textDecoration:"none", borderRadius:"40px", whiteSpace:"nowrap" }}>
            Yes please, tell me more!
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS — SOFT ── */}
      <section style={{ background:SOFT, padding:"88px 5%" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"44px" }}>
          <div>
            <Badge label="Client praise" />
            <h2 style={{ fontFamily:S, fontSize:"clamp(2.2rem,4vw,3.2rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.03em" }}>
              What our clients <em style={{ color:OR, fontStyle:"italic" }}>say</em>
            </h2>
          </div>
          <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, lineHeight:1.75, fontWeight:300, maxWidth:"300px", textAlign:"right" }}>
            Real results from real people. Our clients' words speak louder than ours ever could.
          </p>
        </div>
        <TestimonialCarousel items={testimonials} />
      </section>

      {/* ── TRUST BAR — INK ── */}
      <section style={{ background:INK, padding:"52px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
          {trustItems.map((t,i) => (
            <div key={t.val} style={{ paddingLeft:i===0?0:"32px", paddingRight:"32px", borderRight:i<trustItems.length-1?"1px solid rgba(255,255,255,0.08)":"none", textAlign:i===0?"left":i===trustItems.length-1?"right":"center" }}>
              <div style={{ fontFamily:S, fontSize:"2.6rem", color:OR, marginBottom:"6px", lineHeight:1, letterSpacing:"-0.03em" }}>{t.val}</div>
              <div style={{ fontFamily:F, fontSize:"13px", color:"rgba(255,255,255,0.3)", lineHeight:1.5, fontWeight:300 }}>{t.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}