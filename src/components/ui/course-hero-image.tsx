"use client"
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CourseHeroImageProps {
  imageSrc: string;
  imageAlt: string;
  overlayText?: {
    part1: string;
    part2: string;
  };
  className?: string;
}

export const CourseHeroImage = ({
  imageSrc,
  imageAlt,
  overlayText,
  className,
}: CourseHeroImageProps) => {
  return (
    <div className={cn("relative flex justify-center items-center h-96 md:h-[28rem]", className)}>
      {/* Background Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute z-0 h-[300px] w-[300px] rounded-full bg-[#FFD700]/20 md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]"
      ></motion.div>
      
      {/* Course Image */}
      <motion.img
        src={imageSrc}
        alt={imageAlt}
        className="relative z-10 h-auto w-64 object-cover md:w-80 lg:w-96 rounded-lg shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = `/course-${imageAlt}.png`;
        }}
      />

      {/* Optional Overlay Text */}
      {overlayText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-0 right-0 z-20 text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      )}
    </div>
  );
};