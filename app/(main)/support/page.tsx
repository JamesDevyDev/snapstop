"use client"

import { useState } from "react";

const faqs = [
    {
        q: "Do I need to create an account?",
        a: "No. Snapstop works instantly in your browser, no sign-up, no login, no account of any kind.",
    },
    {
        q: "Are my photos saved or uploaded anywhere?",
        a: "Never. All photos are processed entirely on your device. Nothing is sent to any server. When you close or refresh the tab, the photos are gone.",
    },
    {
        q: "Which browsers are supported?",
        a: "Snapstop works in any modern browser that supports the MediaDevices API, Chrome, Edge, Firefox, and Safari (macOS 14.4+). It works best on a desktop or laptop.",
    },
    {
        q: "Why isn't my camera showing up?",
        a: "Your browser needs camera permission. Click the camera icon in your address bar and choose 'Allow', then reload the page. Make sure no other app (e.g. Zoom, Teams) is holding the camera.",
    },
    {
        q: "Can I use Snapstop on mobile?",
        a: "It works on modern mobile browsers, but it's designed for laptops and desktops. A wider screen gives the best experience.",
    },
    {
        q: "How do I download my photo strip?",
        a: "After all shots are taken, the strip is generated automatically. Hit 'Download PNG' on the result screen and it saves directly to your device.",
    },
    {
        q: "Can I change the layout mid-session?",
        a: "Not mid-session, layout and timer are set before you start. Hit '← Back' to go back to setup and choose a different layout.",
    },
    {
        q: "Is Snapstop free?",
        a: "Yes, completely. No freemium limits, no watermarks to pay to remove, no hidden tiers.",
    },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-[#ddd] last:border-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
            >
                <span className="font-black text-[#111] text-[15px] group-hover:text-[#E43B37] transition-colors leading-snug">
                    {q}
                </span>
                <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border-[1.5px] border-[#ddd] flex items-center justify-center transition-all duration-200 ${open ? "bg-[#E43B37] border-[#E43B37] rotate-45" : "bg-white"}`}
                >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke={open ? "white" : "#999"} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </span>
            </button>
            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}
            >
                <p className="text-[#777] font-semibold text-sm leading-relaxed pb-5 pr-10">{a}</p>
            </div>
        </div>
    );
};

const Support = () => {
    return (
        <div className="font-[Figtree] bg-[#eeecea] min-h-screen">
            {/* ── HERO ── */}
            <section className="flex-1 flex flex-col justify-center px-5 sm:px-10 lg:px-20 py-24 max-w-[1600px] mx-auto w-full">
                <p className="fade-up text-xs font-black tracking-[0.2em] uppercase text-[#E43B37] mb-6" style={{ animationDelay: "0ms" }}>
                    Support
                </p>
                <h1
                    className="fade-up font-[Coiny] text-[#111] leading-[0.95] tracking-tight mb-8"
                    style={{ fontSize: "clamp(56px, 10vw, 120px)", animationDelay: "60ms" }}
                >
                    How can we<br />
                    <span className="text-[#E43B37]">help you?</span>
                </h1>
                <p
                    className="fade-up text-[#777] font-semibold leading-relaxed max-w-[480px]"
                    style={{ fontSize: "15px", animationDelay: "120ms" }}
                >
                    Most answers are below. If you're still stuck, send us a message and we'll get back to you.
                </p>
            </section>

            {/* ── QUICK LINKS ── */}
            <section className="max-w-[1100px] mx-auto px-5 sm:px-10 pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        {
                            icon: (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="#E43B37" strokeWidth="2" />
                                    <path d="M12 8v4l3 3" stroke="#E43B37" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            ),
                            title: "Getting Started",
                            desc: "Allow camera → pick layout → hit snap.",
                            href: "#faq",
                        },
                        {
                            icon: (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="#E43B37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="13" r="4" stroke="#E43B37" strokeWidth="2" />
                                </svg>
                            ),
                            title: "Camera Issues",
                            desc: "Troubleshoot camera permissions.",
                            href: "#faq",
                        },
                        {
                            icon: (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#E43B37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ),
                            title: "Contact Us",
                            desc: "Still stuck? Drop us a message.",
                            href: "#contact",
                        },
                    ].map(({ icon, title, desc, href }) => (
                        <a
                            key={title}
                            href={href}
                            className="bg-white rounded-[18px] p-6 flex items-start gap-4 no-underline group hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#fff0f0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ffe0e0] transition-colors">
                                {icon}
                            </div>
                            <div>
                                <p className="font-black text-[#111] text-[14px] mb-1 group-hover:text-[#E43B37] transition-colors">{title}</p>
                                <p className="text-[#999] font-semibold text-[12px] leading-snug">{desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
                <div className="h-px bg-[#ddd]" />
            </div>

            {/* ── FAQ ── */}
            <section id="faq" className="max-w-[1100px] mx-auto px-5 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">

                {/* Left label */}
                <div className="lg:sticky lg:top-24">
                    <p className="text-xs font-black tracking-[0.2em] uppercase text-[#aaa] mb-3">FAQ</p>
                    <h2 className="font-[Coiny] text-[#111] leading-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                        Frequently<br />asked
                    </h2>
                </div>

                {/* Right, accordion */}
                <div className="bg-white rounded-[20px] px-6 sm:px-8">
                    {faqs.map((item) => (
                        <FaqItem key={item.q} {...item} />
                    ))}
                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
                <div className="h-px bg-[#ddd]" />
            </div>

            {/* ── CONTACT ── */}
            <section id="contact" className="max-w-[1100px] mx-auto px-5 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">

                {/* Left */}
                <div className="lg:sticky lg:top-24">
                    <p className="text-xs font-black tracking-[0.2em] uppercase text-[#aaa] mb-3">Contact</p>
                    <h2 className="font-[Coiny] text-[#111] leading-tight mb-4" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                        Still need<br />help?
                    </h2>
                    <p className="text-[#999] font-semibold text-sm leading-relaxed">
                        We'll usually reply within a day. Describe what you were doing and what went wrong.
                    </p>
                </div>

                {/* Right, contact form */}
                <div className="bg-white rounded-[20px] p-6 sm:p-8 flex flex-col gap-5">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-[11px] font-black text-[#111] tracking-widest uppercase">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="bg-[#f5f5f5] rounded-[12px] px-4 py-3 text-sm font-semibold text-[#111] placeholder:text-[#bbb] outline-none focus:ring-2 focus:ring-[#E43B37]/30 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[11px] font-black text-[#111] tracking-widest uppercase">Email</label>
                            <input
                                type="email"
                                placeholder="you@email.com"
                                className="bg-[#f5f5f5] rounded-[12px] px-4 py-3 text-sm font-semibold text-[#111] placeholder:text-[#bbb] outline-none focus:ring-2 focus:ring-[#E43B37]/30 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-black text-[#111] tracking-widest uppercase">Subject</label>
                        <select className="bg-[#f5f5f5] rounded-[12px] px-4 py-3 text-sm font-semibold text-[#777] outline-none focus:ring-2 focus:ring-[#E43B37]/30 transition-all appearance-none cursor-pointer">
                            <option value="">Select a topic…</option>
                            <option value="camera">Camera not working</option>
                            <option value="download">Download issue</option>
                            <option value="layout">Layout / strip question</option>
                            <option value="bug">Found a bug</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-black text-[#111] tracking-widest uppercase">Message</label>
                        <textarea
                            rows={5}
                            placeholder="Describe your issue in as much detail as possible…"
                            className="bg-[#f5f5f5] rounded-[12px] px-4 py-3 text-sm font-semibold text-[#111] placeholder:text-[#bbb] outline-none focus:ring-2 focus:ring-[#E43B37]/30 transition-all resize-none"
                        />
                    </div>

                    <button
                        type="button"
                        className="self-start flex items-center gap-2.5 bg-[#E43B37] text-white rounded-full px-8 py-3.5 text-sm font-black hover:bg-[#c9332f] transition-colors group"
                    >
                        Send message
                        <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                    </button>

                    <p className="text-[#bbb] text-xs font-semibold">
                        We typically respond within 24 hours on weekdays.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Support;