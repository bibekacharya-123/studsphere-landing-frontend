/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, Target, Award, BookOpen, Users, CheckCircle, AlertCircle, Info, BarChart3, PieChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CollegeNavbar from '@/components/college/college-navbar';

export default function PredictorPage() {
  const [formData, setFormData] = useState({
    examType: '',
    marks: '',
    category: '',
    location: '',
    preferences: []
  });
  const [predictions, setPredictions] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const examTypes = [
    { value: 'ioe', label: 'IOE Entrance Exam' },
    { value: 'mbbs', label: 'MBBS Entrance Exam' },
    { value: 'cmat', label: 'CMAT' },
    { value: 'kuee', label: 'KUEE' },
    { value: 'see', label: 'SEE' },
    { value: 'neb12', label: 'Grade 12 (NEB)' }
  ];

  const categories = [
    { value: 'general', label: 'General' },
    { value: 'janajati', label: 'Janajati' },
    { value: 'dalit', label: 'Dalit' },
    { value: 'madhesi', label: 'Madhesi' },
    { value: 'muslim', label: 'Muslim' },
    { value: 'female', label: 'Female' },
    { value: 'disabled', label: 'Disabled' }
  ];

  const locations = [
    { value: 'kathmandu', label: 'Kathmandu Valley' },
    { value: 'pokhara', label: 'Pokhara' },
    { value: 'chitwan', label: 'Chitwan' },
    { value: 'biratnagar', label: 'Biratnagar' },
    { value: 'nepalgunj', label: 'Nepalgunj' },
    { value: 'dharan', label: 'Dharan' },
    { value: 'butwal', label: 'Butwal' }
  ];

  const samplePredictions = [
    {
      college: 'Pulchowk Campus (IOE)',
      program: 'Computer Engineering',
      probability: 95,
      rank: 1,
      cutoff: 85,
      type: 'public',
      location: 'Lalitpur'
    },
    {
      college: 'Kathmandu University',
      program: 'Computer Engineering',
      probability: 88,
      rank: 2,
      cutoff: 82,
      type: 'public',
      location: 'Dhulikhel'
    },
    {
      college: 'KCMIT',
      program: 'Computer Engineering',
      probability: 92,
      rank: 3,
      cutoff: 78,
      type: 'private',
      location: 'Lalitpur'
    },
    {
      college: 'Tribhuvan University',
      program: 'Computer Science',
      probability: 85,
      rank: 4,
      cutoff: 75,
      type: 'public',
      location: 'Kathmandu'
    },
    {
      college: 'NIST College',
      program: 'Computer Science',
      probability: 90,
      rank: 5,
      cutoff: 72,
      type: 'private',
      location: 'Kathmandu'
    }
  ];

  const handlePredict = () => {
    // Simulate prediction logic
    setPredictions(samplePredictions);
    setShowResults(true);
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 90) return 'text-green-600 bg-green-100';
    if (probability >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getProbabilityIcon = (probability: number) => {
    if (probability >= 90) return CheckCircle;
    if (probability >= 70) return AlertCircle;
    return Info;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <CollegeNavbar/>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800 pt-20 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-500" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 backdrop-blur-sm">
                🎯 AI-Powered College Prediction
              </Badge>
              <h1 className="text-6xl font-bold text-white leading-tight">
                Predict Your
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  College Chances
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Get accurate predictions for college admissions based on your exam scores, category, and preferences. Our AI-powered system analyzes historical data to give you the best insights.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Calculator, label: 'Predictions Made', value: '50K+', color: 'bg-blue-500' },
                { icon: TrendingUp, label: 'Accuracy Rate', value: '92%', color: 'bg-green-500' },
                { icon: Target, label: 'Success Stories', value: '15K+', color: 'bg-purple-500' },
                { icon: Award, label: 'Colleges Covered', value: '100+', color: 'bg-orange-500' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center justify-center space-x-4 text-sm text-white/90">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                <span>Historical Data</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                <span>Personalized Results</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Prediction Form */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-violet-700 text-white rounded-t-lg">
                  <CardTitle className="text-xl flex items-center">
                    <Calculator className="w-5 h-5 mr-2" />
                    College Predictor
                  </CardTitle>
                  <CardDescription className="text-purple-100">
                    Enter your details to get predictions
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="examType">Exam Type</Label>
                      <Select value={formData.examType} onValueChange={(value) => setFormData({...formData, examType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select exam type" />
                        </SelectTrigger>
                        <SelectContent>
                          {examTypes.map((exam) => (
                            <SelectItem key={exam.value} value={exam.value}>
                              {exam.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="marks">Your Marks/Score</Label>
                      <Input
                        id="marks"
                        type="number"
                        placeholder="Enter your marks"
                        value={formData.marks}
                        onChange={(e) => setFormData({...formData, marks: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="location">Preferred Location</Label>
                      <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location.value} value={location.value}>
                              {location.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    onClick={handlePredict}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    disabled={!formData.examType || !formData.marks || !formData.category}
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Predict My Chances
                  </Button>

                  <div className="text-xs text-gray-500 text-center">
                    Predictions are based on historical data and trends. Actual results may vary.
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2">
              {!showResults ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calculator className="w-12 h-12 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Predict?</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Fill in your exam details on the left to get personalized college admission predictions.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    {[
                      { icon: BarChart3, title: 'Detailed Analysis', desc: 'Get comprehensive insights' },
                      { icon: PieChart, title: 'Visual Reports', desc: 'Easy to understand charts' },
                      { icon: Target, title: 'Accurate Predictions', desc: '92% accuracy rate' }
                    ].map((feature, index) => (
                      <div key={index} className="text-center p-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <feature.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                        Your Prediction Results
                      </CardTitle>
                      <CardDescription>
                        Based on your score of {formData.marks} in {examTypes.find(e => e.value === formData.examType)?.label}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {predictions.map((prediction, index) => {
                          const ProbabilityIcon = getProbabilityIcon(prediction.probability);
                          return (
                            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <h4 className="font-semibold text-gray-900">{prediction.college}</h4>
                                  <p className="text-sm text-gray-600">{prediction.program}</p>
                                </div>
                                <div className="text-right">
                                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getProbabilityColor(prediction.probability)}`}>
                                    <ProbabilityIcon className="w-4 h-4 mr-1" />
                                    {prediction.probability}% chance
                                  </div>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-500">Rank:</span>
                                  <span className="ml-1 font-medium">#{prediction.rank}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Cutoff:</span>
                                  <span className="ml-1 font-medium">{prediction.cutoff}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Type:</span>
                                  <Badge variant="secondary" className="ml-1">
                                    {prediction.type}
                                  </Badge>
                                </div>
                                <div>
                                  <span className="text-gray-500">Location:</span>
                                  <span className="ml-1 font-medium">{prediction.location}</span>
                                </div>
                              </div>
                              
                              <div className="mt-3 flex gap-2">
                                <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                                  View Details
                                </Button>
                                <Button variant="outline" size="sm">
                                  Compare
                                </Button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additional Insights */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Recommendation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                            <span className="text-sm text-gray-700">
                              You have excellent chances at top engineering colleges
                            </span>
                          </div>
                          <div className="flex items-start">
                            <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                            <span className="text-sm text-gray-700">
                              Consider applying to both public and private institutions
                            </span>
                          </div>
                          <div className="flex items-start">
                            <Target className="w-5 h-5 text-purple-600 mr-2 mt-0.5" />
                            <span className="text-sm text-gray-700">
                              Focus on your top 3 choices for best results
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Next Steps</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <Button variant="outline" className="w-full justify-start">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Explore College Details
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Users className="w-4 h-4 mr-2" />
                            Connect with Alumni
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Start Application Process
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}