import Profile from '../assets/Profile_1.png.jpeg'
import resume from '../assets/resume.pdf'

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <div className="mx-auto px-6 md:px-16 w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm Linkan
          </h1>

          <p className="text-cyan-400 mb-3 text-3xl">
            Full Stack Developer
          </p>

          <p className="text-slate-300 leading-8 mb-8 max-w-xl">
            I build responsive and modern web applications using
            React, Tailwind CSS, Node.js and MongoDB.
          </p>
          <p className="text-slate-300 leading-8 mb-8 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam nam eum iure quasi, corrupti, accusamus veniam blanditiis ullam laborum, dicta natus error aliquid. Possimus tempore obcaecati cumque odio adipisci.
          </p>

          <div className="flex gap-4 py-15">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold">
              My Work
            </button>

            <a
              href={resume}
              download
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all px-6 py-3 rounded-lg font-semibold"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src={Profile}
            alt="profile"
            className="w-[420px] h-[420px] rounded-full border-4 border-cyan-400"
          />
        </div>

      </div>
    </section>
  )
}

export default Home