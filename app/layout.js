import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/NavBar";


export const metadata = {
  title: "Abdul Momin",
  description: "This abdulmomin956 portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
