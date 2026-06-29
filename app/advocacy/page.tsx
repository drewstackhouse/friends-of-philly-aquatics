import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Advocacy' }

const news = [
  'According to Watlington, the District is now in the pool business and has included swimming into the curriculum.',
  'Jaimie Gautier Office and the School District were able to come to an agreement and obtain the funding needed to repair Sayre Pool thanks to the cooperation of collective advocacy groups.',
  'An overview of the current pool season.',
  "If you read about this young woman's path to becoming a lifeguard, you'll realize how crucial it is to ensure that everyone has equal access to indoor swimming pools.",
]

export default function Advocacy() {
  return (
    <>
      <section className="relative bg-navy py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/assets/save_pickett_pool.jpg"
            alt="Save Pickett Pool advocacy"
            fill
            className="object-cover opacity-25"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-blue-400 flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-blue-400 block" aria-hidden />
            Advocacy
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight max-w-xl">
            Fighting for Philadelphia's Pools
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-600 leading-relaxed text-lg mb-6">
            To bring these neighborhood anchors back online—whether through renovation or full rebuild—we know it will take true collaboration across sectors. That means working in partnership with the City of Philadelphia, the Commonwealth of Pennsylvania, the School District of Philadelphia, and private funders.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg mb-6">
            Just as important, we must ensure that we do not repeat the mistakes of the past. These spaces require sustainable, ongoing funding models that support not only capital improvements, but long-term operations, programming, and community access.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg mb-14">
            Our advocacy is consistent and active. We engage with the School District of Philadelphia through monthly meetings, advocate with City Council during budget hearings, and show up at and participate in community events to elevate resident voices and needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-700 pl-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Service at Our Core</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We volunteer monthly with the Stenton Park Advisory Council to help implement year-round programming and connect the community to critical resources. We work alongside churches and grassroots partners throughout Nicetown to ensure our efforts are grounded in trust, presence, and shared responsibility.
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Collaboration & Partnership</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe meaningful change happens through partnership. We welcome collaboration with organizations, agencies, and funders who share our commitment to equity, access, and thriving community spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 mb-12 tracking-tight">
            Philly Aquatics in the News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {news.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 p-8 relative overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-sm">
                <div className={`absolute inset-x-0 top-0 h-[3px] ${i % 2 === 0 ? 'bg-blue-700' : 'bg-cyan-500'}`} />
                <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="relative h-60 md:h-72">
        <Image
          src="/assets/table.jpg"
          alt="Community advocacy event"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="text-2xl md:text-3xl text-white text-center max-w-2xl leading-snug tracking-tight">
            Advocacy is only one part of our work.
          </p>
        </div>
      </section>
    </>
  )
}
