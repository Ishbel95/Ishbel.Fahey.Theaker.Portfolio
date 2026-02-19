import "../app/globals.scss";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import GradientBackground from "@/components/animation/GradientBackground";
import { Metadata } from "next";
import Modal from "@/components/Modal";
import LoadingScreen from "@/components/Loading";
import { poppins } from "@/styles/fonts/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://ishbelfaheytheaker.dev"),
  generator: "Next.js",
  applicationName: "ISHBEL.FAHEY.THEAKER.PORTFOLIO",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "Typescript"],
  authors: [{ name: "Ishbel Fahey Theaker", url: "https://nextjs.org" }],
  creator: "Ishbel Fahey Theaker",
  publisher: "Ishbel Fahey Theaker",
  title: "Ishbel Fahey Theaker dev portfolio",
  description: "Explore my portfolio to see what I can code!.",
  openGraph: {
    title: "Ishbel Fahey Theaker dev portfolio",
    description: "Explore my portfolio to see what I can code!.",
  },
};

config.autoAddCss = false;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //errorboundary

  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navigation />
        <GradientBackground />
        <Modal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
