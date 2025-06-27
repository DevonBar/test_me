import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DateInternational | Experience the Best International Dating Service",
  description: "Experience the best international dating services when you sign up with DateInt.Com. Be the next lucky guy to marry a foreign woman!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-REPLACE_THIS"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          precedence="default" // optional but recommended
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
