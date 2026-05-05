"use client";

import Link from "next/link";

const OR = "#e8931a";
const S  = "'Playfair Display', serif";
const F  = "'Inter', sans-serif";

const navLinks = [
  { label: "Home",        href: "/" },
  { label: "Services",    href: "/services" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "About Us",    href: "/about" },
  { label: "Praise",      href: "/praise" },
  { label: "Contact Us",  href: "/contact" },
];

const resourceLinks = [
  { label: "Blog",                    href: "/blog" },
  { label: "Privacy Policy",          href: "/privacy" },
  { label: "Financial Services Guide", href: "/financial-services-guide" },
];

const posts = [
  "Five things to consider when choosing your mortgage broker",
  "How much can you borrow for your next property?",
  "The Comparison Rate explained",
];

export default function Footer() {
  return (
    <footer style={{ background: "#0f0f0f" }}>
      <div style={{ padding: "64px 5% 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: "52px", marginBottom: "48px" }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", background: OR, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: S, fontSize: "1.1rem", fontStyle: "italic", color: "#fff", fontWeight: 400 }}>D</div>
              <span style={{ fontFamily: F, fontSize: "1rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.01em" }}>
                Deden Finance &amp; Mentoring
              </span>
            </div>
            <p style={{ fontFamily: F, fontSize: "13.5px", color: "rgba(255,255,255,0.28)", lineHeight: 1.85, marginBottom: "14px", fontWeight: 300 }}>
              Providing values-based financial service, education, mentoring and support for 25 years. Based in Canberra, with offices in Manuka.
            </p>
            <p style={{ fontFamily: F, fontSize: "13px", color: OR, fontWeight: 500 }}>
              Manuka, ACT 2603 · Canberra
            </p>
          </div>

          <div>
            <p style={{ fontFamily: F, fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "18px" }}>Navigate</p>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}
                style={{ display: "block", marginBottom: "12px", fontFamily: F, fontSize: "13.5px", color: "rgba(255,255,255,0.28)", textDecoration: "none", fontWeight: 300 }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#fff"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.28)"}
              >{l.label}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: F, fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "18px" }}>Resources</p>
            {resourceLinks.map((l) => (
              <Link key={l.href} href={l.href}
                style={{ display: "block", marginBottom: "12px", fontFamily: F, fontSize: "13.5px", color: "rgba(255,255,255,0.28)", textDecoration: "none", fontWeight: 300 }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#fff"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.28)"}
              >{l.label}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: F, fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "18px" }}>Recent Posts</p>
            {posts.map((p) => (
              <p key={p}
                style={{ fontFamily: F, fontSize: "13.5px", color: "rgba(255,255,255,0.28)", marginBottom: "14px", lineHeight: 1.65, cursor: "pointer", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontWeight: 300 }}
                onMouseEnter={e => (e.currentTarget as HTMLParagraphElement).style.color = OR}
                onMouseLeave={e => (e.currentTarget as HTMLParagraphElement).style.color = "rgba(255,255,255,0.28)"}
              >{p}</p>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "22px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontFamily: F, fontSize: "12px", color: "rgba(255,255,255,0.18)", fontWeight: 300 }}>© 2025 Deden Finance and Mentoring. All rights reserved.</span>
          <span style={{ fontFamily: F, fontSize: "12px", color: "rgba(255,255,255,0.18)", fontWeight: 300 }}>Australian Credit Licence holder · Manuka, Canberra</span>
        </div>
      </div>
    </footer>
  );
}