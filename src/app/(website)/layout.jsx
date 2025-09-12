// app/(landing)/layout.tsx

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function LandingLayout({
  children,
}) {
  return ( 
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
