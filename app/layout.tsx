import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import ClientOnly from "./components/client-only";
import Navbar from "./components/ui/navbar/navbar";
import RegisterModal from "./components/ui/modals/register-modal";
import ToasterProvider from "./providers/toaster-provider";
import LoginModal from "./components/ui/modals/login-modal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/ui/modals/rent-modal";
import SearchModal from "./components/ui/modals/search-modal";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Generated by create next app",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <SearchModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}