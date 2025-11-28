'use client';

import { useState } from 'react';
import {
    Clock,
    MapPin,
    DollarSign,
    Users,
    BookOpen,
    Calendar,
    Filter,
    Star,
    ExternalLink,
    X,
    Phone,
    Mail,
    Globe,
    CheckCircle,
    Award,
    Building
} from 'lucide-react';

interface AdmissionOpportunity {
    id: string;
    collegeName: string;
    program: string;
    degree: string;
    location: string;
    deadline: string;
    fees: string;
    seats: number;
    rating: number;
    image: string;
    tags: string[];
    applicationStatus: 'Open' | 'Closing Soon' | 'Closed';
    eligibility: string;
    duration: string;
    collegeWebsite?: string;
    contactEmail?: string;
    contactPhone?: string;
    description?: string;
    highlights?: string[];
    scholarships?: string[];
    facilities?: string[];
}

export default function AdmissionOpportunitiesSection() {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOpportunity, setSelectedOpportunity] = useState<AdmissionOpportunity | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const opportunities: AdmissionOpportunity[] = [
        {
            id: '1',
            collegeName: 'Indian Institute of Technology Delhi',
            program: 'Computer Science Engineering',
            degree: 'B.Tech',
            location: 'New Delhi',
            deadline: '2025-03-31',
            fees: '₹2.5 Lakhs',
            seats: 120,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400',
            tags: ['Engineering', 'Technology', 'Government'],
            applicationStatus: 'Open',
            eligibility: '12th with PCM, JEE Main',
            duration: '4 Years',
            collegeWebsite: 'https://www.iitd.ac.in',
            contactEmail: 'admissions@iitd.ac.in',
            contactPhone: '+91-11-2659-1000',
            description: 'Premier engineering institute known for excellence in technical education and research.',
            highlights: ['Top 1 Engineering College', 'IIT Brand Value', 'Excellent Placement Record', 'World-class Faculty'],
            scholarships: ['Merit Scholarship', 'SC/ST Fee Waiver', 'EWS Support'],
            facilities: ['Modern Labs', 'Library', 'Hostels', 'Sports Complex', 'Medical Center']
        },
        {
            id: '2',
            collegeName: 'Shri Ram College of Commerce',
            program: 'Bachelor of Commerce',
            degree: 'B.Com (Hons)',
            location: 'New Delhi',
            deadline: '2025-04-15',
            fees: '₹45,000',
            seats: 200,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
            tags: ['Commerce', 'Finance', 'Government'],
            applicationStatus: 'Open',
            eligibility: '12th with Commerce/Any Stream',
            duration: '3 Years',
            collegeWebsite: 'https://www.srcc.edu',
            contactEmail: 'admissions@srcc.edu',
            contactPhone: '+91-11-2766-7661',
            description: 'Leading commerce college under Delhi University with excellent academic reputation.',
            highlights: ['Top Commerce College', 'DU Affiliation', 'Industry Connections', 'Alumni Network'],
            scholarships: ['Merit Based', 'Need Based', 'Minority Scholarships'],
            facilities: ['Library', 'Computer Labs', 'Auditorium', 'Canteen', 'Sports Facilities']
        },
        {
            id: '3',
            collegeName: 'Lady Hardinge Medical College',
            program: 'Bachelor of Medicine',
            degree: 'MBBS',
            location: 'New Delhi',
            deadline: '2025-03-20',
            fees: '₹1.2 Lakhs',
            seats: 150,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
            tags: ['Medical', 'Healthcare', 'Government'],
            applicationStatus: 'Closing Soon',
            eligibility: '12th with PCB, NEET',
            duration: '5.5 Years',
            collegeWebsite: 'https://www.lhmc.edu.in',
            contactEmail: 'dean@lhmc.edu.in',
            contactPhone: '+91-11-2336-5525',
            description: 'Premier medical college for women with excellent clinical training facilities.',
            highlights: ['Women Medical College', 'NEET Based Admission', 'Clinical Excellence', 'Research Opportunities'],
            scholarships: ['Government Scholarships', 'Merit Scholarships', 'Financial Aid'],
            facilities: ['Hospital', 'Medical Labs', 'Library', 'Hostels', 'Research Centers']
        },
        {
            id: '4',
            collegeName: 'XLRI Xavier School of Management',
            program: 'Master of Business Administration',
            degree: 'MBA',
            location: 'Jamshedpur',
            deadline: '2025-04-30',
            fees: '₹25 Lakhs',
            seats: 180,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400',
            tags: ['Management', 'Business', 'Private'],
            applicationStatus: 'Open',
            eligibility: 'Graduation, XAT/GMAT',
            duration: '2 Years',
            collegeWebsite: 'https://www.xlri.ac.in',
            contactEmail: 'admissions@xlri.ac.in',
            contactPhone: '+91-657-398-3401',
            description: 'Top-tier business school known for ethical leadership and management excellence.',
            highlights: ['Top 5 MBA College', 'Industry Integration', 'Global Exposure', 'Alumni Success'],
            scholarships: ['Merit Scholarships', 'Diversity Scholarships', 'Financial Aid'],
            facilities: ['Modern Campus', 'Library', 'Hostels', 'Sports Complex', 'Placement Cell']
        },
        {
            id: '5',
            collegeName: 'National Law School of India',
            program: 'Bachelor of Laws',
            degree: 'BA LLB',
            location: 'Bangalore',
            deadline: '2025-03-25',
            fees: '₹2.8 Lakhs',
            seats: 80,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
            tags: ['Law', 'Legal Studies', 'Government'],
            applicationStatus: 'Closing Soon',
            eligibility: '12th Any Stream, CLAT',
            duration: '5 Years',
            collegeWebsite: 'https://www.nls.ac.in',
            contactEmail: 'admissions@nls.ac.in',
            contactPhone: '+91-80-2856-0424',
            description: 'India\'s premier law school with excellent legal education and research programs.',
            highlights: ['Top Law School', 'CLAT Based', 'Moot Court Champions', 'Legal Research'],
            scholarships: ['Merit Scholarships', 'Need Based Aid', 'Research Assistantships'],
            facilities: ['Law Library', 'Moot Court', 'Hostels', 'Computer Labs', 'Sports Facilities']
        },
        {
            id: '6',
            collegeName: 'Delhi School of Economics',
            program: 'Economics Honours',
            degree: 'BA (Hons)',
            location: 'New Delhi',
            deadline: '2025-04-10',
            fees: '₹35,000',
            seats: 110,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400',
            tags: ['Economics', 'Social Science', 'Government'],
            applicationStatus: 'Open',
            eligibility: '12th Any Stream with Math',
            duration: '3 Years',
            collegeWebsite: 'https://www.econdse.org',
            contactEmail: 'dse@econdse.org',
            contactPhone: '+91-11-2766-7101',
            description: 'Leading economics department with strong research focus and academic excellence.',
            highlights: ['Top Economics College', 'Research Excellence', 'Policy Impact', 'Academic Rigor'],
            scholarships: ['University Scholarships', 'Research Fellowships', 'Merit Awards'],
            facilities: ['Economics Library', 'Computer Labs', 'Research Centers', 'Seminar Halls', 'Canteen']
        }
    ];

    const filters = ['All', 'Engineering', 'Medical', 'Management', 'Law', 'Commerce', 'Arts'];

    const filteredOpportunities = opportunities.filter(opportunity => {
        const matchesFilter = selectedFilter === 'All' || opportunity.tags.includes(selectedFilter);
        const matchesSearch = opportunity.collegeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            opportunity.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
            opportunity.location.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Open': return 'bg-green-100 text-green-800';
            case 'Closing Soon': return 'bg-orange-100 text-orange-800';
            case 'Closed': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getDaysLeft = (deadline: string) => {
        const deadlineDate = new Date(deadline);
        const today = new Date();
        const diffTime = deadlineDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    };

    const openModal = (opportunity: AdmissionOpportunity) => {
        setSelectedOpportunity(opportunity);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedOpportunity(null);
    };

    const redirectToCollege = (collegeWebsite?: string) => {
        if (collegeWebsite) {
            window.open(collegeWebsite, '_blank');
        } else {
            // Fallback to college page or search
            window.open('/colleges', '_blank');
        }
    };

    return (
        <div className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-purple-100 text-purple-700 font-semibold py-2 px-6 rounded-full text-sm uppercase tracking-wide mb-4">
                        ADMISSION OPPORTUNITIES
                    </span>
                    <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
                        Current <span className="text-purple-600">Openings</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Explore current admission opportunities across top colleges and universities.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-12">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search colleges, programs, or locations..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setSelectedFilter(filter)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedFilter === filter
                                        ? 'bg-purple-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Opportunities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredOpportunities.map((opportunity) => (
                        <div
                            key={opportunity.id}
                            onClick={() => openModal(opportunity)}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={opportunity.image}
                                    alt={opportunity.collegeName}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(opportunity.applicationStatus)}`}>
                                        {opportunity.applicationStatus}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                    <span className="text-sm font-medium ml-1">{opportunity.rating}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                                        {opportunity.collegeName}
                                    </h3>
                                    <div className="flex items-center text-gray-600 mb-2">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span className="text-sm">{opportunity.location}</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 mb-1">{opportunity.program}</h4>
                                    <p className="text-sm text-gray-600">{opportunity.degree} • {opportunity.duration}</p>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                    <div className="flex items-center">
                                        <DollarSign className="w-4 h-4 text-green-600 mr-1" />
                                        <span className="text-gray-700">{opportunity.fees}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-4 h-4 text-blue-600 mr-1" />
                                        <span className="text-gray-700">{opportunity.seats} seats</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 text-orange-600 mr-1" />
                                        <span className="text-gray-700">{getDaysLeft(opportunity.deadline)} days left</span>
                                    </div>
                                    <div className="flex items-center">
                                        <BookOpen className="w-4 h-4 text-purple-600 mr-1" />
                                        <span className="text-gray-700">{opportunity.eligibility.split(',')[0]}</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {opportunity.tags.slice(0, 2).map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openModal(opportunity);
                                    }}
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                                >
                                    View Details
                                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {filteredOpportunities.length > 6 && (
                    <div className="text-center mt-12">
                        <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
                            Load More Opportunities
                        </button>
                    </div>
                )}

                {/* Modal */}
                {isModalOpen && selectedOpportunity && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            {/* Modal Header */}
                            <div className="relative">
                                <img
                                    src={selectedOpportunity.image}
                                    alt={selectedOpportunity.collegeName}
                                    className="w-full h-64 object-cover rounded-t-3xl"
                                />
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="absolute bottom-4 left-4">
                                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(selectedOpportunity.applicationStatus)}`}>
                                        {selectedOpportunity.applicationStatus}
                                    </span>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                {/* College Info */}
                                <div className="mb-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                                {selectedOpportunity.collegeName}
                                            </h2>
                                            <div className="flex items-center text-gray-600 mb-2">
                                                <MapPin className="w-5 h-5 mr-2" />
                                                <span>{selectedOpportunity.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-full">
                                            <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                                            <span className="font-semibold">{selectedOpportunity.rating}</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {selectedOpportunity.program}
                                        </h3>
                                        <p className="text-gray-700 mb-4">{selectedOpportunity.degree} • {selectedOpportunity.duration}</p>
                                        <p className="text-gray-600">{selectedOpportunity.description}</p>
                                    </div>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    {/* Left Column */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4">Admission Details</h4>
                                        <div className="space-y-4">
                                            <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                                                <DollarSign className="w-5 h-5 text-green-600 mr-3" />
                                                <div>
                                                    <span className="text-sm text-gray-500">Annual Fees</span>
                                                    <p className="font-semibold">{selectedOpportunity.fees}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                                                <Users className="w-5 h-5 text-blue-600 mr-3" />
                                                <div>
                                                    <span className="text-sm text-gray-500">Available Seats</span>
                                                    <p className="font-semibold">{selectedOpportunity.seats}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                                                <Calendar className="w-5 h-5 text-orange-600 mr-3" />
                                                <div>
                                                    <span className="text-sm text-gray-500">Application Deadline</span>
                                                    <p className="font-semibold">
                                                        {new Date(selectedOpportunity.deadline).toLocaleDateString()}
                                                        ({getDaysLeft(selectedOpportunity.deadline)} days left)
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                                                <BookOpen className="w-5 h-5 text-purple-600 mr-3" />
                                                <div>
                                                    <span className="text-sm text-gray-500">Eligibility</span>
                                                    <p className="font-semibold">{selectedOpportunity.eligibility}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h4>
                                        <div className="space-y-4">
                                            {selectedOpportunity.contactEmail && (
                                                <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                                                    <Mail className="w-5 h-5 text-red-600 mr-3" />
                                                    <div>
                                                        <span className="text-sm text-gray-500">Email</span>
                                                        <p className="font-semibold">{selectedOpportunity.contactEmail}</p>
                                                    </div>
                                                </div>
                                            )}
                                            {selectedOpportunity.contactPhone && (
                                                <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                                                    <Phone className="w-5 h-5 text-green-600 mr-3" />
                                                    <div>
                                                        <span className="text-sm text-gray-500">Phone</span>
                                                        <p className="font-semibold">{selectedOpportunity.contactPhone}</p>
                                                    </div>
                                                </div>
                                            )}
                                            {selectedOpportunity.collegeWebsite && (
                                                <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                                                    <Globe className="w-5 h-5 text-blue-600 mr-3" />
                                                    <div>
                                                        <span className="text-sm text-gray-500">Website</span>
                                                        <p className="font-semibold text-blue-600 cursor-pointer hover:underline"
                                                            onClick={() => window.open(selectedOpportunity.collegeWebsite, '_blank')}>
                                                            {selectedOpportunity.collegeWebsite}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Highlights */}
                                {selectedOpportunity.highlights && (
                                    <div className="mb-8">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                            <Award className="w-5 h-5 mr-2 text-yellow-600" />
                                            Highlights
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedOpportunity.highlights.map((highlight, index) => (
                                                <div key={index} className="flex items-center p-3 bg-green-50 rounded-xl">
                                                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                                                    <span className="text-gray-700">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Scholarships */}
                                {selectedOpportunity.scholarships && (
                                    <div className="mb-8">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4">Scholarships Available</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedOpportunity.scholarships.map((scholarship, index) => (
                                                <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                                    {scholarship}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Facilities */}
                                {selectedOpportunity.facilities && (
                                    <div className="mb-8">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                            <Building className="w-5 h-5 mr-2 text-gray-600" />
                                            Facilities
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedOpportunity.facilities.map((facility, index) => (
                                                <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                                                    {facility}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                                        Apply Now
                                        <ExternalLink className="w-5 h-5 ml-2" />
                                    </button>
                                    <button
                                        onClick={() => redirectToCollege(selectedOpportunity.collegeWebsite)}
                                        className="flex-1 bg-white border-2 border-purple-600 text-purple-600 py-4 px-6 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center"
                                    >
                                        Visit College Page
                                        <Globe className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
