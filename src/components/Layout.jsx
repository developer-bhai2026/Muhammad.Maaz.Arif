import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const SITE = 'https://dr-muhammad-maaz-arif.netlify.app'
const NAME = 'Dr. Muhammad Maaz Arif'

// Per-page title and description for search results and link previews.
const seo = {
  '/': {
    title: `${NAME} | Public Health Specialist & Medical Educator`,
    description:
      'Dr. Muhammad Maaz Arif is a medical doctor, public health educator and researcher in Lahore, Pakistan, with 50+ published articles in public, environmental and occupational health.',
  },
  '/about': {
    title: `About | ${NAME}`,
    description:
      'Education, teaching experience and expertise of Dr. Muhammad Maaz Arif — MBBS, M.Phil Occupational Health & Safety and PGD Total Quality Management.',
  },
  '/portfolio': {
    title: `Portfolio | ${NAME}`,
    description:
      'Research publications, peer-review and editorial work, talks, awards and professional workshops of Dr. Muhammad Maaz Arif.',
  },
  '/contact': {
    title: `Contact | ${NAME}`,
    description:
      'Contact Dr. Muhammad Maaz Arif for research collaboration, teaching, speaking invitations or public health consultancy.',
  },
}

const notFound = { title: `Page Not Found | ${NAME}`, description: seo['/'].description }

function setMeta(selector, value) {
  document.querySelector(selector)?.setAttribute('content', value)
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
    const page = seo[pathname] ?? notFound
    const url = SITE + pathname

    document.title = page.title
    setMeta('meta[name="description"]', page.description)
    setMeta('meta[property="og:title"]', page.title)
    setMeta('meta[property="og:description"]', page.description)
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[name="twitter:title"]', page.title)
    setMeta('meta[name="twitter:description"]', page.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
    setMeta('meta[name="robots"]', seo[pathname] ? 'index, follow' : 'noindex')
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
