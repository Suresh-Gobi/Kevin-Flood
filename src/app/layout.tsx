import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import NextTopLoader from 'nextjs-toploader';
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session:any
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <NextTopLoader />
      <AuthDialogProvider>
      <SessionProviderComp session={session}>
        
          
            <Header />
            {children}
            <Footer />
          
        
        </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}
