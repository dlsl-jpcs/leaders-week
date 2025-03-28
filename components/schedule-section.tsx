"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, MapPin } from "lucide-react"
import { events, type Event } from "@/lib/events"

export default function ScheduleSection() {
  const [selectedDate, setSelectedDate] = useState("April 21")
  const dates = Object.keys(events)

  const selectedEvents = events[selectedDate] || []

  return (
    <section id="schedule" className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">Event Schedule</h2>
          <div className="h-1 w-20 bg-green-600 rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore the full schedule of Leaders' Week activities from April 21 to April 29, 2025.
          </p>
        </div>

        {/* Date selector */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedDate === date
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* Events for selected date */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDate}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {selectedEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}

            {selectedEvents.length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-2xl">
                <p className="text-gray-500">No events scheduled for this date.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function EventCard({ event }: { event: Event }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -3 }}
    >
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

        <p className="text-gray-600 mb-4">{event.description}</p>

        {event.registrationLink && (
          <div className="mt-4">
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
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
          </div>
        )}
      </div>
    </motion.div>
  )
}

