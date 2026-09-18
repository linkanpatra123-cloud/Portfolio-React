import SectionTitle from '../components/SectionTitle'

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si'

const skills = [
  {
    icon: <FaHtml5 />,
    name: 'HTML',
    color: '#E34F26',
  },

  {
    icon: <FaCss3Alt />,
    name: 'CSS',
    color: '#1572B6',
  },

  {
    icon: <FaJs />,
    name: 'JavaScript',
    color: '#F7DF1E',
  },

  {
    icon: <FaReact />,
    name: 'React',
    color: '#61DAFB',
  },

  {
    icon: <SiTailwindcss />,
    name: 'Tailwind',
    color: '#38BDF8',
  },

  {
    icon: <FaNodeJs />,
    name: 'Node.js',
    color: '#339933',
  },

  {
    icon: <SiMongodb />,
    name: 'MongoDB',
    color: '#47A248',
  },

  {
    icon: <FaGithub />,
    name: 'GitHub',
    color: '#ffffff',
  },

  {
    icon: <FaBootstrap />,
    name: 'Bootstrap',
    color: '#ffffff',
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="mx-auto px-6 md:px-16">

        <div className="text-center mb-16">

          <SectionTitle title="Skills" />
        </div>

        {/* ROW 1 */}
        <div className="flex justify-center gap-6 flex-wrap">

          {skills.slice(0, 3).map((skill, index) => (
            <div
              key={index}
              className="hexagon-card"
            >
              <div
                className="text-6xl mb-4"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <p className="text-lg font-semibold">
                {skill.name}
              </p>
            </div>
          ))}

        </div>

        {/* ROW 2 */}
        <div className="flex justify-center gap-6 flex-wrap -mt-14">

          {skills.slice(3, 6).map((skill, index) => (
            <div
              key={index}
              className="hexagon-card"
            >
              <div
                className="text-6xl mb-4"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <p className="text-lg font-semibold">
                {skill.name}
              </p>
            </div>
          ))}

        </div>

        {/* ROW 3 */}
        <div className="flex justify-center gap-6 flex-wrap -mt-14">

          {skills.slice(6, 9).map((skill, index) => (
            <div
              key={index}
              className="hexagon-card"
            >
              <div
                className="text-6xl mb-4"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <p className="text-lg font-semibold">
                {skill.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills