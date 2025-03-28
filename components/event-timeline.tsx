"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"
import type { Event } from "@/lib/events"
import TimelineEvent from "@/components/timeline-event"

interface EventTimelineProps {
  events: Record<string, Event[]>
  currentDate: string
}

export default function EventTimeline({ events, currentDate }: EventTimelineProps) {
  const [selectedDate, setSelectedDate] = useState(currentDate)
  const dates = Object.keys(events)
  const currentDateIndex = dates.indexOf(selectedDate)

  // Auto-scroll the timeline to the current date on initial load
  useEffect(() => {
    const element = document.getElementById(`timeline-date-${selectedDate.replace(/\s+/g, "-")}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
    }
  }, [])

  const handlePrevDate = () => {
    if (currentDateIndex > 0) {
      setSelectedDate(dates[currentDateIndex - 1])
    }
  }

  const handleNextDate = () => {
    if (currentDateIndex < dates.length - 1) {
      setSelectedDate(dates[currentDateIndex + 1])
    }
  }

  return (
    <div className="w-full">
      {/* Timeline navigation */}
      <div className="relative mb-8">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={handlePrevDate}
            disabled={currentDateIndex === 0}
            className="p-2 rounded-full bg-white shadow-md text-green-700 disabled:text-gray-300 disabled:shadow-none"
            aria-label="Previous date"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={handleNextDate}
            disabled={currentDateIndex === dates.length - 1}
            className="p-2 rounded-full bg-white shadow-md text-green-700 disabled:text-gray-300 disabled:shadow-none"
            aria-label="Next date"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-x-auto py-4 px-10 scrollbar-hide">
          <div className="flex space-x-1 min-w-max">
            {dates.map((date) => {
              const isSelected = selectedDate === date
              const isCurrentDay = date === currentDate

              return (
                <button
                  key={date}
                  id={`timeline-date-${date.replace(/\s+/g, "-")}`}
                  onClick={() => setSelectedDate(date)}
                  className={`
                    relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                    ${
                      isSelected
                        ? "bg-green-600 text-white shadow-lg scale-105"
                        : isCurrentDay
                          ? "bg-green-100 text-green-800 border border-green-300"
                          : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  {date}
                  {isCurrentDay && !isSelected && (
                    <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full transform -translate-y-1 translate-x-1">
                      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Timeline visualization */}
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-green-200 rounded-full"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDate}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 pl-16 relative"
          >
            {events[selectedDate]?.map((event, index) => (
              <TimelineEvent key={index} event={event} index={index} isCurrentDay={selectedDate === currentDate} />
            ))}

            {(!events[selectedDate] || events[selectedDate].length === 0) && (
              <div className="py-12 text-center">
                <p className="text-gray-500">No events scheduled for this date.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

