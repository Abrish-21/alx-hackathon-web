"use client"

import { useState } from "react"

export default function HackathonPeople() {
  const [activeTab, setActiveTab] = useState("mentors")

  const people = {
    
  
    mentors: [
      {
        name: "David Kim",
        role: "Senior Mentor",
        specialty: "Blockchain & Web3",
        image: "/assets/images/jurry4.png",
        social: {
          twitter: "https://twitter.com/davidkim",
          github: "https://github.com/davidkim",
          linkedin: "https://linkedin.com/in/davidkim",
        },
      },
      {
        name: "Aisha Patel",
        role: "Technical Mentor",
        specialty: "Cybersecurity",
        image: "/assets/images/jurry2.png",
        social: {
          twitter: "https://twitter.com/aishap",
          github: "https://github.com/aishap",
          linkedin: "https://linkedin.com/in/aishap",
        },
      },
      {
        name: "Carlos Mendez",
        role: "Design Mentor",
        specialty: "UX/UI Design",
        image: "/assets/images/jurry3.png",
        social: {
          twitter: "https://twitter.com/carlosm",
          github: "https://github.com/carlosm",
          linkedin: "https://linkedin.com/in/carlosm",
        },
      },
      {
        name: "Emma Wilson",
        role: "Startup Mentor",
        specialty: "Entrepreneurship",
        image: "/assets/images/jurry1.png",
        social: {
          twitter: "https://twitter.com/emmaw",
          github: "https://github.com/emmaw",
          linkedin: "https://linkedin.com/in/emmaw",
        },
      },
    ],
    judges: [
      {
        name: "Dr. James Lee",
        role: "Chief Judge",
        specialty: "Quantum Computing",
        image: "/assets/images/jurry2.png",
        social: {
          twitter: "https://twitter.com/drjameslee",
          github: "https://github.com/drjameslee",
          linkedin: "https://linkedin.com/in/drjameslee",
        },
      },
      {
        name: "Olivia Taylor",
        role: "Industry Judge",
        specialty: "FinTech Innovation",
        image: "/assets/images/jurry2.png",
        social: {
          twitter: "https://twitter.com/oliviat",
          github: "https://github.com/oliviat",
          linkedin: "https://linkedin.com/in/oliviat",
        },
      },
      {
        name: "Raj Patel",
        role: "VC Judge",
        specialty: "Tech Investment",
        image: "/assets/images/jurry1.png",
        social: {
          twitter: "https://twitter.com/rajp",
          github: "https://github.com/rajp",
          linkedin: "https://linkedin.com/in/rajp",
        },
      },
      {
        name: "Sarah Johnson",
        role: "Technical Judge",
        specialty: "AR/VR Technologies",
        image: "/assets/images/jurry1.png",
        social: {
          twitter: "https://twitter.com/sarahj",
          github: "https://github.com/sarahj",
          linkedin: "https://linkedin.com/in/sarahj",
        },
      },
    ],
  }

  // Simple tab switching function
  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Meet Our Tech Innovators
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our dedicated panelists and judges bring extensive experience to guide and evaluate participants throughout the hackathon.
        </p>
      </div>

      {/* Custom tabs since we're not using shadcn components */}
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-2 w-full max-w-md bg-gray-100 rounded-lg p-1">
          {["mentors", "judges"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab ? "bg-white shadow-sm text-primary" : "text-gray-600 hover:text-primary"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* People grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {people[activeTab].map((person, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-lg p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-primary/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full border-2 border-primary/20 mb-4 overflow-hidden">
                <img
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-1">{person.name}</h3>
              <p className="text-primary font-medium mb-2">{person.role}</p>

              {/* Badge */}
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-4">
                {person.specialty}
              </div>

              {/* Social links */}
              <div className="flex space-x-3 mt-2">
                <a
                  href={person.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full flex items-center justify-center text-gray-700 hover:text-primary hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href={person.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href={person.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-tl-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}

