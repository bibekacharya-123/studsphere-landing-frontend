'use client';

import {
    FileText,
    Download,
    Calendar,
    Info
} from 'lucide-react';

interface Document {
    id: string;
    name: string;
    description: string;
    required: boolean;
    format: string[];
    maxSize: string;
    example?: string;
}

interface ImportantDate {
    date: string;
    event: string;
    status: 'upcoming' | 'current' | 'completed';
}

export default function AdmissionResourcesSection() {

    const documents: Document[] = [
        {
            id: 'academic',
            name: '10th & 12th Marksheets',
            description: 'Official transcripts from your board of education',
            required: true,
            format: ['PDF', 'JPG'],
            maxSize: '2MB'
        },
        {
            id: 'photo',
            name: 'Passport Size Photograph',
            description: 'Recent colored photograph with white background',
            required: true,
            format: ['JPG', 'PNG'],
            maxSize: '500KB'
        },
        {
            id: 'identity',
            name: 'Identity Proof',
            description: 'Aadhar Card, Passport, or other government ID',
            required: true,
            format: ['PDF', 'JPG'],
            maxSize: '2MB'
        },
        {
            id: 'category',
            name: 'Category Certificate',
            description: 'SC/ST/OBC/EWS certificate if applicable',
            required: false,
            format: ['PDF'],
            maxSize: '2MB'
        },
        {
            id: 'migration',
            name: 'Migration Certificate',
            description: 'Required for students from other boards/universities',
            required: false,
            format: ['PDF'],
            maxSize: '2MB'
        },
        {
            id: 'recommendation',
            name: 'Letters of Recommendation',
            description: 'Academic or professional references',
            required: false,
            format: ['PDF'],
            maxSize: '2MB'
        }
    ];

    const importantDates: ImportantDate[] = [
        {
            date: '2025-02-15',
            event: 'Application Portal Opens',
            status: 'completed'
        },
        {
            date: '2025-03-31',
            event: 'Last Date for Application Submission',
            status: 'upcoming'
        },
        {
            date: '2025-04-15',
            event: 'Document Verification',
            status: 'upcoming'
        },
        {
            date: '2025-05-01',
            event: 'Entrance Exam (if applicable)',
            status: 'upcoming'
        },
        {
            date: '2025-05-20',
            event: 'Merit List Publication',
            status: 'upcoming'
        },
        {
            date: '2025-06-10',
            event: 'Counseling & Seat Allocation',
            status: 'upcoming'
        },
        {
            date: '2025-07-01',
            event: 'Fee Payment Deadline',
            status: 'upcoming'
        },
        {
            date: '2025-07-15',
            event: 'Academic Session Begins',
            status: 'upcoming'
        }
    ];

    const getDateStatus = (status: string) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-800';
            case 'current': return 'bg-blue-100 text-blue-800';
            default: return 'bg-orange-100 text-orange-800';
        }
    };

    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-indigo-100 text-indigo-700 font-semibold py-2 px-6 rounded-full text-sm uppercase tracking-wide mb-4">
                        ADMISSION RESOURCES
                    </span>
                    <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
                        Everything You <span className="text-indigo-600">Need</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Access all necessary documents and important dates for a smooth admission process.
                    </p>
                </div>

                {/* Required Documents Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Required Documents</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {documents.map((doc) => (
                            <div
                                key={doc.id}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start mb-4">
                                    <div className="p-3 bg-indigo-50 rounded-xl mr-4">
                                        <FileText className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center mb-2">
                                            <h4 className="text-lg font-bold text-gray-900">{doc.name}</h4>
                                            {doc.required && (
                                                <span className="ml-3 px-3 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                                                    Required
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4">{doc.description}</p>

                                        <div className="bg-gray-50 rounded-xl p-4">
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <span className="text-gray-500 font-medium">Format:</span>
                                                    <span className="ml-2 text-gray-900">{doc.format.join(', ')}</span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500 font-medium">Max Size:</span>
                                                    <span className="ml-2 text-gray-900">{doc.maxSize}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    {doc.example && (
                                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center">
                                            <Download className="w-4 h-4 mr-2" />
                                            Sample
                                        </button>
                                    )}
                                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300">
                                        <Info className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Important Dates Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important Dates</h3>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-8">
                                <div className="space-y-6">
                                    {importantDates.map((item, index) => (
                                        <div key={index} className="flex items-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
                                            <div className="flex-shrink-0 mr-6">
                                                <div className="bg-indigo-50 p-4 rounded-2xl">
                                                    <Calendar className="w-8 h-8 text-indigo-600" />
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-lg font-bold text-gray-900">{item.event}</h4>
                                                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getDateStatus(item.status)}`}>
                                                        {item.status === 'completed' ? 'Completed' :
                                                            item.status === 'current' ? 'Current' : 'Upcoming'}
                                                    </span>
                                                </div>
                                                <p className="text-indigo-600 font-semibold mt-1">
                                                    {new Date(item.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Need Help with Your Application?</h3>
                        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                            Our admission counselors are here to guide you through every step of the process.
                        </p>
                        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                            Contact Admission Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
