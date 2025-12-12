import "./globals.css";
import { Fira_Code } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ScrollProvider } from "@/app/scroll-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const firaCode = Fira_Code({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira",
});

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={firaCode.className}>
        <body className={`mx-auto antialiased`}>
          <ScrollProvider>
            <Header />
            {children}
            <Footer />
          </ScrollProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
