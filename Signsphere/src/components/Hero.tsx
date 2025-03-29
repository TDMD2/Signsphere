
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-yellow-100 via-blue-50 to-pink-100 rounded-b-3xl">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-5xl font-bold text-accent animate-bounce-light inline-block bg-white py-3 px-8 rounded-full shadow-lg">
            SignSphere
          </h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto bg-white p-4 rounded-xl shadow-sm"
        >
          Breaking communication barriers across work, education, and entertainment platforms
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
