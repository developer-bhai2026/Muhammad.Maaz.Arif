import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-32 text-center">
      <p className="font-serif text-7xl font-bold text-brand-700">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">The page you’re looking for doesn’t exist or has moved.</p>
      <Link to="/" className="btn btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  )
}
