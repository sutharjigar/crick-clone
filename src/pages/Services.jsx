const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={service.image}
                    alt={service.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
