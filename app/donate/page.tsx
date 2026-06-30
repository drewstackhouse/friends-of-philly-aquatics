import type { Metadata } from 'next'
import Link from 'next/link'
import ZeffyEmbed from '@/components/ZeffyEmbed'

export const metadata: Metadata = { title: 'Donate' }

const impact = [
  {
    stat: '71%',
    label: 'of Earth is water',
    body: 'Yet millions of children grow up without ever learning to swim—an equity gap that costs lives.',
  },
  {
    stat: '8×',
    label: 'higher drowning rate',
    body: 'Black children drown at nearly eight times the rate of white children. Access to instruction changes that.',
  },
  {
    stat: '4+',
    label: 'pools closed in Philly',
    body: 'Each closure cut off a neighborhood. Your support helps us fight to bring them back.',
  },
]

export default function Donate() {
  return (
    <>
      <section className="bg-navy py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-blue-400 flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-blue-400 block" aria-hidden />
            Support Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl">
            Help Keep Philadelphia's Pools Open
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Friends of Philly Aquatics runs on community support. Every contribution funds water safety programming, youth scholarships, pool advocacy, and the career pathways that turn young Philadelphians into lifeguards, instructors, and aquatic professionals.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-16">
            No pool. No instruction. No pathway. Donations change that equation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border border-slate-200 mb-16">
            {impact.map(({ stat, label, body }) => (
              <div key={stat} className="px-8 py-10">
                <p className="text-4xl font-bold text-blue-700 mb-1 tracking-tight">{stat}</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">{label}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <ZeffyEmbed />
          </div>

          <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-slate-900 font-semibold mb-1">Questions about donating?</p>
              <p className="text-sm text-slate-500">We&apos;re happy to discuss how your gift supports Philadelphia&apos;s aquatic community.</p>
            </div>
            <Link
              href="/contact"
              className="text-sm font-semibold text-blue-700 hover:underline whitespace-nowrap"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
