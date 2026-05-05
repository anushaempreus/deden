"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

const services = [
  { title:"Home Finance & Refinance",    cat:"Home Finance",      highlight:"Most popular", icon:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",                                                                          body:["We'll get you the home loan that lets you own your home sooner. We structure finance so you feel confident knowing you can afford your repayments at all stages of life.","We will show you how to plan to take time away from work to be with your new baby, or to take extended time from work to travel or study, without it affecting your home loan ownership or wealth creation goals."] },
  { title:"Investment Property Finance", cat:"Investment Finance", highlight:null,           icon:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",                                                                              body:["Continue building your property portfolio so that your finances and personal wealth are in place for the long term.","We structure investment finance that aligns with your wealth creation goals — whether you're buying your first investment property or expanding an existing portfolio."] },
  { title:"Financial Mentoring",         cat:"Mentoring",         highlight:null,           icon:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",  body:["Our mentoring service is so much more than just financial education. We help you make goals, work towards achieving them and understand what is holding you back — and address that.","Clients have gone from massive credit card debt and no assets to a portfolio of six investment properties through our mentoring program."] },
  { title:"Financial Health Check",      cat:"Health Check",      highlight:"Free to start",icon:"M22 12h-4l-3 9L9 3l-3 9H2",                                                                                                              body:["Not sure if we can help? Start with a free Financial Health Check. Many clients are surprised at how much we can save them — even when they didn't think there was room to improve.","Our Financial Health Check is a comprehensive review of your current financial position, cash flow, loans and goals. It's the first step to taking back control."] },
  { title:"Finance Restructuring",       cat:"Restructuring",     highlight:null,           icon:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",         body:["We review your existing finance structure and identify opportunities to reduce your repayments, consolidate debt and improve your overall financial position.","Finance restructuring can free up cash flow that you can redirect toward wealth creation — whether that's accelerating your mortgage repayment or building an investment portfolio."] },
];

const whyItems = [
  { title:"Long-term relationships", body:"We build relationships that last years — often decades. We aren't about getting you a loan and forgetting about you." },
  { title:"Values-based advice",     body:"Every recommendation is grounded in your personal values, goals and life circumstances — not commission rates." },
  { title:"Education first",         body:"We teach you to understand your finances, not just fix them. Empowered clients make better decisions for life." },
];

/* ── Intersection-observer hook ─────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Fade-up wrapper ─────────────────────────────────── */
function FadeUp({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── Slide-in ──────────────────────────────────────────── */
function SlideIn({ children, delay = 0, from = "left" }: { children: React.ReactNode; delay?: number; from?: "left" | "right" }) {
  const { ref, visible } = useInView(0.1);
  const tx = from === "left" ? "-40px" : "40px";
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : `translateX(${tx})`,
      transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
    }}>
      {children}
    </div>
  );
}

const Badge = ({ label }: { label: string }) => (
  <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:WHITE, border:`1px solid ${BORDER}`, borderRadius:"40px", padding:"5px 14px", marginBottom:"16px" }}>
    <span style={{ fontFamily:F, fontSize:"11px", fontWeight:500, color:MUTED }}>{label}</span>
  </div>
);

const IconBox = ({ icon, white = false }: { icon: string; white?: boolean }) => (
  <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:white?"rgba(255,255,255,0.2)":OR3, border:`1px solid ${white?"rgba(255,255,255,0.2)":OR4}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"16px" }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={white?"#fff":OR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={icon}/>
    </svg>
  </div>
);

const Orbs = () => (
  <>
    <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(232,147,26,0.15) 1px, transparent 1px)", backgroundSize:"32px 32px", opacity:0.5, pointerEvents:"none", zIndex:0 }} />
    <div style={{ position:"absolute", width:"420px", height:"420px", borderRadius:"50%", background:"rgba(232,147,26,0.08)", top:"-60px", right:"-80px", animation:"float1 9s ease-in-out infinite", pointerEvents:"none", zIndex:0 }} />
    <div style={{ position:"absolute", width:"260px", height:"260px", borderRadius:"50%", background:"rgba(232,147,26,0.06)", bottom:"-40px", right:"120px", animation:"float2 12s ease-in-out infinite", pointerEvents:"none", zIndex:0 }} />
    <div style={{ position:"absolute", width:"140px", height:"140px", borderRadius:"50%", background:"rgba(232,147,26,0.1)", top:"120px", right:"340px", animation:"float3 7s ease-in-out infinite", pointerEvents:"none", zIndex:0 }} />
  </>
);

/* ── Service card ─────────────────────────────────────── */
function ServiceCard({ s, idx }: { s: typeof services[0]; idx: number }) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useInView(0.08);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:"grid", gridTemplateColumns:"300px 1fr",
        borderRadius:"20px", overflow:"hidden",
        border:`1px solid ${hovered ? OR : BORDER}`,
        background:WHITE,
        transition: visible
          ? `border-color 0.25s, transform 0.3s, box-shadow 0.3s, opacity 0.5s ${idx * 0.08}s`
          : "none",
        transform: visible ? (hovered ? "translateY(-4px)" : "translateY(0)") : "translateY(36px)",
        opacity: visible ? 1 : 0,
        boxShadow: hovered ? `0 12px 40px rgba(232,147,26,0.12)` : "none",
      }}
    >
      {/* Left panel */}
      <div style={{ background:CREAM, padding:"36px 32px", borderRight:`2px solid ${OR}`, display:"flex", flexDirection:"column", justifyContent:"center", position:"relative", overflow:"hidden" }}>
        {/* Shimmer overlay on hover */}
        <div style={{
          position:"absolute", inset:0,
          background:"linear-gradient(135deg, transparent 40%, rgba(232,147,26,0.06) 100%)",
          opacity: hovered ? 1 : 0,
          transition:"opacity 0.4s",
          pointerEvents:"none",
        }} />
        <div style={{ position:"absolute", top:"20px", right:"20px", fontFamily:S, fontSize:"1.6rem", color:OR, opacity:0.15, lineHeight:1, fontWeight:400 }}>0{idx+1}</div>
        <div style={{ transform: hovered ? "scale(1.1)" : "scale(1)", transition:"transform 0.3s", width:"fit-content" }}>
          <IconBox icon={s.icon} />
        </div>
        <p style={{ fontFamily:F, fontSize:"10.5px", fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:OR, marginBottom:"8px" }}>{s.cat}</p>
        <h2 style={{ fontFamily:S, fontSize:"1.1rem", color:INK, lineHeight:1.3, marginBottom:s.highlight?"14px":"0", fontWeight:400 }}>{s.title}</h2>
        {s.highlight && (
          <span style={{ display:"inline-block", alignSelf:"flex-start", fontFamily:F, fontSize:"10px", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", padding:"4px 12px", borderRadius:"40px", background:OR3, color:OR, border:`1px solid ${OR4}` }}>{s.highlight}</span>
        )}
      </div>
      {/* Right panel */}
      <div style={{ padding:"36px 52px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        {s.body.map((para,j) => (
          <p key={j} style={{ fontFamily:F, fontSize:"14.5px", color:MID, lineHeight:1.85, fontWeight:300, marginBottom:j<s.body.length-1?"14px":"0" }}>{para}</p>
        ))}
        <div style={{ marginTop:"24px", paddingTop:"20px", borderTop:`1px solid ${BORDER}` }}>
          <Link href="/contact" style={{ fontFamily:F, fontSize:"12px", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:OR, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:"6px" }}>
            <span>Enquire about this service</span>
            <span style={{ display:"inline-block", transition:"transform 0.25s", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Why card ─────────────────────────────────────────── */
function WhyCard({ item, delay }: { item: typeof whyItems[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding:"22px 24px",
          background: hovered ? WHITE : SOFT,
          borderRadius:"16px",
          border:`1px solid ${hovered ? OR : BORDER}`,
          borderLeft:`3px solid ${OR}`,
          transition:"background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s",
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          boxShadow: hovered ? `0 8px 24px rgba(232,147,26,0.08)` : "none",
        }}
      >
        <p style={{ fontFamily:S, fontSize:"1rem", color:INK, marginBottom:"6px", fontWeight:400 }}>{item.title}</p>
        <p style={{ fontFamily:F, fontSize:"13.5px", color:MUTED, lineHeight:1.7, fontWeight:300 }}>{item.body}</p>
      </div>
    </FadeUp>
  );
}

export default function ServicesPage() {
  return (
    <>
      <style>{`
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(12px)} }
        @keyframes float3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes heroIn { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulseOR {
          0%,100%{box-shadow:0 0 0 0 rgba(232,147,26,0)}
          50%{box-shadow:0 0 0 8px rgba(232,147,26,0.12)}
        }
        .cta-btn:hover { background: #c47a10 !important; transform: translateY(-2px) !important; box-shadow: 0 8px 24px rgba(232,147,26,0.28) !important; }
        .cta-btn { transition: background 0.2s, transform 0.2s, box-shadow 0.2s !important; }
        .outline-btn:hover { background: rgba(232,147,26,0.05) !important; border-color: ${OR} !important; }
        .outline-btn { transition: background 0.2s, border-color 0.2s !important; }
        .cta-white:hover { transform: translateY(-2px) !important; box-shadow: 0 8px 28px rgba(0,0,0,0.15) !important; }
        .cta-white { transition: transform 0.2s, box-shadow 0.2s !important; }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ background:CREAM, padding:"88px 5% 80px", position:"relative", overflow:"hidden", minHeight:"480px", display:"flex", alignItems:"center" }}>
        <Orbs />
        <div style={{ position:"relative", zIndex:1, width:"100%" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"32px", animation:"heroIn 0.5s 0.05s ease both" }}>
            <Link href="/" style={{ fontFamily:F, fontSize:"12px", color:MUTED, textDecoration:"none" }}>Home</Link>
            <span style={{ color:BORDER }}>→</span>
            <span style={{ fontFamily:F, fontSize:"12px", color:OR, fontWeight:500 }}>Services</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"0", alignItems:"center" }}>
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <div style={{ animation:"heroIn 0.55s 0.1s ease both" }}>
                <Badge label="What we offer" />
              </div>
              <h1 style={{ fontFamily:S, fontSize:"clamp(3rem,5.5vw,5.5rem)", color:INK, lineHeight:0.97, letterSpacing:"-0.02em", marginBottom:"20px", fontWeight:400, animation:"heroIn 0.6s 0.15s ease both" }}>
                Our<br /><em style={{ color:OR, fontStyle:"italic" }}>Services</em>
              </h1>
              <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, maxWidth:"480px", lineHeight:1.85, fontWeight:300, marginBottom:"32px", animation:"heroIn 0.6s 0.22s ease both" }}>
                We aren't just about mortgages — we want to empower you through finance, education and mentoring. 25 years of values-based advice in Canberra.
              </p>
              <div style={{ display:"flex", gap:"12px", animation:"heroIn 0.6s 0.3s ease both" }}>
                <Link href="/contact" className="cta-btn" style={{ background:OR, color:"#fff", padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>Book a Free Consultation</Link>
                <Link href="#services-list" className="outline-btn" style={{ background:"transparent", color:INK, border:`1.5px solid ${BORDER}`, padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:500, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>View Services ↓</Link>
              </div>
            </div>
            <div style={{ paddingLeft:"64px", display:"flex", flexDirection:"column" }}>
              {[
                { val:"25+",  label:"Years of values-based financial services" },
                { val:"6+",   label:"Average investment properties per mentoring client" },
                { val:"Free", label:"Initial consultation — no obligation" },
              ].map((s,i) => (
                <div key={s.val} style={{ padding:"24px 0", borderBottom:i<2?`1px solid ${BORDER}`:"none", borderTop:i===0?`1px solid ${BORDER}`:"none", display:"flex", alignItems:"center", gap:"20px", animation:`heroIn 0.6s ${0.2 + i*0.1}s ease both` }}>
                  <div style={{ fontFamily:S, fontSize:"2.4rem", color:OR, lineHeight:1, minWidth:"90px", letterSpacing:"-0.02em", fontWeight:400 }}>{s.val}</div>
                  <div style={{ fontFamily:F, fontSize:"13.5px", color:MUTED, lineHeight:1.5, fontWeight:300 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section id="services-list" style={{ background:SOFT, padding:"88px 5%" }}>
        <FadeUp>
          <div style={{ marginBottom:"48px" }}>
            <Badge label="Let's find the right fit" />
            <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.02em", fontWeight:400 }}>
              Everything we <em style={{ color:OR, fontStyle:"italic" }}>offer</em>
            </h2>
          </div>
        </FadeUp>
        <div style={{ display:"flex", flexDirection:"column", gap:"20px" }}>
          {services.map((s, idx) => (
            <ServiceCard key={s.title} s={s} idx={idx} />
          ))}
        </div>
      </section>

      {/* ── WHY DEDEN ── */}
      <section style={{ background:WHITE, padding:"88px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0", alignItems:"start" }}>
          <SlideIn from="left">
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <Badge label="Why choose us" />
              <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.02em", fontWeight:400, marginBottom:"20px" }}>
                We aren't the same<br /><em style={{ color:OR, fontStyle:"italic" }}>as other brokers.</em>
              </h2>
              <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, lineHeight:1.8, fontWeight:300 }}>
                Here at Deden Finance and Mentoring we aren't about getting you a loan and then forgetting about you. We want to build a relationship with you and ensure that your finances are taken care of.
              </p>
            </div>
          </SlideIn>
          <SlideIn from="right">
            <div style={{ paddingLeft:"64px", display:"flex", flexDirection:"column", gap:"16px" }}>
              {whyItems.map((item, i) => (
                <WhyCard key={item.title} item={item} delay={i * 0.1} />
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:OR, padding:"72px 5%", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }} />
        <FadeUp>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"28px", position:"relative", zIndex:1 }}>
            <div>
              <h2 style={{ fontFamily:S, fontSize:"clamp(1.8rem,3vw,2.6rem)", color:"#fff", marginBottom:"8px", letterSpacing:"-0.02em", fontWeight:400 }}>Ready to get started?</h2>
              <p style={{ fontFamily:F, fontSize:"15px", color:"rgba(255,255,255,0.65)", fontWeight:300 }}>Book a free, no-obligation consultation with our team in Manuka, Canberra.</p>
            </div>
            <Link href="/contact" className="cta-white" style={{ background:"#fff", color:OR, padding:"14px 36px", fontFamily:F, fontSize:"13px", fontWeight:700, textDecoration:"none", borderRadius:"40px", whiteSpace:"nowrap", display:"inline-block", animation:"pulseOR 3s 1s ease infinite" }}>
              Get in Touch
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}