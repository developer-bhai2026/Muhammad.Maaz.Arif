import { ArrowUpRight, Award, ClipboardList, FlaskConical, Mic } from 'lucide-react'

const categoryStyle = {
  Research: { Icon: FlaskConical, color: 'bg-emerald-50 text-emerald-700' },
  Talks: { Icon: Mic, color: 'bg-brand-50 text-brand-700' },
  Workshops: { Icon: ClipboardList, color: 'bg-violet-50 text-violet-700' },
  Awards: { Icon: Award, color: 'bg-amber-50 text-amber-700' },
}

export default function ProjectCard({ item }) {
  const { Icon, color } = categoryStyle[item.category] ?? categoryStyle.Workshops

  return (
    <article className="card group flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${color}`}>
          <Icon size={14} />
          {item.category}
        </span>
        <span className="text-xs font-medium text-slate-400">{item.year}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
        {item.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
            {t}
          </span>
        ))}
      </div>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
        >
          View profile <ArrowUpRight size={16} />
        </a>
      )}
    </article>
  )
}
