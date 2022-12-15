import {feedback} from '../data/profileData'

function Feedback() {
  return (
    <section id="feedback">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Feedback
        </h1>
        <div className="flex flex-wrap m-4">
          {feedback.map((feedback) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <p className="leading-relaxed mb-6">{feedback.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={feedback.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {feedback.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {feedback.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feedback
