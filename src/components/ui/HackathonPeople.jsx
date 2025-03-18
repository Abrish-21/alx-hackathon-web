"use client"

import { useState } from "react"
import tadios from '../../../public/assets/images/Tadiwos.jpeg'
import Bersufekad from '../../../public/assets/images/Bersufekad.jpeg'
import Yoadan from '../../../public/assets/images/Yoadan.jpeg'
import Helinna from '../../../public/assets/images/Helinna.jpeg'
import Nael from '../../../public/assets/images/Nael.jpeg'
import Israel from '../../../public/assets/images/Israel.jpeg'
import Amaha from '../../../public/assets/images/Amaha.jpeg'
export default function HackathonPeople() {
  const [activeTab, setActiveTab] = useState("Panelists")

  const people = {
    
  
    Panelists: [
      {
        name: "Tadiwos Belete",
        role: "Founder & CEO of Kuriftu Resorts",
        descritpion:"As the Founder & CEO of Kuriftu Resorts, Tadiwos Belete has established a chain of luxury resorts that blend Ethiopian hospitality with modern amenities, promoting tourism and cultural heritage.",
        image: tadios,
        social: {
          linkedin: "https://www.linkedin.com/company/kuriftu-resorts/posts?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BB3Cgbzf2R2KlmzFGCGocgw%3D%3D",
        },
      },
      {
        name: "Bersufekad Getachew",
        role: "Founder & CEO of Eagle Lion Systems",
        descritpion:": Founder & CEO of Eagle Lion Systems, Bersufekad Getachew leads a company specializing in innovative technological solutions, contributing to the advancement of the tech industry in Ethiopia.",
        image: Bersufekad,
        social: {
        
          linkedin: "https://www.linkedin.com/in/bersufekad-getachew-amare-6b61841b4/",
        },
      },
      {
        name: "Yoadan Tilahun",
        role: "Founder & CEO of Flawless Events",
        descritpion:" Founder & CEO of Flawless Events, Yoadan Tilahun has built a reputable event management company known for organizing high-profile events, enhancing Ethiopia's presence on the international stage.",
        image: Yoadan,
        social: {
       
          linkedin: "https://www.linkedin.com/in/yoadan-tilahun-46a09650/",
        },
      },
      {
        name: "Helinna Ayalew",
        role: "Moderator",
        descritpion:" An accomplished communications professional, Helinna Ayalew has extensive experience in strategic engagement, public relations, and diplomatic communications. Having worked with international organizations and key stakeholders, Helinna excels in facilitating meaningful discussions that inspire action and innovation.",
      
        image: Helinna,
        social: {
        
          linkedin: "https://www.linkedin.com/search/results/all/?keywords=Helinna%20Ayalew&origin=GLOBAL_SEARCH_HEADER&sid=Onx",
        },
      },
    ],
    judges: [
      {
        name: "Mr. Nael Hailemariam",
        role: "Co-Founder and CEO at Chapa",
        descritpion:" As a key figure at Chapa Financial Technologies, Mr. Nael has been instrumental in advancing digital payment solutions in Ethiopia. His leadership reflects a commitment to financial innovation and accessibility.",
        image: Nael,
        social: {
        
          linkedin: "https://www.linkedin.com/in/naelatchapa/",
        },
      },
      {
        name: "Mr. Israel Goytom",
        role: "CTO and Co-Founder at Chapa",
        descritpion:" Serving as a pivotal member of Chapa Financial Technologies, Mr. Israel has contributed significantly to the development of seamless payment systems, enhancing the financial technology landscape in the region.",
        image:Israel,
        social: {
       
          linkedin: "https://www.linkedin.com/in/israelgoytom/",
        },
      },
      {
        name: "Mr. Amaha Bekele: ",
        role: "Partner, Consulting Leader for East Africa at Deloitte",
        descritpion:" A seasoned business leader and angel investor, Amaha Bekele has played a crucial role in driving technology consulting across East Africa. His expertise in IT governance and aligning technology with corporate strategy has empowered numerous organizations to achieve excellence.",
 
        image: Amaha,
        social: {
          linkedin: "https://www.linkedin.com/in/amaha-bekele-4b2569a/",
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
        Meet Our Judges and Panelists
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our dedicated panelists and judges bring extensive experience to guide and evaluate participants throughout the hackathon.
        </p>
      </div>

      {/* Custom tabs since we're not using shadcn components */}
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-2 w-full max-w-md bg-gray-100 rounded-lg p-1">
          {["Panelists", "judges"].map((tab) => (
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
            
              <p className="text-sm text-muted-foreground">{person.descritpion}</p>

              {/* Social links */}
              <div className="flex space-x-3 mt-2">
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

