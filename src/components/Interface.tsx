import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

export function Interface() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="container mx-auto p-8 flex flex-col h-full justify-between">
        {/* Header */}
        <div className="flex justify-between items-center pointer-events-auto">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            3D World
          </div>
          <a
            href="https://github.com"
            className="flex items-center gap-2 hover:text-purple-500 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl pointer-events-auto">
          <h1 className="text-6xl font-bold mb-8">
            Welcome to the
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              {" "}
              Future
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the next generation of web development with Three.js and React.
            Create immersive 3D experiences that captivate your audience.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pointer-events-auto">
          <div className="text-sm text-gray-400">
            © 2024 3D World. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-500 transition-colors">About</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Contact</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
}