'use client';

import { useState } from 'react';
import {
    GraduationCap,
    Clock,
    Calendar,
    CheckCircle,
    FileText,
    CreditCard,
    Users,
    Award,
    ChevronRight
} from 'lucide-react';

interface AdmissionProcess {
    step: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    status: 'completed' | 'current' | 'upcoming';
    deadline?: string;
}

export default function AdmissionProcessSection() {
    const [selectedStep, setSelectedStep] = useState(1);

    const admissionSteps: AdmissionProcess[] = [
        {
            step: 1,
            title: "Research & Explore",
            description: "Browse colleges, compare programs, and check eligibility criteria for your preferred courses.",
            icon: <GraduationCap className="w-6 h-6" />,
            status: 'completed'
        },
        {
            step: 2,
            title: "Prepare Documents",
            description: "Gather all required documents including transcripts, certificates, and recommendation letters.",
            icon: <FileText className="w-6 h-6" />,
            status: 'current'
        },
        {
            step: 3,
            title: "Apply Online",
            description: "Submit your application through our streamlined online portal with all necessary documents.",
            icon: <Calendar className="w-6 h-6" />,
            status: 'upcoming',
            deadline: 'Mar 31, 2025'
        },
        {
            step: 4,
            title: "Application Review",
            description: "Your application will be reviewed by the admissions committee for evaluation.",
            icon: <Clock className="w-6 h-6" />,
            status: 'upcoming'
        },
        {
            step: 5,
            title: "Entrance Exam",
            description: "Appear for entrance exams if required by your chosen program and college.",
            icon: <Award className="w-6 h-6" />,
            status: 'upcoming'
        },
        {
            step: 6,
            title: "Interview Process",
            description: "Participate in interviews or counseling sessions as part of the selection process.",
            icon: <Users className="w-6 h-6" />,
            status: 'upcoming'
        },
        {
            step: 7,
            title: "Fee Payment",
            description: "Complete the admission by paying the required fees and confirming your seat.",
            icon: <CreditCard className="w-6 h-6" />,
            status: 'upcoming'
        },
        {
            step: 8,
            title: "Admission Confirmed",
            description: "Congratulations! Your admission is confirmed. Prepare for your academic journey.",
            icon: <CheckCircle className="w-6 h-6" />,
            status: 'upcoming'
        }
    ];

    const quickActions = [
        { title: "Application Form", description: "Start your application", color: "bg-blue-500", link: "#" },
        { title: "Document Checklist", description: "Required documents", color: "bg-green-500", link: "#" },
        { title: "Fee Structure", description: "View admission fees", color: "bg-purple-500", link: "#" },
        { title: "Contact Support", description: "Get help", color: "bg-orange-500", link: "#" }
    ];

    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-blue-100 text-blue-700 font-semibold py-2 px-6 rounded-full text-sm uppercase tracking-wide mb-4">
                        ADMISSION PROCESS
                    </span>
                    <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
                        Your Path to <span className="text-blue-600">Success</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Follow our streamlined admission process designed to make your journey smooth and hassle-free.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                        {admissionSteps.map((step, index) => (
                            <div
                                key={step.step}
                                onClick={() => setSelectedStep(step.step)}
                                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${step.status === 'completed'
                                        ? 'bg-green-50 border-green-200 hover:border-green-300'
                                        : step.status === 'current'
                                            ? 'bg-blue-50 border-blue-200 hover:border-blue-300'
                                            : 'bg-white border-gray-200 hover:border-gray-300'
                                    } ${selectedStep === step.step ? 'ring-4 ring-blue-200' : ''}`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`p-3 rounded-full mr-4 ${step.status === 'completed'
                                            ? 'bg-green-500 text-white'
                                            : step.status === 'current'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-200 text-gray-600'
                                        }`}>
                                        {step.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-500">Step {step.step}</span>
                                            {step.status === 'completed' && (
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">{step.description}</p>

                                {step.deadline && (
                                    <div className="flex items-center text-red-600 text-sm font-medium">
                                        <Clock className="w-4 h-4 mr-1" />
                                        Deadline: {step.deadline}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Actions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickActions.map((action, index) => (
                            <a
                                key={index}
                                href={action.link}
                                className={`${action.color} text-white p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-bold text-lg">{action.title}</h4>
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <p className="text-white/90 text-sm">{action.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
