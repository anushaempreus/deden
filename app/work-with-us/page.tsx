"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const OR  = "#e8931a";
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

const steps = [
  { num:"01", title:"Book a Free Consultation",    icon:"M8 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8M10 9H8",                                                                                                            body:"The first step is simple — reach out and book a free, no-obligation consultation. We'll find a time that works for you, whether in person at our Manuka office or over the phone." },
  { num:"02", title:"Financial Health Check",      icon:"M22 12h-4l-3 9L9 3l-3 9H2",                                                                                                                                                                                    body:"We review your current financial position — income, expenses, existing loans, assets and goals. This gives us a complete picture of where you are and where you want to be." },
  { num:"03", title:"Your Personalised Strategy",  icon:"M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",                                                                                                                                    body:"Based on your situation and goals, we build a personalised financial strategy covering your loan structure, cash flow planning, and a clear roadmap for the short, medium and long term." },
  { num:"04", title:"We Do the Heavy Lifting",     icon:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",                                                                                                                                                                  body:"We handle the paperwork, liaise with lenders, negotiate rates and manage the entire process on your behalf. You stay informed every step of the way — without the stress." },
  { num:"05", title:"Ongoing Support & Mentoring", icon:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",                                                                           body:"Our relationship doesn't end at settlement. We stay in touch, review your finances regularly, and help you plan the next step — whether that's paying down debt faster or buying your next property." },
];

const reasons = [
  { title:"We put you first",           body:"Our goal is to build a long-term relationship and ensure your finances are taken care of at every stage of life." },
  { title:"Values-based advice",        body:"Every recommendation is grounded in your personal values, goals and life circumstances — not commission rates." },
  { title:"25 years of experience",     body:"Since 1999, we have been helping Canberra families take control of their finances. That experience means fewer surprises." },
  { title:"Education, not transactions",body:"We teach you to understand your finances, not just fix them. Empowered clients make better decisions for life." },
];

const faqs = [
  { q:"How much does it cost to work with Deden?",              a:"Our initial consultation is completely free. For home and investment finance, we are paid by the lender — so there is typically no cost to you. For mentoring services, we discuss fees transparently at the outset." },
  { q:"How long does the process take?",                        a:"A standard home loan takes 2–4 weeks from application to approval, though this varies by lender and complexity. We keep you updated every step of the way so there are no surprises." },
  { q:"Can you help me if I have bad credit or existing debt?", a:"Yes. Many of our most successful clients came to us in difficult financial situations. We assess your full picture and build a realistic plan to improve your position over time." },
  { q:"Do I need to come into your Manuka office?",             a:"No — we work with clients across Australia over phone and video. If you're local to Canberra, you're always welcome to meet us in person at our Manuka office." },
  { q:"What makes Deden different from a bank?",                a:"Banks offer their own products. We understand your full financial picture and find the right solution for your life — then we stay with you long after settlement." },
];

/* ── Intersection observer hook ─────────────────────── */
function useInView(threshold = 0.12) {
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

/* ── Accordion FAQ item ──────────────────────────────── */
function FaqItem({ faq, index, isLast }: { faq: typeof faqs[0]; index: number; isLast: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.07}>
      <div
        style={{ padding:"22px 0", borderBottom: isLast ? "none" : `1px solid ${BORDER}`, cursor:"pointer" }}
        onClick={() => setOpen(o => !o)}
      >
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"16px" }}>
          <p style={{ fontFamily:S, fontSize:"1.05rem", color:INK, marginBottom: open ? "9px" : "0", fontWeight:400, transition:"margin 0.3s" }}>{faq.q}</p>
          <div style={{
            width:"24px", height:"24px", borderRadius:"50%", background: open ? OR : OR3,
            border:`1px solid ${open ? OR : OR4}`, display:"flex", alignItems:"center", justifyContent:"center",
            flexShrink:0, transition:"background 0.25s, border-color 0.25s, transform 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke={open ? "#fff" : OR} strokeWidth="1.8" strokeLinecap="round">
              <line x1="5" y1="1" x2="5" y2="9"/><line x1="1" y1="5" x2="9" y2="5"/>
            </svg>
          </div>
        </div>
        <div style={{
          overflow:"hidden", maxHeight: open ? "200px" : "0",
          opacity: open ? 1 : 0,
          transition:"max-height 0.35s ease, opacity 0.3s ease",
        }}>
          <p style={{ fontFamily:F, fontSize:"14px", color:MUTED, lineHeight:1.75, fontWeight:300, paddingTop:"2px" }}>{faq.a}</p>
        </div>
      </div>
    </FadeUp>
  );
}

const Badge = ({ label }: { label: string }) => (
  <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:WHITE, border:`1px solid ${BORDER}`, borderRadius:"40px", padding:"5px 14px", marginBottom:"16px" }}>
    <span style={{ fontFamily:F, fontSize:"11px", fontWeight:500, color:MUTED }}>{label}</span>
  </div>
);

const IconBox = ({ icon }: { icon: string }) => (
  <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:OR3, border:`1px solid ${OR4}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"16px" }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={OR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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

/* ── Step row ─────────────────────────────────────────── */
function StepRow({ s, i, total }: { s: typeof steps[0]; i: number; total: number }) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useInView(0.1);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:"grid", gridTemplateColumns:"240px 1fr",
        borderBottom: i < total - 1 ? `1px solid ${BORDER}` : "none",
        background: hovered ? SOFT : WHITE,
        transition:"background 0.2s, opacity 0.55s, transform 0.55s",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-32px)",
        transitionDelay: `${i * 0.07}s`,
      }}
    >
      <div style={{ padding:"36px 32px", display:"flex", alignItems:"flex-start", gap:"14px", borderRight:`1px solid ${BORDER}` }}>
        <div style={{ fontFamily:S, fontSize:"2.4rem", color:OR, opacity:0.2, lineHeight:1, flexShrink:0, letterSpacing:"-0.03em", fontWeight:400 }}>{s.num}</div>
        <div style={{
          width:"42px", height:"42px", borderRadius:"12px", background:OR3, border:`1px solid ${OR4}`,
          display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:"4px",
          transform: hovered ? "scale(1.1)" : "scale(1)", transition:"transform 0.3s",
        }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={OR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon}/></svg>
        </div>
      </div>
      <div style={{ padding:"36px 48px" }}>
        <h3 style={{ fontFamily:S, fontSize:"1.15rem", color:INK, marginBottom:"10px", fontWeight:400 }}>{s.title}</h3>
        <p style={{ fontFamily:F, fontSize:"14.5px", color:MID, lineHeight:1.85, fontWeight:300 }}>{s.body}</p>
      </div>
    </div>
  );
}

/* ── Reason card ──────────────────────────────────────── */
function ReasonCard({ r, delay }: { r: typeof reasons[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding:"22px", background:WHITE, border:`1px solid ${hovered ? OR : BORDER}`,
          borderRadius:"16px",
          transition:"border-color 0.2s, transform 0.25s, box-shadow 0.25s",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered ? `0 8px 24px rgba(232,147,26,0.08)` : "none",
        }}
      >
        <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:OR, marginBottom:"12px" }} />
        <p style={{ fontFamily:S, fontSize:"1rem", color:INK, marginBottom:"7px", fontWeight:400 }}>{r.title}</p>
        <p style={{ fontFamily:F, fontSize:"13px", color:MUTED, lineHeight:1.7, fontWeight:300 }}>{r.body}</p>
      </div>
    </FadeUp>
  );
}

export default function WorkWithUsPage() {
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
        .cta-white { transition: transform 0.2s, box-shadow 0.2s !important; animation: pulseOR 3s 1s ease infinite; }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ background:CREAM, padding:"88px 5% 80px", position:"relative", overflow:"hidden", minHeight:"480px", display:"flex", alignItems:"center" }}>
        <Orbs />
        <div style={{ position:"relative", zIndex:1, width:"100%" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"32px", animation:"heroIn 0.5s 0.05s ease both" }}>
            <Link href="/" style={{ fontFamily:F, fontSize:"12px", color:MUTED, textDecoration:"none" }}>Home</Link>
            <span style={{ color:BORDER }}>→</span>
            <span style={{ fontFamily:F, fontSize:"12px", color:OR, fontWeight:500 }}>Work With Us</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"0", alignItems:"center" }}>
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <div style={{ animation:"heroIn 0.55s 0.1s ease both" }}>
                <Badge label="Get started" />
              </div>
              <h1 style={{ fontFamily:S, fontSize:"clamp(3rem,5.5vw,5.5rem)", color:INK, lineHeight:0.97, letterSpacing:"-0.02em", marginBottom:"20px", fontWeight:400, animation:"heroIn 0.6s 0.15s ease both" }}>
                Work<br /><em style={{ color:OR, fontStyle:"italic" }}>With Us</em>
              </h1>
              <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, maxWidth:"480px", lineHeight:1.85, fontWeight:300, marginBottom:"32px", animation:"heroIn 0.6s 0.22s ease both" }}>
                Working with Deden is simple, transparent and built around you. Here's what the process looks like — and why hundreds of Canberra families have trusted us with their finances for over 25 years.
              </p>
              <div style={{ display:"flex", gap:"12px", animation:"heroIn 0.6s 0.3s ease both" }}>
                <Link href="/contact" className="cta-btn" style={{ background:OR, color:"#fff", padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>Book a Free Consultation</Link>
                <Link href="#how-it-works" className="outline-btn" style={{ background:"transparent", color:INK, border:`1.5px solid ${BORDER}`, padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:500, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>How it works ↓</Link>
              </div>
            </div>
            <div style={{ paddingLeft:"64px", display:"flex", flexDirection:"column" }}>
              {[
                { val:"Free",       label:"Initial consultation — no obligation, no pressure" },
                { val:"25+",        label:"Years of values-based financial advice in Canberra" },
                { val:"End-to-end", label:"We handle everything from strategy to settlement" },
              ].map((s,i) => (
                <div key={s.val} style={{ padding:"24px 0", borderBottom:i<2?`1px solid ${BORDER}`:"none", borderTop:i===0?`1px solid ${BORDER}`:"none", display:"flex", alignItems:"center", gap:"20px", animation:`heroIn 0.6s ${0.2 + i*0.1}s ease both` }}>
                  <div style={{ fontFamily:S, fontSize:"2rem", color:OR, lineHeight:1, minWidth:"110px", letterSpacing:"-0.02em", fontWeight:400 }}>{s.val}</div>
                  <div style={{ fontFamily:F, fontSize:"13.5px", color:MUTED, lineHeight:1.5, fontWeight:300 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ background:WHITE, padding:"88px 5%" }}>
        <FadeUp>
          <div style={{ marginBottom:"52px" }}>
            <Badge label="The process" />
            <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.02em", fontWeight:400 }}>
              How it <em style={{ color:OR, fontStyle:"italic" }}>works</em>
            </h2>
          </div>
        </FadeUp>
        <div style={{ display:"flex", flexDirection:"column" }}>
          {steps.map((s,i) => (
            <StepRow key={s.num} s={s} i={i} total={steps.length} />
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background:SOFT, padding:"88px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0", alignItems:"start" }}>
          <SlideIn from="left">
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <Badge label="Why us" />
              <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:INK, lineHeight:1.1, letterSpacing:"-0.02em", fontWeight:400, marginBottom:"20px" }}>
                Why work with<br /><em style={{ color:OR, fontStyle:"italic" }}>Deden Finance?</em>
              </h2>
              <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, lineHeight:1.8, fontWeight:300, marginBottom:"32px" }}>
                Don't put off until tomorrow what you can achieve today. The first step on any journey starts with a decision to change.
              </p>
              <Link href="/contact" className="cta-btn" style={{ background:OR, color:"#fff", padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>
                Start Today →
              </Link>
            </div>
          </SlideIn>
          <SlideIn from="right">
            <div style={{ paddingLeft:"64px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
              {reasons.map((r,i) => (
                <ReasonCard key={r.title} r={r} delay={i * 0.08} />
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── TESTIMONIAL + STATS ── */}
      <section style={{ background:WHITE, padding:"88px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0", alignItems:"center" }}>
          <SlideIn from="left">
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <Badge label="Client story" />
              <div style={{ fontFamily:S, fontSize:"4rem", color:OR, opacity:0.15, lineHeight:0.8, marginBottom:"12px", userSelect:"none", fontWeight:400 }}>"</div>
              <p style={{ fontFamily:S, fontSize:"1.1rem", fontStyle:"italic", color:INK, lineHeight:1.8, marginBottom:"28px", fontWeight:400 }}>
                We have been working with Deden for 12 years now. In that time Michael has helped us go from massive credit card debt and no assets, to a portfolio of six investment properties. Without them we wouldn't have the amazing life that we are so fortunate to be living.
              </p>
              <div style={{ height:"1px", background:BORDER, marginBottom:"18px" }} />
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                  <div style={{ width:"40px", height:"40px", borderRadius:"50%", background:OR, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:F, fontSize:"12px", fontWeight:600, color:"#fff" }}>ND</div>
                  <div>
                    <div style={{ fontFamily:F, fontSize:"14px", fontWeight:600, color:INK }}>Natalie and David</div>
                    <div style={{ fontFamily:F, fontSize:"12px", color:MUTED, marginTop:"2px" }}>Sydney, NSW · 12 years</div>
                  </div>
                </div>
                <span style={{ fontFamily:F, fontSize:"10px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", padding:"4px 12px", borderRadius:"40px", background:OR3, color:OR, border:`1px solid ${OR4}` }}>Mentoring</span>
              </div>
            </div>
          </SlideIn>
          <SlideIn from="right">
            <div style={{ paddingLeft:"64px" }}>
              <Badge label="Real results" />
              <h2 style={{ fontFamily:S, fontSize:"clamp(1.6rem,2.5vw,2.2rem)", color:INK, lineHeight:1.1, letterSpacing:"-0.02em", fontWeight:400, marginBottom:"28px" }}>
                What our clients achieve <em style={{ color:OR, fontStyle:"italic" }}>working with us</em>
              </h2>
              {[
                { stat:"6+",   label:"Investment properties built from nothing" },
                { stat:"12yr", label:"Average length of client relationships" },
                { stat:"100%", label:"Values-based, client-first advice always" },
              ].map((item,i) => (
                <div key={item.stat} style={{ display:"flex", alignItems:"center", gap:"20px", padding:"16px 0", borderBottom:i<2?`1px solid ${BORDER}`:"none" }}>
                  <div style={{ fontFamily:S, fontSize:"2rem", color:OR, lineHeight:1, minWidth:"72px", letterSpacing:"-0.02em", fontWeight:400 }}>{item.stat}</div>
                  <div style={{ fontFamily:F, fontSize:"14px", color:MID, lineHeight:1.5, fontWeight:300 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background:CREAM, padding:"88px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:"0", alignItems:"start" }}>
          <SlideIn from="left">
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <Badge label="FAQ" />
              <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3vw,2.6rem)", color:INK, lineHeight:1.1, letterSpacing:"-0.02em", fontWeight:400, marginBottom:"16px" }}>Common questions</h2>
              <p style={{ fontFamily:F, fontSize:"14.5px", color:MUTED, lineHeight:1.75, fontWeight:300, marginBottom:"28px" }}>Still have questions? Reach out — we're always happy to chat.</p>
              <Link href="/contact" className="cta-btn" style={{ background:OR, color:"#fff", padding:"12px 24px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>Ask Us Anything</Link>
            </div>
          </SlideIn>
          <div style={{ paddingLeft:"64px" }}>
            {faqs.map((faq,i) => (
              <FaqItem key={i} faq={faq} index={i} isLast={i === faqs.length - 1} />
            ))}
          </div>
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
            <Link href="/contact" className="cta-white" style={{ background:"#fff", color:OR, padding:"14px 36px", fontFamily:F, fontSize:"13px", fontWeight:700, textDecoration:"none", borderRadius:"40px", whiteSpace:"nowrap", display:"inline-block" }}>
              Get in Touch
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}