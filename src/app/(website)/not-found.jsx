export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-4">
        Sorry, the page you are looking for doesn’t exist.
      </p>
      <a href="/" className="mt-6 text-blue-600 hover:underline">
        Go back home
      </a>
    </div>
  );
}


