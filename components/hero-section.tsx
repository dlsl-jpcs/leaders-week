"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Previous year's Leaders' Week images
// In a real implementation, these would be actual image URLs
const previousYearImages = [
  "https://www.dlsl.edu.ph/storage/article_storage/2024-09-12%2017:04:35-IMG_4036%20(1).jpg",
  "https://www.dlsl.edu.ph/storage/carousel_storage/2024-01-25%2017:11:04-22.png",
  "https://www.dlsl.edu.ph/storage/carousel_storage/2024-01-25%2017:11:56-27.png",
];

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % previousYearImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background image slideshow */}

      <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={previousYearImages[currentImageIndex] || "/placeholder.svg"}
                alt={`Leaders' Week ${2024 - currentImageIndex}`}
                fill
                className="object-cover"
                priority={currentImageIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-800/90" />
        </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {previousYearImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Leaders' Week 2025
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-6">
            Celebrating student leadership at De La Salle Lipa
          </p>
          <div className="flex items-center text-white mb-8">
            <Calendar className="mr-2" />
            <span className="text-lg">April 21 - 29, 2025</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#timeline"
              className="inline-flex items-center px-6 py-3 bg-white text-green-800 font-medium rounded-full hover:bg-green-100 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Timeline
            </Link>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -10 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
