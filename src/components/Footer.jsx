import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/profile.js'
import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-bold text-white">{profile.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{profile.tagline}</p>
          <SocialLinks dark className="mt-5" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/portfolio', 'Portfolio'],
              ['/contact', 'Contact Us'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              <a href={`mailto:${profile.email}`} className="hover:text-accent">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              {profile.phone}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              {profile.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
