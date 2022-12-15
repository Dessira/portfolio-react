function About() {
  return (
    <>
      <section id="#about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero image" src="https://res.cloudinary.com/leomiscoding/image/upload/v1576498419/lascotstudio-44.jpg" />
              </div>
              <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
                Hello, my name is Ayodele Leom. 
              </h1>
              <p className="mb-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sagittis turpis tincidunt imperdiet nullam accumsan ultrices convallis, aptent phasellus torquent nibh varius volutpat. Class tellus cras taciti venenatis eu, felis porttitor enim nisl ultrices, tempus himenaeos in sociosqu.
              </p>
              <a href="#projects" className="ml-4 inline-flex text-gray-100 bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-md">Previous Projects</a>
            </div>
          </div>
      </section>
    </>
  )
}

export default About
