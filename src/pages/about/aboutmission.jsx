import { Eye, Target } from 'lucide-react'
import React from 'react'

export default function Aboutmission() {
    return (
        <div className="bg-primary/10 flex justify-center items-center md:py-20 py-10">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        className="border border-gray-200 shadow-lg p-6 rounded-lg flex flex-col items-start bg-white transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-2">
                        <Eye className="w-12 h-12 mb-4 text-primary" />
                        <h1 className="lg:text-2xl text-lg  font-bold text-primary">
                            Our Vision
                        </h1>
                        <h2 className="lg:text-lg text-base  font-medium text-black mt-2">
                            Building Intelligent Technology for a Globally Connected Future.
                        </h2>
                        <p className="lg:text-base text-sm leading-relaxed font-normal tracking-wide text-gray-light mt-2 text-left">
                            To build globally competitive AI-powered technology from Pakistan that helps organizations reduce reliance on outdated systems, embrace intelligent digital solutions, and operate with technology engineered to international standards.                        </p>
                    </div>
                    <div
                        className="border border-gray-200 shadow-lg p-6 rounded-lg flex flex-col items-start bg-white transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-2">
                        <Target className="w-12 h-12 mb-4 text-primary" />
                        <h1 className="lg:text-2xl text-lg  font-bold text-primary">
                            Our Mission
                        </h1>
                        <h2 className="lg:text-lg text-base  font-medium  mt-2  text-black">
                            Engineering Technology That Creates Real Business Impact.                        </h2>
                        <p className="lg:text-base  text-sm leading-relaxed font-normal tracking-wide text-gray-light mt-2 text-left">
                            Engineer reliable, innovative and world-class technology solutions developed within Pakistan while empowering organizations with modern digital infrastructures aligned with international standards.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
