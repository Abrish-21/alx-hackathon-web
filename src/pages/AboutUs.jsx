import { Card, CardContent } from "../components/ui/Card"
import OrganizersShowcase from "../components/ui/OrganizersShowcase"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

// Import icons (using a simple implementation since we don't have lucide-react)
const Calendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
)

const Lightbulb = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>
)

const Zap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
)

const Code = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
)

const Users = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)

// Additional icons for problem statements
const BookOpen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
)

const Heart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
)

const MessageSquare = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
)

const ClipboardCheck = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <path d="m9 14 2 2 4-4"></path>
  </svg>
)

const CheckCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
)

export default function AboutUs() {
  return (
    <div className="flex min-h-screen max-w-full overflow-hidden flex-col bg-white">
      <section className=" bg-gradient-to-br from-blue-700/20 to-amber-600/20 py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(20,1fr)] overflow-hidden h-full w-full">
            {Array(800)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center justify-center text-black text-2xl">
                  +
                </div>
              ))}
          </div>
        </div>
        <div className="container relative md:py-20 px-4 md:px-6 text-black">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
              <Calendar className="mr-1 h-4 w-4" />
              <span>April 5-6, 2025</span>
            </div>
            <h1 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl">
              We blend <span className="text-amber-600">Hospitality</span> and{" "}
              <span className="text-blue-800">Innovation</span>
            </h1>
            <p className=" mx-auto max-w-[700px] text-black md:text-xl">
              Bridging technology and hospitality innovation to transform Ethiopia's hospitality landscape
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12  mt-20 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                <Lightbulb className="mr-1 h-4 w-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Bridging Technology and Hospitality</h2>
              <p className="text-gray-500 md:text-lg">
                The Hospitality Hackathon 2025 is Ethiopia's premier event dedicated to fostering innovation in the
                hospitality sector. We bring together tech visionaries, entrepreneurs, and hospitality leaders to
                collaborate on solutions that address the unique challenges and opportunities in Ethiopia's growing
                tourism and hospitality industry.
              </p>
              <p className="text-gray-500 md:text-lg">
                Our mission is to catalyze digital transformation in the hospitality sector, creating a platform where
                technology meets hospitality expertise to develop innovative, scalable, and impactful solutions.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/images/hospitality-innovation.jpg"
                alt="Hospitality Hackathon"
                className="rounded-lg object-cover shadow-lg w-full max-w-[600px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600">
              <Zap className="mr-1 h-4 w-4" />
              <span>Problem Statement</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">Challenges We're Addressing</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
              Ethiopia's hospitality industry faces unique challenges that require innovative solutions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="mb-4 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    <line x1="8" x2="16" y1="21" y2="21"></line>
                    <line x1="12" x2="12" y1="17" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Infrastructure Limitations</h3>
                <p className="mt-2 text-gray-500">
                  Limited technological infrastructure in many hospitality establishments, creating barriers to digital
                  transformation and modern guest experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="mb-4 text-blue-600">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold">Guest Experience Gaps</h3>
                <p className="mt-2 text-gray-500">
                  Inconsistent guest experiences across different properties and regions, with opportunities to enhance
                  service delivery through technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="mb-4 text-blue-600">
                  <Code className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold">Digital Skills Shortage</h3>
                <p className="mt-2 text-gray-500">
                  A gap in digital skills and technology adoption among hospitality professionals, limiting the sector's
                  ability to innovate and compete globally.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Problem Statements Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Hackathon 2025 –  Problem Statements
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Problem Statement 1 */}
              <Card className="bg-white border-t-4 border-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-3 flex-shrink-0">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">1. Revolutionizing Learning & Development in Hospitality</h3>
                      <p className="mt-2 text-gray-600 font-medium">
                        How can we create a scalable, tech-driven learning and development system that enhances employee
                        training, ensures consistent service quality, and improves retention in the hospitality
                        industry?
                      </p>
                      <div className="mt-4">
                        <h4 className="font-semibold text-blue-700 mb-2">Key Focus Areas:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>
                              AI-powered training modules for front-line staff, leadership, and specialized skills
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>Gamification of employee learning & skill certification programs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>Personalized career pathing & mentorship through digital platforms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>Multilingual training tools for a diverse workforce</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Problem Statement 2 */}
              <Card className="bg-white border-t-4 border-amber-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 text-amber-600 rounded-full p-3 flex-shrink-0">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">2. Upgrading Kuriftu's Membership & Loyalty Program</h3>
                      <p className="mt-2 text-gray-600 font-medium">
                        How can we enhance Kuriftu's membership program to deliver greater value, increase customer
                        retention, and incentivize direct bookings while creating exclusive experiences for loyal
                        guests?
                      </p>
                      <div className="mt-4">
                        <h4 className="font-semibold text-amber-700 mb-2">Key Focus Areas:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>AI-driven dynamic reward system based on guest spending & engagement</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>Personalized membership tiers with customized perks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>Seamless digital membership platform (app or web-based) with instant rewards</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>Integration of experiences (spa, dining, adventure) into loyalty points</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Problem Statement 3 */}
              <Card className="bg-white border-t-4 border-green-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 text-green-600 rounded-full p-3 flex-shrink-0">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        3. Smart Feedback Collection & Real-Time Response Mechanisms
                      </h3>
                      <p className="mt-2 text-gray-600 font-medium">
                        How can we implement a smart, automated system to collect, analyze, and act on guest feedback in
                        real time, ensuring a faster and more effective response to enhance customer satisfaction?
                      </p>
                      <div className="mt-4">
                        <h4 className="font-semibold text-green-700 mb-2">Key Focus Areas:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>AI chatbots & digital kiosks for instant guest feedback collection</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Real-time sentiment analysis & response tracking for guest issues</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Automated escalation system for urgent service concerns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Integration of feedback insights into staff training & operational improvements</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Problem Statement 4 */}
              <Card className="bg-white border-t-4 border-purple-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 text-purple-600 rounded-full p-3 flex-shrink-0">
                      <ClipboardCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">4. Digitizing Resort Inspections & Checklist Management</h3>
                      <p className="mt-2 text-gray-600 font-medium">
                        How can we develop a digital tool to simplify and standardize inspections, allowing managers and
                        directors to efficiently collect, track, and act on operational and physical maintenance issues
                        across Kuriftu's resorts?
                      </p>
                      <div className="mt-4">
                        <h4 className="font-semibold text-purple-700 mb-2">Key Focus Areas:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                            <span>
                              Mobile-friendly digital checklists for inspections (housekeeping, maintenance, F&B, etc.)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                            <span>Automated issue reporting system with photo & video upload capabilities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                            <span>Task assignment & follow-up tracking for corrective actions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                            <span>AI-powered trend analysis to predict recurring operational challenges</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers Showcase Section */}
      <OrganizersShowcase />

      {/* Goals Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(20,1fr)] h-full w-full">
            {Array(800)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center justify-center text-white text-2xl">
                  +
                </div>
              ))}
          </div>
        </div>
        <div className="container relative px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Our Goals</h2>
            <p className="mt-4 text-white/80 md:text-xl">
              The Hospitality Hackathon 2025 aims to achieve the following outcomes:
            </p>
            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-start">
                <div className="mr-3 rounded-full bg-blue-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white md:text-lg">
                  <strong>Develop Innovative Solutions:</strong> Create practical, implementable tech solutions that
                  address real challenges in Ethiopia's hospitality sector.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 rounded-full bg-blue-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white md:text-lg">
                  <strong>Foster Collaboration:</strong> Build lasting partnerships between tech innovators and
                  hospitality industry stakeholders.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 rounded-full bg-blue-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white md:text-lg">
                  <strong>Enhance Digital Skills:</strong> Improve technological literacy and digital skills among
                  hospitality professionals.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 rounded-full bg-blue-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white md:text-lg">
                  <strong>Showcase Ethiopia:</strong> Position Ethiopia's hospitality sector as innovative and
                  forward-thinking on the global stage.
                </p>
              </li>
            </ul>
            <Link
              to="/registration"
              className="inline-flex items-center justify-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors shadow-lg mt-8"
            >
              Register Now
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Join Us in Transforming Hospitality</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Be part of Ethiopia's first hospitality innovation hackathon and help shape the future of the industry.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                to="/registration"
                className="inline-flex items-center justify-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors shadow-lg"
              >
                Register Now
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">
                <span className="text-blue-600">&lt;</span>
                <span>Hospitality</span>
                <span className="text-blue-600">Hackathon</span>
                <span className="text-blue-600">/&gt;</span>
              </span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Hospitality Hackathon. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <a href="#" className="text-xs text-gray-500 hover:underline underline-offset-4">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-500 hover:underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:underline underline-offset-4">
                Code of Conduct
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

