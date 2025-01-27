const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Learn about our journey, our mission, and the values that drive us
            forward.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                className="w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Team collaboration"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We are dedicated to delivering innovative solutions that empower
                businesses and individuals to achieve their full potential.
                Through cutting-edge technology and exceptional service, we
                strive to make a positive impact in the world.
              </p>

              <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
              <ul className="space-y-4">
                {[
                  "Innovation and creativity in everything we do",
                  "Commitment to excellence and quality",
                  "Customer satisfaction as our top priority",
                  "Continuous learning and improvement",
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      ✓
                    </span>
                    <span className="ml-3 text-gray-600">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
