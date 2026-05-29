import SectionTitle from '../components/SectionTitle'
import profile1 from '../assets/profile1.png'
import Quiz from '../assets/quiz.png'
import Weather from '../assets/wether.png'

const projectData = [
  {
    title: 'Quiz Website',
    description: 'Quiz website built using javascript and Html Tailwind CSS.',
    image: Quiz,
    live: 'https://chipper-crepe-3695ca.netlify.app/',
  },

  {
    title: 'Wether App',
    description: 'Weather app using API integration.',
    image: Weather,
    live: 'https://dynamic-beignet-b063c1.netlify.app/',
  },

  {
    title: 'portfolio',
    description: 'portfolio website built using React and Tailwind CSS.',
    image: profile1,
    live: 'https://your-live-link.com',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto px-6 md:px-16">

        <SectionTitle title="Projects" />

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-5">
                  {project.description}
                </p>

                <a
                  href={project.live}
                  target="_blank"
                  className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg inline-block"
                >
                  Live Demo
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects