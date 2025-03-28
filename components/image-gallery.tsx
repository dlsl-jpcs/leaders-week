"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  title: string
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const openGallery = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when gallery is open
  }

  const closeGallery = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto" // Re-enable scrolling
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
    if (e.key === "Escape") closeGallery()
  }

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-md"
            onClick={() => openGallery(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Leaders' Week Gallery Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen gallery */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeGallery}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 z-10"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            className="absolute left-4 p-2 text-white hover:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            className="absolute right-4 p-2 text-white hover:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`Leaders' Week Gallery Image ${currentIndex + 1}`}
                fill
                className="object-contain"
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentIndex(index)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

