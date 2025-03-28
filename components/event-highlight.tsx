"use client"

import { motion } from "framer-motion"
import { Clock, MapPin } from "lucide-react"
import type { Event } from "@/lib/events"

interface EventHighlightProps {
  event: Event
}

export default function EventHighlight({ event }: EventHighlightProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-700 mb-2">{event.title}</h3>

        <div className="flex items-center text-gray-500 mb-1">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{event.time}</span>
        </div>

        <div className="flex items-center text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{event.location}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
          >
            Register Now
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  )
}

