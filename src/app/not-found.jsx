import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center h-screen text-center section-padding">
      <h1 className="fw-bold text-gray-800">404</h1>
      <p className="mt-2">
        Sorry, the page you are looking for doesn’t exist.
      </p>
      <Link href="/" className="link-area">
        <button className="button primary">Go back home</button>
      </Link>
    </div>
    <Footer />
    </>
  );
}


