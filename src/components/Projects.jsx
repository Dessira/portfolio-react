import {projects} from '../data/profileData'
function Projects() {
  return (
    <>
      <section id='projects' className='text-gray-300 bg-gray-800 body-font'>
          <div className='container px-3 py-10 mx-auto text-center lg:px-20'>
            <div>
                <div className='flex flex-col w-full mb-10'>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font mb-3 text-white'>My Projects</h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>Lorem ipsum dolor sit amet consectetur adipiscing elit auctor, platea nam dapibus primis sociosqu phasellus gravida nec</p>
                </div>
                <div className='flex flex-wrap -m-4'>
                  {projects.map((project) => (
                    <a href={project.link} key={project.id} className='sm:w-1/2 w-100 p-2'>
                      <div className='flex relative'>
                        <img className='absolute inset-0 w-full h-full object-cover object-center' src={project.image} alt="react application" />
                        <div className='px-4 py-5 relative z-10 w-full border-3 border-gray-700 bg-gray-900 opacity-0 hover:opacity-90'>
                          <h3 className='text-sm title-font font-medium text-blue-400 mb-2'>{project.subtitle}</h3>
                          <h2 className='title-font text-lg font-medium text-white mb-2'>{project.title}</h2>
                          <p className='leading-relaxed'>{project.Description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Projects
