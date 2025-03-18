"use client"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import hero from '/assets/hero.mp4'
import {
  HeartIcon,
  Calendar,
  MapPin,
  Award,
  Users,
  ChevronRight,
  Play,
  Clock,
  Hotel,
  Code,
  Lightbulb,
  Trophy,
  ArrowRight,
  Star,
  Phone,
  Mail,
  Briefcase,
  Sparkles,
} from "lucide-react"
import HackathonPeople from "../components/ui/HackathonPeople"
import HackathonSchedule from "../components/ui/HackathonSchedule"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setIsLoaded(true)

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  const sponsors = [
    { name: "ALX Ethiopia", logo: "/placeholder.svg?height=80&width=160", tier: "Platinum" },
    { name: "Kuriftu Resorts", logo: "/placeholder.svg?height=80&width=160", tier: "Platinum" },
    { name: "WeVenture Hub", logo: "/placeholder.svg?height=80&width=160", tier: "Platinum" },
    { name: "Tech Partner 1", logo: "/placeholder.svg?height=60&width=120", tier: "Gold" },
    { name: "Tech Partner 2", logo: "/placeholder.svg?height=60&width=120", tier: "Gold" },
    { name: "Hospitality Partner", logo: "/placeholder.svg?height=60&width=120", tier: "Gold" },
    { name: "Startup Incubator", logo: "/placeholder.svg?height=50&width=100", tier: "Silver" },
    { name: "Local Business", logo: "/placeholder.svg?height=50&width=100", tier: "Silver" },
  ]

  const testimonials = [
    {
      quote:
        "The Hospitality Hackathon was a game-changer for my career. The connections I made and skills I developed were invaluable.",
      author: "Sarah Johnson",
      role: "Previous Participant, Software Developer",
    },
    {
      quote:
        "As a judge last year, I was blown away by the innovative solutions presented. Can't wait to see what this year brings!",
      author: "Michael Chen",
      role: "CTO, Hospitality Tech Innovations",
    },
    {
      quote:
        "The blend of tech expertise and hospitality knowledge created truly unique solutions to real industry problems.",
      author: "Ayana Bekele",
      role: "Hotel Operations Manager",
    },
  ]

  const prizes = [
    {
      title: "Grand Prize",
      value: "150k ETB",
      description: "Cash prize plus 3-month weVenture Incubation program",
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
    },
    {
      title: "Exclusive Packages",
      value: "Kuriftu Packages",
      description: "Luxury stays and experiences at Kuriftu Resorts",
      icon: <Hotel className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "Hub Access",
      value: "ALX Hub Access",
      description: "Workspace and resources for continued development",
      icon: <Briefcase className="h-8 w-8 text-emerald-500" />,
    },
  ]

  const organizers = [
    {
      name: "ALX Ethiopia",
      description:
        "Empowering young Ethiopians through premier technology training and entrepreneurship, driving the digital economy forward.",
      icon: <Code className="h-8 w-8 text-blue-600" />,
    },
    {
      name: "Kuriftu Resorts",
      description:
        "Setting hospitality standards with luxury service and inspiring venues, perfect for sparking creativity.",
      icon: <Hotel className="h-8 w-8 text-amber-600" />,
    },
    {
      name: "weVenture Hub",
      description: "Fostering startup growth and innovation, providing resources and support to entrepreneurs.",
      icon: <Lightbulb className="h-8 w-8 text-emerald-600" />,
    },
  ]

  return (
    <div className={`bg-white min-h-screen transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 to-indigo-900 text-white">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto px-4 py-10 md:pb-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Calendar className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-sm font-medium text-white">April 5-6, 2025</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hospitality <span className="text-amber-400">Hackathon</span> 2025
              </h1>

              <p className="text-lg md:text-2xl text-white font-bold mb-4 max-w-xl mx-auto lg:mx-0">SOLVE, CREATE, DISRUPT!</p>

              <p className="text-base md:text-lg font-medium text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0">
                Step into a vibrant space where tech visionaries, entrepreneurs, and hospitality leaders come together
                to transform Ethiopia's hospitality landscape through innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/registration"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors shadow-lg"
                >
                  Register Now
                  <ChevronRight className="h-5 w-5 ml-1" />
                </Link>
                <Link
                  to="/resources"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg transition-colors"
                >
                  Explore Resources
                </Link>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                    <button
                      onClick={playVideo}
                      className="p-4 bg-amber-500 hover:bg-amber-600 rounded-full transition-colors shadow-lg"
                    >
                      <Play className="h-8 w-8 text-white" />
                    </button>
                  </div>
                )}
                <video
                  ref={videoRef}
                  className="w-full aspect-video object-cover"
                  poster="https://i.postimg.cc/hvRx3YK1/poster.png"
                  controls={isVideoPlaying}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                >
                  <source
                    src={hero}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>
      {/* Hackathon Activities & Venues */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Hackathon Activities & Venues</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A two-day immersive experience across two amazing locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Day 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="bg-blue-600 p-4 text-white">
                <h3 className="text-xl font-bold">Day 1: Saturday, April 5, 2025</h3>
                <div className="flex items-center mt-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>10:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Location</h4>
                    <p className="text-slate-600">Capstone ALX Tech Hub, Lideta/Mexico</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sparkles className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Activities</h4>
                    <ul className="text-slate-600 list-disc list-inside space-y-1 mt-2">
                      <li>Innovation workshops</li>
                      <li>Team building</li>
                      <li>MVP development</li>
                      <li>Technical review sessions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="bg-amber-600 p-4 text-white">
                <h3 className="text-xl font-bold">Day 2: Sunday, April 6, 2025</h3>
                <div className="flex items-center mt-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>10:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Location</h4>
                    <p className="text-slate-600">Kuriftu African Village, Burayu</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sparkles className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Activities</h4>
                    <ul className="text-slate-600 list-disc list-inside space-y-1 mt-2">
                      <li>Final pitch preparations</li>
                      <li>Presentation to judges</li>
                      <li>Awards ceremony</li>
                      <li>Extended networking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HackathonSchedule />
    </div>
      </section>

      {/* Meet the Organizers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Jointly Organized By</h2>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {organizers.map((organizer, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                <div className="p-3 bg-slate-50 rounded-lg inline-block mb-4">{organizer.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{organizer.name}</h3>
                <p className="text-slate-600">{organizer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HackathonPeople />
    </div>
      </section>

      {/* Prizes & Opportunities */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <Award className="h-5 w-5 text-amber-400 mr-2" />
              <span className="text-sm font-medium text-white">Exciting Prizes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prizes & Opportunities</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              The 2025 Hospitality Hackathon offers a platform not just for winning impressive prizes but also for
              engaging directly with top industry leaders and enhancing your professional skills through hands-on
              challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {prize.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{prize.title}</h3>
                <div className="text-3xl font-bold text-amber-400 mb-4">{prize.value}</div>
                <p className="text-blue-100">{prize.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Compete for Prizes & Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                  <Trophy className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Win Big</h4>
                  <p className="text-blue-100">
                    Secure 150k ETB for 1st place, along with exclusive Kuriftu packages, ALX hub access, and other
                    rewards.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                  <Lightbulb className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Incubation Support</h4>
                  <p className="text-blue-100">
                    Gain access to a 3-month weVenture Incubation program to help refine and launch your solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                  <Users className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Expand Your Network</h4>
                  <p className="text-blue-100">Connect with industry leaders and potential investors.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                  <Star className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Gain Recognition</h4>
                  <p className="text-blue-100">
                    Showcase your skills and solutions to an esteemed panel of judges, receive industry-wide
                    recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/registration"
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors shadow-lg"
            >
              Register to Compete
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* How to Participate & Contact Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How to Participate</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Join us for this exciting opportunity to innovate in Ethiopia's hospitality industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Register</h3>
              <p className="text-slate-600 mb-4">Sign up by March 30th at our official registration site.</p>
              <Link
                to="/registration"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Register now
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="p-3 bg-amber-50 rounded-lg inline-block mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Eligibility</h3>
              <p className="text-slate-600 mb-4">
                Open to individual innovators and teams. Need a team? Register and we'll connect you.
              </p>
              <Link to="/about-us" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
                Learn more
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="p-3 bg-emerald-50 rounded-lg inline-block mb-4">
                <Mail className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Contact Us</h3>
              <p className="text-slate-600 mb-4">Have questions? Reach out to us via email or phone.</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-600">info@hospitalityhackathon2025.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-600">+251 91 234 5678</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col justify-end gap-20 pb-2 pt-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">SOLVE, CREATE, DISRUPT!</h2>
            <p className="text-xl mb-8">
              Join us for two days of innovation, collaboration, and fun at the Hospitality Hackathon 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/registration"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-medium rounded-lg transition-colors shadow-lg hover:bg-blue-50"
              >
                Register Now
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors border border-white/20"
              >

                Contact Us
              </Link>
            </div >
            
            
          </div>
        </div>
      
      </section>
     
     
    </div>
  )
}

