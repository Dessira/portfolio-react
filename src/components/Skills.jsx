import { skills } from '../data/profileData'

function Skills() {
  return (
    <>
      <section id='skills'>
        <div className='container px-5 py-10 mx-auto'>
          <div className='w-50 inline-block mb-4'>
            <h1 className='sm:text-2xl text-3xl font-medium title-font text-white mb-2'>My Skills</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit auctor, platea nam dapibus primis sociosqu phasellus gravida nec</p>

          </div>
          <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
            {skills.map((skill) => (
              <div key={skill} className='p-2 sm:w-1/2 2-full'>
                  <div className='bg-red-300 rounded flex p-3 h-full items-center'>
                    <span className='title-font font-medium text-black'>{skill}</span>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills