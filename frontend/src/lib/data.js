// Static content for AmbaShree Skills Academy website

export const CONTACT = {
    phone: "+91 90457 47008",
    whatsapp: "+91 90457 47008",
    whatsappRaw: "919045747008",
    email: "info@ambashreeskills.in",
    address:
        "Hari Mandir Road, near Hari Mandir, Dineshpur - 263160, U.S. Nagar, Uttarakhand",
    mapsQuery:
        "https://www.google.com/maps?q=Hari+Mandir+Road+Dineshpur+U.S.+Nagar+Uttarakhand+263160&hl=en&z=15&output=embed",
};

export const SOCIAL = {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
    twitter: "#",
};

export const NAV_LINKS = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Faculty", href: "#faculty" },
    { label: "Students", href: "#featured-student" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

export const COURSES = [
    {
        title: "CBSE Classes 7–10",
        desc: "Concept-first CBSE curriculum coaching aligned with NCERT.",
        icon: "GraduationCap",
        tag: "Academics",
    },
    {
        title: "ICSE Classes 7–10",
        desc: "Structured ICSE coaching with focus on analytical thinking.",
        icon: "BookOpen",
        tag: "Academics",
    },
    {
        title: "State Board Classes 7–10",
        desc: "State board syllabus mastery with regular assessments.",
        icon: "School",
        tag: "Academics",
    },
    {
        title: "Mathematics",
        desc: "From foundations to advanced problem solving techniques.",
        icon: "Sigma",
        tag: "Core",
    },
    {
        title: "Science",
        desc: "Physics, Chemistry & Biology with practical demonstrations.",
        icon: "FlaskConical",
        tag: "Core",
    },
    {
        title: "Spoken English",
        desc: "Confident communication, grammar, fluency & accent training.",
        icon: "MessagesSquare",
        tag: "Skills",
    },
    {
        title: "Personality Development",
        desc: "Body language, etiquette, confidence & leadership grooming.",
        icon: "Sparkles",
        tag: "Skills",
    },
    {
        title: "Interview Preparation",
        desc: "Mock interviews, HR rounds, technical Q&A & feedback loops.",
        icon: "Briefcase",
        tag: "Career",
    },
    {
        title: "Career Guidance",
        desc: "1:1 counselling on career paths, streams & industry fit.",
        icon: "Compass",
        tag: "Career",
    },
    {
        title: "Microsoft Intune Training",
        desc: "Endpoint management, device compliance, MDM & MAM policies.",
        icon: "ShieldCheck",
        tag: "Enterprise",
    },
];

// Grouped course programs — used by the new Courses layout.
export const COURSE_GROUPS = [
    {
        id: "academic",
        title: "Academic Coaching",
        subtitle: "Classes 7–10",
        icon: "GraduationCap",
        tone: "gold",
        boards: ["CBSE", "ICSE", "State Board"],
        subjects: ["Mathematics", "Science"],
        note: "Concept-first coaching aligned with NCERT & board patterns.",
    },
    {
        id: "Spoken",
        title: "Professional Spoken English",
        subtitle: "Not a 3-month course",
        icon: "MessagesSquare",
        tone: "gold",
        highlight:
            "This is NOT a 3-month spoken English course — it is a long-term, outcome-driven communication programme.",
        items: [
            "Real English Communication",
            "Spoken English",
            "Grammar in Conversation",
            "Vocabulary Building",
            "Public Speaking",
            "Group Discussion",
            "Interview English",
            "Confidence Building",
        ],
    },
    {
        id: "personality",
        title: "Personality Development",
        subtitle: "Presence · Poise · Persuasion",
        icon: "Sparkles",
        tone: "gold",
        items: [
            "Communication Skills",
            "Confidence Building",
            "Body Language",
            "Presentation Skills",
            "Leadership Skills",
        ],
    },
    {
        id: "career",
        title: "Career & Job Readiness",
        subtitle: "From learner to hired professional",
        icon: "Briefcase",
        tone: "gold",
        items: [
            "Resume Building",
            "Mock HR Interviews",
            "Interview Preparation",
            "Career Guidance",
            "Job Assistance",
        ],
    },
];

// Upcoming IT courses — shown as elegant "Coming Soon" chips.
export const UPCOMING_IT_COURSES = [
    { title: "Microsoft Intune", icon: "ShieldCheck" },
    { title: "SCCM", icon: "Server" },
    { title: "PowerShell", icon: "Terminal" },
    { title: "Python", icon: "Code2" },
    { title: "AI Basics", icon: "Sparkles" },
    { title: "Cloud Computing", icon: "Cloud" },
];

export const WHY_CHOOSE = [
    {
        title: "Experienced Faculty",
        desc: "Certified educators & industry professionals with decades of combined experience.",
        icon: "Award",
    },
    {
        title: "Small Batch Size",
        desc: "Intimate classrooms designed for deep learning, not headcount.",
        icon: "Users",
    },
    {
        title: "Individual Attention",
        desc: "Personal mentoring — every student is seen, heard and guided.",
        icon: "UserCheck",
    },
    {
        title: "Practical Learning",
        desc: "Hands-on assignments, live demos and real-world case studies.",
        icon: "Wrench",
    },
    {
        title: "Career Guidance",
        desc: "Personalised roadmaps for streams, careers and industry fit.",
        icon: "Compass",
    },
    {
        title: "Job Assistance",
        desc: "Support with resume building, referrals and placement leads.",
        icon: "Handshake",
    },
    {
        title: "Interview Preparation",
        desc: "Mock HR & technical drills with structured, honest feedback.",
        icon: "Briefcase",
    },
    {
        title: "Affordable Fees",
        desc: "Premium quality education, priced to be accessible for every family.",
        icon: "BadgeIndianRupee",
    },
];

export const FACULTY = [
    {
        name: "Shantanu Bhowmik",
        role: "Founder & Lead Trainer",
        photo: "/faculty/shantanu-nobg.png",
        photoTransparent: true,
        qualification: "Master of Computer Applications (MCA)",
        experience: "16+ Years Corporate IT Experience",
        roles: [
            "Mathematics Faculty",
            "Science Faculty",
            "Spoken English Trainer",
            "Personality Development Trainer",
            "Interview Preparation Mentor",
            "Career Guidance Coach",
            "Microsoft Intune Trainer",
        ],
        certifications: [
            "Microsoft 365 Certified: Endpoint Administrator Associate",
            "Microsoft Certified Solutions Expert: Core Infrastructure",
        ],
        badges: [
            "MCA",
            "16+ Years Experience",
            "Microsoft Intune Expert",
            "Spoken English Trainer",
            "Personality Development Trainer",
            "Career Mentor",
        ],
    },
    {
  name: "Shubham Chakraborty",
  role: "Teacher",
  photo: "/faculty/shubho.jpg",
  qualification: "D.Pharm & B.Pharm",
  experience: "7 Years Teaching Experience",
  roles: [
    "Biology Faculty - Classes 10–12",
    "Chemistry Faculty - Classes 10–12",
  ],
  badges: [
    "D.Pharm",
    "B.Pharm",
    "7 Years Experience",
    "Biology",
    "Chemistry",
  ],
},
    {
             name: "Ankita Chakrawarty",
             role: "Academic Faculty",
             photo: "/faculty/ankita.jpg",
             qualification: "Bachelor of Science (B.Sc)",
             experience: "Uttarakhand Topper | Concept-first teaching across CBSE / ICSE / State Board",
             roles: ["Mathematics Faculty", "Science Faculty", "Academic Coaching"],
             badges: ["B.Sc", "Uttarakhand Topper", "Mathematics", "Science"],
    },
    {
        name: "Anshuman Singh",
        role: "Guest Faculty",
        photo: "/faculty/anshuman.jpg",
        qualification: "Master of Business Administration (MBA)",
        designation: "HR Manager · Leading MNC",
        experience: "17+ Years Corporate Experience",
        roles: [
            "Spoken English Trainer",
            "Personality Development Trainer",
            "Interview Preparation Mentor",
            "Career Guidance Coach",
        ],
        badges: [
            "MBA",
            "17+ Years Experience",
            "HR Manager · MNC",
            "Spoken English",
            "Personality Development",
            "Career Mentor",
        ],
    },
];

export const GALLERY = [
    {
        url: "/file_00000000a07c7206ac0258d894e35160.png",
        caption: "Lecture Hall Session",
        featured: true,
    },
    {
        url: "/bitiya2.png",
        caption: "Interactive Classroom",
    },
    {
        url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvYWNoaW5nJTIwY2xhc3Nyb29tfGVufDB8fHx8MTc4MzU5NDk4MXww&ixlib=rb-4.1.0&q=85",
        caption: "Focused Learning",
    },
       
    {
        url: "https://images.unsplash.com/photo-1568880893176-fb2bdab44e41?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODM1OTQ5ODF8MA&ixlib=rb-4.1.0&q=85",
        caption: "Student Success",
    },
];

// Certifications — placeholder data until real certificates are uploaded.
export const CERTIFICATIONS = [
    {
        title: "Master of Computer Applications",
        short: "MCA",
        issuer: "University Degree · Shantanu Bhowmik",
        placeholderPhoto:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=70",
    },
    {
        title: "Microsoft 365 Certified",
        short: "MD-102",
        issuer: "Endpoint Administrator Associate · Microsoft",
        placeholderPhoto:
            "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=1200&q=70",
    },
    {
        title: "Microsoft Certified Solutions Expert",
        short: "MCSE",
        issuer: "Core Infrastructure · Microsoft",
        placeholderPhoto:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=70",
    },
    {
        title: "Bachelor of Technology",
        short: "B.Tech",
        issuer: "Engineering Degree · Ankita",
        placeholderPhoto:
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=70",
    },
    {
        title: "Master of Business Administration",
        short: "MBA",
        issuer: "Business & HR · Anshuman",
        placeholderPhoto:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=70",
    },
    {
        title: "Professional Trainer Certifications",
        short: "Trainer",
        issuer: "Spoken English · Personality Development",
        placeholderPhoto:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=70",
    },
];

// Featured student — placeholder until founder uploads daughter's photo & story.
export const FEATURED_STUDENT = {
  name: "Young Learners",
  tagline: "Students in Action",
  story:
    "Focused learning, personal guidance and strong academic foundations at AmbaShree Skills Academy.",
  highlights: [
    "Focused academic learning",
    "Strong communication & confidence",
    "Personal attention and guidance",
  ],
  photoPlaceholder: false,
  photo: "/featured-student.png",
};

export const TESTIMONIALS = [
    {
        name: "Ritika Sharma",
        role: "Class 10 · CBSE",
        avatar:
            "https://images.unsplash.com/photo-1568880893176-fb2bdab44e41?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODM1OTQ5ODF8MA&ixlib=rb-4.1.0&q=85",
        quote:
            "AmbaShree's small-batch teaching helped me finally understand Math the way I never could in a big school class. My scores jumped 22%.",
    },
    {
        name: "Aakash Verma",
        role: "Working Professional",
        avatar:
            "https://images.pexels.com/photos/5538020/pexels-photo-5538020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        quote:
            "The Microsoft Intune training gave me exactly the hands-on skills I needed. I cleared the MD-102 within 8 weeks of finishing the module.",
    },
    {
        name: "Prisha Patel",
        role: "Undergraduate Student",
        avatar:
            "https://images.pexels.com/photos/36608621/pexels-photo-36608621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        quote:
            "The Spoken English & Personality Development batch transformed my confidence. I now handle HR interviews without hesitation.",
    },
    {
        name: "Karan Mehta",
        role: "Class 9 · ICSE",
        avatar:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjB0ZWFjaGVyfGVufDB8fHx8MTc4MzU5NDk5Nnww&ixlib=rb-4.1.0&q=85",
        quote:
            "Science practicals here are so much fun. Concepts stick because we actually see and try them, not just read them.",
    },
];
