"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Clock,
    Users,
    MapPin,
    BookOpen,
    Award,
    TrendingUp,
    Building,
    GraduationCap,
    CheckCircle,
    ExternalLink,
    Calendar,
    DollarSign,
    Target
} from 'lucide-react';
import Link from 'next/link';
import { courses } from '@/data/courses';
import CollegeNavbar from '@/components/college/college-navbar';

export default function CoursePage() {
    const params = useParams();
    const router = useRouter();
    const course = courses.find(c => c.id === parseInt(params.id as string));

    if (!course) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
                    <p className="text-gray-600 mb-4">The course you're looking for doesn't exist.</p>
                    <Button onClick={() => router.back()}>Go Back</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* College Navbar */}
            <CollegeNavbar />
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-4 mb-4">
                                <Badge variant="secondary" className="bg-white/20 text-white">
                                    {course.category}
                                </Badge>
                                <Badge variant="outline" className="border-white/40 text-white">
                                    {course.level}
                                </Badge>
                            </div>

                            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                            <p className="text-xl text-blue-100 mb-6">{course.description}</p>

                            <div className="flex items-center gap-6 text-blue-100">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    <span>{course.totalSeats.toLocaleString()} Total Seats</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Building className="w-5 h-5" />
                                    <span>{course.colleges.length} Colleges</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                                <CardContent className="p-6">
                                    <div className="text-center mb-6">
                                        <div className="text-3xl font-bold mb-2">{course.averageFees}</div>
                                        <div className="text-blue-100">Average Annual Fees</div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between">
                                            <span className="text-blue-100">Duration:</span>
                                            <span className="font-medium">{course.duration}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-blue-100">Level:</span>
                                            <span className="font-medium">{course.level}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-blue-100">Total Seats:</span>
                                            <span className="font-medium">{course.totalSeats.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Apply Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2">
                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="colleges">Colleges</TabsTrigger>
                                <TabsTrigger value="careers">Careers</TabsTrigger>
                                <TabsTrigger value="admission">Admission</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Program Overview</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-6">{course.fullDescription}</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                    <Target className="w-5 h-5 text-blue-600" />
                                                    Key Subjects
                                                </h4>
                                                <ul className="space-y-2">
                                                    {course.subjects.map((subject, index) => (
                                                        <li key={index} className="flex items-center gap-2">
                                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                                            <span className="text-gray-600">{subject}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                    <Award className="w-5 h-5 text-blue-600" />
                                                    Eligibility Criteria
                                                </h4>
                                                <ul className="space-y-2">
                                                    {course.eligibilityCriteria.map((criteria, index) => (
                                                        <li key={index} className="flex items-center gap-2">
                                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                                            <span className="text-gray-600">{criteria}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="colleges" className="space-y-6">
                                <div className="grid gap-4">
                                    {course.colleges.map((college) => (
                                        <Card key={college.id} className="hover:shadow-lg transition-shadow">
                                            <CardContent className="p-6">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex gap-4">
                                                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                                            <Building className="w-8 h-8 text-gray-500" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-semibold mb-1">{college.name}</h3>
                                                            <div className="flex items-center gap-2 text-gray-600 mb-2">
                                                                <MapPin className="w-4 h-4" />
                                                                <span>{college.location}</span>
                                                            </div>
                                                            <div className="flex gap-2">
                                                                <Badge variant="outline">{college.type}</Badge>
                                                                <Badge variant="secondary">Rank #{college.ranking}</Badge>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-bold text-blue-600 mb-1">{college.fees}</div>
                                                        <div className="text-sm text-gray-500">Annual Fees</div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm text-gray-600">Affiliation: {college.affiliation}</p>
                                                    </div>
                                                    <Button variant="outline" size="sm" asChild>
                                                        <Link href={`https://${college.website}`} target="_blank">
                                                            <ExternalLink className="w-4 h-4 mr-2" />
                                                            Visit Website
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="careers" className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <TrendingUp className="w-5 h-5" />
                                            Career Opportunities
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            {course.careerOpportunities.map((career, index) => (
                                                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <GraduationCap className="w-5 h-5 text-blue-600" />
                                                    <span className="font-medium">{career}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t pt-6">
                                            <h4 className="font-semibold mb-4 flex items-center gap-2">
                                                <DollarSign className="w-5 h-5 text-green-600" />
                                                Salary Information
                                            </h4>
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <div className="text-2xl font-bold text-green-600 mb-1">{course.averageSalary}</div>
                                                <div className="text-sm text-green-700">Average Starting Salary</div>
                                            </div>
                                        </div>

                                        <div className="border-t pt-6 mt-6">
                                            <h4 className="font-semibold mb-4">Top Recruiters</h4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {course.topRecruiters.map((recruiter, index) => (
                                                    <div key={index} className="p-3 bg-blue-50 rounded-lg text-center">
                                                        <span className="font-medium text-blue-900">{recruiter}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="admission" className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5" />
                                            Admission Process
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {course.admissionProcess.map((step, index) => (
                                                <div key={index} className="flex gap-4">
                                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                                        {index + 1}
                                                    </div>
                                                    <div className="flex-1 pb-4">
                                                        <p className="text-gray-700">{step}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t pt-6 mt-6">
                                            <h4 className="font-semibold mb-3">Approval & Recognition</h4>
                                            <Badge variant="outline" className="text-green-600 border-green-600">
                                                Approved by {course.approvalBody}
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quick Facts</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Duration:</span>
                                        <span className="font-medium">{course.duration}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Level:</span>
                                        <Badge variant="outline">{course.level}</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Total Seats:</span>
                                        <span className="font-medium">{course.totalSeats.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Colleges:</span>
                                        <span className="font-medium">{course.colleges.length}</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Admissions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Button className="w-full">
                                        Get Counseling
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        Download Brochure
                                    </Button>
                                    <Button variant="ghost" className="w-full">
                                        Schedule Campus Visit
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
