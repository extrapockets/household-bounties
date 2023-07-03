import NavBar from "@/components/NavBar";

import "./globals.css";

export const metadata = {
  title: "Lil Bounty Hunters",
  description: "A learner project by extrapockets and bitdern",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
