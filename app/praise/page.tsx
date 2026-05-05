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

const testimonials = [
  { quote:"I was very happy with the services I received from Deden. The staff were very thorough and knew exactly what was going on with my application for refinance at all times. I felt very comfortable dealing with them. I didn't expect that they would be able to save me so much money on my home loan repayments, so I am glad I did the Financial Health Check even though I didn't think they would be able to help me.", name:"Simon", location:"Fisher, ACT", initials:"S", tag:"Home Finance" },
  { quote:"We have been working with Deden for 12 years now. In that time Michael has helped us go from massive credit card debt and no assets, to a portfolio of six investment properties. The mentoring service that Deden provides is so much more than just financial education. Without them we wouldn't have the amazing life that we are so fortunate to be living.", name:"Natalie and David", location:"Sydney, NSW · 12 years", initials:"ND", tag:"Mentoring" },
  { quote:"Michael and the team at Deden Finance have been incredible. From the very first meeting they took the time to understand our situation and goals. We had tried other brokers before but nobody had ever taken such a holistic approach. We now have a clear financial roadmap and feel genuinely confident about our future.", name:"James and Sarah", location:"Canberra, ACT", initials:"JS", tag:"Mentoring" },
  { quote:"I came to Deden with a complicated financial situation — multiple debts, a small savings buffer and no idea where to start. Within three months they had restructured everything and I was in a position I didn't think was possible. The education piece was just as valuable as the financial advice.", name:"Rebecca", location:"Tuggeranong, ACT", initials:"R", tag:"Restructuring" },
  { quote:"We purchased our first investment property with Deden's help and it was seamless. They explained everything clearly, kept us informed throughout and secured a rate we couldn't have found ourselves. We're already planning the next one.", name:"Tom and Lisa", location:"Belconnen, ACT", initials:"TL", tag:"Investment Finance" },
  { quote:"After years of feeling stuck financially, Deden gave us a clear plan and the confidence to follow it. The mentoring sessions completely changed how we think about money. I only wish we had found them sooner.", name:"Catherine", location:"Kingston, ACT", initials:"C", tag:"Mentoring" },
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

const Badge = ({ label }: { label: string }) => (
  <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:WHITE, border:`1px solid ${BORDER}`, borderRadius:"40px", padding:"5px 14px", marginBottom:"16px" }}>
    <span style={{ fontFamily:F, fontSize:"11px", fontWeight:500, color:MUTED }}>{label}</span>
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

/* ── Testimonial card ─────────────────────────────────── */
function TestimonialCard({ t, idx }: { t: typeof testimonials[0]; idx: number }) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useInView(0.08);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:WHITE, borderRadius:"20px", padding:"32px",
        border:`1px solid ${hovered ? OR : BORDER}`,
        position:"relative", overflow:"hidden",
        display:"flex", flexDirection:"column",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.55s ${idx * 0.07}s ease, transform 0.55s ${idx * 0.07}s ease, border-color 0.2s, box-shadow 0.2s`,
        boxShadow: hovered ? `0 12px 36px rgba(232,147,26,0.1)` : "none",
      }}
    >
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"3px", background:OR }} />
      <div style={{ fontFamily:S, fontSize:"3rem", color:OR, opacity:0.12, lineHeight:0.8, marginBottom:"10px", userSelect:"none", fontWeight:400 }}>"</div>
      <p style={{ fontFamily:S, fontSize:"0.95rem", fontStyle:"italic", color:INK, lineHeight:1.8, marginBottom:"22px", fontWeight:400, flex:1 }}>{t.quote}</p>
      <div style={{ height:"1px", background:BORDER, marginBottom:"16px" }} />
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{ width:"34px", height:"34px", borderRadius:"50%", background:OR, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:F, fontSize:"11px", fontWeight:600, color:"#fff", flexShrink:0 }}>{t.initials}</div>
          <div>
            <div style={{ fontFamily:F, fontSize:"13px", fontWeight:600, color:INK }}>{t.name}</div>
            <div style={{ fontFamily:F, fontSize:"11px", color:MUTED, marginTop:"2px" }}>{t.location}</div>
          </div>
        </div>
        <span style={{ fontFamily:F, fontSize:"9.5px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", padding:"4px 10px", borderRadius:"40px", background:OR3, color:OR, border:`1px solid ${OR4}`, whiteSpace:"nowrap" }}>{t.tag}</span>
      </div>
    </div>
  );
}

/* ── Before/after row ─────────────────────────────────── */
function BeforeAfterRow({ item, delay }: { item: { before: string; after: string }; delay: number }) {
  const { ref, visible } = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{
        display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginBottom:"12px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ${delay}s ease, transform 0.5s ${delay}s ease`,
      }}
    >
      <div style={{ padding:"14px 16px", background:SOFT, borderRadius:"12px", border:`1px solid ${BORDER}` }}>
        <div style={{ fontFamily:F, fontSize:"10px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:MUTED, marginBottom:"5px" }}>Before</div>
        <div style={{ fontFamily:F, fontSize:"13px", color:MID, fontWeight:400 }}>{item.before}</div>
      </div>
      <div style={{ padding:"14px 16px", background:OR3, borderRadius:"12px", border:`1px solid ${OR4}` }}>
        <div style={{ fontFamily:F, fontSize:"10px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:OR, marginBottom:"5px" }}>After</div>
        <div style={{ fontFamily:F, fontSize:"13px", color:INK, fontWeight:500 }}>{item.after}</div>
      </div>
    </div>
  );
}

export default function PraisePage() {
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
            <span style={{ fontFamily:F, fontSize:"12px", color:OR, fontWeight:500 }}>Praise</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"0", alignItems:"center" }}>
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <div style={{ animation:"heroIn 0.55s 0.1s ease both" }}>
                <Badge label="Client stories" />
              </div>
              <h1 style={{ fontFamily:S, fontSize:"clamp(3rem,5.5vw,5.5rem)", color:INK, lineHeight:0.97, letterSpacing:"-0.02em", marginBottom:"20px", fontWeight:400, animation:"heroIn 0.6s 0.15s ease both" }}>
                What our<br /><em style={{ color:OR, fontStyle:"italic" }}>clients say</em>
              </h1>
              <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, maxWidth:"480px", lineHeight:1.85, fontWeight:300, marginBottom:"32px", animation:"heroIn 0.6s 0.22s ease both" }}>
                Real results from real people. Our clients' words speak louder than ours ever could. Here are just some of the stories from the people we've had the privilege of working with.
              </p>
              <div style={{ animation:"heroIn 0.6s 0.3s ease both" }}>
                <Link href="/contact" className="cta-btn" style={{ background:OR, color:"#fff", padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>
                  Start Your Story
                </Link>
              </div>
            </div>
            <div style={{ paddingLeft:"64px", display:"flex", flexDirection:"column" }}>
              {[
                { val:"25+",  label:"Years serving Canberra clients" },
                { val:"12yr", label:"Longest active client relationship" },
                { val:"6+",   label:"Investment properties — avg mentoring outcome" },
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

      {/* ── FEATURED TESTIMONIAL ── */}
      <section style={{ background:WHITE, padding:"88px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0", alignItems:"center" }}>
          <SlideIn from="left">
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <Badge label="Featured story" />
              <div style={{ fontFamily:S, fontSize:"4.5rem", color:OR, opacity:0.12, lineHeight:0.8, marginBottom:"12px", userSelect:"none", fontWeight:400 }}>"</div>
              <p style={{ fontFamily:S, fontSize:"1.1rem", fontStyle:"italic", color:INK, lineHeight:1.82, marginBottom:"28px", fontWeight:400 }}>
                We have been working with Deden for 12 years now. In that time Michael has helped us go from massive credit card debt and no assets, to a portfolio of six investment properties. The mentoring service that Deden provides is so much more than just financial education. Without them we wouldn't have the amazing life that we are so fortunate to be living.
              </p>
              <div style={{ height:"1px", background:BORDER, marginBottom:"18px" }} />
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
                  <div style={{ width:"42px", height:"42px", borderRadius:"50%", background:OR, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:F, fontSize:"12px", fontWeight:600, color:"#fff" }}>ND</div>
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
              <Badge label="The outcome" />
              <h2 style={{ fontFamily:S, fontSize:"clamp(1.6rem,2.5vw,2.2rem)", color:INK, lineHeight:1.1, letterSpacing:"-0.02em", fontWeight:400, marginBottom:"28px" }}>
                From debt to a portfolio of{" "}
                <em style={{ color:OR, fontStyle:"italic" }}>6 investment properties</em>
              </h2>
              {[
                { before:"Massive credit card debt",  after:"Debt-free and building wealth" },
                { before:"No assets",                 after:"6+ investment properties" },
                { before:"No financial plan",         after:"Clear roadmap for the future" },
              ].map((item,i) => (
                <BeforeAfterRow key={i} item={item} delay={i * 0.08} />
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── ALL TESTIMONIALS ── */}
      <section style={{ background:SOFT, padding:"88px 5%" }}>
        <FadeUp>
          <div style={{ marginBottom:"48px" }}>
            <Badge label="All stories" />
            <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.02em", fontWeight:400 }}>
              More client <em style={{ color:OR, fontStyle:"italic" }}>stories</em>
            </h2>
          </div>
        </FadeUp>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" }}>
          {testimonials.map((t, idx) => (
            <TestimonialCard key={t.name} t={t} idx={idx} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:OR, padding:"72px 5%", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }} />
        <FadeUp>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"28px", position:"relative", zIndex:1 }}>
            <div>
              <h2 style={{ fontFamily:S, fontSize:"clamp(1.8rem,3vw,2.6rem)", color:"#fff", marginBottom:"8px", letterSpacing:"-0.02em", fontWeight:400 }}>Ready to start your story?</h2>
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