import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { portfolio, portfolioCategories } from '../data/profile.js'
import PageHeader from '../components/PageHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Portfolio() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return portfolio.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (!q || [p.title, p.description, ...p.tags].some((s) => s.toLowerCase().includes(q))),
    )
  }, [category, query])

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Research, talks & professional development"
        subtitle="Publications and editorial work, speaking engagements, awards, and workshops & conferences attended."
      />

      <section className="container-page py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
            {portfolioCategories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  category === c
                    ? 'bg-brand-700 text-white shadow-sm'
                    : 'border border-slate-300 bg-white text-slate-600 hover:border-brand-600 hover:text-brand-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="relative block md:w-72">
            <span className="sr-only">Search portfolio</span>
            <Search size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search work..."
              className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
          </label>
        </div>

        {items.length ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        ) : (
          <div className="card mt-10 p-12 text-center text-slate-500">
            No items match your search. Try a different keyword or category.
          </div>
        )}
      </section>
    </>
  )
}
