import { Link } from 'react-router-dom'
import { Award, Briefcase, CheckCircle2, GraduationCap } from 'lucide-react'
import { profile, about } from '../data/profile.js'
import PageHeader from '../components/PageHeader.jsx'
import Avatar from '../components/Avatar.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`Meet ${profile.name}`}
        subtitle="Medical doctor, public health educator and researcher."
      />

      {/* Bio */}
      <section className="container-page grid gap-12 py-20 md:grid-cols-[320px_1fr]">
        <div>
          <Avatar className="aspect-[4/5] w-full rounded-2xl shadow-lg" />
          <div className="card mt-6 space-y-2 p-5 text-sm">
            <p><span className="font-semibold text-slate-900">Location:</span> {profile.location}</p>
            <p><span className="font-semibold text-slate-900">Email:</span> {profile.email}</p>
            <p><span className="font-semibold text-slate-900">ORCID:</span> {profile.orcid}</p>
            <p><span className="font-semibold text-slate-900">WoS Researcher ID:</span> {profile.wosId}</p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Biography" title="Medicine, public health & research" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
            {about.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold text-slate-900">Areas of Expertise</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {about.expertise.map((e) => (
              <li key={e} className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-600" />
                {e}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-slate-900">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {about.skills.map((s) => (
              <span key={s} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                {s}
              </span>
            ))}
          </div>

          <Link to="/contact" className="btn btn-primary mt-10">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="bg-white py-20">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-3 font-serif text-2xl font-bold text-slate-900">
              <Briefcase className="text-brand-600" /> Experience
            </h2>
            <ol className="mt-8 space-y-8 border-l-2 border-brand-100 pl-6">
              {about.experience.map((x) => (
                <li key={x.role + x.period} className="relative">
                  <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-white bg-brand-600 ring-2 ring-brand-100" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{x.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{x.role}</h3>
                  <p className="text-sm font-medium text-slate-500">{x.org}</p>
                  <p className="mt-2 text-sm text-slate-600">Subject: {x.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="flex items-center gap-3 font-serif text-2xl font-bold text-slate-900">
              <GraduationCap className="text-brand-600" /> Education
            </h2>
            <div className="mt-8 space-y-4">
              {about.education.map((e) => (
                <div key={e.degree} className="card flex items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-semibold text-slate-900">{e.degree}</h3>
                    <p className="text-sm text-slate-500">{e.institute}</p>
                    <p className="mt-1 text-xs font-medium text-slate-400">{e.score}</p>
                  </div>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {e.year}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="mt-12 flex items-center gap-3 font-serif text-2xl font-bold text-slate-900">
              <Award className="text-accent" /> Honours & Awards
            </h2>
            <ul className="mt-6 space-y-3">
              {about.awards.map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-xl bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
                  <Award size={18} className="mt-0.5 shrink-0 text-accent" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
