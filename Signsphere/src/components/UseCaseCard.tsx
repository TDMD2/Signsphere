
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay: number;
  image?: string;
}

const UseCaseCard = ({ title, description, icon: Icon, color, delay }: UseCaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200"
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        borderColor: "#8E9196"
      }}
    >
      <div 
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${color} mx-auto shadow-sm`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">{title}</h3>
      <p className="text-gray-700 text-base text-center leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default UseCaseCard;
