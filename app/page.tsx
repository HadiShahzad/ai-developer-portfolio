export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          AI-Driven Software Development Portfolio
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight">
          Muhammad Shahzad
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          I am building a career in AI-driven full-stack software development,
          enterprise applications, and agentic AI systems. This portfolio
          documents my hands-on learning journey through real deployed projects.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/solar-calculator"
            className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Solar Calculator
          </a>

          <a
            href="/task-manager"
            className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Task Manager
          </a>

          <a
            href="https://github.com/HadiShahzad"
            target="_blank"
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
          >
            GitHub Profile
          </a>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-3 text-2xl font-semibold">Portfolio Website</h2>
            <p className="text-slate-300">
              A Next.js portfolio deployed on Vercel to document my transition
              into AI-driven software development.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-3 text-2xl font-semibold">Solar Calculator</h2>
            <p className="text-slate-300">
              A frontend project that calculates solar energy generation and
              estimated monthly savings.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-3 text-2xl font-semibold">Task Manager App</h2>
            <p className="text-slate-300">
              A deployed full-stack app using Next.js, FastAPI, Render, Neon
              PostgreSQL, GitHub, and Vercel.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-3 text-2xl font-semibold">Current Learning Stack</h2>

          <p className="text-slate-300">
            Next.js, React, TypeScript, Tailwind CSS, FastAPI, PostgreSQL,
            Neon, Render, Vercel, GitHub, and soon AWS and Agentic AI tools.
          </p>
        </section>
      </section>
    </main>
  );
}