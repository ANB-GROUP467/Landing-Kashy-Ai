import "./globals.css";
import { dmSans } from "./fonts";

export const metadata = {
  title: "Kashy",
  description: "Kashy landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${dmSans.variable}`}>
      <body className="font-sans bg-[#0b0d0c] text-white antialiased overflow-x-hidden min-h-screen">{children}</body>
    </html>
  );
}
