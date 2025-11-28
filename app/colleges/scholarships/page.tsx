'use client';

import { useState } from 'react';
import { Search, Calendar, DollarSign, Users, BookOpen, Award, ExternalLink, CheckCircle, TrendingUp, Heart, Globe, ChevronLeft, ChevronRight, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import CollegeNavbar from '@/components/college/college-navbar';

export default function ScholarshipsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Scholarships');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const scholarshipCategories = [
    'All Scholarships', 'Merit-Based', 'Need-Based', 'Minority', 'Women', 'STEM', 'Arts', 'Athletic', 'International', 'Graduate', 'Undergraduate'
  ];

  const activeScholarships = [
    {
      id: 'national-merit-2024',
      name: 'National Merit Scholarship',
      description: 'For high-achieving high school students',
      category: 'Merit-Based',
      amount: '$2,500',
      deadline: 'Oct 15, 2023',
      eligibility: 'PSAT Score 1400+',
      awards: '2,500 Nationwide',
      status: 'Active',
      statusColor: 'green',
      icon: 'fas fa-award',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'women-stem-2024',
      name: 'Women in STEM Scholarship',
      description: 'For female students pursuing STEM degrees',
      category: 'Women',
      amount: '$5,000',
      deadline: 'Nov 30, 2023',
      eligibility: 'GPA 3.5+, Female',
      awards: '100 Nationwide',
      status: 'Active',
      statusColor: 'green',
      icon: 'fas fa-microscope',
      image: 'https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'first-generation-2024',
      name: 'First Generation Scholarship',
      description: 'For students who are first in their family to attend college',
      category: 'Need-Based',
      amount: '$10,000',
      deadline: 'Jan 15, 2024',
      eligibility: 'First-gen, GPA 3.0+',
      awards: '500 Nationwide',
      status: 'Active',
      statusColor: 'green',
      icon: 'fas fa-user-graduate',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'community-service-2024',
      name: 'Community Service Scholarship',
      description: 'For students with exceptional community service records',
      category: 'Merit-Based',
      amount: '$2,000',
      deadline: 'Mar 1, 2024',
      eligibility: '100+ service hours',
      awards: '200 Nationwide',
      status: 'Active',
      statusColor: 'green',
      icon: 'fas fa-hands-helping',
      image: 'https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const expiredScholarships = [
    {
      id: 'athletic-2023',
      name: 'Elite Athlete Scholarship 2023',
      description: 'For outstanding student athletes',
      category: 'Athletic',
      amount: '$8,000',
      deadline: 'May 15, 2023',
      status: 'Closed',
      statusColor: 'gray',
      icon: 'fas fa-running',
      image: 'https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'minority-stem-2023',
      name: 'Minority STEM Scholarship 2023',
      description: 'For underrepresented minorities in STEM',
      category: 'STEM',
      amount: '$5,000',
      deadline: 'Apr 30, 2023',
      status: 'Closed',
      statusColor: 'gray',
      icon: 'fas fa-hands-helping',
      image: 'https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const upcomingDeadlines = [
    {
      title: 'National Merit Scholarship',
      description: 'Due Oct 15, 2023',
      daysLeft: '2 weeks left',
      type: 'urgent',
      icon: ExternalLink
    },
    {
      title: 'STEM Diversity Grant',
      description: 'Due Nov 1, 2023',
      daysLeft: '1 month left',
      type: 'upcoming',
      icon: Calendar
    },
    {
      title: 'Community Service Award',
      description: 'Due Dec 15, 2023',
      daysLeft: 'Coming soon',
      type: 'upcoming',
      icon: Award
    }
  ];

  const stats = [
    { icon: Award, label: 'Total Scholarships', value: '1,200+', color: 'bg-green-500' },
    { icon: DollarSign, label: 'Total Value', value: '$50M+', color: 'bg-blue-500' },
    { icon: Users, label: 'Students Helped', value: '15K+', color: 'bg-purple-500' },
    { icon: TrendingUp, label: 'Success Rate', value: '85%', color: 'bg-orange-500' }
  ];

  // Sample scholarship deadlines data
  const scholarshipDeadlines: { [key: string]: string } = {
    '2023-7-15': 'National Merit Scholarship',
    '2023-7-22': 'Women in Tech Grant',
    '2023-7-28': 'First Generation Scholarship',
    '2023-8-5': 'Community Service Award',
    '2023-8-15': 'STEM Diversity Scholarship'
  };

  const renderCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const today = new Date();
    
    const calendarDays = [];
    
    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
      const day = prevMonthDays - i;
      calendarDays.push(
        <div key={`prev-${day}`} className="calendar-day empty-day p-2 text-center text-gray-400">
          {day}
        </div>
      );
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
      const isToday = day === today.getDate() && 
                     currentMonth === today.getMonth() && 
                     currentYear === today.getFullYear();
      const hasEvent = scholarshipDeadlines[dateKey];
      
      let classes = 'calendar-day p-2 text-center cursor-pointer rounded-lg transition-all hover:bg-slate-200';
      if (isToday) classes += ' current-day bg-blue-500 text-white font-bold';
      if (hasEvent) classes += ' has-event bg-blue-100 text-blue-800';
      
      calendarDays.push(
        <div key={day} className={classes} title={hasEvent || ''}>
          {day}
          {hasEvent && <div className="w-1 h-1 bg-red-500 rounded-full mx-auto mt-1"></div>}
        </div>
      );
    }
    
    return calendarDays;
  };

  const currentScholarships = selectedCategory === 'All Scholarships' 
    ? activeScholarships 
    : activeScholarships.filter(scholarship => scholarship.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Merit-Based': return Award;
      case 'Need-Based': return Heart;
      case 'Women': return Users;
      case 'STEM': return BookOpen;
      case 'Athletic': return TrendingUp;
      case 'International': return Globe;
      default: return Award;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <CollegeNavbar/>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 md:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
                Find Scholarships That Match Your Profile
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl">
                Discover financial aid opportunities for your education with our comprehensive scholarship database.
              </p>
              
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search for scholarships (merit-based, need-based, etc.)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-4 pl-16 pr-6 text-lg bg-white border-2 border-slate-200 rounded-full shadow-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              
              {/* Popular Scholarship Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Merit-Based', 'Need-Based', 'STEM', 'Minority', 'Women', 'Athletic', 'International'].map((tag) => (
                  <Badge key={tag} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm hover:bg-blue-200 transition-colors cursor-pointer">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Grid Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column (2/3 width on large screens) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Scholarship Categories */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Browse Scholarship Categories</h2>
                <div className="flex flex-wrap gap-3 mb-8">
                  {scholarshipCategories.map((category) => (
                    <Button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium shadow-sm transition-all ${
                        selectedCategory === category
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
                
                {/* Active Scholarships */}
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Active Scholarships
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentScholarships.map((scholarship) => {
                    const CategoryIcon = getCategoryIcon(scholarship.category);
                    return (
                      <Card key={scholarship.id} className="bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                        <CardContent className="p-5">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="flex-shrink-0">
                              <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center">
                                <CategoryIcon className="w-6 h-6 text-blue-600" />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-800">{scholarship.name}</h4>
                              <p className="text-sm text-slate-500 mb-2">{scholarship.description}</p>
                              <div className="flex flex-wrap gap-2">
                                <Badge className={`px-2 py-1 text-xs font-medium rounded ${
                                  scholarship.statusColor === 'green' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {scholarship.category}
                                </Badge>
                                <Badge className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                                  {scholarship.amount}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm text-slate-700 mb-4">
                            <div className="flex justify-between">
                              <span className="text-slate-500">Deadline:</span>
                              <span className="font-medium">{scholarship.deadline}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Eligibility:</span>
                              <span className="font-medium">{scholarship.eligibility}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Awards:</span>
                              <span className="font-medium">{scholarship.awards}</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0">
                                Details
                              </Button>
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0">
                                Eligibility
                              </Button>
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0">
                                FAQ
                              </Button>
                            </div>
                            <Button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow-sm">
                              Apply Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* Expired Scholarships Section */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-slate-800">Recently Closed Scholarships</h3>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 text-sm">
                    View All
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {expiredScholarships.map((scholarship) => {
                    const CategoryIcon = getCategoryIcon(scholarship.category);
                    return (
                      <Card key={scholarship.id} className="bg-white border border-slate-200 rounded-xl opacity-80 hover:opacity-100 transition-opacity">
                        <CardContent className="p-5">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="flex-shrink-0">
                              <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center">
                                <CategoryIcon className="w-6 h-6 text-slate-500" />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-800">{scholarship.name}</h4>
                              <p className="text-sm text-slate-500 mb-2">{scholarship.description}</p>
                              <div className="flex flex-wrap gap-2">
                                <Badge className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded">
                                  {scholarship.status}
                                </Badge>
                                <Badge className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
                                  {scholarship.category}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm text-slate-600 mb-4">
                            <div className="flex justify-between">
                              <span>Deadline:</span>
                              <span className="font-medium">{scholarship.deadline}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Award Amount:</span>
                              <span className="font-medium">{scholarship.amount}</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0">
                                Details
                              </Button>
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0">
                                Winners
                              </Button>
                            </div>
                            <Button variant="outline" className="text-slate-700 text-sm px-4 py-2 rounded-lg">
                              Check Status
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>
            </div>
            
            {/* Right Column (1/3 width on large screens) */}
            <div className="space-y-8">
              {/* Quick Stats */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Quick Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Scholarship Calendar */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-slate-800">Scholarship Deadlines</h2>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 text-sm">
                    View All
                  </Button>
                </div>
                
                <div className="mb-4 flex justify-between items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      if (currentMonth === 0) {
                        setCurrentMonth(11);
                        setCurrentYear(currentYear - 1);
                      } else {
                        setCurrentMonth(currentMonth - 1);
                      }
                    }}
                    className="p-2 rounded-full hover:bg-slate-100"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-500" />
                  </Button>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {months[currentMonth]} {currentYear}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      if (currentMonth === 11) {
                        setCurrentMonth(0);
                        setCurrentYear(currentYear + 1);
                      } else {
                        setCurrentMonth(currentMonth + 1);
                      }
                    }}
                    className="p-2 rounded-full hover:bg-slate-100"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-slate-500 mb-2">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-sm">
                  {renderCalendar()}
                </div>
              </section>
              
              {/* Upcoming Deadlines */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-slate-800">Approaching Deadlines</h2>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 text-sm">
                    View All
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          deadline.type === 'urgent' ? 'bg-red-100' : 'bg-blue-100'
                        }`}>
                          <deadline.icon className={`w-4 h-4 ${
                            deadline.type === 'urgent' ? 'text-red-600' : 'text-blue-600'
                          }`} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{deadline.title}</h4>
                        <p className="text-sm text-slate-600">{deadline.description}</p>
                        <div className="mt-1">
                          <Badge className={`px-2 py-1 text-xs font-medium rounded ${
                            deadline.type === 'urgent' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {deadline.daysLeft}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Scholarship Tips */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-4">Scholarship Tips</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Start Early',
                      description: 'Begin your scholarship search at least 12 months before you need the funds.'
                    },
                    {
                      title: 'Personalize Applications',
                      description: 'Tailor each application to match the scholarship\'s specific criteria and values.'
                    },
                    {
                      title: 'Highlight Uniqueness',
                      description: 'Emphasize what makes you stand out from other applicants.'
                    },
                    {
                      title: 'Proofread Thoroughly',
                      description: 'Errors can disqualify you - have someone review your applications.'
                    }
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800">{tip.title}</h4>
                        <p className="text-sm text-slate-600">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Newsletter Subscription */}
              <section className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-sm p-6 text-white">
                <h2 className="text-xl font-bold mb-3">Get Scholarship Alerts</h2>
                <p className="text-sm opacity-90 mb-4">
                  Receive notifications about new scholarships matching your profile and approaching deadlines.
                </p>
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-slate-800 border-0"
                  />
                  <Button className="px-4 py-3 bg-red-500 hover:bg-red-600 rounded-r-lg font-medium transition-colors border-0">
                    <Bell className="w-4 h-4" />
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>


      <style jsx>{`
        .calendar-day {
          transition: all 0.2s ease;
        }
        
        .calendar-day:hover:not(.empty-day) {
          background-color: #e2e8f0;
        }
        
        .current-day {
          background-color: #3b82f6;
          color: white;
          font-weight: 600;
        }
        
        .has-event {
          position: relative;
        }
        
        .has-event::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #f43f5e;
        }
      `}</style>
    </div>
  );
}