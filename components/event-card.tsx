"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, ExternalLink } from "lucide-react"
import type { Event } from "@/lib/events"
import Image from "next/image"

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Event image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-green-700 mb-2">{event.title}</h3>

        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.time}</span>
          </div>

          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
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
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  )
}

