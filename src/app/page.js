import ThemeToggle from "@/components/theme/theme-toggle";

export default function Home() {
  return (
    <>
      <div className="bg-primary flex items-center justify-end p-4">
        <ThemeToggle />
      </div>

      <main className="bg-bg min-h-screen w-full p-10">
        {/* CARD */}
        <div className="bg-cardBg p-6 max-w-md space-y-4 rounded-xl">
          <div>
            <span className="text-textPrimary text-sm">Technology</span>

            <h1 className="text-textPrimary text-2xl font-bold mt-2">
              AI is changing modern news platforms
            </h1>
          </div>

          <p className="text-textMuted leading-7">
            Modern news websites are using AI systems, semantic search, and
            recommendation engines to improve user experience.
          </p>

          <div className="flex gap-3 pt-2">
            <button className="bg-btnPrimary text-btnPrimaryText">
              Read More
            </button>

            <button className="bg-btnBg text-btnText px-6 py-3 rounded-xl">
              Bookmark
            </button>
          </div>
        </div>

        {/* INPUT DEMO */}
        <div className="bg-cardBg p-6 max-w-md mt-8 space-y-4 rounded-xl">
          <div>
            <label className="text-textPrimary block mb-2 font-medium">
              Search News
            </label>

            <input
              type="text"
              placeholder="Search article..."
              className="border border-inputBorder text-inputText placeholder:text-inputPlaceholder focus:outline-none w-full px-4 py-3 rounded-xl"
            />
          </div>

          <div>
            <label className="text-textPrimary block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-inputField border border-inputBorder text-inputText placeholder:text-inputPlaceholder w-full px-4 py-3 rounded-xl"
            />
          </div>

          <button className="bg-btnBg text-btnText px-6 py-3 rounded-xl w-full">
            Subscribe
          </button>
        </div>
      </main>
    </>
  );
}
