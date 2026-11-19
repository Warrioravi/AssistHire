export default function Home() {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
          ✨ Next-Gen Recruitment Automation
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Smarter Hiring, <br />
          <span className="text-indigo-600">Faster Results.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          AssistHire equips recruiters and hiring managers with streamlined candidate screening,
          automated interview intelligence, and unified pipeline management.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#pipeline"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-md transition"
          >
            Explore Dashboard
          </a>
          <a
            href="http://localhost:8000/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            FastAPI Backend Docs ↗
          </a>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 font-bold">
              🎯
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Smart Screening</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Score candidate resumes against job requisitions automatically with targeted criteria.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 font-bold">
              ⚡
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">FastAPI Core</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Powered by high-performance asynchronous Python API endpoints for candidate analytics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-lg bg-violet-50 dark:bg-violet-950 flex items-center justify-center text-violet-600 font-bold">
              📊
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Unified Dashboard</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Modern Next.js 15 client providing responsive views and real-time interview pipeline status.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
