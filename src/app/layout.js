import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/Context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";


const inter = Inter({ subsets: ["latin"], })

export const metadata = {
  title: "Youssef Profile",
  description: "This is my profile websit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
            </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
