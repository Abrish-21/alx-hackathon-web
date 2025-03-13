"use client"

import { useState } from "react"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState({
    type: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (status.type === "error") {
      setStatus({ type: "", message: "" })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setShowSuccess(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setStatus({
          type: "error",
          message: data.message || "Error sending message. Please try again.",
        })
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please try again later.",
      })
    }
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-950 to-indigo-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Tech background elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full w-full grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-cyan-400/20 h-full"></div>
            ))}
          </div>
          <div className="h-full w-full grid grid-rows-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-b border-cyan-400/20 w-full"></div>
            ))}
          </div>
        </div>

        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400 opacity-20"
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          />
        ))}

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
          <div className="bg-white/10 backdrop-blur-sm py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 text-center border border-cyan-500/30">
            <div className="mb-6">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500/20 border border-cyan-500/50">
                <svg className="h-10 w-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 font-mono">
              <span className="text-cyan-400">&gt;</span> Message Sent Successfully!
            </h2>
            <p className="text-blue-100 mb-8">
              Thank you for contacting us! We have received your message and will get back to you as soon as possible.
              You will receive a confirmation email shortly.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full flex justify-center py-2 px-4 border border-cyan-500/50 rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center font-mono">
                  <span className="text-cyan-300 mr-1">&gt;</span>
                  Send Another Message
                </span>
                <span className="absolute inset-0 w-full h-full">
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent"
                    style={{
                      animation: "shimmer 3s infinite linear",
                    }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-indigo-900 py-12 relative overflow-hidden">
      {/* Circuit board pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fillOpacity='0.4' fillRule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-cyan-400/20 h-full"></div>
          ))}
        </div>
        <div className="h-full w-full grid grid-rows-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-b border-cyan-400/20 w-full"></div>
          ))}
        </div>
      </div>

      {/* Animated particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-cyan-400 opacity-20"
          style={{
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-2 font-mono">
            <span className="text-cyan-400">&lt;</span>
            Contact Us
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto">
            Have questions about the ALX Hackathon? We're here to help!
            <span
              className="inline-block ml-1 w-2 h-5 bg-cyan-400 align-middle"
              style={{ animation: "blink 1s infinite" }}
            />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-cyan-500/20 rounded-full mb-4 border border-cyan-500/50 group-hover:border-cyan-400 transition-colors">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white font-mono">
                <span className="text-cyan-400">&gt;</span> Phone
              </h3>
              <p className="mt-2 text-blue-100">+251 911 223344</p>
            </div>

            <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-cyan-500/20 rounded-full mb-4 border border-cyan-500/50 group-hover:border-cyan-400 transition-colors">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white font-mono">
                <span className="text-cyan-400">&gt;</span> Email
              </h3>
              <p className="mt-2 text-blue-100">hackathon@alxethiopia.com</p>
            </div>

            <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-cyan-500/20 rounded-full mb-4 border border-cyan-500/50 group-hover:border-cyan-400 transition-colors">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white font-mono">
                <span className="text-cyan-400">&gt;</span> Location
              </h3>
              <p className="mt-2 text-blue-100">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-cyan-500/30 relative">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400/70"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-400/70"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-400/70"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-400/70"></div>

          {/* Terminal header */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs py-1 px-4 rounded-t-md font-mono">
            contact_form.exe
          </div>

          {status.message && (
            <div
              className={`mb-6 p-4 rounded-md ${status.type === "error" ? "bg-red-900/30 text-red-300 border border-red-500/50" : "bg-green-900/30 text-green-300 border border-green-500/50"}`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-100 font-mono">
                  <span className="text-cyan-400">&gt;</span> Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className=" outline-none mt-1 block w-full rounded-lg border border-cyan-500/50 bg-blue-900/20 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5 hover:border-cyan-400 transition-colors duration-200 text-white placeholder-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 font-mono">
                  <span className="text-cyan-400">&gt;</span> Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full outline-none  rounded-lg border border-cyan-500/50 bg-blue-900/20 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5 hover:border-cyan-400 transition-colors duration-200 text-white placeholder-blue-300"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-blue-100 font-mono">
                <span className="text-cyan-400">&gt;</span> Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full outline-none rounded-lg border border-cyan-500/50 bg-blue-900/20 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5 hover:border-cyan-400 transition-colors duration-200 text-white placeholder-blue-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-100 font-mono">
                <span className="text-cyan-400">&gt;</span> Message *
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="outline-none mt-1 block w-full rounded-lg border border-cyan-500/50 bg-blue-900/20 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm p-2.5 hover:border-cyan-400 transition-colors duration-200 text-white placeholder-blue-300"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-cyan-500/50 rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transform hover:scale-[1.02] transition-all duration-200 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center font-mono">
                  <span className="text-cyan-300 mr-1">&gt;</span>
                  Send Message
                </span>
                <span className="absolute inset-0 w-full h-full">
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent"
                    style={{
                      animation: "shimmer 3s infinite linear",
                    }}
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tech-themed floating elements */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <div
          className="text-xs font-mono text-cyan-400 bg-black/20 backdrop-blur-sm p-2 rounded border border-cyan-500/20"
          style={{ animation: "pulse 4s infinite" }}
        >
          <div>SYSTEM: OPERATIONAL</div>
          <div>NETWORK: CONNECTED</div>
          <div>SECURITY: ENABLED</div>
        </div>
      </div>

      <div className="absolute bottom-20 left-10 hidden lg:block">
        <div
          className="text-xs font-mono text-amber-400 bg-black/20 backdrop-blur-sm p-2 rounded border border-amber-500/20"
          style={{ animation: "pulse 4s infinite ease-in-out", animationDelay: "2s" }}
        >
          <div>STATUS: ONLINE</div>
          <div>
            UPTIME: {Math.floor(Math.random() * 24)}h {Math.floor(Math.random() * 60)}m
          </div>
          <div>MESSAGES: PROCESSING</div>
        </div>
      </div>

      <style jsx>{`
      `}</style>
    </div>
  )
}

export default ContactUs

