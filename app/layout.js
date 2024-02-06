import { Inter, Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";

const inter = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "ClearPix | Products",
  description: "Remove the background of the products in just one click. Free background remover",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
