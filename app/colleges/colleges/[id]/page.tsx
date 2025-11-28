/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';
import CollegeDetailClient from './CollegeDetailClient';

// Generate static params for all college pages
export async function generateStaticParams() {
  return [
    { id: 'tribhuvan-university' },
    { id: 'kathmandu-university' },
    { id: 'st-xaviers-college' },
    { id: 'pulchowk-campus' },
    { id: 'kcmit' },
    { id: 'ace-institute' }
  ];
}

// College data - in a real app, this would be fetched from a database
const collegeData: { [key: string]: any } = {
  'tribhuvan-university': {
    id: 'tribhuvan-university',
    name: 'Tribhuvan University',
    location: 'Kathmandu',
    district: 'Kathmandu',
    province: 'Bagmati',
    rating: 4.8,
    students: 450000,
    level: 'university',
    type: 'public',
    courses: ['Engineering', 'Medicine', 'Management', 'Arts', 'Science', 'Law', 'Education', 'Agriculture', 'Forestry', 'Veterinary Science'],
    fees: 'NPR 25,000 - 2,50,000/year',
    established: 1959,
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The oldest and largest university in Nepal, offering diverse programs across multiple faculties. Tribhuvan University has been the cornerstone of higher education in Nepal for over six decades.',
    facilities: ['Central Library', 'Research Centers', 'Student Hostels', 'Sports Complex', 'Medical Center', 'Computer Labs', 'Auditoriums', 'Cafeterias', 'Parking Areas', 'Wi-Fi Campus'],
    contact: {
      phone: '+977-1-4331976',
      email: 'info@tribhuvan-university.edu.np',
      website: 'www.tribhuvan-university.edu.np',
      address: 'Kirtipur, Kathmandu, Nepal'
    },
    admissionProcess: [
      'Fill out the online application form',
      'Submit required documents (transcripts, certificates)',
      'Pay application fee',
      'Appear for entrance examination (if required)',
      'Attend counseling session',
      'Complete enrollment process'
    ],
    eligibility: {
      '+2': 'Completed SLC/SEE with minimum 2.0 GPA',
      'bachelors': 'Completed +2 or equivalent with minimum 2.0 GPA',
      'masters': 'Completed Bachelor\'s degree with minimum 2.5 GPA'
    },
    scholarships: [
      'Merit-based scholarships for top performers',
      'Need-based financial aid',
      'Research assistantships',
      'Government scholarships for underprivileged students'
    ],
    gallery: [
      'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  'kathmandu-university': {
    id: 'kathmandu-university',
    name: 'Kathmandu University',
    location: 'Dhulikhel',
    district: 'Kavre',
    province: 'Bagmati',
    rating: 4.9,
    students: 15000,
    level: 'university',
    type: 'public',
    courses: ['Engineering', 'Medicine', 'Management', 'Science', 'Arts', 'Pharmacy', 'Biotechnology', 'Environmental Science'],
    fees: 'NPR 1,50,000 - 15,00,000/year',
    established: 1991,
    image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A modern university known for quality education and research excellence. Kathmandu University is committed to providing world-class education with a focus on innovation and research.',
    facilities: ['Modern Labs', 'Digital Library', 'Student Hostels', 'Teaching Hospital', 'Research Centers', 'Sports Facilities', 'Conference Halls', 'Cafeterias', 'Transportation', 'High-Speed Internet'],
    contact: {
      phone: '+977-11-661399',
      email: 'info@ku.edu.np',
      website: 'www.ku.edu.np',
      address: 'Dhulikhel, Kavre, Nepal'
    },
    admissionProcess: [
      'Online application submission',
      'Document verification',
      'Entrance examination',
      'Merit list publication',
      'Counseling and seat allocation',
      'Fee payment and enrollment'
    ],
    eligibility: {
      'bachelors': 'Completed +2 with minimum 2.4 GPA or equivalent',
      'masters': 'Completed Bachelor\'s degree with minimum 2.7 GPA'
    },
    scholarships: [
      'Academic excellence scholarships',
      'Research fellowships',
      'International exchange programs',
      'Industry-sponsored scholarships'
    ],
    gallery: [
      'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  'st-xaviers-college': {
    id: 'st-xaviers-college',
    name: 'St. Xavier\'s College',
    location: 'Maitighar',
    district: 'Kathmandu',
    province: 'Bagmati',
    rating: 4.7,
    students: 3500,
    level: '+2',
    type: 'private',
    courses: ['Science', 'Management', 'Humanities', 'Law'],
    fees: 'NPR 1,20,000 - 1,50,000/year',
    established: 1988,
    image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premier +2 college known for academic excellence and discipline. St. Xavier\'s College has been a leader in secondary education, producing outstanding students for over three decades.',
    facilities: ['Modern Classrooms', 'Science Labs', 'Computer Lab', 'Library', 'Sports Ground', 'Cafeteria', 'Auditorium', 'Counseling Center'],
    contact: {
      phone: '+977-1-4428516',
      email: 'info@sxc.edu.np',
      website: 'www.sxc.edu.np',
      address: 'Maitighar, Kathmandu, Nepal'
    },
    admissionProcess: [
      'Submit application form with required documents',
      'Appear for entrance examination',
      'Interview (if shortlisted)',
      'Merit list publication',
      'Fee payment and admission confirmation'
    ],
    eligibility: {
      '+2': 'Completed SLC/SEE with minimum 3.0 GPA'
    },
    scholarships: [
      'Merit scholarships for top students',
      'Need-based financial assistance',
      'Sports scholarships',
      'Alumni scholarships'
    ],
    gallery: [
      'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  'pulchowk-campus': {
    id: 'pulchowk-campus',
    name: 'Pulchowk Campus (IOE)',
    location: 'Pulchowk',
    district: 'Lalitpur',
    province: 'Bagmati',
    rating: 4.9,
    students: 4500,
    level: 'bachelors',
    type: 'public',
    courses: ['Civil Engineering', 'Computer Engineering', 'Electronics Engineering', 'Mechanical Engineering', 'Architecture', 'Industrial Engineering'],
    fees: 'NPR 1,20,000 - 2,00,000/year',
    established: 1930,
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premier engineering college of Nepal under Tribhuvan University. Pulchowk Campus has been the leading institution for engineering education in Nepal for over 90 years.',
    facilities: ['Engineering Labs', 'Workshops', 'Central Library', 'Research Centers', 'Student Hostels', 'Sports Complex', 'Cafeteria', 'Computer Centers', 'Seminar Halls'],
    contact: {
      phone: '+977-1-5525555',
      email: 'info@ioe.edu.np',
      website: 'www.ioe.edu.np',
      address: 'Pulchowk, Lalitpur, Nepal'
    },
    admissionProcess: [
      'Appear for IOE Entrance Examination',
      'Merit list based on entrance exam results',
      'Document verification',
      'Counseling and seat allocation',
      'Fee payment and enrollment'
    ],
    eligibility: {
      'bachelors': 'Completed +2 Science with Physics, Chemistry, and Mathematics with minimum 2.4 GPA'
    },
    scholarships: [
      'Government scholarships for deserving students',
      'Merit-based scholarships',
      'Research assistantships',
      'International exchange programs'
    ],
    gallery: [
      'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  'kcmit': {
    id: 'kcmit',
    name: 'KCMIT',
    location: 'Lalitpur',
    district: 'Lalitpur',
    province: 'Bagmati',
    rating: 4.5,
    students: 1200,
    level: 'bachelors',
    type: 'private',
    courses: ['Computer Engineering', 'Software Engineering', 'Information Technology', 'Computer Science'],
    fees: 'NPR 4,50,000 - 6,00,000/year',
    established: 2000,
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Leading IT college affiliated with Kathmandu University. KCMIT is dedicated to providing quality education in computer science and information technology.',
    facilities: ['Computer Labs', 'Project Labs', 'Library', 'Cafeteria', 'Parking', 'Wi-Fi Campus', 'Seminar Halls', 'Recreation Area'],
    contact: {
      phone: '+977-1-5201003',
      email: 'info@kcmit.edu.np',
      website: 'www.kcmit.edu.np',
      address: 'Lalitpur, Nepal'
    },
    admissionProcess: [
      'Submit online application',
      'Appear for KUEE (Kathmandu University Entrance Examination)',
      'Merit list publication',
      'Counseling session',
      'Document verification and fee payment'
    ],
    eligibility: {
      'bachelors': 'Completed +2 Science with Mathematics or +2 Computer Science with minimum 2.4 GPA'
    },
    scholarships: [
      'Academic merit scholarships',
      'Need-based financial aid',
      'Industry partnerships scholarships',
      'Alumni scholarships'
    ],
    gallery: [
      'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  'ace-institute': {
    id: 'ace-institute',
    name: 'Ace Institute of Management',
    location: 'New Baneshwor',
    district: 'Kathmandu',
    province: 'Bagmati',
    rating: 4.6,
    students: 2000,
    level: 'bachelors',
    type: 'private',
    courses: ['BBA', 'BHM', 'MBA', 'MHM', 'EMBA'],
    fees: 'NPR 3,50,000 - 8,00,000/year',
    established: 2000,
    image: 'https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Leading management college with international affiliations. Ace Institute of Management is known for its innovative curriculum and industry connections.',
    facilities: ['Modern Classrooms', 'Computer Labs', 'Library', 'Auditorium', 'Cafeteria', 'Conference Rooms', 'Student Lounge', 'Parking'],
    contact: {
      phone: '+977-1-4102030',
      email: 'info@ace.edu.np',
      website: 'www.ace.edu.np',
      address: 'New Baneshwor, Kathmandu, Nepal'
    },
    admissionProcess: [
      'Submit application with academic transcripts',
      'Appear for entrance examination',
      'Group discussion and personal interview',
      'Merit list publication',
      'Admission confirmation and fee payment'
    ],
    eligibility: {
      'bachelors': 'Completed +2 or equivalent with minimum 2.0 GPA',
      'masters': 'Completed Bachelor\'s degree with minimum 2.5 GPA'
    },
    scholarships: [
      'Merit-based scholarships',
      'Need-based financial assistance',
      'Corporate scholarships',
      'International exchange programs'
    ],
    gallery: [
      'https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  }
};

export default async function CollegeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: collegeId } = await params;
  const college = collegeData[collegeId];

  if (!college) {
    notFound();
  }

  return <CollegeDetailClient college={college} />;
}