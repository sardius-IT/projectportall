"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Test() {
    return (
                  <section className="w-full  py-20">
              <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-14">
          Horizon Educational <span className="text-blue-600 italic">Advantage</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
            <div className="text-5xl mb-6">🎓</div>
            <p className="text-lg font-medium">
              Finding the Program That’s <br /> Right for You
            </p>
          </div>

          {/* Card 2 */}
          <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
            <div className="text-5xl mb-6">🎧</div>
            <p className="text-lg font-medium">
              Curated Expert-led <br /> Application Assistance
            </p>
          </div>

          {/* Card 3 */}
          <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
            <div className="text-5xl mb-6">📝</div>
            <p className="text-lg font-medium">
              English Assessment Test <br /> Prep On-the-go
            </p>
          </div>

          {/* Card 4 */}
          <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
            <div className="text-5xl mb-6">✈️📄</div>
            <p className="text-lg font-medium">
              Interview Preparation & <br /> Visa Guidance
            </p>
          </div>

          {/* Card 5 */}
          <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
            <div className="text-5xl mb-6">💰</div>
            <p className="text-lg font-medium">
              Solving for Money…!
            </p>
          </div>

          {/* Card 6 */}
          <div className=" rounded-3xl shadow-lg p-10 text-center bg-white/10">
            <div className="text-5xl mb-6">🏠</div>
            <p className="text-lg font-medium">
              Making Sure You Stay <br /> Right, And Stay Well
            </p>
          </div>

        </div>
      </div>
          </section>
    );
}