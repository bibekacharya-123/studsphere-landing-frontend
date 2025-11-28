'use client';

import { Search, Award, TrendingUp, BookOpen } from 'lucide-react';

interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

export default function SuccessSection() {
  const features: FeatureData[] = [
    {
      id: 'finder',
      title: 'College Finder',
      description: 'Find the perfect college that matches your preferences',
      icon: <Search className="w-7 h-7 text-white" />,
      iconBg: 'bg-red-500'
    },
    {
      id: 'scholarship',
      title: 'Scholarship Finder',
      description: 'Discover scholarships and financial aid opportunities for your education',
      icon: <Award className="w-7 h-7 text-white" />,
      iconBg: 'bg-orange-500'
    },
    {
      id: 'predictor',
      title: 'College Predictor',
      description: 'Predict your chances of admission based on your academic profile',
      icon: <TrendingUp className="w-7 h-7 text-white" />,
      iconBg: 'bg-purple-600'
    },
    {
      id: 'exams',
      title: 'Exams',
      description: 'Prepare for entrance exams with our comprehensive study materials',
      icon: <BookOpen className="w-7 h-7 text-white" />,
      iconBg: 'bg-blue-500'
    }
  ];

  const handleExploreClick = (feature: FeatureData) => {
    alert(`Exploring ${feature.title}. This would navigate to the ${feature.title.toLowerCase()} page.`);
  };

  return (
    <div className="section-container py-20 text-center">
      <span className="inline-block bg-green-100 text-green-700 font-semibold py-2 px-5 rounded-full text-sm uppercase tracking-wide mb-4">
        Explore Features
      </span>
      <h2 className="text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
      Smarter Tools, Greater Success
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        Smart tools & insights to guide your education journey.
      </p>
      
      <div className="flex overflow-x-auto gap-7 pb-8 scrollbar-hide flex-wrap justify-center">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex-shrink-0 w-72 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-4 text-left flex flex-col justify-between border border-gray-200"
          >
            <div>
              <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-7 shadow-lg transition-transform duration-400 hover:scale-110`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-7 flex-grow">
                {feature.description}
              </p>
            </div>
            
            <button
              onClick={() => handleExploreClick(feature)}
              className="w-full py-3 px-6 border border-gray-200 rounded-lg text-blue-600 font-semibold transition-all duration-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 text-center"
            >
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}