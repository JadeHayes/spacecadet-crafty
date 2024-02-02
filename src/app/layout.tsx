import Navbar from '@/components/navbar/NavBar';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="nav-area w-full flex-none md:w-64"> 
        <Navbar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    </body>
    </html>
  );
}
