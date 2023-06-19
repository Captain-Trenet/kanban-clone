import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban",
  description: "Kanban drag and drop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          <div className="appContainer">
            <Sidebar />
            <div className="scroll">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
