export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          AI-Driven Software Development Journey
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Muhammad Shahzad
        </h1>
        <div className="mt-8">
          <a
            href="https://github.com/HadiShahzad"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Visit My GitHub
          </a>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          I am transitioning from energy engineering and pattern recognition
          research toward full-stack AI application development, RAG systems,
          and agentic AI solutions for enterprise use cases.
        </p>
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Background
          </h2>

          <p className="leading-7 text-slate-300">
            I have a background in electrical engineering, a PhD in pattern
            recognition, and academic experience in energy engineering. I am now
            building practical skills in AI-driven software development.
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Current Learning Focus
          </h2>

          <ul className="space-y-2 text-slate-300">
            <li>Frontend development using Next.js and React</li>
            <li>Backend development using Python and FastAPI</li>
            <li>Database development using PostgreSQL</li>
            <li>RAG-based document question answering</li>
            <li>Agentic AI applications for enterprise workflows</li>
          </ul>
        </div>
                <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Projects
          </h2>

          <div className="rounded-xl border border-slate-700 bg-slate-950 p-5">
            <h3 className="text-xl font-semibold">
              Agriculture RAG Chatbot
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              A retrieval-augmented generation chatbot deployed on Hugging Face
              to answer agriculture-related questions.
            </p>

            <p className="mt-4 text-sm text-cyan-400">
              Python • RAG • Hugging Face • LLM
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}