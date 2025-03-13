"use client"

import { useState } from "react"

export default function HackathonSchedule() {
  const [activeDay, setActiveDay] = useState("day1")
  const [expandedEvents, setExpandedEvents] = useState({})

  const schedule = {
    day1: {
      date: "Saturday, October 15, 2025",
      location: "ALX-Hub",
      locationAddress: "Tech District, Innovation Avenue",
      timeBlocks: [
        {
          name: "Morning",
          events: [
            {
              time: "08:00 - 09:00",
              title: "Registration & Breakfast",
              description: "Check-in, get your welcome pack, and enjoy breakfast with fellow participants.",
              category: "logistics",
            },
            {
              time: "09:00 - 09:45",
              title: "Opening Ceremony",
              description: "Welcome address, introduction to judges and mentors, and overview of the hackathon.",
              category: "main",
              speaker: "Alex Chen, Lead Organizer",
            },
            {
              time: "10:00 - 10:45",
              title: "Keynote: The Future of Tech Innovation",
              description: "Exploring emerging technologies and their potential impact on global challenges.",
              category: "keynote",
              speaker: "Dr. James Lee, Chief Judge",
            },
            {
              time: "11:00 - 12:00",
              title: "Team Formation & Ideation",
              description: "Form your teams and start brainstorming your hackathon projects.",
              category: "activity",
            },
          ],
        },
        {
          name: "Afternoon",
          events: [
            {
              time: "12:00 - 13:00",
              title: "Lunch Break",
              description: "Networking lunch with sponsors and industry experts.",
              category: "break",
            },
            {
              time: "13:00 - 14:00",
              title: "Workshop: API Integration Masterclass",
              description: "Learn how to leverage popular APIs to enhance your hackathon project.",
              category: "workshop",
              speaker: "Priya Sharma, Technical Director",
            },
            {
              time: "14:15 - 15:15",
              title: "Workshop: UI/UX Design Principles",
              description: "Design thinking and user experience best practices for your projects.",
              category: "workshop",
              speaker: "Carlos Mendez, Design Mentor",
            },
            {
              time: "15:30 - 16:30",
              title: "Technical Mentorship Session",
              description: "One-on-one mentorship with industry experts to refine your project ideas.",
              category: "mentorship",
            },
            {
              time: "16:45 - 17:45",
              title: "Workshop: Pitch Perfect",
              description: "Learn how to effectively present your project to judges and investors.",
              category: "workshop",
              speaker: "Sophia Rodriguez, Sponsorship Lead",
            },
            {
              time: "18:00 - 19:00",
              title: "Dinner & Networking",
              description: "Refuel and connect with fellow participants, mentors, and sponsors.",
              category: "break",
            },
            {
              time: "19:00 - 21:00",
              title: "Hacking Begins",
              description: "Start building your projects with initial guidance from mentors.",
              category: "hacking",
            },
            {
              time: "21:00",
              title: "Day 1 Wrap-up",
              description: "Summary of the day and instructions for Day 2 at Kuriftu African Village.",
              category: "logistics",
            },
          ],
        },
      ],
    },
    day2: {
      date: "Sunday, October 16, 2025",
      location: "Kuriftu African Village",
      locationAddress: "Lakeside Resort, Nature Road",
      timeBlocks: [
        {
          name: "Morning",
          events: [
            {
              time: "08:00 - 09:00",
              title: "Arrival & Breakfast",
              description: "Check-in at Kuriftu African Village and enjoy a traditional breakfast.",
              category: "logistics",
            },
            {
              time: "09:00 - 09:30",
              title: "Day 2 Kickoff",
              description: "Overview of the day's activities and hacking milestones.",
              category: "main",
              speaker: "Marcus Johnson, Community Manager",
            },
            {
              time: "09:30 - 12:30",
              title: "Intensive Hacking Session",
              description: "Focused development time with on-demand mentorship.",
              category: "hacking",
            },
          ],
        },
        {
          name: "Afternoon",
          events: [
            {
              time: "12:30 - 13:30",
              title: "Lunch & Wellness Break",
              description: "Enjoy African cuisine and take a short wellness break by the lake.",
              category: "break",
            },
            {
              time: "13:30 - 15:30",
              title: "Continued Hacking",
              description: "Final development sprint before submission deadline.",
              category: "hacking",
            },
            {
              time: "15:30 - 16:00",
              title: "Project Submission Deadline",
              description: "Submit your projects for judging and prepare your presentations.",
              category: "deadline",
            },
            {
              time: "16:00 - 16:30",
              title: "Break & Setup",
              description: "Prepare for project presentations while judges review submissions.",
              category: "break",
            },
            {
              time: "16:30 - 18:30",
              title: "Project Presentations",
              description: "Each team presents their project to judges and audience (5 minutes per team).",
              category: "presentation",
            },
            {
              time: "18:30 - 19:30",
              title: "Judges Deliberation & Dinner",
              description: "Enjoy a celebratory dinner while judges deliberate.",
              category: "break",
            },
            {
              time: "19:30 - 20:30",
              title: "Awards Ceremony",
              description: "Announcement of winners and prize distribution.",
              category: "main",
              speaker: "Raj Patel, VC Judge",
            },
            {
              time: "20:30 - 22:00",
              title: "Closing Party",
              description: "Celebrate your achievements with music, networking, and refreshments by the lake.",
              category: "social",
            },
          ],
        },
      ],
    },
  }

  // Get category color class
  const getCategoryColor = (category) => {
    switch (category) {
      case "keynote":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "workshop":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "hacking":
        return "bg-green-100 text-green-800 border-green-200"
      case "break":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "main":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "presentation":
        return "bg-pink-100 text-pink-800 border-pink-200"
      case "deadline":
        return "bg-red-100 text-red-800 border-red-200"
      case "mentorship":
        return "bg-indigo-100 text-indigo-800 border-indigo-200"
      case "social":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "keynote":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        )
      case "workshop":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        )
      case "hacking":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        )
      case "break":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        )
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        )
    }
  }

  const toggleEvent = (blockIndex, eventIndex) => {
    const key = `${activeDay}-${blockIndex}-${eventIndex}`
    setExpandedEvents((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const isExpanded = (blockIndex, eventIndex) => {
    const key = `${activeDay}-${blockIndex}-${eventIndex}`
    return expandedEvents[key]
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Hackathon Schedule
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your guide to all the exciting events, workshops, and activities planned for our two-day tech extravaganza.
        </p>
      </div>

      {/* Day tabs */}
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-2 w-full max-w-md bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveDay("day1")}
            className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeDay === "day1" ? "bg-white shadow-sm text-primary" : "text-gray-600 hover:text-primary"
            }`}
          >
            Day 1: ALX-Hub
          </button>
          <button
            onClick={() => setActiveDay("day2")}
            className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeDay === "day2" ? "bg-white shadow-sm text-primary" : "text-gray-600 hover:text-primary"
            }`}
          >
            Day 2: Kuriftu Village
          </button>
        </div>
      </div>

      {/* Schedule header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{schedule[activeDay].date}</h3>
            <div className="flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <span className="font-medium">{schedule[activeDay].location}</span>
                <span className="text-gray-500 text-sm ml-2">{schedule[activeDay].locationAddress}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              Workshop
            </div>
            <div className="flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Hacking
            </div>
            <div className="flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
              Keynote
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Schedule */}
      <div className="grid md:grid-cols-2 gap-6">
        {schedule[activeDay].timeBlocks.map((block, blockIndex) => (
          <div key={blockIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{block.name}</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {block.events.map((event, eventIndex) => (
                <div key={eventIndex} className="cursor-pointer">
                  <div
                    className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                    onClick={() => toggleEvent(blockIndex, eventIndex)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${getCategoryColor(event.category)}`}
                      >
                        {getCategoryIcon(event.category)}
                      </div>
                      <div>
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-gray-500">{event.time}</div>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform ${isExpanded(blockIndex, eventIndex) ? "transform rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  {isExpanded(blockIndex, eventIndex) && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <p className="text-gray-600 mb-3">{event.description}</p>

                      {event.speaker && (
                        <div className="flex items-center mt-3 pt-3 border-t border-gray-200">
                          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 text-gray-600"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <span className="text-sm font-medium">{event.speaker}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

