import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Snapstop – Your Online Photobooth",
  description:
    "Capture fun moments instantly with Snapstop, your online photobooth for events, parties, and memories that last.",
  icons: {
    icon: [
      { url: "assets/icon.png" },
      { url: "assets/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "assets/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col bg-[#eeecea] relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
