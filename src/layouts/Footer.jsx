import React from "react"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">&copy; {new Date().getFullYear()} Hospitality Hackathon.</p>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-base text-gray-400">
            Made with ❤️ By 
            <a href="https://www.linkedin.com/in/abrham28/" target="_blank" rel="noopener noreferrer" className="text-blue-500">  Abrham Tilksew </a>  | 
            <a href="https://www.linkedin.com/in/sumeya-akmel-2a3b9b270/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Sumeya Akemel </a>  | 
            <a href="https://www.linkedin.com/in/yohana-mekuria-90607a2ab/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Yohana Mekuria </a>
            </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
