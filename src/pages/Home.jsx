"use client"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import alxl from '../../public/assets/images/alxl-clean.png'
import wev from '../../public/assets/images/wev-clean.png'
import kuri from '../../public/assets/images/kuri-clean.png'
import {
  Calendar,
  MapPin,
  Award,
  Users,
  ChevronRight,
  Clock,
  Hotel,
  Lightbulb,
  Trophy,
  ArrowRight,
  Star,
  Phone,
  Mail,
  Briefcase,
  Sparkles,
  Cpu,
  Zap,
  ArrowUpRight,
  Code2,
  Terminal,
  Braces,
} from "lucide-react"
import HackathonPeople from "../components/ui/HackathonPeople"
import HackathonSchedule from "../components/ui/HackathonSchedule"

function useInView() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsInView(true); observer.unobserve(entry.target) }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, isInView]
}

// Color system
const ACCENT = "#D4952C"
const ACCENT_LIGHT = "#E8B44C"
const ACCENT_HOVER = "#C8862A"
const PURPLE = "#7C3AED"
const PURPLE_DARK = "#6D28D9"

// Shared button gradient (purple → indigo → dark blue)
const btnGradient = "linear-gradient(135deg, #7C3AED 0%, #4F46E5 50%, #3730a3 100%)"
const btnShadow = "0 4px 14px rgba(99, 58, 237, 0.3)"

// Shared glassy card style
const glassCard = "rounded-2xl border border-white/60 bg-white/50 shadow-sm hover:shadow-md hover:bg-white/70 transition-all duration-300"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const [activitiesRef, activitiesInView] = useInView()
  const [organizersRef, organizersInView] = useInView()
  const [prizesRef, prizesInView] = useInView()
  const [participateRef, participateInView] = useInView()

  useEffect(() => {
    const targetDate = new Date("2026-04-04T10:00:00+03:00").getTime()
    const update = () => {
      const diff = targetDate - Date.now()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        })
      }
    }
    update()
    const i = setInterval(update, 1000)
    return () => clearInterval(i)
  }, [])

  useEffect(() => { setIsLoaded(true) }, [])

  const prizes = [
    { title: "Grand Prize", value: "150k ETB", description: "Cash prize plus 3-month weVenture Incubation program", icon: <Trophy className="h-6 w-6" /> },
    { title: "Exclusive Packages", value: "Kuriftu Packages", description: "Luxury stays and experiences at Kuriftu Resorts", icon: <Hotel className="h-6 w-6" /> },
    { title: "Hub Access", value: "ALX Hub Access", description: "Workspace and resources for continued development", icon: <Briefcase className="h-6 w-6" /> },
  ]

  const organizers = [
    { name: "ALX Ethiopia", description: "Empowering young Ethiopians through premier technology training and entrepreneurship, driving the digital economy forward.", icon: alxl },
    { name: "Kuriftu Resorts", description: "Setting hospitality standards with luxury service and inspiring venues, perfect for sparking creativity.", icon: kuri },
    { name: "weVenture Hub", description: "Fostering startup growth and innovation, providing resources and support to entrepreneurs.", icon: wev },
  ]

  const steps = [
    { number: "01", title: "Register", description: "Sign up at our official registration site and secure your team's spot.", icon: <Calendar className="h-5 w-5" />, link: "/registration", linkText: "Register now" },
    { number: "02", title: "Build Your Team", description: "Open to individual innovators and teams. Need a team? Register and we'll connect you.", icon: <Users className="h-5 w-5" />, link: "/about-us", linkText: "Learn more" },
    { number: "03", title: "Compete & Win", description: "Present your solution to judges and compete for prizes, incubation, and recognition.", icon: <Trophy className="h-5 w-5" />, link: "/resources", linkText: "View resources" },
  ]

  return (
    <div className={`bg-slate-50 min-h-screen transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* HERO — Purple-blue gradient, reference-inspired           */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[82vh] flex items-center -mt-[56px] pt-[56px] lg:-mt-[72px] lg:pt-[72px]" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 20%, #312e81 45%, #4338ca 65%, #3730a3 85%, #1e293b 100%)" }}>

        {/* Star cross pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.15]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full animate-orb" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-[600px] h-[600px] rounded-full animate-orb-delay" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)" }}></div>

        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] animate-gradient" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), rgba(59,130,246,0.6), transparent)", backgroundSize: "200% 100%" }}></div>

        {/* Floating tech icons */}
        <div className="absolute top-28 left-[8%] text-white/[0.04] animate-float hidden lg:block"><Braces className="h-16 w-16" /></div>
        <div className="absolute top-44 right-[10%] text-white/[0.04] hidden lg:block" style={{ animation: "float 6s ease-in-out 2s infinite" }}><Terminal className="h-12 w-12" /></div>
        <div className="absolute bottom-48 left-[12%] text-white/[0.04] hidden lg:block" style={{ animation: "float 7s ease-in-out 1s infinite" }}><Code2 className="h-14 w-14" /></div>
        <div className="absolute bottom-40 right-[7%] text-white/[0.05] hidden lg:block" style={{ animation: "float 5s ease-in-out 3s infinite" }}><Cpu className="h-10 w-10" /></div>

        <div className="container mx-auto px-4 pt-16 pb-28 sm:pt-20 sm:pb-32 md:pt-24 md:pb-40 relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            {/* AI Badge — glassy pill */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8" style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            }}>
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></div>
              <Cpu className="h-3.5 w-3.5 text-violet-300" />
              <span className="text-xs font-medium tracking-wide text-white/80 uppercase">AI-Powered Hospitality Hackathon</span>
            </div>

            {/* Title */}
            <h1 className="animate-fade-in-up-delay-1 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 leading-[1.08] tracking-tight text-white">
              <span className="sm:whitespace-nowrap">
                Hospitality{" "}
                <span className="animate-gradient bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT_LIGHT}, ${ACCENT}, ${ACCENT_LIGHT})`, backgroundSize: "200% 200%" }}>
                  Hackathon
                </span>
              </span>{" "}
              <span className="text-white/80">2026</span>
            </h1>

            {/* Tagline */}
            <p className="animate-fade-in-up-delay-2 text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-white/40 mb-7">
              Solve &middot; Create &middot; Disrupt
            </p>

            {/* Date & Venue — glassy pills */}
            <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-3 mb-9">
              {[
                { icon: <Calendar className="h-3.5 w-3.5 text-violet-300" />, text: "April 4 & 18, 2026" },
                { icon: <MapPin className="h-3.5 w-3.5 text-violet-300" />, text: "ALX Tech Hub & Kuriftu African Village" },
              ].map((pill, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}>
                  {pill.icon}
                  <span className="text-sm font-medium text-white/70">{pill.text}</span>
                </div>
              ))}
            </div>

            {/* Countdown — glassy boxes */}
            <div className="animate-fade-in-up-delay-3 grid grid-cols-4 gap-3 sm:gap-4 max-w-xs mx-auto mb-10">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Sec" },
              ].map((item, i) => (
                <div key={i} className="animate-count-pulse rounded-2xl p-2.5 sm:p-3" style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}>
                  <div className="text-xl sm:text-2xl font-bold text-white tabular-nums font-mono">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/30 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="animate-fade-in-up-delay-4 flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0">
              <Link
                to="/registration"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold rounded-xl transition-all duration-200 text-white text-sm"
                style={{ background: btnGradient, boxShadow: btnShadow }}
              >
                Register Your Team
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-medium rounded-xl text-white/90 text-sm transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#f8fafc">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* ACTIVITIES & VENUES                                       */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section ref={activitiesRef} className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-14 ${activitiesInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/60 text-slate-500 text-xs font-medium tracking-wide uppercase mb-4 shadow-sm">
              <MapPin className="h-3.5 w-3.5" />
              Two Venues, Two Days
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Activities & Venues</h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto ${activitiesInView ? "animate-fade-in-up-delay-2" : "opacity-0"}`}>
            {/* Day 1 */}
            <div className={`${glassCard} overflow-hidden p-1.5`}>
              <div className="rounded-xl p-5 text-white" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider mb-1 text-violet-300">Day 1</div>
                    <h3 className="text-lg font-bold">Saturday, April 4, 2026</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-white/50">
                    <Clock className="h-4 w-4" />
                    10 AM – 6 PM
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-violet-50 text-violet-600 mt-0.5"><MapPin className="h-4 w-4" /></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">ALX Tech Hub</div>
                    <div className="text-sm text-slate-500">Lideta, Addis Ababa</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-violet-50 text-violet-600 mt-0.5"><Sparkles className="h-4 w-4" /></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 mb-1.5">Activities</div>
                    <div className="flex flex-wrap gap-2">
                      {["Innovation workshops", "Team building", "MVP development", "Technical reviews"].map((item) => (
                        <span key={item} className="inline-flex px-2.5 py-1 rounded-lg bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className={`${glassCard} overflow-hidden p-1.5`}>
              <div className="rounded-xl p-5 text-white" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_HOVER} 100%)` }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider mb-1 text-white/70">Day 2</div>
                    <h3 className="text-lg font-bold">Saturday, April 18, 2026</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-white/60">
                    <Clock className="h-4 w-4" />
                    10 AM – 5 PM
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl mt-0.5" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}><MapPin className="h-4 w-4" /></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Kuriftu African Village</div>
                    <div className="text-sm text-slate-500">Burayu</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl mt-0.5" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}><Sparkles className="h-4 w-4" /></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 mb-1.5">Activities</div>
                    <div className="flex flex-wrap gap-2">
                      {["Final pitches", "Judging panel", "Awards ceremony", "Networking"].map((item) => (
                        <span key={item} className="inline-flex px-2.5 py-1 rounded-lg bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-white border-t border-slate-100">
        <HackathonSchedule />
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* ORGANIZERS — logos on clean bg, no dark highlight          */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section ref={organizersRef} className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-14 ${organizersInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/60 text-slate-500 text-xs font-medium tracking-wide uppercase mb-4 shadow-sm">
              <Users className="h-3.5 w-3.5" />
              Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Jointly Organized By</h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto ${organizersInView ? "animate-fade-in-up-delay-2" : "opacity-0"}`}>
            {organizers.map((org, i) => (
              <div key={i} className={`${glassCard} p-6 text-center`}>
                <div className="h-16 w-full mb-5 flex items-center justify-center">
                  <img className={`w-auto object-contain ${org.icon === alxl ? 'max-h-14 min-w-[120px] max-w-[140px]' : 'max-h-14 max-w-[160px]'}`} src={org.icon} alt={org.name} />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{org.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{org.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People */}
      <section className="bg-white">
        <HackathonPeople />
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PRIZES — Purple-dark section matching hero                */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section ref={prizesRef} className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 35%, #312e81 70%, #3730a3 100%)" }}>
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-14 ${prizesInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase text-white/50 mb-4" style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            }}>
              <Award className="h-3.5 w-3.5 text-violet-300" />
              Prizes & Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Compete & Win</h2>
            <p className="text-base text-white/40 max-w-2xl mx-auto">
              The 2026 Hospitality Hackathon offers impressive prizes, direct engagement with industry leaders, and hands-on skill development.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 max-w-5xl mx-auto ${prizesInView ? "animate-fade-in-up-delay-2" : "opacity-0"}`}>
            {prizes.map((prize, i) => (
              <div key={i} className="group rounded-2xl p-6 transition-all duration-300" style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-violet-300" style={{ background: "rgba(139,92,246,0.15)" }}>
                  {prize.icon}
                </div>
                <div className="text-sm text-white/40 mb-1">{prize.title}</div>
                <div className="text-2xl font-bold text-white mb-2">{prize.value}</div>
                <p className="text-sm text-white/40 leading-relaxed">{prize.description}</p>
              </div>
            ))}
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12 ${prizesInView ? "animate-fade-in-up-delay-3" : "opacity-0"}`}>
            {[
              { icon: <Trophy className="h-4 w-4" />, title: "Win Big", desc: "150k ETB, Kuriftu packages, ALX hub access" },
              { icon: <Lightbulb className="h-4 w-4" />, title: "Incubation", desc: "3-month weVenture program to launch your solution" },
              { icon: <Users className="h-4 w-4" />, title: "Network", desc: "Connect with industry leaders and investors" },
              { icon: <Star className="h-4 w-4" />, title: "Recognition", desc: "Showcase to an esteemed panel of judges" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div className="p-1.5 rounded-lg mt-0.5 text-violet-300" style={{ background: "rgba(139,92,246,0.12)" }}>{item.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.title}</div>
                  <div className="text-xs text-white/35">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/registration"
              className="group inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all duration-200 text-sm"
              style={{ background: btnGradient, boxShadow: btnShadow }}
            >
              Register to Compete
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* HOW TO PARTICIPATE                                        */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section ref={participateRef} className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-14 ${participateInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/60 text-slate-500 text-xs font-medium tracking-wide uppercase mb-4 shadow-sm">
              <Zap className="h-3.5 w-3.5" />
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">How to Participate</h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto ${participateInView ? "animate-fade-in-up-delay-2" : "opacity-0"}`}>
            {steps.map((step, i) => (
              <div key={i} className={`${glassCard} p-6 relative overflow-hidden group`}>
                <div className="absolute -top-2 -right-2 text-7xl font-bold text-slate-100/50 select-none group-hover:text-slate-200/50 transition-colors duration-300">{step.number}</div>
                <div className="relative z-10">
                  <div className="p-2.5 rounded-xl bg-white/80 border border-slate-200/60 text-slate-500 inline-flex mb-4 shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">{step.description}</p>
                  <Link to={step.link} className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors" style={{ color: PURPLE }}>
                    {step.linkText}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 ${participateInView ? "animate-fade-in-up-delay-3" : "opacity-0"}`}>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Mail className="h-4 w-4 text-slate-400" />
              info@hospitalityhackathon.et
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Phone className="h-4 w-4 text-slate-400" />
              +251 91 234 5678
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* CTA — Purple gradient matching hero                       */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 35%, #312e81 70%, #3730a3 100%)" }}>
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Ready to build the future of hospitality?
            </h2>
            <p className="text-lg text-white/40 mb-8 max-w-xl mx-auto">
              Join innovators, developers, and industry leaders for two days of creation, competition, and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/registration"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-200"
                style={{ background: btnGradient, boxShadow: btnShadow }}
              >
                Register Your Team
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white/90 font-medium rounded-xl transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
