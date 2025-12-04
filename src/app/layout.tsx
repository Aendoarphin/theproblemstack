import "./globals.css";
import { Fira_Code } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ScrollProvider } from "@/app/scroll-provider";
import Header from "@/components/Header";

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
        <body className="container mx-auto antialiased px-4">
          <ScrollProvider>
            <Header />
            {children}
            <footer className="text-center text-foreground text-xs p-4">
              <p>
                &copy; {new Date().getFullYear()}{" "}
                {process.env.NEXT_PUBLIC_BRAND_NAME}. All rights reserved.
              </p>
            </footer>
          </ScrollProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
