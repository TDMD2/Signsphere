import { Briefcase, Globe, Users } from "lucide-react";
import UseCaseCard from "./UseCaseCard";
import { motion } from "framer-motion";

const UseCases = () => {
  const cases = [
    {
      title: "Enable Sign Language Accessibility",
      description:
        "Seamless integration with video platforms for Sign Language translation.",
      icon: Globe,
      color: "bg-primary",
      delay: 0.2,
      image: "/media/a993e6b4-c6ca-40e7-9904-670570b5820f.png",
    },
    {
      title: "Avatar-Based Sign Language Interpretation",
      description:
        "Friendly cartoon characters help children learn and understand sign language through engaging visuals.",
      icon: Briefcase,
      color: "bg-secondary",
      delay: 0.4,
      image: "/media/a270c18b-22d9-4750-b51c-66fc5bf78c50.png",
    },
    {
      title: "Choose Your Sign Language Interpreter",
      description:
        "Customize child-friendly animated avatars to align with your show’s style, audience, and content needs.",
      icon: Users,
      color: "bg-accent",
      delay: 0.6,
      image: "/media/15f859bb-0ee7-426b-a6b0-f6a36bf1dd1a.png",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Mission Statement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 p-8 bg-white rounded-lg shadow-md border border-gray-200 overflow-visible"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Our Mission
          </h2>
          <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto">
            At <span className="font-semibold text-gray-800">SignSphere</span>, we believe high-quality children's shows play a powerful role in a child’s development.
            For deaf and hard-of-hearing children, access to engaging visual content is especially important.
            It offers a safe space to explore emotions, build social understanding, and develop key skills like vocabulary and counting. <br /><br />
            We’re dedicated to making this kind of enriching entertainment truly inclusive by bringing sign language into children’s media.
            Bringing every child into the story. One sign at a time.
          </p>

        </motion.div>

        {/* Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-white inline-block px-8 py-3 rounded-md shadow-sm text-gray-800">
            Our Solutions
          </h2>
        </motion.div>

        <div className="space-y-16">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: useCase.delay }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              <div className="w-full md:w-1/2">
                <UseCaseCard {...useCase} />
              </div>

              <div className="w-full md:w-1/2">
                {useCase.video ? (
                  <video
                    controls
                    className="rounded-lg shadow-md w-full max-w-full h-auto object-contain border border-gray-200"
                  >
                    <source src={useCase.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="rounded-lg shadow-md w-full max-w-full h-auto object-contain border border-gray-200"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
