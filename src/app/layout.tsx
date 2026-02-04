import "../app/globals.scss";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import GradientBackground from "@/components/animation/GradientBackground";
import { Metadata } from "next";

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
    // images: [
    //   {
    //     url: 'https://yourdomain.com/images/perfect-coffee.jpg',
    //   },
    // ],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jura:wght@300..700&family=League+Spartan:wght@100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=ZCOOL+QingKe+HuangYou&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />

        <GradientBackground />
        {children}

        <Footer />
      </body>
    </html>
  );
}
