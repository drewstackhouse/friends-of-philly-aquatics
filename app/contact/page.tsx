import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact' }

export default function Contact() {
  return (
    <>
      <section className="bg-navy py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-blue-400 flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-blue-400 block" aria-hidden />
            Contact
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Get in Touch
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-600 text-lg leading-relaxed mb-12">
            Whether you want to learn more about our programs, collaborate on advocacy, or simply stay connected to what's happening with Philadelphia's public pools, we'd love to hear from you.
          </p>
          <div className="border border-slate-200 p-10 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700" />
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Email</p>
            <a
              href="mailto:phillyaquatics215@gmail.com"
              className="text-2xl text-blue-700 hover:underline tracking-tight font-semibold"
            >
              phillyaquatics215@gmail.com
            </a>
          </div>
          <p className="text-slate-400 text-sm mt-8">
            Please reach out with any questions about programs, partnerships, or how you can support Friends of Philly Aquatics.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-blue-700 flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-blue-700 block" aria-hidden />
            Newsletter
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Stay Connected</h2>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-lg">
            Join us and receive our quarterly newsletter. Be the first to hear about program openings, advocacy updates, and news from Philadelphia's aquatic community.
          </p>
          <a
            href="mailto:phillyaquatics215@gmail.com?subject=Newsletter%20Signup"
            className="inline-block bg-blue-700 text-white px-8 py-3 text-sm font-semibold hover:bg-blue-800 transition-colors"
          >
            Sign Up for Our Newsletter
          </a>
        </div>
      </section>
    </>
  )
}
