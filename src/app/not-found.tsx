import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-6">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Page Not Found
            </h2>
            <p className="text-center mb-8 max-w-md">
                Oops! The page you’re looking for does not exist or may have been moved.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
            >
                Go Back Home
            </Link>
        </main>
    );
}
