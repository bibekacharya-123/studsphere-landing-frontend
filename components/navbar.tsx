"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MessageCircle, Bell, X, GraduationCap, Code, Briefcase, Clock, Calendar, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

function SearchModal({ isOpen, onClose, searchValue, setSearchValue, selectedCategory, setSelectedCategory }: SearchModalProps) {
  if (!isOpen) return null;

  const categories = [
    {
      icon: Search,
      label: 'All',
      sublabel: 'Search everything',
      color: 'bg-blue-600',
      textColor: 'text-white'
    },
    {
      icon: GraduationCap,
      label: 'Education',
      sublabel: 'Colleges & Universities',
      color: 'bg-gray-100',
      textColor: 'text-gray-700'
    },
    {
      icon: Code,
      label: 'Skills',
      sublabel: 'Courses & Training',
      color: 'bg-gray-100',
      textColor: 'text-gray-700'
    },
    {
      icon: Briefcase,
      label: 'Jobs',
      sublabel: 'Job Opportunities',
      color: 'bg-gray-100',
      textColor: 'text-gray-700'
    },
    {
      icon: Clock,
      label: 'Internships',
      sublabel: 'Internship Programs',
      color: 'bg-gray-100',
      textColor: 'text-gray-700'
    },
    {
      icon: Calendar,
      label: 'Events',
      sublabel: 'Campus Events',
      color: 'bg-gray-100',
      textColor: 'text-gray-700'
    }
  ];

  const handleSearch = () => {
    if (searchValue.trim()) {
      console.log(`Searching for "${searchValue}" in ${selectedCategory}`);
    }
  };

  const handleCategoryClick = (categoryLabel: string) => {
    setSelectedCategory(categoryLabel);
  };

  return (
    <>
      <div
        className=" inset-0 z-40 bg-black/30"
        onClick={onClose}
      />

      <div className=" inset-0 z-50 flex items-center justify-center p-2 md:p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="border-b border-border flex items-center justify-between px-3 md:px-6 py-3 md:py-4">
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-foreground">Search StudSphere</h1>
              <p className="text-muted-foreground text-xs md:text-sm mt-1 hidden sm:block">Find colleges, courses, jobs, events, and deals all in one place</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-full transition-colors shrink-0"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar Categories */}
            <div className="hidden md:block w-48 lg:w-72 border-r border-border p-2 lg:p-4 space-y-2 overflow-y-auto">
              {categories.map((category) => {
                const IconComponent = category.icon;
                const isSelected = category.label === selectedCategory;
                return (
                  <button
                    key={category.label}
                    onClick={() => handleCategoryClick(category.label)}
                    className={`w-full flex items-start gap-3 p-3 rounded-lg transition-colors ${isSelected ? 'bg-blue-100' : 'hover:bg-gray-200'
                      }`}
                  >
                    <IconComponent className={`h-5 w-5 shrink-0 mt-0.5 ${isSelected ? 'text-blue-600' : 'text-gray-700'}`} />
                    <div className="text-left">
                      <div className={`text-sm font-semibold ${isSelected ? 'text-blue-600' : 'text-foreground'}`}>
                        {category.label}
                      </div>
                      <div className={`text-xs ${isSelected ? 'text-blue-500' : 'text-muted-foreground'}`}>
                        {category.sublabel}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Search Area */}
            <div className="flex-1 flex flex-col items-center p-3 md:p-8 pt-6 md:pt-12">
              {/* Search Input */}
              <div className="w-full mb-4 md:mb-6">
                <div className="flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-white px-4 py-3">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={`Search in ${selectedCategory}...`}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    autoFocus
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <Button
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700 text-white gap-2 text-xs md:text-sm px-3 md:px-4"
                  >
                    <Search className="h-4 w-4" />
                    <span className="hidden sm:inline">Search</span>
                  </Button>
                </div>
              </div>

              {/* Empty State or Results */}
              {!searchValue ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-4">
                    <Search className="h-10 w-10 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Start your search</h2>
                  <p className="text-sm text-muted-foreground">Type something to find colleges, courses, jobs, and more</p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Showing results for &ldquo;{searchValue}&rdquo; in {selectedCategory}</p>
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg border border-border hover:bg-muted transition-colors cursor-pointer text-left">
                      <p className="font-semibold text-sm">{searchValue} - Result 1</p>
                      <p className="text-xs text-muted-foreground">Related to {selectedCategory}</p>
                    </div>
                    <div className="p-3 rounded-lg border border-border hover:bg-muted transition-colors cursor-pointer text-left">
                      <p className="font-semibold text-sm">{searchValue} - Result 2</p>
                      <p className="text-xs text-muted-foreground">Related to {selectedCategory}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Navbar() {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className=" top-0 z-40 border-b border-border bg-background">
        <div className="flex items-center justify-between gap-2 md:gap-4 px-3 md:px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Studsphere"
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 items-center gap-3 max-w-md">
            <div
              onClick={() => setIsSearchModalOpen(true)}
              className="flex flex-1 items-center gap-2 rounded-md border border-input bg-background px-3 py-1.5 cursor-pointer hover:border-blue-400 transition-colors"
            >
              <input
                type="text"
                placeholder="what are you looking for?"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground cursor-pointer"
                readOnly
                onClick={() => setIsSearchModalOpen(true)}
              />
            </div>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 h-8 w-8 p-0 rounded-full"
              onClick={() => setIsSearchModalOpen(true)}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Search Button */}
          <Button
            size="sm"
            variant="ghost"
            className="md:hidden h-8 w-8 p-0"
            onClick={() => setIsSearchModalOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Mobile Menu Button */}
          <Button
            size="sm"
            variant="ghost"
            className="lg:hidden h-8 w-8 p-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Explore Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-sm font-medium h-9 px-3 data-[state=open]:text-blue-600">
                  Explore
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-screen p-3 md:p-6 rounded-none border-t-0">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_200px] gap-2 md:gap-4 h-auto md:h-[250px]">
                  <Link href="/colleges">
                    <div className="group relative overflow-hidden rounded-lg cursor-pointer h-full">
                      <div className="relative h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80"
                          alt="Education"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                          <h3 className="text-sm font-bold">studsphere for Education</h3>
                          <p className="text-xs text-white/90">You could be selling by tomorrow</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/jobs">
                    <div className="group relative overflow-hidden rounded-lg cursor-pointer h-full">
                      <div className="relative h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80"
                          alt="Jobs"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                          <h3 className="text-sm font-bold">Studsphere for job</h3>
                          <p className="text-xs text-white/90">You could be selling by tomorrow</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="group relative overflow-hidden rounded-lg cursor-pointer h-full">
                    <div className="relative h-full">
                      <Image
                        src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80"
                        alt="Events"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                        <h3 className="text-sm font-bold">Studsphere for Events</h3>
                        <p className="text-xs text-white/90">You could be selling by tomorrow</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-3 lg:col-span-1 flex md:flex-col gap-2 md:gap-3">
                    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                      <div className="aspect-[4/2.5] relative">
                        <Image
                          src="https://images.unsplash.com/photo-1581093458791-9d42e1e8f013?w=400&q=80"
                          alt="Institutions"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                          <h3 className="text-xs font-bold">For institutions</h3>
                          <p className="text-[10px] text-white/90">You could be selling by tomorrow</p>
                        </div>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                      <div className="aspect-[4/2.5] relative">
                        <Image
                          src="https://images.unsplash.com/photo-1581093458791-9d42e1e8f013?w=400&q=80"
                          alt="Employer"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                          <h3 className="text-xs font-bold">For Employer</h3>
                          <p className="text-[10px] text-white/90">You could be selling by tomorrow</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About Us */}
            <Button variant="ghost" className="text-sm font-medium h-9 px-3 hover:text-blue-600">
              About us
            </Button>

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-sm font-medium h-9 px-3 data-[state=open]:text-blue-600">
                  More
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Help & Support</DropdownMenuItem>
                <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
                <DropdownMenuItem>Terms of Service</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Message Icon - Hidden on mobile */}
            <Button variant="ghost" size="icon" className="hidden md:flex h-9 w-9 rounded-full">
              <MessageCircle className="h-5 w-5" />
            </Button>

            {/* Notification Icon - Hidden on mobile */}
            <Button variant="ghost" size="icon" className="hidden md:flex h-9 w-9 rounded-full">
              <Bell className="h-5 w-5" />
            </Button>

            {/* Log In Button */}
            <Button variant="ghost" className="text-xs md:text-sm font-medium h-8 md:h-9 px-2 md:px-4">
              Log In
            </Button>

            {/* Sign Up Button */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-medium h-8 md:h-9 px-2 md:px-4">
              sign up
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-3 py-4 space-y-2">
              {/* Explore Section */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-sm font-medium h-10 data-[state=open]:text-blue-600 data-[state=open]:bg-blue-50"
                  >
                    Explore
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[calc(100vw-24px)]">
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <Link href="/colleges">
                      <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                        <div className="aspect-video relative">
                          <Image
                            src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80"
                            alt="Education"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                            <h3 className="text-xs font-bold">Studsphere for Education</h3>
                            <p className="text-[10px] text-white/90">Explore colleges & universities</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/jobs">
                      <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                        <div className="aspect-video relative">
                          <Image
                            src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80"
                            alt="Jobs"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                            <h3 className="text-xs font-bold">Studsphere for Jobs</h3>
                            <p className="text-[10px] text-white/90">Find job opportunities</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                      <div className="aspect-video relative">
                        <Image
                          src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80"
                          alt="Events"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                          <h3 className="text-xs font-bold">Studsphere for Events</h3>
                          <p className="text-[10px] text-white/90">Discover campus events</p>
                        </div>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                      <div className="aspect-video relative">
                        <Image
                          src="https://images.unsplash.com/photo-1581093458791-9d42e1e8f013?w=400&q=80"
                          alt="Institutions"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                          <h3 className="text-xs font-bold">For Institutions</h3>
                          <p className="text-[10px] text-white/90">Institution solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* About Us */}
              <Button
                variant="ghost"
                className="w-full justify-start text-sm font-medium h-10 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About us
              </Button>

              {/* More Section */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-sm font-medium h-10 data-[state=open]:text-blue-600 data-[state=open]:bg-blue-50"
                  >
                    More
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem>Help & Support</DropdownMenuItem>
                  <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
                  <DropdownMenuItem>Terms of Service</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Action Icons */}
              <div className="flex items-center gap-2 pt-2 border-t border-border mt-2">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-blue-50">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-blue-50">
                  <Bell className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => {
          setIsSearchModalOpen(false);
          setSearchValue('');
        }}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
}
