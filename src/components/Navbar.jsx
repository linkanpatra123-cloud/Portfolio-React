import { useEffect, useState } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.clientHeight

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute('id'))
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ]

  return (
    <nav className="bg-slate-900 border-b border-slate-700 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-cyan-400">
          Portfolio.
        </h1>

        <ul className="flex gap-8 text-lg">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition duration-300 hover:text-cyan-400 ${
                  activeSection === link.id
                    ? 'text-cyan-400'
                    : 'text-white'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}

export default Navbar