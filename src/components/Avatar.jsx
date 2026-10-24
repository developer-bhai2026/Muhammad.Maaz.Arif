import { profile } from '../data/profile.js'

export default function Avatar({ className = '', priority = false }) {
  if (profile.photo) {
    return (
      <picture>
        <source srcSet={profile.photo.replace(/\.\w+$/, '.webp')} type="image/webp" />
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width="1008"
          height="1478"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          className={`block object-cover object-top ${className}`}
        />
      </picture>
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
