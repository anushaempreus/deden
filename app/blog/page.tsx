"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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

const posts = [
  { slug:"five-things-mortgage-broker",  cat:"Home Finance",      title:"Five things to consider when choosing your mortgage broker",                                        excerpt:"Not all mortgage brokers are created equal. Here's what to look for — and what to avoid — when choosing the right person to help you with one of the biggest financial decisions of your life.", date:"12 March 2024",    readTime:"5 min read", featured:true },
  { slug:"how-much-can-you-borrow",      cat:"Investment Finance", title:"Property buyers: Do you know how to work out how much you can borrow for your next property?",      excerpt:"Understanding your borrowing capacity is the first step to any property purchase. We break down the key factors lenders consider and how to put yourself in the strongest possible position.",     date:"28 February 2024", readTime:"6 min read", featured:false },
  { slug:"comparison-rate-explained",    cat:"Home Finance",       title:"The Comparison Rate explained",                                                                     excerpt:"The comparison rate is one of the most misunderstood numbers in home lending. We explain what it actually means, why it matters, and why it's only part of the story.",                          date:"14 January 2024",  readTime:"4 min read", featured:false },
  { slug:"investment-property-mistakes", cat:"Investment Finance", title:"The five most common investment property mistakes — and how to avoid them",                          excerpt:"Many first-time investors make the same costly mistakes. From buying in the wrong location to over-leveraging, here's what to watch out for.",                                                    date:"5 December 2023",  readTime:"7 min read", featured:false },
  { slug:"financial-health-check",       cat:"Mentoring",          title:"What is a Financial Health Check and why does everyone need one?",                                   excerpt:"A Financial Health Check is a comprehensive review of your current position — income, expenses, debt and goals. Here's why it's the single best first step anyone can take.",                    date:"18 November 2023", readTime:"5 min read", featured:false },
  { slug:"refinancing-your-home-loan",   cat:"Home Finance",       title:"Is it time to refinance your home loan? Here's how to tell",                                        excerpt:"Many Australians are paying thousands more than they need to on their home loan. We look at the signs it's time to refinance and what the process actually involves.",                            date:"2 October 2023",   readTime:"6 min read", featured:false },
  { slug:"15-minutes-a-week",            cat:"Mentoring",          title:"How 15 minutes a week can completely transform your finances",                                       excerpt:"One of the biggest myths about financial management is that it takes a lot of time. We show you a simple weekly routine that takes less time than a coffee break.",                              date:"14 September 2023",readTime:"4 min read", featured:false },
  { slug:"debt-consolidation",           cat:"Restructuring",      title:"Debt consolidation: Is it right for you?",                                                          excerpt:"Consolidating multiple debts into one can simplify your finances and reduce your repayments — but it's not always the right move. Here's how to think about it clearly.",                       date:"28 August 2023",   readTime:"5 min read", featured:false },
];

const categories = ["All","Home Finance","Investment Finance","Mentoring","Restructuring"];

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

/* ── Blog post card ───────────────────────────────────── */
function PostCard({ post, idx }: { post: typeof posts[0]; idx: number }) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useInView(0.08);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:WHITE, borderRadius:"20px",
        border:`1px solid ${hovered ? OR : BORDER}`,
        overflow:"hidden", display:"flex", flexDirection:"column", position:"relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.55s ${idx * 0.07}s ease, transform 0.55s ${idx * 0.07}s ease, border-color 0.2s, box-shadow 0.2s`,
        boxShadow: hovered ? `0 12px 36px rgba(232,147,26,0.1)` : "none",
      }}
    >
      <div style={{ height:"3px", background:OR }} />
      <div style={{ padding:"28px 28px 0", flex:1 }}>
        <div style={{ marginBottom:"14px" }}>
          <span style={{ fontFamily:F, fontSize:"10px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", padding:"3px 10px", borderRadius:"40px", background:OR3, color:OR, border:`1px solid ${OR4}` }}>{post.cat}</span>
        </div>
        <h3 style={{ fontFamily:S, fontSize:"1.05rem", color:INK, lineHeight:1.4, letterSpacing:"-0.01em", marginBottom:"12px", fontWeight:400 }}>{post.title}</h3>
        <p style={{ fontFamily:F, fontSize:"13.5px", color:MUTED, lineHeight:1.75, fontWeight:300, marginBottom:"20px" }}>{post.excerpt}</p>
      </div>
      <div style={{ padding:"16px 28px 24px", borderTop:`1px solid ${BORDER}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <span style={{ fontFamily:F, fontSize:"11.5px", color:MUTED, fontWeight:300 }}>{post.date}</span>
          <div style={{ width:"3px", height:"3px", borderRadius:"50%", background:BORDER }} />
          <span style={{ fontFamily:F, fontSize:"11.5px", color:MUTED, fontWeight:300 }}>{post.readTime}</span>
        </div>
        <Link href={`/blog/${post.slug}`} style={{ fontFamily:F, fontSize:"12px", fontWeight:600, color:OR, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:"4px" }}>
          <span>Read</span>
          <span style={{ display:"inline-block", transition:"transform 0.25s", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>→</span>
        </Link>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState("All");
  const featured = posts.find(p => p.featured);
  const filtered = activeCat==="All" ? posts.filter(p => !p.featured) : posts.filter(p => p.cat===activeCat);

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
            <span style={{ fontFamily:F, fontSize:"12px", color:OR, fontWeight:500 }}>Blog</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"0", alignItems:"center" }}>
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <div style={{ animation:"heroIn 0.55s 0.1s ease both" }}>
                <Badge label="Insights & advice" />
              </div>
              <h1 style={{ fontFamily:S, fontSize:"clamp(3rem,5.5vw,5.5rem)", color:INK, lineHeight:0.97, letterSpacing:"-0.02em", marginBottom:"20px", fontWeight:400, animation:"heroIn 0.6s 0.15s ease both" }}>
                The Deden<br /><em style={{ color:OR, fontStyle:"italic" }}>Finance Blog</em>
              </h1>
              <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, maxWidth:"480px", lineHeight:1.85, fontWeight:300, marginBottom:"32px", animation:"heroIn 0.6s 0.22s ease both" }}>
                Practical financial insights, property tips and wealth-building strategies from the Deden Finance and Mentoring team. 25 years of experience, distilled into plain English.
              </p>
              <div style={{ animation:"heroIn 0.6s 0.3s ease both" }}>
                <a href="#articles" className="cta-btn" style={{ background:OR, color:"#fff", padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>Read the latest ↓</a>
              </div>
            </div>
            <div style={{ paddingLeft:"64px", display:"flex", flexDirection:"column" }}>
              {[
                { val:"8+",    label:"Articles covering home finance, investing and mentoring" },
                { val:"Free",  label:"All content — no subscription required" },
                { val:"Plain", label:"English — no jargon, no fluff, just useful advice" },
              ].map((s,i) => (
                <div key={s.val} style={{ padding:"24px 0", borderBottom:i<2?`1px solid ${BORDER}`:"none", borderTop:i===0?`1px solid ${BORDER}`:"none", display:"flex", alignItems:"center", gap:"20px", animation:`heroIn 0.6s ${0.2 + i*0.1}s ease both` }}>
                  <div style={{ fontFamily:S, fontSize:"2.2rem", color:OR, lineHeight:1, minWidth:"80px", letterSpacing:"-0.02em", fontWeight:400 }}>{s.val}</div>
                  <div style={{ fontFamily:F, fontSize:"13.5px", color:MUTED, lineHeight:1.5, fontWeight:300 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      {featured && activeCat==="All" && (
        <section style={{ background:WHITE, padding:"88px 5%" }}>
          <FadeUp>
            <Badge label="Featured article" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div
              style={{ display:"grid", gridTemplateColumns:"1fr 1fr", borderRadius:"20px", overflow:"hidden", border:`1px solid ${BORDER}`, transition:"border-color 0.2s, transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { const el=e.currentTarget as HTMLDivElement; el.style.borderColor=OR; el.style.transform="translateY(-3px)"; el.style.boxShadow=`0 16px 48px rgba(232,147,26,0.1)`; }}
              onMouseLeave={e => { const el=e.currentTarget as HTMLDivElement; el.style.borderColor=BORDER; el.style.transform="translateY(0)"; el.style.boxShadow="none"; }}
            >
              <div style={{ background:CREAM, padding:"48px", display:"flex", flexDirection:"column", justifyContent:"space-between", borderRight:`2px solid ${OR}` }}>
                <div>
                  <span style={{ fontFamily:F, fontSize:"10px", fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", padding:"4px 12px", borderRadius:"40px", background:OR3, color:OR, border:`1px solid ${OR4}` }}>{featured.cat}</span>
                  <h2 style={{ fontFamily:S, fontSize:"clamp(1.4rem,2.5vw,2rem)", color:INK, lineHeight:1.2, letterSpacing:"-0.02em", fontWeight:400, marginTop:"20px", marginBottom:"16px" }}>{featured.title}</h2>
                  <p style={{ fontFamily:F, fontSize:"14px", color:MUTED, lineHeight:1.75, fontWeight:300 }}>{featured.excerpt}</p>
                </div>
                <div style={{ marginTop:"28px", display:"flex", alignItems:"center", gap:"16px" }}>
                  <div style={{ fontFamily:F, fontSize:"12px", color:MUTED, fontWeight:300 }}>{featured.date}</div>
                  <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:BORDER }} />
                  <div style={{ fontFamily:F, fontSize:"12px", color:MUTED, fontWeight:300 }}>{featured.readTime}</div>
                </div>
              </div>
              <div style={{ padding:"48px", background:WHITE, display:"flex", flexDirection:"column", justifyContent:"center" }}>
                <div style={{ fontFamily:S, fontSize:"3.5rem", color:OR, opacity:0.1, lineHeight:0.8, marginBottom:"16px", userSelect:"none", fontWeight:400 }}>"</div>
                <p style={{ fontFamily:S, fontSize:"1rem", fontStyle:"italic", color:INK, lineHeight:1.85, fontWeight:400, marginBottom:"28px" }}>{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="cta-btn" style={{ background:OR, color:"#fff", padding:"12px 24px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px", display:"inline-block", alignSelf:"flex-start" }}>Read article →</Link>
              </div>
            </div>
          </FadeUp>
        </section>
      )}

      {/* ── ALL ARTICLES ── */}
      <section id="articles" style={{ background:SOFT, padding:"88px 5%" }}>
        <FadeUp>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"44px", flexWrap:"wrap", gap:"20px" }}>
            <div>
              <Badge label="All articles" />
              <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.02em", fontWeight:400 }}>
                Browse by <em style={{ color:OR, fontStyle:"italic" }}>topic</em>
              </h2>
            </div>
            <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCat(cat)} style={{ fontFamily:F, fontSize:"12px", fontWeight:500, padding:"8px 18px", borderRadius:"40px", cursor:"pointer", border:`1px solid ${activeCat===cat?OR:BORDER}`, background:activeCat===cat?OR:WHITE, color:activeCat===cat?"#fff":MUTED, transition:"all 0.15s" }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" }}>
          {filtered.map((post, idx) => (
            <PostCard key={post.slug} post={post} idx={idx} />
          ))}
        </div>

        {filtered.length===0 && (
          <div style={{ textAlign:"center", padding:"60px 0" }}>
            <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, fontWeight:300 }}>No articles in this category yet. Check back soon.</p>
          </div>
        )}
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section style={{ background:CREAM, padding:"88px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0", alignItems:"center" }}>
          <SlideIn from="left">
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <Badge label="Stay informed" />
              <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3vw,2.6rem)", color:INK, lineHeight:1.1, letterSpacing:"-0.02em", fontWeight:400, marginBottom:"16px" }}>
                Want personalised advice — <em style={{ color:OR, fontStyle:"italic" }}>not just articles?</em>
              </h2>
              <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, lineHeight:1.8, fontWeight:300 }}>
                Our blog gives you the knowledge. A free consultation gives you the plan. Reach out — there's no obligation and no cost.
              </p>
            </div>
          </SlideIn>
          <SlideIn from="right">
            <div style={{ paddingLeft:"64px", display:"flex", flexDirection:"column", gap:"16px" }}>
              <Link href="/contact" className="cta-btn" style={{ background:OR, color:"#fff", padding:"14px 32px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px", display:"inline-block", alignSelf:"flex-start" }}>Book a Free Consultation</Link>
              <Link href="/services" style={{ fontFamily:F, fontSize:"13px", fontWeight:500, color:MUTED, textDecoration:"none" }}>Browse our services →</Link>
              <FadeUp delay={0.15}>
                <div style={{ padding:"20px 24px", background:WHITE, border:`1px solid ${BORDER}`, borderRadius:"14px", borderLeft:`3px solid ${OR}` }}>
                  <p style={{ fontFamily:S, fontSize:"1rem", fontStyle:"italic", color:INK, lineHeight:1.75, fontWeight:400 }}>
                    "Don't put off until tomorrow what you can achieve today."
                  </p>
                </div>
              </FadeUp>
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
              <h2 style={{ fontFamily:S, fontSize:"clamp(1.8rem,3vw,2.6rem)", color:"#fff", marginBottom:"8px", letterSpacing:"-0.02em", fontWeight:400 }}>Ready to take control of your finances?</h2>
              <p style={{ fontFamily:F, fontSize:"15px", color:"rgba(255,255,255,0.65)", fontWeight:300 }}>Book a free, no-obligation consultation with our team in Manuka, Canberra.</p>
            </div>
            <Link href="/contact" className="cta-white" style={{ background:"#fff", color:OR, padding:"14px 36px", fontFamily:F, fontSize:"13px", fontWeight:700, textDecoration:"none", borderRadius:"40px", whiteSpace:"nowrap", display:"inline-block" }}>Get in Touch</Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}