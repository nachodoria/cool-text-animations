import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Text Animations by Ignacio Doria",
  description: "Some text animations for your projects. Hope you enjoy!",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en" className='dark'>
        <body>
          {children}
        </body>
    </html>

  );
}