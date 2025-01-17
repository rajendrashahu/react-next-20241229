import Navbar from "@/components/Navbar";
import "./globals.css";
import config from "@/config/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";

// Static metadata
export const metadata = {
  title: config.appName,
  description: "Online buy/sell electronic items.",
  keywords: "Online buy electronics products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Notification />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// Layout: It is a UI that is shared between multiple pages
