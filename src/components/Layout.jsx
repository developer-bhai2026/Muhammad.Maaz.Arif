import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const titles = {
  '/': 'Home',
  '/about': 'About',
  '/portfolio': 'Portfolio',
  '/contact': 'Contact',
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.title = `${titles[pathname] ?? 'Page Not Found'} | Dr. Muhammad Maaz Arif`
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
