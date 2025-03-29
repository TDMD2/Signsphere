
import { Briefcase, Globe, Users } from "lucide-react";
import UseCaseCard from "./UseCaseCard";
import { motion } from "framer-motion";

const UseCases = () => {
  const cases = [
    {
      title: "Enable ASL Translation",
      description: "Seamless integration with video platforms for automatic American Sign Language translation.",
      icon: Globe,
      color: "bg-primary",
      delay: 0.2,
      image: "/lovable-uploads/a993e6b4-c6ca-40e7-9904-670570b5820f.png"
    },
    {
      title: "Avatar-Based Sign Language Interpretation",
      description: "Friendly cartoon characters help children learn and understand sign language through engaging visuals.",
      icon: Briefcase,
      color: "bg-secondary",
      delay: 0.4,
      image: "/lovable-uploads/a270c18b-22d9-4750-b51c-66fc5bf78c50.png"
    },
    {
      title: "Choose Your Sign Language Interpreter",
      description: "Select from a range of human and avatar interpreters to match your preferences and content needs.",
      icon: Users,
      color: "bg-accent",
      delay: 0.6,
      image: "/lovable-uploads/15f859bb-0ee7-426b-a6b0-f6a36bf1dd1a.png"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Market Info Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 p-8 bg-white rounded-lg shadow-md border border-gray-200 overflow-visible"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Accessibility Gap in Children's Media
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
              <span className="text-5xl font-bold text-primary mb-2">630M+</span>
              <p className="text-center text-gray-700">people worldwide have disabling hearing loss by 2030</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
              <span className="text-5xl font-bold text-secondary mb-2">45M</span>
              <p className="text-center text-gray-700">children are affected by hearing loss globally by 2030</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <p className="text-lg text-center text-gray-700">
              The children's digital content market is projected to reach <span className="font-bold text-gray-800">$20 billion by 2030</span>, 
              yet accessibility remains a major gap.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-lg text-center text-gray-700">
              Popular platforms lack standardized sign language support. 
              <span className="font-semibold text-gray-800 ml-2">
                SignSphere taps into this underserved segment by providing real-time sign language translation.
              </span>
            </p>
          </div>
        </motion.div>
        
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
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2">
                <UseCaseCard {...useCase} />
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                    className="rounded-lg shadow-md w-full max-w-full h-auto object-contain border border-gray-200"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
