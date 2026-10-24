import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, FlaskConical, GraduationCap, MapPin } from 'lucide-react'
import { profile, stats, services, portfolio } from '../data/profile.js'
import Avatar from '../components/Avatar.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SocialLinks from '../components/SocialLinks.jsx'

const serviceIcons = { GraduationCap, FlaskConical, Briefcase }

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-100 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-100 blur-3xl" />
        <div className="container-page relative grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available for collaborations
            </span>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-brand-700">{profile.title}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/portfolio" className="btn btn-primary">
                View Portfolio <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <SocialLinks />
              <span className="flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin size={16} /> {profile.location}
              </span>
            </div>
          </div>

          <div className="animate-fade-up mx-auto w-full max-w-sm sm:max-w-md md:ml-auto md:mr-0 [animation-delay:150ms]">
            <div className="relative">
              <div className="absolute -inset-3 rotate-3 rounded-3xl bg-gradient-to-br from-accent to-brand-600 opacity-80" />
              <Avatar priority className="relative aspect-[4/5] w-full rounded-3xl shadow-2xl ring-4 ring-white" />
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-3 shadow-lg ring-1 ring-slate-200">
                <p className="font-serif text-2xl font-bold text-brand-800">50+</p>
                <p className="text-xs font-medium text-slate-500">Published Articles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-950">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-accent sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20">
        <SectionHeading
          center
          eyebrow="What I Do"
          title="Teaching, research & public health impact"
          subtitle="Clinical training, academic teaching and research experience applied to community, environmental and occupational health."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon]
            return (
              <div key={s.title} className="card p-7 transition hover:shadow-lg">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-white py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Featured Work" title="Recent highlights" />
            <Link to="/portfolio" className="btn btn-outline">
              See all work <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.slice(0, 3).map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-800 to-brand-950 px-8 py-14 text-center text-white sm:px-16">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
          <h2 className="relative font-serif text-3xl font-bold sm:text-4xl">Let’s work together</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-slate-300">
            Interested in a research collaboration, teaching, speaking invitation or public health consultancy? I’d love to hear from you.
          </p>
          <Link to="/contact" className="btn relative mt-8 bg-accent text-brand-950 hover:bg-amber-400">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
