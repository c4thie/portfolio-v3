import React from 'react'
import Image from 'next/image'

const MakeUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">MakeUs: Social Platform Design</h1>
        <p className="text-xl text-gray-600 mb-8">A case study on improving user engagement and accessibility for makeup enthusiasts</p>
        <div className="relative h-[380px] w-full rounded-xl overflow-hidden">
          <Image
            src="/mockups/2.png"
            alt="MakeUs Project Preview"
            fill
            className="object-cover h-[110vh]"
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Duration</h3>
              <p className="text-gray-600">1 week</p>
              <h3 className="text-2xl font-semibold mb-3 mt-6">Role</h3>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Tools Used</h3>
              <ul className="text-gray-600">
                <li>Figma</li>
                <li>Canva</li>
                <li>Coolors</li>
                <li>UserTesting.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="container mx-auto px-4 pt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Came across a post on Reddit--while platforms like Goodreads and Letterboxd serve book and film enthusiasts respectively,
            makeup enthusiasts lacked a dedicated social platform to discover, review, and track their
            favorite products. MakeUs aims to fill this gap by creating an engaging community-driven
            platform specifically designed for makeup and skincare lovers.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-16">The Solution</h2>
          <p className="text-gray-600 mb-8 text-lg">
            I designed a clean, modern interface that prioritizes content discovery and review, while maintaining high accessibility standards.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">1. Research</h3>
              <p className="text-gray-600 text-lg">
                Conducted user interviews, competitive analysis, and usability testing to identify
                pain points and opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">2. Ideation</h3>
              <p className="text-gray-600 text-lg">
                Created user flows, wireframes, and interactive prototypes to test various solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">3. Design</h3>
              <p className="text-gray-600 text-lg">
                Developed high-fidelity designs with a focus on accessibility and visual hierarchy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">4. Testing</h3>
              <p className="text-gray-600 text-lg">
                Conducted multiple rounds of user testing and iteration to refine the final design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MakeUs