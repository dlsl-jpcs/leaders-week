// Helper functions for date manipulation and formatting

export function formatDate(date: Date): string {
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

  return `${months[date.getMonth()]} ${date.getDate()}`
}

export function getCurrentDate(): string {
  // For demo purposes, we'll return a date within the event range
  // In production, you would use:
  // return formatDate(new Date());

  // For demo, return April 21 to show events
  return "April 21"
}

export function isDateInRange(date: Date, startDate: Date, endDate: Date): boolean {
  return date >= startDate && date <= endDate
}

export function getNextEventDate(currentDate: string, dates: string[]): string | null {
  const index = dates.indexOf(currentDate)
  if (index === -1 || index === dates.length - 1) return null
  return dates[index + 1]
}

export function getPreviousEventDate(currentDate: string, dates: string[]): string | null {
  const index = dates.indexOf(currentDate)
  if (index <= 0) return null
  return dates[index - 1]
}

