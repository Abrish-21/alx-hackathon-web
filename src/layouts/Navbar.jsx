"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Terminal, X, Code } from "lucide-react"

const routes = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/resources", label: "Resources" },
  { path: "/registration", label: "Registration" },
  { path: "/contact-us", label: "Contact Us" },
]

// Helper function to conditionally join class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">
            <span className="text-primary">&lt;</span>
            Hospitality 
            <span className="text-primary">Hackathon</span>
            <span className="text-primary">/&gt;</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.path ? "text-primary font-semibold" : "text-slate-600",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-primary"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white backdrop-blur-sm md:hidden">
            <div className="fixed bg-white right-0 z-50 w-full max-w-xs  p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Terminal className="h-6 w-6 text-primary" />
                  <span className="font-bold">
                    <span className="text-primary">&lt;</span>
                    Hack
                    <span className="text-primary">Fest</span>
                    <span className="text-primary">/&gt;</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-primary"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-6">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={cn(
                      "flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary",
                      pathname === route.path ? "text-primary font-semibold" : "text-slate-600",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.path === "/" && <Code className="h-5 w-5" />}
                    {route.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-6">
                <button className="w-full rounded-md bg-primary px-4 py-2 text-white font-medium hover:bg-primary/90 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to={'/registration'} className="rounded-md bg-primary px-4 py-2 text-white font-medium hover:bg-primary/90 transition-colors">
          Register Now</Link>
          
          {/* <button className="">
            Register Now
          </button> */}
        </div>
      </div>
    </header>
  )
}

