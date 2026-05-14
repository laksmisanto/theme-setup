import ThemeToggle from "@/components/theme/theme-toggle";

export default function Home() {
  return (
    <>
      <div className="bg-primary flex items-center justify-end p-4">
        <ThemeToggle />
      </div>

      <main className="bg-bg min-h-screen w-full p-10">
        {/* CARD */}
        <div className="bg-card-bg border border-card-border p-6 max-w-md space-y-4 rounded-xl">
          <div>
            <span className="text-brand text-sm">Technology</span>

            <h1 className="text-text-primary text-2xl font-bold mt-2">
              AI is changing modern news platforms
            </h1>
          </div>

          <p className="text-text-muted leading-7">
            Modern news websites are using AI systems, semantic search, and
            recommendation engines to improve user experience.
          </p>

          <div className="flex gap-3 pt-2">
            <button className="bg-btn-bg text-btn-text px-4 py-2 rounded-xl">
              Read More
            </button>

            <button className="border border-divider text-text-primary px-4 py-2 rounded-xl">
              Bookmark
            </button>
          </div>
        </div>

        {/* INPUT DEMO */}
        <div className="bg-card-bg border border-card-border p-6 max-w-md mt-8 space-y-4 rounded-xl">
          <div>
            <label className="text-text-primary block mb-2 font-medium">
              Search News
            </label>

            <input
              type="text"
              placeholder="Search article..."
              className="bg-input-field border border-input-border text-input-text placeholder:text-input-placeholder w-full px-4 py-3 rounded-xl"
            />
          </div>

          <div>
            <label className="text-text-primary block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-input-field border border-input-border text-input-text placeholder:text-input-placeholder w-full px-4 py-3 rounded-xl"
            />
          </div>

          <button className="bg-btnBg text-btnText px-4 py-3 w-full rounded-xl">
            Subscribe
          </button>
        </div>
      </main>
    </>
  );
}
