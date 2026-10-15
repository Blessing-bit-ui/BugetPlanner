import { Link } from "react-router-dom";
import guidance from "../data/guidance.json";

export default function GuidancePage({ topic }) {
  const page = guidance[topic];

  return (
    <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-blue-700">
        <Link to="/" className="underline hover:text-pink-700">Home</Link>
        <span aria-hidden="true" className="mx-3">/</span>
        <span>{page.group}</span>
      </nav>
      <header className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-10">
        <p className="mb-2 font-bold text-pink-700">{page.group}</p>
        <h1 className="text-3xl font-bold text-blue-800 sm:text-4xl">{page.title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">{page.intro}</p>
      </header>
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {page.sections.map((section, index) => (
            <section key={section.title} className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-blue-800">
                <span className="mr-3 text-pink-700">{index + 1}.</span>{section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-slate-700">{section.text}</p>
            </section>
          ))}
          <section className="rounded-xl bg-slate-100 p-6">
            <h2 className="text-xl font-bold text-slate-900">Put it into your budget</h2>
            <p className="mt-2 text-slate-700">Use your income and expenses to see how your next step fits into your monthly plan.</p>
            <Link to="/everyday" className="mt-4 inline-block rounded-lg bg-blue-700 px-5 py-3 font-bold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4">Open budget planner</Link>
          </section>
        </div>
        <aside className="space-y-6">
          <section className="rounded-xl border border-blue-100 p-6">
            <h2 className="text-xl font-bold text-blue-800">Explore {page.group.toLowerCase()}</h2>
            <ul className="mt-4 space-y-4">
              {page.related.map((link) => (
                <li key={link.to}><Link to={link.to} className="font-semibold text-pink-700 underline decoration-pink-200 underline-offset-4 hover:decoration-pink-700">{link.title}</Link></li>
              ))}
            </ul>
          </section>
          <section className="rounded-xl bg-blue-50 p-6">
            <h2 className="text-xl font-bold text-blue-800">Further guidance</h2>
            <p className="mt-3 leading-relaxed text-slate-700">Explore detailed guidance and support for your circumstances.</p>
            <a href={page.source} className="mt-4 inline-block font-semibold text-blue-700 underline">Visit MoneyHelper: {page.group.toLowerCase()}</a>
          </section>
        </aside>
      </div>
    </main>
  );
}
