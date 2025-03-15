import { motion } from "framer-motion";

const AnimatedImage = ({ src, alt, className }) => {
  return (
    <motion.img
      className={`container-image ${className}`} 
      src={src} 
      alt={alt}
      initial={{ opacity: 0, scale: 0.8 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.1 }} 
    />
  );
};

export default AnimatedImage;
