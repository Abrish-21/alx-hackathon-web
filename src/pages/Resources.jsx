import { useState, useEffect } from "react"
import {
  ChevronDown,
  ChevronUp,
  Coffee,
  Code,
  Palette,
  BookOpen,
  PenToolIcon as Tool,
  Database,
  FileText,
  Star,
  ExternalLink,
  Search,
  Hotel,
  Utensils,
  Wifi,
  Users,
  Award,
} from "lucide-react"

export default function Resources() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  // Articles and tutorials data
  const articles = [
    {
      title: "Getting Started with Hospitality Tech",
      description: "Learn the basics of how technology is transforming the hospitality industry.",
      icon: <Coffee className="h-6 w-6 text-amber-600" />,
      link: "https://hospitalitytech.com/",
      tags: ["Beginner", "Overview"],
      category: "overview",
    },
    {
      title: "Building User-Centric Hospitality Solutions",
      description: "Discover how to create tech solutions that prioritize guest experience.",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      link: "https://uxdesign.cc/",
      tags: ["UX/UI", "Design"],
      category: "design",
    },
    {
      title: "Data Analytics for Hospitality",
      description: "Leverage data to improve operations and guest satisfaction in hospitality settings.",
      icon: <Database className="h-6 w-6 text-indigo-600" />,
      link: "https://www.hospitalitynet.org/",
      tags: ["Data", "Analytics"],
      category: "technical",
    },
    {
      title: "Sustainable Tech in Hospitality",
      description: "Explore how technology can drive sustainability initiatives in hotels and resorts.",
      icon: <FileText className="h-6 w-6 text-emerald-600" />,
      link: "https://www.sustainablehospitality.tech/",
      tags: ["Sustainability", "Innovation"],
      category: "innovation",
    },
  ]

  // Tech tools and APIs
  const techTools = [
    {
      name: "Hotel Management APIs",
      description: "Access reservation systems, room management, and guest services APIs.",
      category: "API",
      icon: <Hotel className="h-6 w-6 text-blue-600" />,
      link: "https://www.roomraccoon.com/",
      bgColor: "bg-blue-50",
    },
    {
      name: "Customer Experience Tools",
      description: "Tools for feedback collection, sentiment analysis, and guest journey mapping.",
      category: "Software",
      icon: <Star className="h-6 w-6 text-amber-600" />,
      link: "https://www.zendesk.com/",
      bgColor: "bg-amber-50",
    },
    {
      name: "Payment Processing Solutions",
      description: "Secure payment gateways optimized for hospitality businesses.",
      category: "API",
      icon: <Code className="h-6 w-6 text-emerald-600" />,
      link: "https://stripe.com/",
      bgColor: "bg-emerald-50",
    },
    {
      name: "Location & Mapping Services",
      description: "APIs for location-based services, nearby attractions, and navigation.",
      category: "API",
      icon: <Wifi className="h-6 w-6 text-indigo-600" />,
      link: "https://www.mapbox.com/",
      bgColor: "bg-indigo-50",
    },
    {
      name: "AI & Chatbot Frameworks",
      description: "Build intelligent assistants for guest services and support.",
      category: "Framework",
      icon: <Users className="h-6 w-6 text-violet-600" />,
      link: "https://cloud.google.com/dialogflow",
      bgColor: "bg-violet-50",
    },
    {
      name: "Data Visualization Libraries",
      description: "Create compelling visualizations for hospitality analytics.",
      category: "Library",
      icon: <Database className="h-6 w-6 text-rose-600" />,
      link: "https://d3js.org/",
      bgColor: "bg-rose-50",
    },
  ]

  // Design resources
  const designResources = [
    {
      name: "Hospitality UI Kit",
      description: "Pre-designed UI components specifically for hospitality applications.",
      link: "https://ui8.net/",
      icon: <Palette className="h-6 w-6 text-purple-600" />,
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      name: "Hotel & Restaurant Icon Pack",
      description: "Specialized icons for hospitality-related features and services.",
      link: "https://thenounproject.com/",
      icon: <Utensils className="h-6 w-6 text-amber-600" />,
      bgGradient: "from-amber-50 to-yellow-50",
    },
    {
      name: "Color Palettes for Hospitality",
      description: "Curated color schemes that convey warmth and professionalism.",
      link: "https://coolors.co/",
      icon: <Palette className="h-6 w-6 text-blue-600" />,
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      name: "Hospitality Stock Photos",
      description: "High-quality images of hotels, restaurants, and guest experiences.",
      link: "https://unsplash.com/",
      icon: <Hotel className="h-6 w-6 text-emerald-600" />,
      bgGradient: "from-emerald-50 to-teal-50",
    },
  ]

  // FAQ data
  const faqs = [
    {
      question: "What skills do I need to participate in the hackathon?",
      answer:
        "Participants with various skills are welcome! We need developers, designers, business strategists, and hospitality experts. Teams perform best when they have a mix of technical and industry knowledge.",
    },
    {
      question: "Do I need to have a team before registering?",
      answer:
        "No, you can register individually and we'll help match you with teammates based on complementary skills. You can indicate your preference during registration.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Bring your laptop, charger, any design tools you prefer to use, and your creativity! We'll provide meals, snacks, and a comfortable workspace at both venues.",
    },
    {
      question: "How will projects be judged?",
      answer:
        "Projects will be evaluated based on innovation, feasibility, potential impact on the hospitality industry, technical implementation, and presentation quality. Our panel of judges includes both tech and hospitality industry experts.",
    },
    {
      question: "Will there be mentors available during the event?",
      answer:
        "Yes! We'll have mentors from both the tech and hospitality sectors available throughout the event to provide guidance, feedback, and industry insights.",
    },
    {
      question: "What happens after the hackathon?",
      answer:
        "Top teams will receive prizes and may have opportunities to further develop their solutions with our industry partners. All participants will gain valuable networking connections and experience.",
    },
  ]

  const filteredArticles = articles.filter(
    (article) =>
      (activeTab === "all" || article.category === activeTab) &&
      (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const filteredTools = techTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredDesignResources = designResources.filter(
    (resource) =>
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className={`bg-white min-h-screen transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-amber-600/20 z-0"></div>
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <Award className="h-5 w-5 text-amber-600 mr-2" />
              <span className="text-sm font-medium text-slate-800">Hospitality Hackathon 2025</span>
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Resources for <span className="text-blue-600">Innovation</span> in Hospitality
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to prepare for the Hospitality Hackathon 2025. Browse our curated collection of
              articles, tools, and resources to help you build innovative solutions.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full bg-white/90 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Search for resources, tools, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        {/* Articles and Tutorials */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="p-2 bg-blue-100 rounded-lg mr-3">
                <BookOpen className="h-7 w-7 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Articles & Tutorials</h2>
            </div>

            {/* Category Tabs */}
            <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === "all" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === "overview"
                    ? "bg-amber-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("design")}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === "design" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Design
              </button>
              <button
                onClick={() => setActiveTab("technical")}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === "technical"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Technical
              </button>
              <button
                onClick={() => setActiveTab("innovation")}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === "innovation"
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Innovation
              </button>
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 transform hover:-translate-y-1"
                >
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg inline-block">{article.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{article.title}</h3>
                  <p className="text-slate-600 mb-4">{article.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Read more
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl">
              <p className="text-slate-600">No articles found matching your search criteria.</p>
            </div>
          )}
        </section>

        {/* Tech Tools and APIs */}
        <section className="mb-24">
          <div className="flex items-center mb-8">
            <div className="p-2 bg-indigo-100 rounded-lg mr-3">
              <Code className="h-7 w-7 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Tech Tools & APIs</h2>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <Wifi className="h-10 w-10 text-indigo-600 mb-2" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Exclusive Access for Participants</h3>
                <p className="text-slate-700 mb-4 max-w-3xl">
                  We've partnered with leading technology providers to give you access to powerful tools and APIs that
                  can help you build innovative solutions for the hospitality industry.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/80 backdrop-blur-sm text-indigo-600 border border-indigo-100 px-3 py-1 rounded-full text-sm font-medium">
                    Free access during hackathon
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm text-indigo-600 border border-indigo-100 px-3 py-1 rounded-full text-sm font-medium">
                    Technical support available
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm text-indigo-600 border border-indigo-100 px-3 py-1 rounded-full text-sm font-medium">
                    Documentation provided
                  </span>
                </div>
              </div>
            </div>
          </div>

          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <div
                  key={index}
                  className={`${tool.bgColor} border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-white/80 backdrop-blur-sm rounded-lg">{tool.icon}</div>
                    <span className="bg-white/80 backdrop-blur-sm text-slate-600 text-xs px-3 py-1 rounded-full font-medium">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{tool.name}</h3>
                  <p className="text-slate-600 mb-4">{tool.description}</p>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-800 font-medium hover:text-blue-600 transition-colors"
                  >
                    Access tool
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl">
              <p className="text-slate-600">No tools found matching your search criteria.</p>
            </div>
          )}
        </section>

        {/* Design Resources */}
        <section className="mb-24">
          <div className="flex items-center mb-8">
            <div className="p-2 bg-amber-100 rounded-lg mr-3">
              <Palette className="h-7 w-7 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Design Resources</h2>
          </div>

          {filteredDesignResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDesignResources.map((resource, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${resource.bgGradient} border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg inline-block mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{resource.name}</h3>
                  <p className="text-slate-600 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-800 font-medium hover:text-blue-600 transition-colors"
                  >
                    Download
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl">
              <p className="text-slate-600">No design resources found matching your search criteria.</p>
            </div>
          )}
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <div className="flex items-center mb-8">
            <div className="p-2 bg-emerald-100 rounded-lg mr-3">
              <Tool className="h-7 w-7 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Frequently Asked Questions</h2>
          </div>

          {filteredFaqs.length > 0 ? (
            <div className="border border-slate-200 rounded-xl overflow-hidden divide-y bg-white shadow-sm">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="transition-all duration-300">
                  <button
                    className="flex justify-between items-center w-full p-6 text-left hover:bg-slate-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="font-medium text-lg text-slate-800">{faq.question}</span>
                    <div
                      className={`p-1 rounded-full transition-colors ${openFaqIndex === index ? "bg-blue-100" : "bg-slate-100"}`}
                    >
                      {openFaqIndex === index ? (
                        <ChevronUp
                          className={`h-5 w-5 ${openFaqIndex === index ? "text-blue-600" : "text-slate-400"}`}
                        />
                      ) : (
                        <ChevronDown
                          className={`h-5 w-5 ${openFaqIndex === index ? "text-blue-600" : "text-slate-400"}`}
                        />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-slate-600">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl">
              <p className="text-slate-600">No FAQs found matching your search criteria.</p>
            </div>
          )}
        </section>

        {/* Additional Help */}
        <section className="mt-16 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 z-0"></div>
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative z-10 p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Additional Help?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you prepare for the hackathon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                Contact Support
              </button>
              <button className="bg-blue-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-lg">
                Join Our Community
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

