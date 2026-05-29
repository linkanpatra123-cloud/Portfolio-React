import SectionTitle from '../components/SectionTitle'
import Profile from '../assets/Profile.jpeg'

const About = () => {
  return (
    <section id="about" className="py-0">
      <div className="mx-auto px-6 md:px-16">

        <SectionTitle title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-10">

          {/* LEFT */}
          <div className="flex justify-center">
            <img
              src={Profile}
              alt="about"
              className="w-[350px] rounded-2xl border border-slate-700"
            />
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-slate-300 leading-8 mb-5">
              I am a dedicated Full Stack Developer who thrives on turning complex ideas into elegant, responsive web solutions. What drives me is the intersection of great design and solid logic-I believe that a truly modern web application must be as beautiful on the outside as it is functional on the inside.
            </p>

            <p className="text-slate-300 leading-8 mb-5">
              I enjoy building clean UI, responsive websites and modern web applications.
            </p>

            <p className="text-slate-300 leading-8">
              Right now, I am deeply immersed in the MERN ecosystem (MongoDB, Express.js, React.js, and Node.js). I love the challenge of building things from scratch, from wiring up complex React components to managing data flow on the server. Every bug I fix and every feature I build is a step closer to my goal of becoming a top-tier MERN Stack Developer.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About