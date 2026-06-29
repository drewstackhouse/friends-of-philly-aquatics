import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Programs' }

const pipeline = [
  {
    title: 'Swim to Lifeguard — Earn to Learn',
    body: 'A youth pipeline program that takes participants from swim fundamentals all the way to lifeguard certification, with earn-while-you-learn components that make the pathway financially accessible.',
    accent: 'bg-blue-700',
    icon: (
      <svg className="w-10 h-10 text-blue-700 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <path d="M8.8 8.8L5.6 5.6M15.2 8.8L18.4 5.6M15.2 15.2L18.4 18.4M8.8 15.2L5.6 18.4" />
      </svg>
    ),
  },
  {
    title: 'Water Safety Instructor Certification',
    body: 'Certification training for those who want to teach others to swim and promote water safety across Philadelphia communities.',
    accent: 'bg-cyan-500',
    icon: (
      <svg className="w-10 h-10 text-cyan-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: 'Lifeguard Instructor Certification',
    body: 'Advanced training for certified lifeguards ready to step into an instructional role and develop the next generation of aquatic safety professionals.',
    accent: 'bg-blue-700',
    icon: (
      <svg className="w-10 h-10 text-blue-700 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
]

export default function Programs() {
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
            Programs
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            What We Offer
          </h1>
        </div>
      </section>

      {/* Summer programs */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 mb-2 tracking-tight">Summer Programs</h2>
          <p className="text-slate-500 mb-12">Seasonal programming for Philadelphia youth and families.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 p-8 relative overflow-hidden flex gap-6 items-start transition-all duration-200 hover:border-slate-300 hover:shadow-sm">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-blue-700" />
              <svg className="w-10 h-10 text-blue-700 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 1v2M12 13v2M5 8H3M21 8h-2M15.5 4.5l1.4-1.4M8.5 4.5l-1.4-1.4M15.5 11.5l1.4 1.4M8.5 11.5l-1.4 1.4" />
                <path d="M2 20c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Summer Camp</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Our summer camp program gives Philadelphia youth access to the pool, water safety instruction, and community connection throughout the summer season.
                </p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Registration opens seasonally</p>
              </div>
            </div>
            <div className="border border-slate-200 p-8 relative overflow-hidden flex gap-6 items-start transition-all duration-200 hover:border-slate-300 hover:shadow-sm">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-cyan-500" />
              <svg className="w-10 h-10 text-cyan-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4.5" />
                <path d="M8.8 8.8L5.6 5.6M15.2 8.8L18.4 5.6M15.2 15.2L18.4 18.4M8.8 15.2L5.6 18.4" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">LifeSavers Workshop</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  A focused, hands-on workshop in water safety education. Participants leave equipped with skills to recognize and respond to water emergencies and prevent drowning in their communities.
                </p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Registration opens seasonally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline programs */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 mb-2 tracking-tight">Aquatic Pipeline Programs</h2>
          <p className="text-slate-500 mb-12">Career development pathways for young Philadelphians in the aquatics field.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pipeline.map(({ title, body, accent, icon }) => (
              <div key={title} className="bg-white border border-slate-200 p-8 relative overflow-hidden flex gap-5 items-start transition-all duration-200 hover:border-slate-300 hover:shadow-sm">
                <div className={`absolute inset-x-0 top-0 h-[3px] ${accent}`} />
                {icon}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{body}</p>
                  <span className="inline-block text-xs text-blue-700 border border-blue-200 bg-blue-50 px-3 py-1">
                    Application coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative h-64 md:h-80">
        <Image
          src="/assets/community_education.jpg"
          alt="Community aquatic programming"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="text-xl md:text-2xl text-white text-center max-w-xl leading-snug tracking-tight">
            Questions about our programs?{' '}
            <a href="mailto:phillyaquatics215@gmail.com" className="underline underline-offset-4">
              Reach out any time.
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
