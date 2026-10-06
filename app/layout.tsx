import Footer from "@/components/features/footer/footer";
import NavigationBar from "@/components/features/navigation/components/bar.navigation";
import NavigationProvider from "@/components/features/navigation/providers/index.provider";
import { NavbarProvider } from "@/components/ui/nav-items";
import { archivoFont, geistMono } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

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
      className={`${archivoFont.variable} ${geistMono.variable} ${archivoFont.className} h-full antialiased`}
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
