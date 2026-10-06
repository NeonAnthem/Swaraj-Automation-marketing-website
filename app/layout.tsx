import Footer from "@/components/features/footer/footer";
import NavigationBar from "@/components/features/navigation/components/bar.navigation";
import NavigationProvider from "@/components/features/navigation/providers/index.provider";
import { NavbarProvider } from "@/components/ui/nav-items";
import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swaraj Automations",
  description: "CNC machining and automation solutions",
  openGraph: {
    title: "Swaraj Automations",
    description: "CNC machining and automation solutions",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} ${geistMono.variable} ${interFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavigationProvider>
          <NavbarProvider
            initState={{
              isDark: false,
              isOpen: false,
              items: [],
              activeChild: undefined,
            }}
          >
            <NavigationBar />
            <main className={""}>{children}</main>
            <Footer />
          </NavbarProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
