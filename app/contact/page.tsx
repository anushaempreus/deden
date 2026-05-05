"use client";

import { useState } from "react";
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

const inputStyle: React.CSSProperties = {
  width:"100%", padding:"12px 16px", fontFamily:F, fontSize:"14px",
  fontWeight:300, color:INK, background:WHITE, border:`1px solid ${BORDER}`,
  borderRadius:"10px", outline:"none", transition:"border-color 0.15s",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string|null>(null);

  const border = (field: string) => focused===field ? OR : BORDER;

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background:CREAM, padding:"88px 5% 80px", position:"relative", overflow:"hidden", minHeight:"480px", display:"flex", alignItems:"center" }}>
        <Orbs />
        <div style={{ position:"relative", zIndex:1, width:"100%" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"32px" }}>
            <Link href="/" style={{ fontFamily:F, fontSize:"12px", color:MUTED, textDecoration:"none" }}>Home</Link>
            <span style={{ color:BORDER }}>→</span>
            <span style={{ fontFamily:F, fontSize:"12px", color:OR, fontWeight:500 }}>Contact Us</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"0", alignItems:"center" }}>
            <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
              <Badge label="Get in touch" />
              <h1 style={{ fontFamily:S, fontSize:"clamp(3rem,5.5vw,5.5rem)", color:INK, lineHeight:0.97, letterSpacing:"-0.02em", marginBottom:"20px", fontWeight:400 }}>
                Contact<br /><em style={{ color:OR, fontStyle:"italic" }}>Us</em>
              </h1>
              <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, maxWidth:"480px", lineHeight:1.85, fontWeight:300, marginBottom:"32px" }}>
                Don't put off until tomorrow what you can achieve today. Reach out — we're always happy to chat. Your first consultation is completely free and carries no obligation.
              </p>
              <a href="#contact-form" style={{ background:OR, color:"#fff", padding:"13px 28px", fontFamily:F, fontSize:"13px", fontWeight:600, textDecoration:"none", borderRadius:"40px", display:"inline-block" }}>Send a Message</a>
            </div>
            <div style={{ paddingLeft:"64px", display:"flex", flexDirection:"column" }}>
              {[
                { val:"Free",     label:"Initial consultation — no obligation" },
                { val:"Manuka",   label:"Office in Manuka, ACT 2603 · Canberra" },
                { val:"National", label:"Serving clients across Australia" },
              ].map((s,i) => (
                <div key={s.val} style={{ padding:"24px 0", borderBottom:i<2?`1px solid ${BORDER}`:"none", borderTop:i===0?`1px solid ${BORDER}`:"none", display:"flex", alignItems:"center", gap:"20px" }}>
                  <div style={{ fontFamily:S, fontSize:"2rem", color:OR, lineHeight:1, minWidth:"100px", letterSpacing:"-0.02em", fontWeight:400 }}>{s.val}</div>
                  <div style={{ fontFamily:F, fontSize:"13.5px", color:MUTED, lineHeight:1.5, fontWeight:300 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section id="contact-form" style={{ background:SOFT, padding:"88px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 0.85fr", gap:"0", alignItems:"start" }}>
          <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
            <Badge label="Send a message" />
            <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3vw,2.6rem)", color:INK, lineHeight:1.1, letterSpacing:"-0.02em", fontWeight:400, marginBottom:"32px" }}>
              Book a <em style={{ color:OR, fontStyle:"italic" }}>free consultation</em>
            </h2>

            {submitted ? (
              <div style={{ padding:"40px 36px", background:WHITE, borderRadius:"20px", border:`1px solid ${BORDER}`, textAlign:"center" }}>
                <div style={{ width:"56px", height:"56px", borderRadius:"50%", background:OR3, border:`1px solid ${OR4}`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={OR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily:S, fontSize:"1.3rem", color:INK, marginBottom:"10px", fontWeight:400 }}>Message received!</h3>
                <p style={{ fontFamily:F, fontSize:"14px", color:MUTED, lineHeight:1.75, fontWeight:300 }}>Thank you for getting in touch. We'll be in contact with you shortly to arrange your free consultation.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display:"flex", flexDirection:"column", gap:"18px" }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
                  <div>
                    <label style={{ display:"block", fontFamily:F, fontSize:"11.5px", fontWeight:600, color:INK, marginBottom:"6px" }}>First name *</label>
                    <input type="text" required placeholder="Jane" style={{ ...inputStyle, borderColor:border("fn") }} onFocus={() => setFocused("fn")} onBlur={() => setFocused(null)} />
                  </div>
                  <div>
                    <label style={{ display:"block", fontFamily:F, fontSize:"11.5px", fontWeight:600, color:INK, marginBottom:"6px" }}>Last name *</label>
                    <input type="text" required placeholder="Smith" style={{ ...inputStyle, borderColor:border("ln") }} onFocus={() => setFocused("ln")} onBlur={() => setFocused(null)} />
                  </div>
                </div>
                <div>
                  <label style={{ display:"block", fontFamily:F, fontSize:"11.5px", fontWeight:600, color:INK, marginBottom:"6px" }}>Email address *</label>
                  <input type="email" required placeholder="jane@example.com" style={{ ...inputStyle, borderColor:border("em") }} onFocus={() => setFocused("em")} onBlur={() => setFocused(null)} />
                </div>
                <div>
                  <label style={{ display:"block", fontFamily:F, fontSize:"11.5px", fontWeight:600, color:INK, marginBottom:"6px" }}>Phone number</label>
                  <input type="tel" placeholder="04xx xxx xxx" style={{ ...inputStyle, borderColor:border("ph") }} onFocus={() => setFocused("ph")} onBlur={() => setFocused(null)} />
                </div>
                <div>
                  <label style={{ display:"block", fontFamily:F, fontSize:"11.5px", fontWeight:600, color:INK, marginBottom:"6px" }}>I'm interested in *</label>
                  <select required style={{ ...inputStyle, borderColor:border("svc"), appearance:"none", cursor:"pointer" }} onFocus={() => setFocused("svc")} onBlur={() => setFocused(null)}>
                    <option value="">Select a service...</option>
                    <option>Home Finance / Refinance</option>
                    <option>Investment Property Finance</option>
                    <option>Financial Mentoring</option>
                    <option>Financial Health Check</option>
                    <option>Finance Restructuring</option>
                    <option>General enquiry</option>
                  </select>
                </div>
                <div>
                  <label style={{ display:"block", fontFamily:F, fontSize:"11.5px", fontWeight:600, color:INK, marginBottom:"6px" }}>Message</label>
                  <textarea rows={4} placeholder="Tell us a little about your situation..." style={{ ...inputStyle, resize:"vertical", borderColor:border("msg") }} onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)} />
                </div>
                <p style={{ fontFamily:F, fontSize:"11.5px", color:MUTED, lineHeight:1.65, fontWeight:300 }}>By submitting this form you agree to be contacted by Deden Finance and Mentoring regarding your enquiry. We respect your privacy and will never share your details.</p>
                <button type="submit"
                  style={{ background:OR, color:"#fff", padding:"14px 32px", fontFamily:F, fontSize:"13px", fontWeight:600, border:"none", borderRadius:"40px", cursor:"pointer", alignSelf:"flex-start" }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "#c47a10"}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = OR}
                >Send Message →</button>
              </form>
            )}
          </div>

          <div style={{ paddingLeft:"64px", display:"flex", flexDirection:"column", gap:"20px" }}>
            <div>
              <Badge label="Our office" />
              <h2 style={{ fontFamily:S, fontSize:"clamp(1.8rem,2.5vw,2.2rem)", color:INK, lineHeight:1.1, letterSpacing:"-0.02em", fontWeight:400, marginBottom:"24px" }}>
                Find us in<br /><em style={{ color:OR, fontStyle:"italic" }}>Manuka, Canberra</em>
              </h2>
            </div>
            {[
              { icon:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", label:"Office address", value:"Manuka, ACT 2603\nCanberra, Australia" },
              { icon:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l.83-.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z", label:"Phone", value:"Call us to arrange your free consultation" },
              { icon:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", label:"Email", value:"Send us a message using the form" },
              { icon:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 6v6l4 2", label:"Office hours", value:"Monday – Friday: 9am – 5pm\nSaturday: By appointment" },
            ].map(item => (
              <div key={item.label} style={{ display:"flex", gap:"14px", padding:"18px 20px", background:WHITE, borderRadius:"14px", border:`1px solid ${BORDER}` }}>
                <div style={{ width:"40px", height:"40px", borderRadius:"10px", background:OR3, border:`1px solid ${OR4}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={OR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon}/></svg>
                </div>
                <div>
                  <div style={{ fontFamily:F, fontSize:"10.5px", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:OR, marginBottom:"5px" }}>{item.label}</div>
                  <div style={{ fontFamily:F, fontSize:"13.5px", color:MID, fontWeight:300, lineHeight:1.6, whiteSpace:"pre-line" }}>{item.value}</div>
                </div>
              </div>
            ))}
            <div style={{ padding:"20px 24px", background:CREAM, borderRadius:"14px", borderLeft:`3px solid ${OR}` }}>
              <p style={{ fontFamily:S, fontSize:"1rem", fontStyle:"italic", color:INK, lineHeight:1.75, fontWeight:400 }}>
                "The first step on any journey starts with a decision to change. With the support of Deden YOU can take control of your finances."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section style={{ background:WHITE, padding:"88px 5%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:"0", alignItems:"start" }}>
          <div style={{ paddingRight:"64px", borderRight:`1px solid ${BORDER}` }}>
            <Badge label="What to expect" />
            <h2 style={{ fontFamily:S, fontSize:"clamp(2rem,3vw,2.6rem)", color:INK, lineHeight:1.1, letterSpacing:"-0.02em", fontWeight:400, marginBottom:"16px" }}>
              Your free consultation — <em style={{ color:OR, fontStyle:"italic" }}>what happens next</em>
            </h2>
            <p style={{ fontFamily:F, fontSize:"15px", color:MUTED, lineHeight:1.8, fontWeight:300 }}>There's no obligation, no pressure and no cost. We simply want to understand your situation and show you what's possible.</p>
          </div>
          <div style={{ paddingLeft:"64px" }}>
            {[
              { num:"01", title:"We get in touch",           body:"Within one business day we'll reach out to confirm a time that works for you — in person or over the phone." },
              { num:"02", title:"We listen first",           body:"We start by understanding your situation, your goals and what's been holding you back. No forms, no pressure — just a conversation." },
              { num:"03", title:"We show you what's possible",body:"Based on your situation, we'll outline what we can do and how we'd approach it. Completely transparent, completely free." },
              { num:"04", title:"You decide",                body:"There's zero obligation. If you'd like to work with us, we'll take it from there. If not, you'll still leave with valuable insights." },
            ].map((item,i) => (
              <div key={item.num} style={{ display:"flex", gap:"20px", padding:"20px 0", borderBottom:i<3?`1px solid ${BORDER}`:"none" }}>
                <div style={{ fontFamily:S, fontSize:"1.4rem", color:OR, opacity:0.3, lineHeight:1, flexShrink:0, minWidth:"36px", fontWeight:400 }}>{item.num}</div>
                <div>
                  <p style={{ fontFamily:S, fontSize:"1rem", color:INK, marginBottom:"5px", fontWeight:400 }}>{item.title}</p>
                  <p style={{ fontFamily:F, fontSize:"13.5px", color:MUTED, lineHeight:1.7, fontWeight:300 }}>{item.body}</p>
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
            <h2 style={{ fontFamily:S, fontSize:"clamp(1.8rem,3vw,2.6rem)", color:"#fff", marginBottom:"8px", letterSpacing:"-0.02em", fontWeight:400 }}>Don't put it off any longer.</h2>
            <p style={{ fontFamily:F, fontSize:"15px", color:"rgba(255,255,255,0.65)", fontWeight:300 }}>Your first consultation is free, confidential and carries no obligation.</p>
          </div>
          <a href="#contact-form" style={{ background:"#fff", color:OR, padding:"14px 36px", fontFamily:F, fontSize:"13px", fontWeight:700, textDecoration:"none", borderRadius:"40px", whiteSpace:"nowrap" }}>Send a Message</a>
        </div>
      </section>
    </>
  );
}