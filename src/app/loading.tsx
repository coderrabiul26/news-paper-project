
export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-100 px-6">
      <div className="text-center max-w-md">
        <div className="relative flex items-center justify-center mb-8">
          <div className="w-24 h-24 border-4 border-error/15 border-t-error border-r-error rounded-full animate-spin"></div>

          <div className="absolute w-12 h-12 rounded-full bg-error/10 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-error animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Loading
          <span className="text-error">.</span>
          <span className="text-error/70">.</span>
          <span className="text-error/40">.</span>
        </h1>

        <p className="mt-3 text-sm sm:text-base text-base-content/50">
          Please wait while we prepare everything for you.
        </p>

        <div className="mt-8 w-56 h-1.5 bg-error/10 rounded-full overflow-hidden mx-auto">
          <div className="h-full w-1/2 bg-error rounded-full animate-pulse"></div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-base-content/40">
          <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
          <span>Getting things ready...</span>
        </div>
      </div>
    </main>
  );
}

