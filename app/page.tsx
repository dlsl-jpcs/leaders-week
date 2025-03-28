import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import TodayHighlights from "@/components/today-highlights"
import EventTimeline from "@/components/event-timeline"
import ImageGallery from "@/components/image-gallery"
import { getCurrentEvents, getUpcomingEvents, events } from "@/lib/events"
import { getCurrentDate } from "@/lib/date-utils"


export default function Home() {
  const currentDate = getCurrentDate()
  const currentEvents = getCurrentEvents()
  const hasEventsToday = currentEvents.length > 0
  const upcomingEvents = hasEventsToday ? [] : getUpcomingEvents()

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />


      {/* Events Highlight Section - Conditional display */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
            {hasEventsToday ? "Today's Events" : "Upcoming Events"}
          </h2>
          <div className="h-1 w-20 bg-green-600 rounded-full"></div>
        </div>

        <TodayHighlights
          events={hasEventsToday ? currentEvents : upcomingEvents}
          currentDate={hasEventsToday ? currentDate : "Upcoming"}
        />
      </section>

      {/* Interactive Timeline - Moved to top */}
      <section id="timeline" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">Leaders' Week Timeline</h2>
            <div className="h-1 w-20 bg-green-600 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Navigate through the entire Leaders' Week schedule with our interactive timeline.
            </p>
          </div>

          <EventTimeline events={events} currentDate={currentDate} />
        </div>
      </section>


      {/* About Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">About Leaders' Week</h2>
            <div className="h-1 w-20 bg-green-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                Leaders' Week is a celebration of student leadership at De La Salle Lipa, organized by the College
                Student Activities Office. This week-long event features various activities designed to recognize,
                develop, and celebrate student leaders across campus.
              </p>
              <p className="text-gray-700 text-lg">
                From April 21 to April 29, 2025, student leaders will participate in activities ranging from spiritual
                reflection to competitive challenges, creative exhibitions, and recognition ceremonies.
              </p>
              <div className="pt-4">
                <Link
                  href="#timeline"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore Timeline
                </Link>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
              <Image src="leaders-week.png" alt="Leaders Week" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">De La Salle Lipa</h3>
            <p className="text-green-100">College Student Activities Office</p>
            <p className="text-green-100 mt-2">Leaders' Week 2025</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-green-100">Email: csao.officer1@dlsl.edu.ph</p>
            <p className="text-green-100">Email: csao.officer2@dlsl.edu.ph</p>
          </div>

          

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-green-100 hover:text-white transition-colors">
                  Timeline
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>© 2025 College Students Activities Office. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

