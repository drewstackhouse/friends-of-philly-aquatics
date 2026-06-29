import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Our Mission' }

const priorities = [
  {
    title: 'Water Safety Education',
    body: 'Equipping Philadelphia communities—especially children—with the knowledge and skills to stay safe in and around water.',
    accent: 'bg-blue-700',
    icon: (
      <svg className="w-10 h-10 text-blue-700 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-10V5l8-3 8 3v7c0 5.5-8 10-8 10z" />
      </svg>
    ),
  },
  {
    title: 'Swim Instruction',
    body: 'Providing high-quality swim lessons that build confidence, competence, and a lifelong relationship with water.',
    accent: 'bg-blue-700',
    icon: (
      <svg className="w-10 h-10 text-blue-700 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
        <path d="M2 8c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0M2 12c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0M2 16c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
      </svg>
    ),
  },
  {
    title: 'Financial Aid',
    body: 'Removing cost as a barrier to participation through scholarships and subsidized program access.',
    accent: 'bg-cyan-500',
    icon: (
      <svg className="w-10 h-10 text-cyan-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5a2.5 2.5 0 0 1 2.5-2h1a2 2 0 0 1 0 4h-1a2 2 0 0 0 0 4h1a2.5 2.5 0 0 1 2.5 2" />
      </svg>
    ),
  },
  {
    title: 'Aquatics Career Pathways',
    body: 'Creating professional development opportunities—from lifeguarding to Water Safety Instruction—that turn aquatic skills into sustainable careers.',
    accent: 'bg-cyan-500',
    icon: (
      <svg className="w-10 h-10 text-cyan-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l5-6 4 4 6-9M15 6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Pool Infrastructure',
    body: "Advocating for the renovation, maintenance, and operation of Philadelphia's public indoor pools to ensure year-round community access.",
    accent: 'bg-blue-700',
    icon: (
      <svg className="w-10 h-10 text-blue-700 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V8l7-5 7 5v13M10 21v-5h4v5" />
      </svg>
    ),
  },
  {
    title: 'Equity & Access',
    body: 'Centering communities most affected by pool closures and drowning disparities in everything we do.',
    accent: 'bg-blue-700',
    icon: (
      <svg className="w-10 h-10 text-blue-700 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export default function OurMission() {
  return (
    <>
      <section className="relative bg-navy py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/assets/youth_program.png"
            alt="Youth aquatic program"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-blue-400 flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-blue-400 block" aria-hidden />
            Our Mission
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl">
            What We Stand For
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <blockquote className="text-2xl md:text-3xl text-slate-900 leading-relaxed tracking-tight border-l-4 border-blue-700 pl-8 mb-10">
            "Our mission is to promote access and equity in swimming and public pools, with a special focus on strengthening public indoor pool infrastructure to ensure year-round access."
          </blockquote>
          <p className="text-slate-600 leading-relaxed text-lg">
            Friends of Philly Aquatics prioritizes advancing water safety education, swim instruction, financial aid for participants, and professional development opportunities in aquatics—particularly targeting historically marginalized populations experiencing disproportionate drowning risks and limited swimming proficiency.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 mb-12 tracking-tight">Our Priorities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {priorities.map(({ title, body, accent, icon }) => (
              <div key={title} className="border border-slate-200 bg-white p-8 relative overflow-hidden flex gap-6 items-start transition-all duration-200 hover:border-slate-300 hover:shadow-sm">
                <div className={`absolute inset-x-0 top-0 h-[3px] ${accent}`} />
                {icon}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
