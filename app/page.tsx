import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[560px] flex items-end">
        <Image
          src="/assets/hunting_park_pool.jpg"
          alt="Hunting Park Pool in Philadelphia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-5 leading-tight tracking-tight">
            Friends of<br />Philly Aquatics
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-lg mb-9 leading-relaxed">
            Promoting access and equity in swimming and public pools across Philadelphia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/our-mission"
              className="bg-white text-slate-900 px-6 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              Our Mission
            </Link>
            <Link
              href="/contact"
              className="border border-white/70 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-blue-700 flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-blue-700 block" aria-hidden />
            Our Mission
            <span className="w-8 h-px bg-blue-700 block" aria-hidden />
          </p>
          <blockquote className="text-2xl md:text-3xl text-slate-900 leading-relaxed tracking-tight">
            "Our mission is to promote access and equity in swimming and public pools, with a special focus on strengthening public indoor pool infrastructure to ensure year-round access."
          </blockquote>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-14 md:px-12 text-center first:md:pl-0">
              <p className="text-5xl font-bold text-cyan-400 mb-3 tracking-tight">71%</p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                of Earth's surface is water — yet entire communities lack safe access to it
              </p>
            </div>
            <div className="py-14 md:px-12 text-center">
              <p className="text-5xl font-bold text-cyan-400 mb-3 tracking-tight">8×</p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                higher drowning rate for Black children compared to white children
              </p>
            </div>
            <div className="py-14 md:px-12 text-center last:md:pr-0">
              <p className="text-5xl font-bold text-cyan-400 mb-3 tracking-tight">4+</p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                Philadelphia indoor pools closed in recent decades due to neglect and disinvestment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/community_education.jpg"
                alt="Community education and swim program"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-blue-700 flex items-center gap-2.5 mb-4">
                <span className="w-5 h-px bg-blue-700 block" aria-hidden />
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-snug tracking-tight">
                Where It All Started
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Friends of Philly Aquatics emerged from grassroots community action rooted in Nicetown, Philadelphia. What began with ensuring local children had access to swim programs at Marcus Foster Indoor Pool grew into a citywide effort to protect and restore public aquatic infrastructure.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Swimming provided Black and Brown youth with life-saving skills, employment pathways, college scholarships, and connections across community lines.{' '}
                <em>"Swimming didn't just save lives—it expanded them."</em>
              </p>
              <Link href="/our-story" className="text-sm font-semibold text-blue-700 hover:underline">
                Read our full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-blue-700 flex items-center gap-2.5 mb-3">
              <span className="w-5 h-px bg-blue-700 block" aria-hidden />
              Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              What We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/programs" className="group border border-slate-200 p-8 relative overflow-hidden flex gap-6 items-start transition-all duration-200 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-blue-700" />
              <svg className="w-10 h-10 text-blue-700 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 1v2M12 13v2M5 8H3M21 8h-2M15.5 4.5l1.4-1.4M8.5 4.5l-1.4-1.4M15.5 11.5l1.4 1.4M8.5 11.5l-1.4 1.4" />
                <path d="M2 20c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Summer Camp</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Seasonal aquatic programming giving Philadelphia youth access to the pool, water safety instruction, and community connection all summer long.
                </p>
              </div>
            </Link>

            <Link href="/programs" className="group border border-slate-200 p-8 relative overflow-hidden flex gap-6 items-start transition-all duration-200 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-blue-700" />
              <svg className="w-10 h-10 text-blue-700 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4.5" />
                <path d="M8.8 8.8L5.6 5.6M15.2 8.8L18.4 5.6M15.2 15.2L18.4 18.4M8.8 15.2L5.6 18.4" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">LifeSavers Workshop</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A hands-on workshop focused on water safety education, equipping participants with the skills to prevent drowning in their communities.
                </p>
              </div>
            </Link>

            <Link href="/programs" className="group border border-slate-200 p-8 relative overflow-hidden flex gap-6 items-start transition-all duration-200 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-cyan-500" />
              <svg className="w-10 h-10 text-cyan-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Aquatic Pipeline Programs</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Career pathways from swim-to-lifeguard pipelines to Water Safety Instructor and Lifeguard Instructor certifications.
                </p>
              </div>
            </Link>
          </div>
          <div className="mt-10">
            <Link href="/programs" className="text-sm font-semibold text-blue-700 hover:underline">
              View all programs →
            </Link>
          </div>
        </div>
      </section>

      {/* Advocacy */}
      <section className="relative py-24 md:py-32 bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/assets/save_pickett_pool.jpg"
            alt="Save Pickett Pool advocacy effort"
            fill
            className="object-cover opacity-25"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-cyan-400 flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-cyan-400 block" aria-hidden />
            Advocacy
            <span className="w-8 h-px bg-cyan-400 block" aria-hidden />
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-snug tracking-tight">
            Fighting for Philadelphia's Public Pools
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-9 max-w-2xl mx-auto">
            When 71% of the planet is water and Black children drown at rates nearly eight times higher than white children, access to public pools is a matter of life and equity. We show up, we advocate, and we stay.
          </p>
          <Link
            href="/advocacy"
            className="inline-block border border-white/70 text-white px-7 py-3 text-sm font-semibold hover:bg-white hover:text-slate-900 transition-colors"
          >
            Our Advocacy Work
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20 md:py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-blue-700 flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-blue-700 block" aria-hidden />
            Get Involved
            <span className="w-8 h-px bg-blue-700 block" aria-hidden />
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
            Join the Movement
          </h2>
          <p className="text-slate-500 mb-9 max-w-md mx-auto">
            Support our work with a donation, sign up for our newsletter, or reach out to learn how to get involved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="inline-block bg-blue-700 text-white px-8 py-3 text-sm font-semibold hover:bg-blue-800 transition-colors"
            >
              Make a Donation
            </Link>
            <a
              href="mailto:phillyaquatics215@gmail.com"
              className="inline-block border border-slate-300 text-slate-700 px-8 py-3 text-sm font-semibold hover:border-slate-400 transition-colors"
            >
              phillyaquatics215@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
