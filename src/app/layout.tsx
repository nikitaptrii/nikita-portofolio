import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikita Putri Prabowo — Portfolio",
  description:
    "Portfolio website of Nikita Putri Prabowo, Computer Science student and Software Engineer focused on web development, project management, and data science.",
  metadataBase: new URL("https://nikita-portfolio.vercel.app"),
  openGraph: {
    title: "Nikita Putri Prabowo — Portfolio",
    description:
      "Computer Science student at Universitas Padjadjaran with projects in software engineering, frontend development, QA, and machine learning.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
