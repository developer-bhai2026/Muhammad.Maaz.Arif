import { profile } from '../data/profile.js'

export default function Avatar({ className = '' }) {
  if (profile.photo) {
    return (
      <img
        src={profile.photo}
        alt={profile.name}
        className={`object-cover ${className}`}
      />
    )
  }
  return (
    <div
      className={`grid place-items-center bg-gradient-to-br from-brand-700 to-brand-950 font-serif font-bold text-accent ${className}`}
      aria-label={profile.name}
    >
      <span className="text-7xl">{profile.initials}</span>
    </div>
  )
}
