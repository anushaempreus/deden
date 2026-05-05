"use client";

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

const timeline = [
  { year:"1999", title:"Founded in Canberra",            body:"Michael Deden established Deden Finance and Mentoring in Manuka, Canberra, with a simple mission — to provide honest, values-based financial advice that puts clients first." },
  { year:"2005", title:"Expanding into Mentoring",       body:"Recognising that clients needed more than just loans, we formalised our mentoring program — helping families build wealth, manage debt and plan for life's biggest moments." },
  { year:"2012", title:"Investment Property Specialists", body:"After helping dozens of clients build property portfolios from scratch, we deepened our expertise in investment finance and began specialising in multi-property strategies." },
  { year:"2020", title:"Serving Clients Nationally",     body:"With remote consultation fully established, we expanded beyond Canberra to serve clients across Australia — while keeping our Manuka office as our home base." },
  { year:"2024", title:"25 Years Strong",                body:"25 years on, we remain family-run, values-driven and proudly independent. Our longest client relationships now span over a decade — and we're just getting started." },
];

const values = [
  { num:"01", icon:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",            title:"Trust",          body:"We say what we mean and do what we say. Every recommendation is honest, transparent and in your best interest — always." },
  { num:"02", icon:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", title:"Relationships",  body:"We build long-term relationships with our clients — not transactions. Many of our clients have been with us for a decade or more." },
  { num:"03", icon:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 6v6l4 2",      title:"Accountability", body:"We take responsibility for our advice and the outcomes it produces. If something isn't working, we address it — that's what partners do." },
  { num:"04", icon:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", title:"Education", body:"We believe informed clients make better decisions for life. We don't just fix your finances — we help you understand them." },
];

const Badge = ({ label }: { label: string }) => (
  <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:WHITE, border:`1px solid ${BORDER}`, borderRadius:"40px", padding:"5px 14px", marginBottom:"16px" }}>
    <span style={{ fontFamily:F, fontSize:"11px", fontWeight:500, color:MUTED }}>{label}</span>
  </div>
);

const IconBox = ({ icon }: { icon: string }) => (
  <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:OR3, border:`1px solid ${OR4}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"16px" }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={OR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={icon}/></svg>
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

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background:CREAM, padding:"88px 5% 80px", position:"relative", overflow:"hidden", minHeight:"480px", display:"flex", alignItems:"center" }}>
        <Orbs />
        <div style={{ position:"relative", zIndex:1, width:"100%" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"32px" }}>
            <Link href="/" style={{ fontFamily:F, fontSize:"12px", color:MUTED, textDecoration:"none" }}>Home</Link>
            <span style={{ color:BORDER }}>→</span>
            <span style={{ fontFamily:F, fontSize:"12px", color:OR, fontWeight:500 }}>About Us</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"0", alignItems:"center" }}>
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <Badge label="Our story" />
              <h1 style={{ fontFamily:S, fontSize:"clamp(3rem,5.5vw,5.5rem)", color:INK, lineHeight:0.97, letterSpacing:"-0.02em", marginBottom:"20px", fontWeight:400 }}>
                About<br /><em style={{ color:OR, fontStyle:"italic" }}>Deden Finance</em>
              </h1>
              <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, maxWidth:"480px", lineHeight:1.85, fontWeight:300, marginBottom:"32px" }}>
                Founded in Manuka, Canberra in 1999, Deden Finance and Mentoring has spent 25 years empowering clients through values-based financial services, education and mentoring.
              </p>
              <div style={{ display:"flex", gap:"12px" }}>
                <Link href="/contact" style={{ background:OR, color:"#fff", padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px" }}>Work With Us</Link>
                <Link href="#our-story" style={{ background:"transparent", color:INK, border:`1.5px solid ${BORDER}`, padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:500, textDecoration:"none", borderRadius:"40px" }}>Our story ↓</Link>
              </div>
            </div>
            <div style={{ paddingLeft:"64px", display:"flex", flexDirection:"column" }}>
              {[
                { val:"1999", label:"Founded in Manuka, Canberra" },
                { val:"25+",  label:"Years of values-based financial services" },
                { val:"ACL",  label:"Nationally licensed Australian Credit Licence holder" },
              ].map((s,i) => (
                <div key={s.val} style={{ padding:"24px 0", borderBottom:i<2?`1px solid ${BORDER}`:"none", borderTop:i===0?`1px solid ${BORDER}`:"none", display:"flex", alignItems:"center", gap:"20px" }}>
                  <div style={{ fontFamily:S, fontSize:"2.2rem", color:OR, lineHeight:1, minWidth:"100px", letterSpacing:"-0.02em", fontWeight:400 }}>{s.val}</div>
                  <div style={{ fontFamily:F, fontSize:"13.5px", color:MUTED, lineHeight:1.5, fontWeight:300 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ background:WHITE, padding:"88px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:"0", alignItems:"start" }}>
          <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
            <Badge label="Our mission" />
            <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.02em", fontWeight:400 }}>
              Empowerment through{" "}
              <em style={{ color:OR, fontStyle:"italic" }}>values-based</em>{" "}
              financial strategies
            </h2>
          </div>
          <div style={{ paddingLeft:"64px" }}>
            <p style={{ fontFamily:F, fontSize:"15px", color:MID, lineHeight:1.85, marginBottom:"16px", fontWeight:300 }}>
              Deden Finance and Mentoring has been providing values-based financial service, education, mentoring and support for 25 years. We are based in Canberra, with offices in Manuka.
            </p>
            <p style={{ fontFamily:F, fontSize:"15px", color:MID, lineHeight:1.85, marginBottom:"16px", fontWeight:300 }}>
              We are focused on trust and accountability. We are industry leaders, demonstrating best practice and excellent customer relationships. Here at Deden we aren't about getting you a loan and then forgetting about you — we want to build a relationship with you and ensure that your finances are taken care of.
            </p>
            <div style={{ borderLeft:`2px solid ${OR}`, paddingLeft:"18px", margin:"24px 0", fontFamily:S, fontSize:"1.05rem", fontStyle:"italic", color:INK, lineHeight:1.6, fontWeight:400 }}>
              Don't put off until tomorrow what you can achieve today.
            </div>
            <Link href="/contact" style={{ fontFamily:F, fontSize:"12px", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:OR, textDecoration:"none" }}>
              Get in touch today →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background:SOFT, padding:"88px 5%" }}>
        <div style={{ textAlign:"center", marginBottom:"52px" }}>
          <Badge label="What drives us" />
          <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.02em", fontWeight:400 }}>
            Our <em style={{ color:OR, fontStyle:"italic" }}>values</em>
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px" }}>
          {values.map(v => (
            <div key={v.title}
              style={{ background:WHITE, borderRadius:"20px", padding:"32px", border:`1px solid ${BORDER}`, transition:"transform 0.2s, border-color 0.2s" }}
              onMouseEnter={e => { const el=e.currentTarget as HTMLDivElement; el.style.transform="translateY(-4px)"; el.style.borderColor=OR; }}
              onMouseLeave={e => { const el=e.currentTarget as HTMLDivElement; el.style.transform="translateY(0)"; el.style.borderColor=BORDER; }}
            >
              <div style={{ fontFamily:S, fontSize:"1.8rem", color:OR, opacity:0.2, lineHeight:1, marginBottom:"14px", fontWeight:400 }}>{v.num}</div>
              <IconBox icon={v.icon} />
              <h3 style={{ fontFamily:S, fontSize:"1.15rem", color:INK, marginBottom:"8px", fontWeight:400 }}>{v.title}</h3>
              <p style={{ fontFamily:F, fontSize:"13.5px", color:MUTED, lineHeight:1.75, fontWeight:300 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section id="our-story" style={{ background:CREAM, padding:"88px 5%" }}>
        <div style={{ marginBottom:"52px" }}>
          <Badge label="Our journey" />
          <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.02em", fontWeight:400 }}>
            25 years <em style={{ color:OR, fontStyle:"italic" }}>in the making</em>
          </h2>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          {timeline.map((t,i) => (
            <div key={t.year}
              style={{ display:"grid", gridTemplateColumns:"160px 1fr", borderBottom:i<timeline.length-1?`1px solid ${BORDER}`:"none", background:CREAM, transition:"background 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = WHITE}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = CREAM}
            >
              <div style={{ padding:"32px 28px", borderRight:`1px solid ${BORDER}`, display:"flex", flexDirection:"column", justifyContent:"center" }}>
                <div style={{ fontFamily:S, fontSize:"2rem", color:OR, lineHeight:1, letterSpacing:"-0.02em", marginBottom:"4px", fontWeight:400 }}>{t.year}</div>
                <div style={{ width:"24px", height:"2px", background:BORDER, borderRadius:"1px" }} />
              </div>
              <div style={{ padding:"32px 48px" }}>
                <h3 style={{ fontFamily:S, fontSize:"1.05rem", color:INK, marginBottom:"10px", fontWeight:400 }}>{t.title}</h3>
                <p style={{ fontFamily:F, fontSize:"14.5px", color:MID, lineHeight:1.85, fontWeight:300 }}>{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ background:WHITE, padding:"88px 5%" }}>
        <div style={{ marginBottom:"52px" }}>
          <Badge label="The team" />
          <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:INK, lineHeight:1.08, letterSpacing:"-0.02em", fontWeight:400 }}>
            Meet the people <em style={{ color:OR, fontStyle:"italic" }}>behind Deden</em>
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"280px 1fr", borderRadius:"20px", overflow:"hidden", border:`1px solid ${BORDER}` }}>
          <div style={{ background:CREAM, padding:"48px 36px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", borderRight:`2px solid ${OR}` }}>
            <div style={{ width:"80px", height:"80px", borderRadius:"50%", background:OR3, border:`2px solid ${OR4}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:S, fontSize:"1.8rem", fontStyle:"italic", color:OR, marginBottom:"20px", fontWeight:400 }}>MD</div>
            <h3 style={{ fontFamily:S, fontSize:"1.1rem", color:INK, textAlign:"center", marginBottom:"6px", fontWeight:400 }}>Michael Deden</h3>
            <p style={{ fontFamily:F, fontSize:"11px", fontWeight:600, color:OR, textAlign:"center", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"24px" }}>Founder & Principal Adviser</p>
            <div style={{ display:"flex", flexDirection:"column", gap:"8px", width:"100%" }}>
              {["Australian Credit Licence holder","25+ years experience","Manuka, Canberra"].map(c => (
                <div key={c} style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                  <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:OR, flexShrink:0 }} />
                  <span style={{ fontFamily:F, fontSize:"12px", color:MUTED, fontWeight:300 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding:"48px 56px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <p style={{ fontFamily:F, fontSize:"15px", color:MID, lineHeight:1.85, fontWeight:300, marginBottom:"28px" }}>
              With over 25 years in finance, Michael founded Deden Finance and Mentoring with a vision to change how Australians relate to their money. His values-based approach has helped hundreds of families build real, lasting wealth.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px" }}>
              {[
                { val:"25+",    label:"Years experience" },
                { val:"ACL",    label:"Licensed adviser" },
                { val:"Manuka", label:"Based in Canberra" },
              ].map(stat => (
                <div key={stat.val} style={{ padding:"16px", background:SOFT, borderRadius:"12px", border:`1px solid ${BORDER}` }}>
                  <div style={{ fontFamily:S, fontSize:"1.5rem", color:OR, letterSpacing:"-0.02em", marginBottom:"4px", fontWeight:400 }}>{stat.val}</div>
                  <div style={{ fontFamily:F, fontSize:"12px", color:MUTED, fontWeight:300 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section style={{ background:SOFT, padding:"88px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0", alignItems:"center" }}>
          <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
            <Badge label="Our community" />
            <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3.5vw,3rem)", color:INK, lineHeight:1.1, letterSpacing:"-0.02em", fontWeight:400, marginBottom:"20px" }}>
              Proudly based in<br /><em style={{ color:OR, fontStyle:"italic" }}>Manuka, Canberra</em>
            </h2>
            <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, lineHeight:1.8, fontWeight:300, marginBottom:"32px" }}>
              We are a Canberra institution. For 25 years we have served the families, professionals and investors of the ACT and surrounding region. Our Manuka office is our home — and our clients are our community.
            </p>
            <Link href="/contact" style={{ background:OR, color:"#fff", padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>
              Visit Us in Manuka
            </Link>
          </div>
          <div style={{ paddingLeft:"64px", display:"flex", flexDirection:"column", gap:"16px" }}>
            {[
              { icon:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", label:"Office location", value:"Manuka, ACT 2603 · Canberra, Australia" },
              { icon:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l.83-.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z", label:"Serving clients", value:"Canberra, ACT and nationally across Australia" },
              { icon:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 6v6l4 2", label:"Operating since", value:"1999 — 25 years of values-based advice" },
            ].map(item => (
              <div key={item.label} style={{ display:"flex", alignItems:"flex-start", gap:"16px", padding:"20px 22px", background:WHITE, border:`1px solid ${BORDER}`, borderRadius:"16px" }}>
                <div style={{ width:"40px", height:"40px", borderRadius:"10px", background:OR3, border:`1px solid ${OR4}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={OR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon}/></svg>
                </div>
                <div>
                  <div style={{ fontFamily:F, fontSize:"10.5px", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:OR, marginBottom:"5px" }}>{item.label}</div>
                  <div style={{ fontFamily:F, fontSize:"14px", color:MID, fontWeight:300, lineHeight:1.5 }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:OR, padding:"72px 5%" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"28px" }}>
          <div>
            <h2 style={{ fontFamily:S, fontSize:"clamp(1.8rem,3vw,2.6rem)", color:"#fff", marginBottom:"8px", letterSpacing:"-0.02em", fontWeight:400 }}>Ready to work with us?</h2>
            <p style={{ fontFamily:F, fontSize:"15px", color:"rgba(255,255,255,0.65)", fontWeight:300 }}>Book a free, no-obligation consultation with our team in Manuka, Canberra.</p>
          </div>
          <Link href="/contact" style={{ background:"#fff", color:OR, padding:"14px 36px", fontFamily:F, fontSize:"13px", fontWeight:700, textDecoration:"none", borderRadius:"40px", whiteSpace:"nowrap" }}>Get in Touch</Link>
        </div>
      </section>
    </>
  );
}