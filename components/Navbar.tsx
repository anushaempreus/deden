"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "/services" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "About Us",   href: "/about" },
  { label: "Praise",     href: "/praise" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog",       href: "/blog" },
];

const OR = "#e8931a";
const F  = "'Inter', sans-serif";
const S  = "'Playfair Display', serif";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav style={{
      background: "rgba(253,249,244,0.96)",
      height: "64px",
      display: "flex", alignItems: "center",
      padding: "0 5%", justifyContent: "space-between",
      borderBottom: "1px solid #ede8e0",
      position: "sticky", top: 0, zIndex: 100,
      backdropFilter: "blur(8px)",
    }}>
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{
          width: "36px", height: "36px", background: OR,
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: S, fontSize: "1.1rem", fontStyle: "italic", color: "#fff", fontWeight: 400,
        }}>D</div>
        <div>
          <div style={{ fontFamily: F, fontSize: "0.92rem", fontWeight: 600, color: "#0f0f0f", letterSpacing: "-0.02em" }}>
            Deden Finance
          </div>
          <div style={{ fontSize: "0.58rem", color: "#7a7a7a", letterSpacing: "0.04em", fontFamily: F }}>
            &amp; Mentoring · Canberra
          </div>
        </div>
      </Link>

      <div style={{ display: "flex" }}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} style={{
            fontFamily: F, fontSize: "12px", fontWeight: 500,
            color: pathname === l.href ? "#0f0f0f" : "#7a7a7a",
            textDecoration: "none", padding: "6px 13px",
            transition: "color 0.15s",
          }}>
            {l.label}
          </Link>
        ))}
      </div>

      <Link href="/contact" style={{
        background: OR, color: "#fff",
        fontFamily: F, fontSize: "12px", fontWeight: 600,
        padding: "9px 22px", borderRadius: "40px",
        textDecoration: "none",
      }}>
        Free Consultation
      </Link>
    </nav>
  );
}