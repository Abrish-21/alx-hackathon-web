import { Button } from "../components/ui/Button"
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

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
     

      {/* Hero Section */}
      <section className=" bg-gradient-to-br from-blue-700/20 to-amber-600/20 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(20,1fr)] h-full w-full">
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
              We blend <span className="text-amber-600">Hospitality</span> and <span className="text-blue-800">Innovation</span>
            </h1>
            <p className="text-black mx-auto max-w-[700px] text-white/80 md:text-xl">
              Bridging technology and hospitality innovation to transform Ethiopia's hospitality landscape
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
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
      <section className="w-full py-12 md:py-24">
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
                  className="inline-flex items-center justify-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors shadow-lg"
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

