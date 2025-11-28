export interface Company {
  id: number
  name: string
  rating: number
  reviews: number
  logo: string
  tags: string[]
  category: string
  bannerImage: string
  aboutImage: string
  followers: string
  website: string
  industry: string
  founded: string
  location: string
  jobOpenings: number
  about: string
  cultureDescription: string
  missions: string[]
  coreValues: Array<{
    title: string
    description: string
  }>
  highlights: Array<{
    icon: string
    label: string
    value: string
  }>
  eventsGallery?: Array<{
    id: number
    image: string
    title: string
  }>
  jobs: Array<{
    id: number
    title: string
    experience: string
    location: string
    department?: string
  }>
  departments: Array<{
    name: string
    companies: number
  }>
  articles: Array<{
    id: number
    title: string
    date: string
    image: string
  }>
  lifeAtCompany: Array<{
    id: number
    image: string
  }>
  reviewDetails: Array<{
    id: number
    author: string
    date: string
    rating: number
    title: string
    content: string
    pros: string[]
    cons: string[]
  }>
  overallRating: number
  ratingBreakdown: Array<{
    stars: number
    count: number
  }>
}

export const companiesData: Record<number, Company> = {
  1: {
    id: 1,
    name: "Studsphere pvt.Ltd",
    rating: 4.5,
    reviews: 209,
    logo: "/images/fnz-group-company-logo.jpg",
    tags: ["Foreign MNC", "FinTech/Payments", "Technology"],
    category: "internet",
    bannerImage: "/images/rectangle-204892.png",
    aboutImage: "/images/rectangle-204717.png",
    followers: "100k",
    website: "www.studsphere.com",
    industry: "Consulting",
    founded: "Lorem Ipsum Dolor",
    location: "Kathmandu, Nepal",
    jobOpenings: 14,
    about:
      "One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized. This means Lorem ipsum has only limited use, as in Latin certain letters appear more frequently than others - which creates a distinct visual impression.",
    cultureDescription:
      "One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.",
    missions: [
      "One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently.",
      "One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently.",
      "One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently.",
    ],
    coreValues: [
      {
        title: "Integrity",
        description: "We maintain the highest standards of honesty and transparency in all our dealings.",
      },
      {
        title: "Innovation",
        description: "We continuously push boundaries to create cutting-edge solutions for our clients.",
      },
      {
        title: "Excellence",
        description: "We strive for excellence in every project and interaction with our stakeholders.",
      },
    ],
    highlights: [
      { icon: "📊", label: "Industry", value: "Consulting" },
      { icon: "📅", label: "Founded", value: "2015" },
      { icon: "📍", label: "Location", value: "Kathmandu, Nepal" },
    ],
    eventsGallery: [
      { id: 1, image: "/images/rectangle-204717.png", title: "Company Retreat" },
      { id: 2, image: "/images/rectangle-204892.png", title: "Team Building" },
      { id: 3, image: "/images/rectangle-204717.png", title: "Tech Conference" },
      { id: 4, image: "/images/rectangle-204892.png", title: "Workshop" },
    ],
    jobs: [
      {
        id: 1,
        title: "Junior QA Engineer",
        experience: "0-10 yrs",
        location: "New Baneshwor Kathmandu",
        department: "QA",
      },
      {
        id: 2,
        title: "Junior QA Engineer",
        experience: "0-10 yrs",
        location: "New Baneshwor Kathmandu",
        department: "QA",
      },
      {
        id: 3,
        title: "Junior QA Engineer",
        experience: "0-10 yrs",
        location: "New Baneshwor Kathmandu",
        department: "QA",
      },
    ],
    departments: [
      { name: "Internet", companies: 2200 },
      { name: "Internet", companies: 2200 },
      { name: "Internet", companies: 2200 },
    ],
    articles: [
      {
        id: 1,
        title: "Developing Authentic Pride Month Marketing Strategies ?",
        date: "February 28, 2024",
        image: "/images/rectangle-204717.png",
      },
      {
        id: 2,
        title: "Developing Authentic Pride Month Marketing Strategies ?",
        date: "February 28, 2024",
        image: "/images/rectangle-204717.png",
      },
      {
        id: 3,
        title: "Developing Authentic Pride Month Marketing Strategies ?",
        date: "February 28, 2024",
        image: "/images/rectangle-204717.png",
      },
    ],
    lifeAtCompany: [
      { id: 1, image: "/images/rectangle-204717.png" },
      { id: 2, image: "/images/rectangle-204717.png" },
      { id: 3, image: "/images/rectangle-204717.png" },
    ],
    reviewDetails: [
      {
        id: 1,
        author: "Anonymous User",
        date: "09 Dec 23, 09:48 PM",
        rating: 5,
        title: "Great",
        content:
          "One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.",
        pros: [
          "One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently",
          "One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently",
        ],
        cons: [
          "One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently",
          "One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently",
        ],
      },
    ],
    overallRating: 4.6,
    ratingBreakdown: [
      { stars: 5, count: 8 },
      { stars: 4, count: 8 },
      { stars: 3, count: 0 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ],
  },
  2: {
    id: 2,
    name: "TechFlow Solutions",
    rating: 4.7,
    reviews: 156,
    logo: "/images/fnz-group-company-logo.jpg",
    tags: ["Indian MNC", "Technology", "SaaS"],
    category: "software",
    bannerImage: "/images/rectangle-204892.png",
    aboutImage: "/images/rectangle-204717.png",
    followers: "75k",
    website: "www.techflow.com",
    industry: "Software Development",
    founded: "2018",
    location: "Bangalore, India",
    jobOpenings: 18,
    about:
      "TechFlow Solutions is a leading software development company specializing in cloud infrastructure and AI-powered solutions. We work with Fortune 500 companies to transform their digital operations.",
    cultureDescription:
      "We believe in fostering a culture of innovation, collaboration, and continuous learning. Our team members are empowered to take ownership of their projects and contribute to meaningful solutions.",
    missions: [
      "Deliver cutting-edge technology solutions that drive business transformation.",
      "Empower our team through continuous learning and professional development.",
      "Create sustainable value for our clients, employees, and stakeholders.",
    ],
    coreValues: [
      {
        title: "Innovation",
        description: "We constantly explore new technologies and methodologies to stay ahead.",
      },
      {
        title: "Collaboration",
        description: "We work together across teams to achieve common goals.",
      },
      {
        title: "Quality",
        description: "We maintain the highest standards in everything we deliver.",
      },
    ],
    highlights: [
      { icon: "📊", label: "Industry", value: "Software Development" },
      { icon: "📅", label: "Founded", value: "2018" },
      { icon: "📍", label: "Location", value: "Bangalore, India" },
    ],
    eventsGallery: [
      { id: 1, image: "/images/rectangle-204717.png", title: "Tech Summit" },
      { id: 2, image: "/images/rectangle-204892.png", title: "Hackathon" },
      { id: 3, image: "/images/rectangle-204717.png", title: "Developer Meetup" },
      { id: 4, image: "/images/rectangle-204892.png", title: "Training Session" },
    ],
    jobs: [
      {
        id: 1,
        title: "Senior Full Stack Developer",
        experience: "3-7 yrs",
        location: "Bangalore",
        department: "Engineering",
      },
      {
        id: 2,
        title: "Cloud Architect",
        experience: "5-10 yrs",
        location: "Bangalore",
        department: "Infrastructure",
      },
      {
        id: 3,
        title: "Junior Frontend Developer",
        experience: "0-2 yrs",
        location: "Bangalore",
        department: "Engineering",
      },
    ],
    departments: [
      { name: "Engineering", companies: 3500 },
      { name: "Product", companies: 2200 },
      { name: "Infrastructure", companies: 1800 },
    ],
    articles: [
      {
        id: 1,
        title: "The Future of Cloud Computing in 2024",
        date: "January 15, 2024",
        image: "/images/rectangle-204717.png",
      },
      {
        id: 2,
        title: "AI Integration in Software Development",
        date: "January 10, 2024",
        image: "/images/rectangle-204717.png",
      },
      {
        id: 3,
        title: "Best Practices for Remote Team Collaboration",
        date: "January 5, 2024",
        image: "/images/rectangle-204717.png",
      },
    ],
    lifeAtCompany: [
      { id: 1, image: "/images/rectangle-204717.png" },
      { id: 2, image: "/images/rectangle-204717.png" },
      { id: 3, image: "/images/rectangle-204717.png" },
    ],
    reviewDetails: [
      {
        id: 1,
        author: "Priya Sharma",
        date: "10 Jan 24, 02:15 PM",
        rating: 5,
        title: "Excellent workplace",
        content:
          "Great company culture with a focus on employee development. The team is supportive and the work is challenging in a good way.",
        pros: ["Excellent work-life balance", "Strong learning opportunities", "Supportive team environment"],
        cons: ["Fast-paced environment", "High expectations"],
      },
    ],
    overallRating: 4.7,
    ratingBreakdown: [
      { stars: 5, count: 12 },
      { stars: 4, count: 6 },
      { stars: 3, count: 1 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ],
  },
  3: {
    id: 3,
    name: "FinanceHub Global",
    rating: 4.4,
    reviews: 198,
    logo: "/images/bread-financial-logo.jpg",
    tags: ["International MNC", "FinTech", "Finance"],
    category: "finance",
    bannerImage: "/images/rectangle-204892.png",
    aboutImage: "/images/rectangle-204717.png",
    followers: "85k",
    website: "www.financehub.com",
    industry: "Financial Services",
    founded: "2015",
    location: "Singapore",
    jobOpenings: 22,
    about:
      "FinanceHub Global is a leading financial services company specializing in fintech solutions and digital banking platforms. We serve millions of users across Asia and beyond.",
    cultureDescription:
      "Our culture is built on trust, transparency, and continuous innovation. We value diversity and inclusion, and we're committed to creating a workplace where everyone can thrive.",
    missions: [
      "Transform financial services through innovative technology.",
      "Empower individuals with better financial tools and knowledge.",
      "Build a sustainable and inclusive financial ecosystem.",
    ],
    coreValues: [
      {
        title: "Trust",
        description: "We build trust through transparency and reliability.",
      },
      {
        title: "Innovation",
        description: "We leverage technology to solve complex financial challenges.",
      },
      {
        title: "Inclusion",
        description: "We create opportunities for everyone to succeed.",
      },
    ],
    highlights: [
      { icon: "📊", label: "Industry", value: "Financial Services" },
      { icon: "📅", label: "Founded", value: "2015" },
      { icon: "📍", label: "Location", value: "Singapore" },
    ],
    eventsGallery: [
      { id: 1, image: "/images/rectangle-204717.png", title: "Finance Summit" },
      { id: 2, image: "/images/rectangle-204892.png", title: "Webinar" },
      { id: 3, image: "/images/rectangle-204717.png", title: "Networking Event" },
      { id: 4, image: "/images/rectangle-204892.png", title: "Conference" },
    ],
    jobs: [
      {
        id: 1,
        title: "Financial Analyst",
        experience: "2-5 yrs",
        location: "Singapore",
        department: "Finance",
      },
      {
        id: 2,
        title: "Backend Engineer",
        experience: "4-8 yrs",
        location: "Singapore",
        department: "Engineering",
      },
      {
        id: 3,
        title: "Product Manager",
        experience: "3-6 yrs",
        location: "Singapore",
        department: "Product",
      },
    ],
    departments: [
      { name: "Finance", companies: 2800 },
      { name: "Engineering", companies: 3500 },
      { name: "Product", companies: 2200 },
    ],
    articles: [
      {
        id: 1,
        title: "The Rise of Digital Banking",
        date: "January 20, 2024",
        image: "/images/rectangle-204717.png",
      },
      {
        id: 2,
        title: "Cryptocurrency and the Future of Finance",
        date: "January 18, 2024",
        image: "/images/rectangle-204717.png",
      },
      {
        id: 3,
        title: "Financial Inclusion Through Technology",
        date: "January 16, 2024",
        image: "/images/rectangle-204717.png",
      },
    ],
    lifeAtCompany: [
      { id: 1, image: "/images/rectangle-204717.png" },
      { id: 2, image: "/images/rectangle-204717.png" },
      { id: 3, image: "/images/rectangle-204717.png" },
    ],
    reviewDetails: [
      {
        id: 1,
        author: "Rajesh Kumar",
        date: "08 Jan 24, 11:30 AM",
        rating: 4,
        title: "Good opportunity",
        content:
          "Solid company with good growth prospects. The work environment is professional and the compensation is competitive.",
        pros: ["Competitive salary", "Career growth opportunities", "Professional environment"],
        cons: ["Competitive pressure", "High workload during peak times"],
      },
    ],
    overallRating: 4.4,
    ratingBreakdown: [
      { stars: 5, count: 10 },
      { stars: 4, count: 8 },
      { stars: 3, count: 2 },
      { stars: 2, count: 1 },
      { stars: 1, count: 0 },
    ],
  },
}

export function getCompanyById(id: number): Company | undefined {
  return companiesData[id]
}

export function getAllCompanies(): Company[] {
  return Object.values(companiesData)
}
