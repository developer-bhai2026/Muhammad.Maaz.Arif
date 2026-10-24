import { BadgeCheck, BookOpen, Globe, GraduationCap } from 'lucide-react'
import { profile } from '../data/profile.js'

const items = [
  { key: 'scholar', label: 'Google Scholar', Icon: GraduationCap },
  { key: 'researchgate', label: 'ResearchGate', Icon: BookOpen },
  { key: 'wos', label: 'Web of Science', Icon: Globe },
  { key: 'orcid', label: 'ORCID', Icon: BadgeCheck },
]

export default function SocialLinks({ className = '', dark = false }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {items
        .filter(({ key }) => profile.socials[key])
        .map(({ key, label, Icon }) => (
          <a
            key={key}
            href={profile.socials[key]}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className={`grid h-10 w-10 place-items-center rounded-full border transition ${
              dark
                ? 'border-white/20 text-slate-300 hover:border-accent hover:text-accent'
                : 'border-slate-300 text-slate-600 hover:border-brand-600 hover:text-brand-700'
            }`}
          >
            <Icon size={18} />
          </a>
        ))}
    </div>
  )
}
