"use client"

import Link from "next/link"

export default function NotFound() {
    return (
        <div className="font-[Figtree] bg-[#eeecea] min-h-screen flex flex-col items-center justify-center px-5 sm:px-10">

            {/* Big 404 */}
            <p
                className="font-[Coiny] text-[#E43B37] leading-none select-none"
                style={{ fontSize: "clamp(120px, 25vw, 280px)" }}
            >
                404
            </p>

            {/* Headline */}
            <h1
                className="font-[Coiny] text-[#111] leading-[0.95] tracking-tight text-center mt-2 mb-6"
                style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
                Nothing to see here.
            </h1>

            {/* Subtext */}
            <p
                className="text-[#888] font-semibold text-center max-w-[420px] leading-relaxed mb-10"
                style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
            >
                This page doesn't exist. Maybe it moved, maybe it never existed  either way, let's get you back to the fun stuff.
            </p>

            {/* CTA */}
            <Link
                href="/"
                className="bg-[#111] text-white font-black text-sm tracking-[0.12em] uppercase px-8 py-3 rounded-full hover:bg-[#333] transition-colors duration-150"
            >
                Back to Snapstop
            </Link>
        </div>
    )
}