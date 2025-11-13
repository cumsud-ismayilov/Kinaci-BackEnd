import Lottie from "lottie-react";
import animationData from "../../animations/loading.json";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Lottie animationData={animationData} loop={true} />
    </motion.div>
  );
}

export default Loader;
