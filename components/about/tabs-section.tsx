"use client"

import Image from "next/image"
import { useState } from "react";

export function TabsSection() {
    const [activeTab, setActiveTab] = useState("Story");

    const tabs = ["Story", "Mission", "Vision"];

    return (
        <div>
            <div className="flex justify-center gap-20 mb-8">
                {tabs.map((tab) => (
                    <div key={tab} className="relative">
                        <button
                            onClick={() => setActiveTab(tab)}
                            className={`text-2xl font-medium pb-3 focus:outline-none ${activeTab === tab ? "text-black" : "text-gray-400"
                                }`}
                        >
                            {tab}
                        </button>
                        {activeTab === tab && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
                {activeTab === "Story" && (
                    <>
                        <Image
                            src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Story"
                            width={380}
                            height={280}
                            className="rounded-xl object-cover"
                        />
                        <div className="max-w-xl">
                            <h3 className="text-3xl font-semibold mb-6 text-black">How It All Began</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                StudSphere Began With A Vision To Solve The Everyday Struggles Of Students. From Searching For Reliable Notes To Finding Career Opportunities And Meaningful Events, We Realized Students Needed A One-Stop Platform That Truly Understood Their Needs. What Started As A Simple Idea Has Now Grown Into A Complete Ecosystem — Offering Education Resources, Jobs, Courses, Events, Volunteering, And Even A Student Mart. Today, StudSphere Is More Than A Platform; It&apos;s A Community Where Students Come Together To Learn, Share, And Grow.
                            </p>
                        </div>
                    </>
                )}
                {activeTab === "Mission" && (
                    <>
                        <Image
                            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Mission"
                            width={380}
                            height={280}
                            className="rounded-xl object-cover"
                        />
                        <div className="max-w-xl">
                            <h3 className="text-3xl font-semibold mb-6 text-black">Our Mission</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our mission is to empower every learner with the resources, opportunities, and support they need to succeed. We strive to bridge the gap between education and real-world skills, making learning accessible, engaging, and relevant for all students. By fostering a collaborative environment, we help students unlock their full potential and prepare for a brighter future.
                            </p>
                        </div>
                    </>
                )}
                {activeTab === "Vision" && (
                    <>
                        <Image
                            src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Vision"
                            width={380}
                            height={280}
                            className="rounded-xl object-cover"
                        />
                        <div className="max-w-xl">
                            <h3 className="text-3xl font-semibold mb-6 text-black">Our Vision</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our vision is to create a global community of learners who are equipped to thrive in a rapidly changing world. We envision StudSphere as the go-to platform for students to discover, connect, and grow—where innovation, inclusivity, and lifelong learning are at the heart of everything we do.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
