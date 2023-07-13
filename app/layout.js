import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Memoria",
  description: "Share Photo Albums Seemlessly!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto p-4`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
