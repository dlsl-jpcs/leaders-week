"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import type { Event } from "@/lib/events"
import EventCard from "@/components/event-card"
import Image from "next/image"

interface TodayHighlightsProps {
  events: Event[]
  currentDate: string
}

export default function TodayHighlights({ events, currentDate }: TodayHighlightsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-rotate through events
  useEffect(() => {
    if (events.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [events.length])

  if (events.length === 0) {
    return (
      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <p className="text-gray-600 text-lg">No upcoming events scheduled.</p>
        <p className="text-gray-500 mt-2">Check out the full schedule in the timeline above.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Date display */}
      <div className="flex items-center justify-center md:justify-start space-x-2 bg-green-50 rounded-full px-4 py-2 w-fit">
        <Calendar className="h-5 w-5 text-green-600" />
        <span className="font-medium text-green-800">
          {currentDate === "Upcoming" ? "Upcoming Events" : `${currentDate}, 2025`}
        </span>
      </div>

      {/* Featured event carousel */}
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-green-800">
          {currentDate === "Upcoming" ? "Next Event" : "Featured Event"}
        </div>

        <div className="h-[500px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Event image as background */}
              <div className="absolute inset-0">
                <Image
                  src={events[activeIndex].image || "/placeholder.svg"}
                  alt={events[activeIndex].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 to-green-900/90" />
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative h-full p-8 flex flex-col justify-end"
              >
                <h3 className="text-3xl font-bold text-white mb-3">{events[activeIndex].title}</h3>

                <div className="flex flex-wrap gap-4 mb-4 text-green-100">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{events[activeIndex].time}</span>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{events[activeIndex].location}</span>
                  </div>

                  {currentDate === "Upcoming" && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{events[activeIndex].date}</span>
                    </div>
                  )}
                </div>

                <p className="text-green-50 mb-6 line-clamp-3">{events[activeIndex].description}</p>

                {events[activeIndex].registrationLink && (
                  <a
                    href={events[activeIndex].registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-green-800 rounded-full hover:bg-green-50 transition-colors shadow-lg"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Event indicators */}
        {events.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Other events today */}
      {events.length > 1 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {currentDate === "Upcoming" ? "Other Upcoming Events" : "More Events Today"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => {
              if (index === activeIndex) return null // Skip the featured event

              return <EventCard key={index} event={event} />
            })}
          </div>
        </div>
      )}
    </div>
  )
}

