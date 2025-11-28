"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    BookOpen,
    Target,
    Award,
    FileText,
    Clock
} from 'lucide-react';

interface SidebarProps {
    activeTab?: string;
    setActiveTab?: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
    const pathname = usePathname();

    const sidebarItems = [
        { id: 'dashboard', label: 'Dashboard', icon: Target, href: '/colleges/resources/dashboard' },
        { id: 'notes', label: 'School and college Notes', icon: FileText, href: '/colleges/resources/notes' },
        { id: 'testprep', label: 'Test prep', icon: Award, href: '/colleges/resources/testprep' },
        { id: 'courses', label: 'Courses', icon: BookOpen, href: '/colleges/resources/courses' },
        { id: 'studylist', label: 'Study List', icon: Clock, href: '/colleges/resources/studylist' }
    ];

    const isActive = (href: string) => {
        return pathname === href || activeTab === href.split('/').pop();
    };

    return (
        <div className="w-64 bg-white shadow-sm border-r">
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-6">StudSphere</h2>
                <nav className="space-y-1">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            onClick={() => setActiveTab && setActiveTab(item.id)}
                            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive(item.href)
                                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <item.icon className="mr-3 h-5 w-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;