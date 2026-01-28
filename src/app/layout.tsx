import "../app/globals.scss";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import StarryBackground from "@/components/animation/starryBackground";

import LoadingScreen from "@/components/Loading";

config.autoAddCss = false;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="gradient-container">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
