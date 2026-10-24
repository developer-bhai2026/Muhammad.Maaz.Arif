import { useState } from 'react'
import { BadgeCheck, CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/profile.js'
import PageHeader from '../components/PageHeader.jsx'
import SocialLinks from '../components/SocialLinks.jsx'

const empty = { name: '', email: '', subject: '', message: '' }

const inputClass =
  'mt-1.5 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100'

function validate(f) {
  const e = {}
  if (!f.name.trim()) e.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Please enter a valid email.'
  if (!f.subject.trim()) e.subject = 'Please add a subject.'
  if (f.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) return

    // No backend: open the visitor's mail client with the message pre-filled.
    // Swap this for Formspree / EmailJS / your API to send directly.
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setForm(empty)
  }

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-slate-800">
        {label}
      </label>
      {props.as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={6}
          value={form[name]}
          onChange={update}
          className={`${inputClass} resize-y ${errors[name] ? 'border-red-400' : 'border-slate-300'}`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={props.type ?? 'text'}
          value={form[name]}
          onChange={update}
          className={`${inputClass} ${errors[name] ? 'border-red-400' : 'border-slate-300'}`}
        />
      )}
      {errors[name] && <p className="mt-1 text-xs text-red-600">{errors[name]}</p>}
    </div>
  )

  const info = [
    { Icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { Icon: MapPin, label: 'Location', value: profile.address },
    { Icon: BadgeCheck, label: 'ORCID', value: profile.orcid, href: profile.socials.orcid },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let’s start a conversation"
        subtitle="For academic queries, research collaborations, speaking invitations or public health consultancy — send a message and I’ll respond as soon as possible."
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {info.map(({ Icon, label, value, href }) => (
            <div key={label} className="card flex items-start gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
                {href ? (
                  <a href={href} className="font-medium text-slate-900 hover:text-brand-700">
                    {value}
                  </a>
                ) : (
                  <p className="font-medium text-slate-900">{value}</p>
                )}
              </div>
            </div>
          ))}
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Research Profiles</p>
            <SocialLinks className="mt-3" />
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center py-16 text-center">
              <CheckCircle2 size={56} className="text-emerald-500" />
              <h2 className="mt-4 font-serif text-2xl font-bold text-slate-900">Thank you!</h2>
              <p className="mt-2 max-w-sm text-slate-600">
                Your email app should have opened with the message ready to send. I’ll get back to you soon.
              </p>
              <button type="button" onClick={() => setSent(false)} className="btn btn-outline mt-6">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5">
              <h2 className="font-serif text-2xl font-bold text-slate-900">Send a message</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {field('name', 'Full name')}
                {field('email', 'Email address', { type: 'email' })}
              </div>
              {field('subject', 'Subject')}
              {field('message', 'Message', { as: 'textarea' })}
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
