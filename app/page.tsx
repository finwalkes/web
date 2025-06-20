'use client'

import { useState } from "react"
import { projects } from "@/data/projects"
import FrameworkFilter from "@/components/FrameworkFilter"
import Image from "next/image"

const categories = [...new Set(projects.map((p) => p.category))]

export default function Home() {
  const [selected, setSelected] = useState("")
  const filtered = selected ? projects.filter(p => p.category === selected) : projects

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-12 px-4">
        <Image
          src="/images/your-photo.png"
          alt="Your Name"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-500 shadow-lg mb-3"
        />
        <h1 className="text-4xl font-bold mb-1">Bagus Wahyu Pratomo</h1>
        <p className="text-blue-600 text-lg font-medium mb-3">Web Developer • AI Enthusiast</p>
        <p className="max-w-xl text-gray-600 mb-4">
          Selamat datang di portofolio saya! Saya membangun aplikasi modern untuk web, backend, dan AI.  
          <span className="ml-1">⚡</span>
        </p>
        <div className="flex gap-2 justify-center">
          <a href="https://github.com/finwalkes" className="px-4 py-1 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/bagus-wahyu-pratomo" className="px-4 py-1 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Filter */}
      <div className="max-w-5xl mx-auto px-4">
        <FrameworkFilter categories={categories} selected={selected} onSelect={setSelected} />
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-4">
          {filtered.map(p => (
            <div key={p.title} className="bg-white rounded-2xl shadow-lg group hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 border overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                width={400}
                height={220}
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 mb-2">{p.category}</span>
                <h2 className="font-bold text-lg mb-2">{p.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                <div className="flex gap-2">
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition"
                  >Live Demo</a>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer"
                    className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-300 transition"
                  >Source</a>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {p.tags.map(t => (
                    <span key={t} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No project in this category yet.</p>
        )}
      </div>
    </div>
  )
}
