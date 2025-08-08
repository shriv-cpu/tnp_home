const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "Software Engineer at Google",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "RGPV's placement cell played a crucial role in helping me achieve my dream job."
    },
    {
      id: 2,
      name: "Rahul Sharma",
      position: "Software Engineer at Google",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "RGPV's placement cell played a crucial role in helping me achieve my dream job."
    },
    {
      id: 3,
      name: "Rahul Sharma",
      position: "Software Engineer at Google",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "RGPV's placement cell played a crucial role in helping me achieve my dream job."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center group"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-100 group-hover:border-blue-200 transition-colors duration-300">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {story.name}
              </h3>

              {/* Position */}
              <p className="text-red-600 font-medium mb-6 text-sm">
                {story.position}
              </p>

              {/* Testimonial */}
              <div className="relative">
             
                <p className="text-gray-600 italic leading-relaxed text-sm">
                  "{story.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default SuccessStories;