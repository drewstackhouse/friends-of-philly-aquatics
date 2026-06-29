import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Our Story' }

export default function OurStory() {
  return (
    <>
      <section className="bg-navy py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-blue-400 flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-blue-400 block" aria-hidden />
            Our Story
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl">
            Where It All Started
          </h1>
        </div>
      </section>

      {/* Origin */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Friends of Philly Aquatics emerged from grassroots community action in 1980s Nicetown, Philadelphia. A mother and neighbor—known to the community as Aunt Janet—observed Marcus Foster Indoor Pool drawing visitors from across the city, and made sure local children were part of it: enrolled in swim programs, lessons, and competitions.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                That early access changed lives. Swimming gave Black and Brown youth more than a skill—it gave them employment pathways as lifeguards and Water Safety Instructors, college scholarships and educational opportunities, and connections across community lines that transcended race and socioeconomic status.
              </p>
              <blockquote className="text-xl text-slate-900 border-l-4 border-blue-700 pl-6 py-1 tracking-tight">
                "Swimming didn't just save lives—it expanded them."
              </blockquote>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/assets/swimmer_with_child.jpg"
                alt="Swimmer with child in pool"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Crisis */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/save_pickett_pool.jpg"
                alt="Save Pickett Pool advocacy"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight">
                When the Pools Closed
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Despite the transformative power of pool access, Philadelphia's public indoor pools began closing—one by one. Rhodes Pool in 2004. Harttranft. Sayre. Pickett Pool in 2019. Each closure was preceded by neglect and unkept renovation promises. Each one cut off a neighborhood's lifeline.
              </p>
              <p className="text-slate-600 leading-relaxed">
                These weren't just facilities. They were anchors of community life, pipelines to careers, and for many Philadelphia children, the only year-round access to water safety education they would ever have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-cyan-400 flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-cyan-400 block" aria-hidden />
            Why We Exist
            <span className="w-8 h-px bg-cyan-400 block" aria-hidden />
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 leading-snug tracking-tight">
            Why Friends of Philly Aquatics Exists
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            When 71% of the planet is water… When Black children drown at rates nearly eight times higher than White children… When public indoor pools are the only year-round access point for entire neighborhoods…
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Friends of Philly Aquatics works to strengthen pool infrastructure, develop aquatic workforce pipelines, and ensure that equitable community access is never again an afterthought.
          </p>
        </div>
      </section>

      {/* Community photos */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/community_education.jpg"
                alt="Community education event"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/youth_program.png"
                alt="Youth aquatic program"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
