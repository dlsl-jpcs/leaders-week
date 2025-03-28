export interface Event {
  title: string
  date: string
  time: string
  location: string
  description: string
  registrationLink?: string
  image: string // Added image field
}

// Event data organized by date with images
export const events: Record<string, Event[]> = {
  "April 21": [
    {
      title: "Mass Sponsorship",
      date: "April 21",
      time: "12:30 PM - 1:00 PM",
      location: "Capilla",
      description:
        "CSAO will offer a mass to start the celebration of the Leaders' Week. Officers of all accredited organizations will be requested to participate on the Eucharistic Celebration.",
      registrationLink: "https://forms.gle/kaMh6DUauQk6Lx7E9",
      image: "capilla.png", // Mass image
    },
    {
      title: "Leader's Get Up - Pastel Colors",
      date: "April 21",
      time: "All Day",
      location: "Campus-wide",
      description:
        "Officers and advisers are highly encouraged to follow the OOTD. Take photos and upload them on social media with hashtag #LW2025ootd1 for a chance to win exciting prizes.",
      image: "pastel-colors.jpg", // Pastel colors outfit image
    },
    {
      title: "Transform Your Social Media Profile Picture",
      date: "April 21",
      time: "All Day",
      location: "Online",
      description:
        "All student leaders are encouraged to change their and their organization's profile picture into the Leaders' Week Frame throughout the whole duration of the Leaders' Week celebration.",
      registrationLink: "https://twibbo.nz/leadersweek2025",
      image: "social-media-picture.jpg", // Social media profile image
    },
    {
      title: "Walk Towards Wellness: a 10k steps challenge",
      date: "April 21",
      time: "All Day",
      location: "Anywhere",
      description:
        "The challenge is open to all the student leaders who own smartwatch. Participants are required to record their walk daily from April 21-23, 2025 using the smartwatch.",
      registrationLink: "https://forms.gle/cG44Xjr49n1Epo2h6",
      image: "walk-wellness.png", // Walking/fitness image
    },
    {
      title: "Movie Poster and Trailer Exhibit",
      date: "April 21",
      time: "All Day",
      location: "SC Ground",
      description:
        "The movie poster and trailer will be displayed at the Student Center Ground. It will be exhibited on April 21 to April 29.",
      image: "film-festival.png", // Movie poster exhibit image
    },
    {
      title: "Fun Poll Quiz Bee",
      date: "April 21",
      time: "1:30 PM - 4:30 PM",
      location: "Online (Google Form)",
      description:
        "Representatives from all organizations will engage in this battle of wits similar to quiz bee. The answers to the questions will be coming from a poll completed last March 21, 2025.",
      registrationLink: "https://forms.gle/zXBr9QTN4FEeweJD6",
      image: "quiz-bee.png", // Quiz bee image
    },
  ],
  "April 22": [
    {
      title: "Reaction Ring Game Challenge",
      date: "April 22",
      time: "2:30 PM - 5:00 PM",
      location: "SC Ground Floor/CBEAM Grounds",
      description:
        "Reaction Ring game is an interactive booth showcasing innovative and exciting games developed by members of JPCS - DLSL Chapter.",
      registrationLink: "https://forms.gle/Pv5MNtcpEWErEWH97",
      image: "reaction-ring.png", // Reaction ring game image
    },
    {
      title: "Leader's Get Up - Team Attire",
      date: "April 22",
      time: "All Day",
      location: "Campus-wide",
      description:
        "Officers and advisers are highly encouraged to follow the OOTD. Take photos and upload them on social media with hashtag #LW2025ootd2 for a chance to win exciting prizes.",
      image: "team-attire.jpg", // Team attire image
    },
    {
      title: "Transform Your Social Media Profile Picture",
      date: "April 22",
      time: "All Day",
      location: "Online",
      description:
        "All student leaders are encouraged to change their and their organization's profile picture into the Leaders' Week Frame throughout the whole duration of the Leaders' Week celebration.",
      registrationLink: "https://twibbo.nz/leadersweek2025",
      image: "social-media-picture.jpg", // Social media profile image
    },
  ],
  "April 23": [
    {
      title: "Draw Lots",
      date: "April 23",
      time: "9:00 AM - 5:00 PM",
      location: "Online",
      description:
        "All student leaders will get a chance to win exciting prizes through an online ticket. They will just have to choose 4 combinations from the 8 different symbols name shown on the Leaders' Week Logo.",
      registrationLink: "https://forms.gle/m43SzbMj3qdvo13z5",
      image: "draw-lots.png", // Draw lots image
    },
    {
      title: "Leader's Get Up - All in White",
      date: "April 23",
      time: "All Day",
      location: "Campus-wide",
      description:
        "Officers and advisers are highly encouraged to follow the OOTD. Take photos and upload them on social media with hashtag #LW2025ootd3 for a chance to win exciting prizes.",
      image: "all-white.jpg", // All white outfit image
    },
    {
      title: "Fun Poll Quiz Bee (Final Round)",
      date: "April 23",
      time: "1:30 PM - 4:30 PM",
      location: "Online (Google Form)",
      description:
        "Multiple-choice questions will be answered using Google Forms. There will be 30 questions that will be answered by all finalists.",
      image: "poll.png", // Quiz bee final round image
    },
  ],
  "April 24": [
    {
      title: "Student Leaders Film Festival",
      date: "April 24",
      time: "2:30 PM - 5:00 PM",
      location: "Mabini Auditorium",
      description:
        "All films submitted by the organizations will be shown. Immediately following the film screenings, the awarding ceremony will take place. Participants in the contests and activities held from April 21 to April 23 will be recognized.",
      image: "fil-festival-awarding.png", // Film festival image
    },
    {
      title: "Leader's Get Up - Statement Shirt",
      date: "April 24",
      time: "All Day",
      location: "Campus-wide",
      description:
        "Officers and advisers are highly encouraged to follow the OOTD. Take photos and upload them on social media with hashtag #LW2025ootd4 for a chance to win exciting prizes.",
      image: "statement-shirt.jpg", // Statement shirt image
    },
    {
      title: "Awarding Walk towards Wellness: a 10k steps challenge",
      date: "April 24",
      time: "2:30 PM - 5:00 PM",
      location: "Mabini Auditorium",
      description:
        "The CSAO will choose 3 winners for both male and female based on the highest accumulated steps within the duration of the program from the submitted entries.",
      image: "walk-wellness.png", // Awarding ceremony image
    },
  ],
  "April 25": [
    {
      title: "Leaders' QR Hunt",
      date: "April 25",
      time: "1:30 PM - 4:00 PM",
      location: "DLSL Campus",
      description:
        "Using their electronic gadgets, this hunt will be played by groups where they will search for clues hidden on QR codes posted around the campus. They must find all the clues and get all answers correctly to end the quest.",
      registrationLink: "https://forms.gle/vt3TtcM5fQfJnr978",
      image: "qr-hunt.png", // QR hunt image
    },
    {
      title: "Leader's Get Up - Stripes or Checked",
      date: "April 25",
      time: "All Day",
      location: "Campus-wide",
      description:
        "Officers and advisers are highly encouraged to follow the OOTD. Take photos and upload them on social media with hashtag #LW2025ootd5 for a chance to win exciting prizes.",
      image: "stripes.jpg", // Stripes/checked outfit image
    },
  ],
  "April 26": [
    {
      title: "Ten Outstanding Junior College Students (TOJCS 2025)",
      date: "April 26",
      time: "All Day",
      location: "DLSL Campus",
      description: "Formation activities for the Ten Outstanding Junior College Students program.",
      image: "tojcs-formation.png", // TOJCS image
    },
  ],
  "April 28": [
    {
      title: "Leader's Get Up - Streetwear Style",
      date: "April 28",
      time: "All Day",
      location: "Campus-wide",
      description:
        "Officers and advisers are highly encouraged to follow the OOTD. Take photos and upload them on social media with hashtag #LW2025ootd6 for a chance to win exciting prizes.",
      image: "streetwear.jpg", // Streetwear style image
    },
  ],
  "April 29": [
    {
      title: "TEN OUSTANDING JUNIOR COLLEGE STUDENTS AWARDING CEREMONY",
      date: "April 29",
      time: "2:30 PM - 5:00 PM",
      location: "Mabini Auditorium",
      description:
        "This will be a formal event where all the finalists, along with their parents, will be awarded. The event will follow a modern Filipiniana theme.",
      image: "tojcs-awarding.png", // TOJCS awarding ceremony image
    },
    {
      title: "Leader's Get Up - Old Money Aesthetic",
      date: "April 29",
      time: "All Day",
      location: "Campus-wide",
      description:
        "Officers and advisers are highly encouraged to follow the OOTD. Take photos and upload them on social media with hashtag #LW2025ootd7 for a chance to win exciting prizes.",
      image: "old-money.jpg", // Old money aesthetic image
    },
    {
      title: "TOJCS Awarding Ceremony",
      date: "April 29",
      time: "2:30 PM - 5:00 PM",
      location: "MABINI AUDITORIUM",
      description:
        "This will be a formal event where all the finalists, along with their parents, will be awarded. The event will follow a modern Filipiniana theme.",
      image: "formation-awarding.png", // Formation image
    },
  ],
}

// Function to get current day's events
export function getCurrentEvents(): Event[] {
  // Get current date
  const now = new Date()

  // Format date to match our keys (e.g., "April 21")
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const currentDateKey = `${months[now.getMonth()]} ${now.getDate()}`

  // For demo purposes, if today is not within the event dates,
  // we'll return an empty array to trigger the "Upcoming Events" view
  if (!events[currentDateKey]) {
    // Check if we're in the event date range
    const startDate = new Date(2025, 3, 21) // April 21, 2025
    const endDate = new Date(2025, 3, 29) // April 29, 2025

    if (now >= startDate && now <= endDate) {
      // Find the closest date
      const dates = Object.keys(events)
      for (const date of dates) {
        const [month, day] = date.split(" ")
        const eventDate = new Date(2025, months.indexOf(month), Number.parseInt(day))
        if (now.getTime() <= eventDate.getTime()) {
          return events[date]
        }
      }
    }

    // Return empty array to show "Upcoming Events" instead
    return []
  }

  return events[currentDateKey]
}

// Function to get upcoming events when there are no events today
export function getUpcomingEvents(): Event[] {
  // Get current date
  const now = new Date()

  // Format date to match our keys (e.g., "April 21")
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const currentDateKey = `${months[now.getMonth()]} ${now.getDate()}`

  // Get all dates and sort them chronologically
  const dates = Object.keys(events).sort((a, b) => {
    const [monthA, dayA] = a.split(" ")
    const [monthB, dayB] = b.split(" ")
    const dateA = new Date(2025, months.indexOf(monthA), Number.parseInt(dayA))
    const dateB = new Date(2025, months.indexOf(monthB), Number.parseInt(dayB))
    return dateA.getTime() - dateB.getTime()
  })

  // Find the next upcoming date after today
  for (const date of dates) {
    const [month, day] = date.split(" ")
    const eventDate = new Date(2025, months.indexOf(month), Number.parseInt(day))
    const today = new Date()

    // For demo purposes, pretend today is before the event starts
    // In production, use: if (eventDate > today) {
    if (true) {
      return events[date]
    }
  }

  // If no upcoming events (unlikely), return the first day's events
  return events[dates[0]]
}

