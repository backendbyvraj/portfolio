"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope, FaMapMarkerAlt, FaWhatsapp,
  FaLinkedinIn, FaGithub, FaPaperPlane, FaCheckCircle, FaChevronDown,
} from "react-icons/fa";

const SUBJECTS = [
  { value: "freelance",     label: "Freelance Project" },
  { value: "fulltime",      label: "Full-time Opportunity" },
  { value: "collaboration", label: "Collaboration" },
  { value: "consultation",  label: "Consultation" },
  { value: "other",         label: "Other" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form,   setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"done"|"error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [alreadySent, setAlreadySent] = useState(false);
  const subjectRef = useRef<HTMLDivElement>(null);

  // Check if user already sent a message today
  useEffect(() => {
    const lastSent = localStorage.getItem("contact_last_sent");
    if (lastSent) {
      const today = new Date().toDateString();
      if (lastSent === today) setAlreadySent(true);
    }
  }, []);

  const contactInfo = [
    { icon: <FaEnvelope />,     label: "Email",    value: "pandyavraj234@gmail.com",             href: "mailto:pandyavraj234@gmail.com",                   color: "#8b5cf6" },
    { icon: <FaWhatsapp />,     label: "WhatsApp", value: "+91 97260 53886",                     href: "https://wa.me/919726053886",                       color: "#25D366" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Surat, Gujarat, India",               href: "https://maps.google.com/?q=Surat,Gujarat,India",   color: "#ec4899" },
  ];

  const socials = [
    { icon: <FaGithub />,    href: "https://github.com",                                label: "GitHub",   color: "#a78bfa" },
    { icon: <FaLinkedinIn />,href: "https://www.linkedin.com/in/pandya-vraj-b800b819b", label: "LinkedIn", color: "#0A66C2" },
    { icon: <FaWhatsapp />,  href: "https://wa.me/919726053886",                        label: "WhatsApp", color: "#25D366" },
    { icon: <FaEnvelope />,  href: "mailto:pandyavraj234@gmail.com",                    label: "Email",    color: "#8b5cf6" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (alreadySent) return;
    setStatus("sending");
    try {
      // Email 1: Notification to Vraj (main template — To Email = pandyavraj234@gmail.com)
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name:      form.name,
          email:     form.email,
          title:     form.subject,
          message:   form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      // Email 2: Auto-reply to the person who contacted (if second template is set)
      if (process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,
          {
            name:    form.name,
            email:   form.email,
            title:   form.subject,
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        );
      }
      setStatus("done");
      setForm({ name: "", email: "", subject: "", message: "" });
      // Save today's date — block further sends for rest of day
      localStorage.setItem("contact_last_sent", new Date().toDateString());
      setAlreadySent(true);
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      const msg = err instanceof Error ? err.message : JSON.stringify(err);
      setErrMsg(msg);
      setStatus("error");
      setTimeout(() => { setStatus("idle"); setErrMsg(""); }, 8000);
    }
  };

  // Only animate the floating orbs — no from/opacity animations that can hide content
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".ct-orb1", { x: 30,  y: -25, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".ct-orb2", { x: -20, y: 20,  duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Close custom subject dropdown when clicking outside
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (subjectRef.current && !subjectRef.current.contains(e.target as Node)) {
        setSubjectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const inp: React.CSSProperties = {
    width: "100%",
    background: "var(--color-bg-input)",
    border: "1.5px solid rgba(139,92,246,0.18)",
    borderRadius: "var(--radius)",
    padding: "0.85rem 1.1rem",
    color: "var(--color-text)",
    fontSize: "0.92rem",
    outline: "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
    fontFamily: "inherit",
  };
  const onFocus = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "var(--color-primary)";
    e.currentTarget.style.boxShadow   = "0 0 0 3px rgba(139,92,246,0.12)";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(139,92,246,0.18)";
    e.currentTarget.style.boxShadow   = "none";
  };

  return (
    <section id="contact" ref={sectionRef} style={{ position: "relative", overflow: "hidden", padding: "6rem 0 7rem", background: "var(--color-bg-secondary)" }}>
      {/* Background */}
      <div className="ct-orb1" style={{
        position: "absolute", top: "5%", right: "3%", width: "450px", height: "450px",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div className="ct-orb2" style={{
        position: "absolute", bottom: "5%", left: "2%", width: "380px", height: "380px",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(20,184,166,0.09) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(139,92,246,0.05) 1px, transparent 1px)",
        backgroundSize: "32px 32px", pointerEvents: "none", zIndex: 0,
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header — CSS animation, never gets stuck */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem", animation: "ctFadeUp 0.7s ease both" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)",
            borderRadius: "50px", padding: "0.35rem 1rem",
            fontSize: "0.8rem", fontWeight: 700, color: "var(--color-primary-light)",
            letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem",
          }}>
            &#9993; Get In Touch
          </div>
          <h2 className="section-title">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginTop: "1rem", maxWidth: "560px", margin: "1rem auto 0" }}>
            Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll respond within 24 hours.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.6fr",
          gap: "3rem", alignItems: "start",
        }} className="ct-grid">

          {/* ── Left ── */}
          <div style={{ animation: "ctSlideLeft 0.7s 0.1s ease both" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem" }}>Contact Information</h3>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Feel free to reach out through any channel. I&apos;m always open to discussing new projects and opportunities.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
              {contactInfo.map((item, i) => (
                <a key={item.label} href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    padding: "1rem 1.25rem",
                    background: "var(--color-bg-card)", border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius)", textDecoration: "none", transition: "all 0.28s",
                    animation: `ctFadeUp 0.5s ${0.15 + i * 0.1}s ease both`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${item.color}50`;
                    el.style.background  = `${item.color}08`;
                    el.style.transform   = "translateX(6px)";
                    el.style.boxShadow   = `0 8px 24px ${item.color}18`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-border)";
                    el.style.background  = "var(--color-bg-card)";
                    el.style.transform   = "translateX(0)";
                    el.style.boxShadow   = "none";
                  }}
                >
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "10px", flexShrink: 0,
                    background: `${item.color}15`, border: `1px solid ${item.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.1rem", color: item.color,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.73rem", color: "var(--color-text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "var(--color-text)", fontWeight: 500 }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.9rem" }}>
              Find Me On
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem" }}>
              {socials.map((s, i) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    background: `${s.color}12`, border: `1px solid ${s.color}28`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: s.color, fontSize: "1.05rem", transition: "all 0.25s",
                    animation: `ctFadeUp 0.4s ${0.4 + i * 0.07}s ease both`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background  = s.color;
                    el.style.borderColor = s.color;
                    el.style.color       = "#fff";
                    el.style.transform   = "translateY(-4px) scale(1.1)";
                    el.style.boxShadow   = `0 8px 20px ${s.color}44`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background  = `${s.color}12`;
                    el.style.borderColor = `${s.color}28`;
                    el.style.color       = s.color;
                    el.style.transform   = "translateY(0) scale(1)";
                    el.style.boxShadow   = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Availability */}
            <div style={{
              padding: "1rem 1.25rem",
              background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: "var(--radius)", display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              <span style={{
                width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0,
                background: "#10b981", boxShadow: "0 0 0 3px rgba(16,185,129,0.2)",
                animation: "ctpulse 2s infinite",
              }} />
              <span style={{ fontSize: "0.86rem", color: "#10b981", fontWeight: 600 }}>
                Available for freelance &amp; full-time
              </span>
            </div>
          </div>

          {/* ── Right: Form — always visible ── */}
          <div className="card" style={{ padding: "2.5rem", animation: "ctSlideRight 0.7s 0.15s ease both" }}>
            {alreadySent && status !== "sending" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{
                  width: "64px", height: "64px", borderRadius: "50%", margin: "0 auto 1.25rem",
                  background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem",
                }}>🕐</div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--color-primary-light)", marginBottom: "0.75rem" }}>
                  Message Already Sent Today
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                  You&apos;ve already sent a message today. I&apos;ll reply within 24 hours.<br />
                  You can send another message tomorrow.
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--color-text-dim)", marginBottom: "1.5rem" }}>
                  Need urgent help? Reach out directly:
                </p>
                <a href="https://wa.me/919726053886" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary" style={{ display: "inline-flex", gap: "0.5rem" }}>
                  Chat on WhatsApp
                </a>
              </div>
            ) : status === "done" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{
                  width: "64px", height: "64px", borderRadius: "50%", margin: "0 auto 1.25rem",
                  background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", color: "#10b981",
                }}>
                  <FaCheckCircle />
                </div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#10b981", marginBottom: "0.5rem" }}>Message Sent!</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                  Thank you! I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : status === "error" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{
                  width: "64px", height: "64px", borderRadius: "50%", margin: "0 auto 1.25rem",
                  background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", color: "#ef4444",
                }}>✕</div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ef4444", marginBottom: "0.5rem" }}>Send Failed</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                  Something went wrong. Please try WhatsApp or Email directly.
                </p>
                {errMsg && (
                  <p style={{ fontSize: "0.78rem", color: "#f87171", background: "rgba(239,68,68,0.08)", borderRadius: "8px", padding: "0.5rem 0.75rem", marginBottom: "1rem", wordBreak: "break-all", textAlign: "left" }}>
                    Error: {errMsg}
                  </p>
                )}
                <a href="https://wa.me/919726053886" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary" style={{ display: "inline-flex", gap: "0.5rem" }}>
                  Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>Send a Message</h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="ct-form-row">
                  <div>
                    <label style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>Your Name *</label>
                    <input type="text" name="name" value={form.name} required
                      onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
                      placeholder="John Doe" style={inp} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>Email Address *</label>
                    <input type="email" name="email" value={form.email} required
                      onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
                      placeholder="john@example.com" style={inp} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>Subject *</label>
                  {/* Custom dropdown — no browser native white popup */}
                  <div ref={subjectRef} style={{ position: "relative" }}>
                    <button
                      type="button"
                      onClick={() => setSubjectOpen((o) => !o)}
                      style={{
                        ...inp,
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        cursor: "pointer",
                        borderColor: subjectOpen ? "var(--color-primary)" : "rgba(139,92,246,0.18)",
                        boxShadow: subjectOpen ? "0 0 0 3px rgba(139,92,246,0.12)" : "none",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ color: form.subject ? "var(--color-text)" : "var(--color-text-dim)" }}>
                        {form.subject ? SUBJECTS.find(s => s.value === form.subject)?.label : "Select a subject"}
                      </span>
                      <FaChevronDown style={{
                        fontSize: "0.75rem", color: "var(--color-text-muted)",
                        transition: "transform 0.2s",
                        transform: subjectOpen ? "rotate(180deg)" : "rotate(0deg)",
                        flexShrink: 0,
                      }} />
                    </button>
                    {subjectOpen && (
                      <div style={{
                        position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, zIndex: 50,
                        background: "var(--color-bg-card)",
                        border: "1.5px solid var(--color-primary)",
                        borderRadius: "var(--radius)",
                        overflow: "hidden",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                      }}>
                        {SUBJECTS.map((s) => (
                          <div
                            key={s.value}
                            onClick={() => { setForm(p => ({ ...p, subject: s.value })); setSubjectOpen(false); }}
                            style={{
                              padding: "0.75rem 1.1rem",
                              fontSize: "0.92rem",
                              color: form.subject === s.value ? "var(--color-primary-light)" : "var(--color-text)",
                              background: form.subject === s.value ? "rgba(139,92,246,0.12)" : "transparent",
                              cursor: "pointer",
                              transition: "background 0.15s",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = "rgba(139,92,246,0.08)")}
                            onMouseLeave={e => (e.currentTarget.style.background = form.subject === s.value ? "rgba(139,92,246,0.12)" : "transparent")}
                          >
                            {s.label}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Hidden native select for form validation */}
                    <select
                      name="subject" value={form.subject} required
                      onChange={handleChange}
                      style={{ position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 }}
                      tabIndex={-1}
                      aria-hidden
                    >
                      <option value="" />
                      {SUBJECTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>Message *</label>
                  <textarea name="message" value={form.message} required rows={5}
                    onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
                    placeholder="Tell me about your project or opportunity..."
                    style={{ ...inp, resize: "vertical", minHeight: "130px" }} />
                </div>

                <button type="submit" disabled={status === "sending"} style={{
                  width: "100%", padding: "0.9rem",
                  background: status === "sending"
                    ? "rgba(139,92,246,0.4)"
                    : "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  border: "none", borderRadius: "var(--radius)",
                  color: "#fff", fontSize: "0.95rem", fontWeight: 700,
                  cursor: status === "sending" ? "wait" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                  transition: "all 0.25s",
                  boxShadow: status === "sending" ? "none" : "0 6px 24px rgba(139,92,246,0.35)",
                }}
                  onMouseEnter={(e) => {
                    if (status === "sending") return;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(139,92,246,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = status === "sending" ? "none" : "0 6px 24px rgba(139,92,246,0.35)";
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span style={{ width: "16px", height: "16px", border: "2px solid #fff4", borderTopColor: "#fff", borderRadius: "50%", animation: "ctspin 0.8s linear infinite", display: "inline-block" }} />
                      Sending...
                    </>
                  ) : (
                    <><FaPaperPlane /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ctFadeUp    { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ctSlideLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes ctSlideRight{ from { opacity: 0; transform: translateX(30px);  } to { opacity: 1; transform: translateX(0); } }
        @keyframes ctpulse { 0%,100% { box-shadow: 0 0 0 3px rgba(16,185,129,0.2); } 50% { box-shadow: 0 0 0 7px rgba(16,185,129,0.06); } }
        @keyframes ctspin  { to { transform: rotate(360deg); } }
        @media (max-width: 900px) { .ct-grid     { grid-template-columns: 1fr !important; } }
        @media (max-width: 540px) { .ct-form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
