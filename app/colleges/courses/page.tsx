"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Users, BookOpen, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { courses } from '@/data/courses';
import CollegeNavbar from '@/components/college/college-navbar';

const levels = ['All Levels', '+2', 'Bachelors', 'Masters', 'PhD'];
const categories = ['All Categories', 'Business & Management', 'Computer Science & IT', 'Commerce', 'Engineering & Technology'];
const sortOptions = ['Latest', 'Total Seats', 'Average Salary: High to Low', 'Average Fees: Low to High'];

const CoursesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('All Levels');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [sortBy, setSortBy] = useState('Latest');
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 9;

    // Filter courses based on search and filters
    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.fullDescription.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
        const matchesCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;

        return matchesSearch && matchesLevel && matchesCategory;
    });

    // Sort courses
    const sortedCourses = [...filteredCourses].sort((a, b) => {
        switch (sortBy) {
            case 'Total Seats':
                return b.totalSeats - a.totalSeats;
            case 'Average Salary: High to Low':
                // Extract numeric value from salary strings like "₹3,00,000 - ₹8,00,000"
                const getMaxSalary = (salary: string) => {
                    const matches = salary.match(/₹([\d,]+)/g);
                    if (matches) {
                        const numbers = matches.map(m => parseInt(m.replace(/[₹,]/g, '')));
                        return Math.max(...numbers);
                    }
                    return 0;
                };
                return getMaxSalary(b.averageSalary) - getMaxSalary(a.averageSalary);
            case 'Average Fees: Low to High':
                // Extract numeric value from fees strings
                const getMinFees = (fees: string) => {
                    const matches = fees.match(/₹([\d,]+)/g);
                    if (matches) {
                        const numbers = matches.map(m => parseInt(m.replace(/[₹,]/g, '')));
                        return Math.min(...numbers);
                    }
                    return 0;
                };
                return getMinFees(a.averageFees) - getMinFees(b.averageFees);
            default:
                return 0;
        }
    });

    // Pagination
    const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);
    const startIndex = (currentPage - 1) * coursesPerPage;
    const paginatedCourses = sortedCourses.slice(startIndex, startIndex + coursesPerPage);

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Beginner':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'Intermediate':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Advanced':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <CollegeNavbar />
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            All Courses
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover {courses.length} courses designed to help you achieve your learning goals
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="bg-gray-50 rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            {/* Search */}
                            <div className="lg:col-span-2 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    placeholder="Search courses..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>

                            {/* Level Filter */}
                            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Level" />
                                </SelectTrigger>
                                <SelectContent>
                                    {levels.map((level) => (
                                        <SelectItem key={level} value={level}>
                                            {level}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* Category Filter */}
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((category) => (
                                        <SelectItem key={category} value={category}>
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* Sort */}
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    {sortOptions.map((option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Results Count */}
                        <div className="mt-4 text-sm text-gray-600">
                            Showing {paginatedCourses.length} of {filteredCourses.length} courses
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="container mx-auto px-4 py-8">
                {paginatedCourses.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <BookOpen className="w-16 h-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
                        <p className="text-gray-500">Try adjusting your search criteria</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {paginatedCourses.map((course) => (
                                <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                                    <Link href={`/colleges/courses/${course.id}`}>
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <Badge className={`absolute top-3 left-3 ${getLevelColor(course.level)}`}>
                                                {course.level}
                                            </Badge>
                                        </div>

                                        <CardHeader className="pb-3">
                                            <div className="flex items-center justify-between mb-2">
                                                <Badge variant="secondary" className="text-xs">
                                                    {course.category}
                                                </Badge>
                                                <div className="flex items-center gap-1">
                                                    <Badge variant="outline" className="text-xs">
                                                        {course.level}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                                                {course.title}
                                            </CardTitle>
                                            <CardDescription className="text-gray-600 line-clamp-2">
                                                {course.description}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="pt-0">
                                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{course.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Users className="w-4 h-4" />
                                                    <span>{course.totalSeats.toLocaleString()} Seats</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-gray-600">Colleges</p>
                                                    <p className="font-medium">{course.colleges.length} Available</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-2xl font-bold text-blue-600">₹{course.averageFees.toLocaleString()}</p>
                                                    <p className="text-xs text-gray-500">Avg. Fees</p>
                                                </div>
                                            </div>
                                        </CardContent>

                                        <CardFooter className="pt-0">
                                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                                <BookOpen className="w-4 h-4 mr-2" />
                                                View Program
                                            </Button>
                                        </CardFooter>
                                    </Link>
                                </Card>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2">
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </Button>

                                {[...Array(totalPages)].map((_, index) => (
                                    <Button
                                        key={index + 1}
                                        variant={currentPage === index + 1 ? "default" : "outline"}
                                        onClick={() => setCurrentPage(index + 1)}
                                        className="w-10"
                                    >
                                        {index + 1}
                                    </Button>
                                ))}

                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default CoursesPage;
