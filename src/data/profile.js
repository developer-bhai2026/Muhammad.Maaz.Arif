// All site content lives here. Edit this file to update the portfolio.
// Source: Curriculum Vitae of Dr. Muhammad Maaz Arif.

const WOS = 'https://www.webofscience.com/wos/author/record/AAD-6565-2021'

export const profile = {
  name: 'Dr. Muhammad Maaz Arif',
  initials: 'MA',
  title: 'Public Health Specialist · Medical Educator · Researcher',
  tagline:
    'Medical doctor and public health educator working across community, environmental and occupational health — through teaching, research and consultancy.',
  photo: '/images/profile.jpg', // a .webp with the same name is served to browsers that support it
  location: 'Lahore, Pakistan',
  address: 'Model Town, Lahore',
  email: 'maazarifbutt@gmail.com',
  phone: '+92 322 4509884',
  orcid: '0000-0003-0834-7773',
  wosId: 'AAD-6565-2021',
  socials: {
    scholar: 'https://scholar.google.com/citations?user=CxH8oXAAAAAJ&hl=en',
    researchgate: 'https://www.researchgate.net/profile/Muhammad-Maaz-Arif',
    wos: WOS,
    orcid: 'https://orcid.org/0000-0003-0834-7773',
  },
}

export const stats = [
  { value: '50+', label: 'Published Articles' },
  { value: '22', label: 'Articles Peer-Reviewed' },
  { value: '07', label: 'Articles Edited' },
  { value: '8+', label: 'Years of Experience' },
]

export const about = {
  summary: [
    'Dr. Muhammad Maaz Arif is a medical graduate (MBBS) from Services Institute of Medical Sciences, Lahore, with an M.Phil in Occupational Health & Safety and a Postgraduate Diploma in Total Quality Management from the University of the Punjab.',
    'After his house job in Medicine and Surgery at Services Hospital, Lahore, he has taught Community Medicine, Community Health Sciences, Medical Education and Public Health at leading institutions including the University of Health Sciences, Lahore. He currently serves as Demonstrator / Lecturer at the Institute of Public Health, Government of the Punjab.',
    'An active researcher, he has authored 50+ articles — original research, reviews and clinical trials — and contributes to the scientific community as a peer reviewer and editor. He is a recipient of the Al-Khidmat Eco-Award for his commitment to the betterment of the environment.',
  ],
  expertise: [
    'Public Health',
    'Community Medicine',
    'Occupational Health & Safety',
    'Environmental Health',
    'Medical Education',
    'Total Quality Management',
  ],
  skills: [
    'Research & Development',
    'Teaching & Mentoring',
    'Data Collection & Interpretation',
    'Report Writing',
    'Innovation & Commercialization',
    'SPSS',
    'EndNote',
    'Mendeley',
    'MS Word, Excel & PowerPoint',
  ],
  education: [
    {
      degree: 'M.Phil — Occupational Health & Safety',
      institute: 'University of the Punjab, Lahore',
      year: '2020',
      score: 'CGPA 3.59 / 4.00',
    },
    {
      degree: 'PGD — Total Quality Management',
      institute: 'University of the Punjab, Lahore',
      year: '2020',
      score: 'CGPA 2.58 / 4.00',
    },
    {
      degree: 'M.B.B.S',
      institute: 'Services Institute of Medical Sciences / University of Health Sciences, Lahore',
      year: '2017',
      score: '60.72%',
    },
    {
      degree: 'F.Sc (Pre-Medical)',
      institute: 'Govt. College University, Lahore',
      year: '2010',
      score: '84.09%',
    },
    {
      degree: 'Matriculation',
      institute: 'Customs Public School, Lahore',
      year: '2008',
      score: '90.24%',
    },
  ],
  experience: [
    {
      role: 'Demonstrator / Lecturer',
      org: 'Institute of Public Health, Govt. of the Punjab, Lahore',
      period: 'Aug 2026 – Present',
      description: 'Public Health',
    },
    {
      role: 'Public Health Consultant',
      org: 'Contech International Health Consultants, Lahore',
      period: 'Jul 2024 – Dec 2024',
      description: 'Public Health',
    },
    {
      role: 'Lecturer',
      org: 'University of Health Sciences, Lahore',
      period: 'Jun 2022 – May 2024',
      description: 'Medical Education',
    },
    {
      role: 'Demonstrator / Lecturer',
      org: 'Khawaja Muhammad Safdar Medical College, Sialkot',
      period: 'Apr 2022 – May 2022',
      description: 'Community Medicine',
    },
    {
      role: 'Demonstrator / Lecturer',
      org: 'Central Park Medical College, Lahore',
      period: 'Aug 2021 – Mar 2022',
      description: 'Community Medicine',
    },
    {
      role: 'Demonstrator / Lecturer',
      org: 'FMH College of Medicine and Dentistry, Lahore',
      period: 'Oct 2019 – Jul 2021',
      description: 'Community Health Sciences',
    },
    {
      role: 'House Officer',
      org: 'Services Hospital, Lahore',
      period: 'Jun 2018 – Sep 2019',
      description: 'Medicine and Surgery',
    },
  ],
  awards: [
    'Al-Khidmat Eco-Award — in recognition of exceptional commitment to the betterment of the environment',
  ],
}

export const services = [
  {
    icon: 'GraduationCap',
    title: 'Teaching & Mentoring',
    text: 'Teaching Community Medicine, Public Health and Medical Education, and mentoring students in public health, environmental and medical sciences.',
  },
  {
    icon: 'FlaskConical',
    title: 'Research & Publishing',
    text: '50+ published articles including original research, reviews and clinical trials, plus peer-review and editorial work.',
  },
  {
    icon: 'Briefcase',
    title: 'Public Health Consultancy',
    text: 'Public, environmental and occupational health expertise backed by training in Occupational Health & Safety and Total Quality Management.',
  },
]

export const portfolioCategories = ['All', 'Research', 'Talks', 'Workshops', 'Awards']

export const portfolio = [
  {
    title: '50+ Published / Accepted Articles',
    category: 'Research',
    year: 'Ongoing',
    description: 'Author of more than 50 articles, including original research articles, review articles and clinical trials.',
    tags: ['Author', 'Web of Science'],
    link: WOS,
  },
  {
    title: 'Peer Reviewer — 22 Articles',
    category: 'Research',
    year: 'Ongoing',
    description: 'Reviewed 22 manuscripts for scientific journals as a peer reviewer.',
    tags: ['Reviewer', 'Web of Science'],
    link: WOS,
  },
  {
    title: 'Editor — 07 Articles',
    category: 'Research',
    year: 'Ongoing',
    description: 'Handled 7 articles in an editorial capacity for scientific publications.',
    tags: ['Editor', 'Web of Science'],
    link: WOS,
  },
  {
    title: 'World Environment Day 2022',
    category: 'Talks',
    year: '2022',
    description: 'Speaker at PEC Hall, Lahore. Organised by the Pakistan Engineering Congress (PEC) on 11th June 2022.',
    tags: ['Speaker', 'Environment'],
    link: '',
  },
  {
    title: '3rd Webinar on Plastic Pollution Free Pakistan',
    category: 'Talks',
    year: '2022',
    description: 'Speaker at the webinar organised by the College of Earth and Environmental Sciences (CEES), Lahore on 3rd February 2022.',
    tags: ['Speaker', 'Environment', 'Webinar'],
    link: '',
  },
  {
    title: 'Al-Khidmat Eco-Award',
    category: 'Awards',
    year: '',
    description: 'Awarded in recognition of exceptional commitment to the betterment of the environment.',
    tags: ['Award', 'Environment'],
    link: '',
  },
  {
    title: 'One Health Approach',
    category: 'Workshops',
    year: '2026',
    description: 'Workshop organised by the Institute of Public Health, Lahore (September 2026).',
    tags: ['Institute of Public Health'],
    link: '',
  },
  {
    title: 'Best2000 (ELISA)',
    category: 'Workshops',
    year: '2026',
    description: 'Training at the Institute of Public Health, Lahore, organised by Global Marketing Services (24th–26th August 2026).',
    tags: ['ELISA', 'Laboratory'],
    link: '',
  },
  {
    title: 'Faculty Development Program',
    category: 'Workshops',
    year: '2023',
    description: 'Held at UVAS, Lahore and organised by the Punjab Higher Education Commission (12th–14th December 2023).',
    tags: ['PHEC', 'Faculty Development'],
    link: '',
  },
  {
    title: 'Basic Life Support (BLS)',
    category: 'Workshops',
    year: '2022',
    description: 'Central Park Medical College, Lahore — organised by Central Park Teaching Hospital (3rd February 2022).',
    tags: ['BLS', 'Clinical'],
    link: '',
  },
  {
    title: '20th Shaukat Khanum Cancer Symposium',
    category: 'Workshops',
    year: '2021',
    description: 'Online symposium by Shaukat Khanum Memorial Cancer Hospital & RC (4th–7th November 2021).',
    tags: ['30 CME hours', 'Oncology'],
    link: '',
  },
  {
    title: '19th Shaukat Khanum Cancer Symposium',
    category: 'Workshops',
    year: '2020',
    description: 'Online symposium by Shaukat Khanum Memorial Cancer Hospital & RC (5th–8th November 2020).',
    tags: ['41.5 CME hours', 'Oncology'],
    link: '',
  },
  {
    title: 'Research Day',
    category: 'Workshops',
    year: '2020',
    description: 'FMH College of Medicine & Dentistry, Lahore (11th March 2020).',
    tags: ['4 CME hours', 'Research'],
    link: '',
  },
  {
    title: 'Research Ethics Conference',
    category: 'Workshops',
    year: '2020',
    description: 'Held at UHS, Lahore and organised by FMH College of Medicine & Dentistry (3rd February 2020).',
    tags: ['3 CME hours', 'Ethics'],
    link: '',
  },
  {
    title: '83rd Annual Day Conference',
    category: 'Workshops',
    year: '2019',
    description: 'Lady Willingdon Hospital, organised by the Department of Obstetrics & Gynaecology (21st November 2019).',
    tags: ['30 CME hours', 'OBS & Gynae'],
    link: '',
  },
  {
    title: '18th Shaukat Khanum Cancer Symposium',
    category: 'Workshops',
    year: '2019',
    description: 'Pearl Continental, Lahore — Shaukat Khanum Memorial Cancer Hospital & RC (1st–3rd November 2019).',
    tags: ['24 CME hours', 'Oncology'],
    link: '',
  },
]
