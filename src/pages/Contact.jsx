import SectionTitle from '../components/SectionTitle'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto px-6 md:px-16">

        <SectionTitle title="Contact Me" />

        <div className="grid md:grid-cols-2 gap-12 mt-10">

          {/* LEFT */}
          <div className='p-15 h-82 bg-slate-800 rounded-2xl'>
            <h3 className="text-4xl font-bold mb-6 text-cyan-400">
              Get In Touch
            </h3>

            <p className="text-slate-300 mb-5 text-xl py-7">
              Feel free to contact me for projects,
              collaborations or any opportunities.
            </p>

            <div className="space-y-4 text-slate-300">
              <p>Email: linkanpatra123@gmail.com</p>
              <p>Phone: +91 6372270881</p>
              <p>Location: India</p>
            </div>
          </div>

          {/* RIGHT */}
          <form className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-slate-800 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-slate-800 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="p-4 rounded-xl bg-slate-800 outline-none"
            ></textarea>

            <button className="bg-cyan-500 hover:bg-cyan-600 py-3 w-35 rounded-xl">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact