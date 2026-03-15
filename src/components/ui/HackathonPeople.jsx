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
        descritpion: "As the Founder & CEO of Kuriftu Resorts, Tadiwos Belete has established a chain of luxury resorts that blend Ethiopian hospitality with modern amenities, promoting tourism and cultural heritage.",
        image: tadios,
        social: {
          linkedin: "https://www.linkedin.com/company/kuriftu-resorts/posts?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BB3Cgbzf2R2KlmzFGCGocgw%3D%3D",
        },
      },
      {
        name: "Bersufekad Getachew",
        role: "Founder & CEO of Eagle Lion Systems",
        descritpion: "Founder & CEO of Eagle Lion Systems, Bersufekad Getachew leads a company specializing in innovative technological solutions, contributing to the advancement of the tech industry in Ethiopia.",
        image: Bersufekad,
        social: {
          linkedin: "https://www.linkedin.com/in/bersufekad-getachew-amare-6b61841b4/",
        },
      },
      {
        name: "Yoadan Tilahun",
        role: "Founder & CEO of Flawless Events",
        descritpion: "Founder & CEO of Flawless Events, Yoadan Tilahun has built a reputable event management company known for organizing high-profile events, enhancing Ethiopia's presence on the international stage.",
        image: Yoadan,
        social: {
          linkedin: "https://www.linkedin.com/in/yoadan-tilahun-46a09650/",
        },
      },
      {
        name: "Helinna Ayalew",
        role: "Moderator",
        descritpion: "An accomplished communications professional, Helinna Ayalew has extensive experience in strategic engagement, public relations, and diplomatic communications. Having worked with international organizations and key stakeholders, Helinna excels in facilitating meaningful discussions that inspire action and innovation.",
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
        descritpion: "As a key figure at Chapa Financial Technologies, Mr. Nael has been instrumental in advancing digital payment solutions in Ethiopia. His leadership reflects a commitment to financial innovation and accessibility.",
        image: Nael,
        social: {
          linkedin: "https://www.linkedin.com/in/naelatchapa/",
        },
      },
      {
        name: "Mr. Israel Goytom",
        role: "CTO and Co-Founder at Chapa",
        descritpion: "Serving as a pivotal member of Chapa Financial Technologies, Mr. Israel has contributed significantly to the development of seamless payment systems, enhancing the financial technology landscape in the region.",
        image: Israel,
        social: {
          linkedin: "https://www.linkedin.com/in/israelgoytom/",
        },
      },
      {
        name: "Mr. Amaha Bekele",
        role: "Partner, Consulting Leader for East Africa at Deloitte",
        descritpion: "A seasoned business leader and angel investor, Amaha Bekele has played a crucial role in driving technology consulting across East Africa. His expertise in IT governance and aligning technology with corporate strategy has empowered numerous organizations to achieve excellence.",
        image: Amaha,
        social: {
          linkedin: "https://www.linkedin.com/in/amaha-bekele-4b2569a/",
        },
      },
    ],
  }

  const tabs = ["Panelists", "judges"]
  const currentPeople = people[activeTab]
  // Use 3-col grid for 3 or fewer items, 4-col for 4
  const gridCols = currentPeople.length <= 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"

  return (
    <div className="container mx-auto py-20 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium tracking-wide uppercase mb-4">
          <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Industry Leaders
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
          Meet Our Judges & Panelists
        </h2>
        <p className="text-base text-slate-500 max-w-2xl mx-auto">
          Our dedicated panelists and judges bring extensive experience to guide and evaluate participants throughout the hackathon.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-slate-100 rounded-lg p-1 border border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-2 px-6 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* People Grid — centered, adapts columns to item count */}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-6 max-w-6xl mx-auto`}>
        {currentPeople.map((person, index) => (
          <div
            key={index}
            className="group rounded-xl border border-slate-200 hover:border-slate-300 bg-white p-6 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-2 ring-slate-100 group-hover:ring-slate-300 transition-all duration-300">
              <img
                src={person.image || "/placeholder.svg"}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-base font-semibold text-slate-900 mb-1">{person.name}</h3>
            <p className="text-sm font-medium mb-3" style={{ color: "#D4952C" }}>{person.role}</p>
            <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-4">{person.descritpion}</p>

            {/* LinkedIn */}
            {person.social?.linkedin && (
              <a
                href={person.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300 hover:bg-slate-100 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
