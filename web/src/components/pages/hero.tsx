"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { BadgeCheck } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white px-6">
      {/* Navbar */}
      <nav className="w-full max-w-7xl mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center space-x-1 text-xl font-black text-gray-900 pl-6.5">
          <BadgeCheck />
          <span>Repute</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group hover:cursor-pointer"
          >
            About
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </button>
          <button
            onClick={() => {
              const featuresSection = document.getElementById("features");
              featuresSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group hover:cursor-pointer"
          >
            Features
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl items-center py-12">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Repute
            </h1>
            <p className="text-lg text-gray-600">
              Earn verifiable badges for your achievements, showcase your
              expertise, and unlock new opportunities with your Lens profile.
            </p>
            <div className="flex gap-4">
              <Button
                className="px-6 py-3 text-lg hover:cursor-pointer group flex items-center transition"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Get Started
                <span className="ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 text-lg hover:cursor-pointer"
                onClick={() => {
                  router.push("/explore");
                }}
              >
                Explore
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <Image
              src="/main.png"
              width={400}
              height={400}
              alt="Hero"
              priority
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        id="features"
        className="flex items-center justify-center bg-gray-50 py-20 scroll-mt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl items-center">
          {/* Image First in Features */}
          <div className="flex justify-center order-2 md:order-1">
            <Image
              src="/work_main.png"
              width={400}
              height={400}
              alt="Features"
              priority
            />
          </div>

          {/* Features Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Build Your Digital Identity
            </h2>
            <p className="text-lg text-gray-600">
              Create and showcase your verifiable achievements, skills, and
              experiences. Connect with like-minded professionals and unlock new
              opportunities in the decentralized web.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <BadgeCheck className="text-primary h-6 w-6" />
                <span className="text-gray-700">
                  Verifiable Digital Credentials
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <BadgeCheck className="text-primary h-6 w-6" />
                <span className="text-gray-700">
                  Professional Network Integration
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <BadgeCheck className="text-primary h-6 w-6" />
                <span className="text-gray-700">
                  Decentralized Identity Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Recommendation Section */}
      <div
        id=""
        className="flex items-center justify-center py-20 scroll-mt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl items-center">
          {/* AI Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              AI-Powered Profile Recommendations
            </h2>
            <p className="text-lg text-gray-600">
              Our advanced AI analyzes your interests, skills, and achievements
              to suggest meaningful connections. Get personalized
              recommendations that help you build a stronger professional
              network.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <BadgeCheck className="text-primary h-6 w-6" />
                <span className="text-gray-700">Smart Profile Matching</span>
              </div>
              <div className="flex items-center space-x-3">
                <BadgeCheck className="text-primary h-6 w-6" />
                <span className="text-gray-700">
                  Interest-Based Connections
                </span>
              </div>
            </div>
            <Button
              className="px-6 py-3 text-lg hover:cursor-pointer group flex items-center transition"
              onClick={() => {
                router.push("/login");
              }}
            >
              Try AI Recommendations
              <span className="ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Button>
          </div>

          {/* AI Image */}
          <div className="flex justify-center">
            <Image
              src="/search_main.png"
              width={400}
              height={400}
              alt="AI Recommendations"
              priority
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto py-8 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-xl font-bold text-gray-900 mb-4 md:mb-0">
              <BadgeCheck />
              <span>Repute</span>
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Repute. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
