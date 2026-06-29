import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/our-mission', label: 'Our Mission' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/programs', label: 'Programs' },
  { href: '/advocacy', label: 'Advocacy' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="h-[30px] bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700" />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xl font-semibold mb-3">Friends of Philly Aquatics</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Promoting access and equity in swimming and public pools across Philadelphia.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Navigate</p>
            <nav className="flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Contact</p>
            <a
              href="mailto:phillyaquatics215@gmail.com"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              phillyaquatics215@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Friends of Philly Aquatics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
