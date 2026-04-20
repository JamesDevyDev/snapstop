"use client"

const About = () => {
    return (
        <div className="font-[Figtree] bg-[#eeecea] min-h-screen">



            {/* ── HERO ── */}
            <section className="flex-1 flex flex-col justify-center px-5 sm:px-10 lg:px-20 py-24 max-w-[1600px] mx-auto w-full">

                {/* Eyebrow */}
                <p className="fade-up text-xs font-black tracking-[0.2em] uppercase text-[#E43B37] mb-6" style={{ animationDelay: "0ms" }}>
                    About Snapstop
                </p>

                {/* Giant headline */}
                <h1
                    className="fade-up font-[Coiny] text-[#111] leading-[0.95] tracking-tight mb-10"
                    style={{ fontSize: "clamp(64px, 12vw, 160px)", animationDelay: "80ms" }}
                >
                    Photos.<br />
                    No fuss.<br />
                    <span className="text-[#E43B37]">Just fun.</span>
                </h1>

                {/* Intro paragraph */}
                <p
                    className="fade-up text-[#555] font-semibold leading-relaxed max-w-[580px]"
                    style={{ fontSize: "clamp(16px, 2vw, 20px)", animationDelay: "160ms" }}
                >
                    Snapstop is a free, browser-based photobooth that runs entirely on your device.
                    No account needed, no uploads, no subscriptions, just open it and start snapping.
                </p>
            </section>

            {/* ── DIVIDER ── */}
            <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
                <div className="h-px bg-[#ddd]" />
            </div>

            {/* ── STORY SECTION ── */}
            <section className="max-w-[1100px] mx-auto px-5 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Left, sticky label */}
                <div className="lg:sticky lg:top-24">
                    <p className="text-xs font-black tracking-[0.2em] uppercase text-[#aaa] mb-4">The Story</p>
                    <h2 className="font-[Coiny] text-[#111] leading-[1.0]" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
                        Built for the<br />moment.
                    </h2>
                </div>

                {/* Right, prose */}
                <div className="flex flex-col gap-6 text-[#666] font-semibold leading-relaxed" style={{ fontSize: "15px" }}>
                    <p>
                        We've all been there, someone pulls out their phone at a party or event and tries to get a decent group shot. It's awkward, the angle's wrong, and half the photos get lost in a camera roll.
                    </p>
                    <p>
                        Snapstop was built to fix that. Open the app on any laptop or desktop browser, hit snap, and get a polished photo strip in seconds. Classic photobooth vibes, zero setup.
                    </p>
                    <p>
                        Everything happens locally on your device. Your photos are never sent anywhere, not to our servers, not to the cloud. When you close the tab, they're gone. That's a feature, not a bug.
                    </p>
                    <p>
                        We keep the interface clean and opinionated on purpose. Fewer choices, faster fun. Pick your layout, pick your timer, and go.
                    </p>
                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
                <div className="h-px bg-[#ddd]" />
            </div>

            {/* ── VALUES ── */}
            <section className="max-w-[1100px] mx-auto px-5 sm:px-10 py-20">
                <p className="text-xs font-black tracking-[0.2em] uppercase text-[#aaa] mb-12">What we believe</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#ddd]">
                    {[
                        {
                            num: "01",
                            title: "Privacy is not optional.",
                            body: "Your photos stay on your device. We don't even have a server to send them to.",
                        },
                        {
                            num: "02",
                            title: "Simple is hard.",
                            body: "It takes real effort to make something feel this easy. We obsess over every interaction.",
                        },
                        {
                            num: "03",
                            title: "Free means free.",
                            body: "No freemium tricks, no nag screens, no watermarks you have to pay to remove.",
                        },
                    ].map(({ num, title, body }) => (
                        <div key={num} className="bg-[#eeecea] p-8 sm:p-10 flex flex-col gap-4">
                            <span className="font-[Coiny] text-[#E43B37] text-4xl leading-none">{num}</span>
                            <h3 className="font-black text-[#111] text-lg leading-tight">{title}</h3>
                            <p className="text-[#888] font-semibold text-sm leading-relaxed">{body}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default About;