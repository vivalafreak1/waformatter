export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go Back Home
      </a>
    </div>
  );
}
