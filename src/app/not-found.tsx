
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-100 px-6">
      <div className="text-center max-w-xl">

        <div className="relative mb-8">
          <h1 className="text-[150px] sm:text-[190px] font-black leading-none tracking-tighter text-error/10">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl sm:text-8xl font-black tracking-tight text-error">
              404
            </span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="text-base-content/60 max-w-md mx-auto leading-relaxed">
          Sorry, we couldn't find the page you're looking for.
          It may have been moved, deleted, or the URL might be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">

          <Link
            href="/"
            className="btn btn-error rounded-full px-7 text-white"
          >
            Back to Home
          </Link>

          <Link
            href="/"
            className="btn btn-outline btn-error rounded-full px-7"
          >
            Explore Website
          </Link>

        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-base-content/40">
          <span className="w-2 h-2 rounded-full bg-error"></span>
          <span>Looks like you took a wrong turn.</span>
        </div>

      </div>
    </main>
  );
}

