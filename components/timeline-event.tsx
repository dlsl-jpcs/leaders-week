"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, MapPin, ChevronDown, ExternalLink } from "lucide-react"
import type { Event } from "@/lib/events"
import Image from "next/image"

interface TimelineEventProps {
  event: Event
  index: number
  isCurrentDay: boolean
}

export default function TimelineEvent({ event, index, isCurrentDay }: TimelineEventProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  // Staggered animation for timeline items
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.div custom={index} initial="hidden" animate="visible" variants={variants} className="relative">
      {/* Timeline dot */}
      <div className="absolute left-[-56px] top-2 flex items-center justify-center">
        <div
          className={`h-6 w-6 rounded-full ${isCurrentDay ? "bg-green-600" : "bg-green-400"} flex items-center justify-center z-10`}
        >
          {isCurrentDay && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 bg-green-500 rounded-full opacity-60"
            />
          )}
        </div>
      </div>

      {/* Event card */}
      <motion.div
        className={`
          bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 
          transition-all duration-300 ${isExpanded ? "shadow-lg" : "hover:shadow-lg"}
        `}
        whileHover={{ y: -3 }}
        layout
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Event image - only visible on medium screens and up */}
          <div className="relative h-full min-h-[140px] md:block hidden">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          </div>

          {/* Event content */}
          <div className="p-6 md:col-span-2">
            {/* Event image - only visible on small screens */}
            <div className="relative h-40 w-full mb-4 md:hidden">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-green-700 mb-2">{event.title}</h3>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
            </div>

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

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : "2.5rem", overflow: "hidden" }}
              transition={{ duration: 0.3 }}
            >
              <p className={`text-gray-600 mb-4 ${!isExpanded && "line-clamp-2"}`}>{event.description}</p>
            </motion.div>

            {event.registrationLink && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                  marginTop: isExpanded ? 16 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
                >
                  Register Now
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

