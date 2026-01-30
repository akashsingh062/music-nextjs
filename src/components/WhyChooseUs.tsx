
"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musicSchoolContent = [
  {
    title: "Personalized Music Coaching",
    description:
      "Learn music your way with tailored lessons designed around your goals and skill level. Our instructors focus on helping you build confidence, technique, and creativity through one-on-one mentorship.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white text-xl font-semibold">
        1-on-1 Mentorship
      </div>
    ),
  },
  {
    title: "Live Jam Sessions",
    description:
      "Collaborate with fellow musicians in real-time jam sessions. Develop your timing, improvisation, and teamwork skills while experiencing the joy of making music together.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live jam session"
        />
      </div>
    ),
  },
  {
    title: "Performance Opportunities",
    description:
      "Showcase your talent through recitals, concerts, and competitions. Gain stage confidence and valuable performance experience in a supportive environment.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white text-xl font-semibold">
        Live Performances
      </div>
    ),
  },
  {
    title: "Modern Music Production",
    description:
      "Explore music production with industry-standard tools. Learn recording, mixing, and mastering techniques to create professional-quality tracks.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white text-xl font-semibold">
        Studio Experience
      </div>
    ),
  },
  {
    title: "Flexible Learning Paths",
    description:
      "Choose from a variety of courses covering instruments, vocals, music theory, and composition. Progress at your own pace with guidance from expert instructors.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--blue-500))] text-white text-xl font-semibold">
        Learn at Your Pace
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs