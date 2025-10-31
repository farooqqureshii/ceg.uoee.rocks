export interface Course {
  id: string;
  code: string;
  name: string;
  units: number;
  description: string;
  prerequisites: string[];
  corequisites: string[];
  year: number;
  semester: 'Fall' | 'Winter';
  category: 'Core' | 'Elective' | 'Complementary' | 'Technical';
  tags: string[];
  specializations?: string[]; // [T], [S], [E], [M], [P]
}

export const courses: Course[] = [
  // Year 1 Fall
  {
    id: 'CHM1311',
    code: 'CHM 1311',
    name: 'Principles of Chemistry',
    units: 3,
    description: 'Fundamental principles of chemistry including atomic structure, chemical bonding, thermodynamics, and kinetics.',
    prerequisites: [],
    corequisites: [],
    year: 1,
    semester: 'Fall',
    category: 'Core',
    tags: ['Chemistry', 'Science']
  },
  
  {
    id: 'GNG1105',
    code: 'GNG 1105',
    name: 'Engineering Mechanics',
    units: 3,
    description: 'Fundamental principles of statics and dynamics applied to engineering problems.',
    prerequisites: [],
    corequisites: [],
    year: 1,
    semester: 'Fall',
    category: 'Core',
    tags: ['Mechanics', 'Physics']
  },
  {
    id: 'GNG1106',
    code: 'GNG 1106',
    name: 'Fundamentals of Engineering Computation',
    units: 3,
    description: 'Introduction to computational methods and programming for engineering applications.',
    prerequisites: [],
    corequisites: [],
    year: 1,
    semester: 'Fall',
    category: 'Core',
    tags: ['Programming', 'Computation']
  },
  {
    id: 'MAT1320',
    code: 'MAT 1320',
    name: 'Calculus I',
    units: 3,
    description: 'Differential calculus including limits, derivatives, and applications to engineering problems.',
    prerequisites: [],
    corequisites: [],
    year: 1,
    semester: 'Fall',
    category: 'Core',
    tags: ['Mathematics', 'Calculus']
  },

  // Year 1 Winter
  {
    id: 'ITI1121',
    code: 'ITI 1121',
    name: 'Introduction to Computing II',
    units: 3,
    description: 'Continuation of programming principles and problem solving for computer engineering.',
    prerequisites: [],
    corequisites: [],
    year: 1,
    semester: 'Winter',
    category: 'Core',
    tags: ['Programming', 'Computation']
  },
  {
    id: 'ITI1100',
    code: 'ITI 1100',
    name: 'Digital Systems I',
    units: 3,
    description: 'Introduction to digital logic design, Boolean algebra, and combinational circuits.',
    prerequisites: [],
    corequisites: [],
    year: 1,
    semester: 'Winter',
    category: 'Core',
    tags: ['Digital Logic', 'Electronics']
  },
  {
    id: 'MAT1322',
    code: 'MAT 1322',
    name: 'Calculus II',
    units: 3,
    description: 'Integral calculus including techniques of integration and applications.',
    prerequisites: ['MAT1320'],
    corequisites: [],
    year: 1,
    semester: 'Winter',
    category: 'Core',
    tags: ['Mathematics', 'Calculus']
  },
  {
    id: 'MAT1348',
    code: 'MAT 1348',
    name: 'Discrete Mathematics for Computing',
    units: 3,
    description: 'Mathematical reasoning, logic, sets, combinatorics, and applications in computing.',
    prerequisites: [],
    corequisites: [],
    year: 1,
    semester: 'Winter',
    category: 'Core',
    tags: ['Mathematics', 'Discrete Math']
  },
  {
    id: 'PHY1124',
    code: 'PHY 1124',
    name: 'Fundamentals of Physics for Engineers',
    units: 3,
    description: 'Physics fundamentals including mechanics, electricity, and magnetism for engineering applications.',
    prerequisites: [],
    corequisites: [],
    year: 1,
    semester: 'Winter',
    category: 'Core',
    tags: ['Physics', 'Science']
  },

  // Year 2 Fall
  {
    id: 'CEG2136',
    code: 'CEG 2136',
    name: 'Computer Architecture I',
    units: 3,
    description: 'Design of digital computers, instruction sets, CPU design, and memory systems.',
    prerequisites: ['ITI1100'],
    corequisites: [],
    year: 2,
    semester: 'Fall',
    category: 'Core',
    tags: ['Computer Architecture', 'Hardware']
  },
  {
    id: 'ELG2138',
    code: 'ELG 2138',
    name: 'Circuit Theory I',
    units: 3,
    description: 'DC and AC circuit analysis, Kirchhoff laws, circuit theorems, and phasor analysis.',
    prerequisites: ['ITI1100', 'MAT1341', 'MAT1322'],
    corequisites: [],
    year: 2,
    semester: 'Fall',
    category: 'Core',
    tags: ['Circuits', 'Electronics']
  },
  {
    id: 'CSI2110',
    code: 'CSI 2110',
    name: 'Data Structures and Algorithms',
    units: 3,
    description: 'Fundamentals of data structures (lists, trees, graphs) and algorithms for processing them.',
    prerequisites: ['ITI1121', 'MAT1348'],
    corequisites: [],
    year: 2,
    semester: 'Fall',
    category: 'Core',
    tags: ['Programming', 'Algorithms']
  },
  {
    id: 'MAT2322',
    code: 'MAT 2322',
    name: 'Calculus III for Engineers',
    units: 3,
    description: 'Multivariable calculus including partial derivatives, multiple integrals, and vector calculus.',
    prerequisites: ['MAT1322'],
    corequisites: [],
    year: 2,
    semester: 'Fall',
    category: 'Core',
    tags: ['Mathematics', 'Calculus']
  },
  {
    id: 'ENG1112',
    code: 'ENG 1112',
    name: 'Technical Report Writing',
    units: 3,
    description: 'Technical writing skills for engineering students including report structure, documentation, and communication.',
    prerequisites: [],
    corequisites: [],
    year: 2,
    semester: 'Fall',
    category: 'Core',
    tags: ['Communication', 'Writing']
  },
  {
    id: 'SEG2105',
    code: 'SEG 2105',
    name: 'Introduction to Software Engineering',
    units: 3,
    description: 'Principles of software engineering including design, requirements, testing, and maintenance.',
    prerequisites: ['ITI1121'],
    corequisites: [],
    year: 2,
    semester: 'Fall',
    category: 'Core',
    tags: ['Software Engineering']
  },
  

  // Year 2 Winter
  {
    id: 'ELG2911',
    code: 'ELG 2911',
    name: 'Professional Practice in Information Technology and Engineering',
    units: 3,
    description: 'Professional ethics, legal obligations, and communication skills for engineering practice.',
    prerequisites: [],
    corequisites: [],
    year: 2,
    semester: 'Winter',
    category: 'Core',
    tags: ['Professional Practice', 'Ethics']
  },
  {
    id: 'ELG2136',
    code: 'ELG 2136',
    name: 'Electronics I',
    units: 3,
    description: 'Semiconductor physics, diodes, transistors, and basic amplifier circuits.',
    prerequisites: ['ELG2138'],
    corequisites: [],
    year: 2,
    semester: 'Winter',
    category: 'Core',
    tags: ['Electronics', 'Semiconductors']
  },
  {
    id: 'MAT2377',
    code: 'MAT 2377',
    name: 'Probability and Statistics for Engineers',
    units: 3,
    description: 'Probability, random variables, distributions, and statistical methods for engineers.',
    prerequisites: ['MAT1320'],
    corequisites: ['MAT1322'],
    year: 2,
    semester: 'Winter',
    category: 'Core',
    tags: ['Mathematics', 'Statistics']
  },
  {
    id: 'PHY2323',
    code: 'PHY 2323',
    name: 'Electricity and Magnetism',
    units: 3,
    description: 'Electromagnetic theory including Maxwell\'s equations and electromagnetic wave propagation.',
    prerequisites: ['MAT2322', 'PHY1124'],
    corequisites: [],
    year: 2,
    semester: 'Winter',
    category: 'Core',
    tags: ['Physics', 'Electromagnetics']
  },
  {
    id: 'SEG2106',
    code: 'SEG 2106',
    name: 'Software Construction',
    units: 3,
    description: 'Software development practices, construction principles, and tooling.',
    prerequisites: ['SEG2105'],
    corequisites: [],
    year: 2,
    semester: 'Winter',
    category: 'Core',
    tags: ['Software Engineering']
  },
  {
    id: 'COMPELECTIVE2W',
    code: '',
    name: 'Complementary Elective',
    units: 3,
    description: 'Approved complementary elective from Faculty list.',
    prerequisites: [],
    corequisites: [],
    year: 2,
    semester: 'Winter',
    category: 'Complementary',
    tags: ['Elective']
  },

  // Year 3 Fall (Computer Engineering)
  {
    id: 'CEG3136',
    code: 'CEG 3136',
    name: 'Computer Architecture II',
    units: 3,
    description: 'Microprocessors and general architectures (CISC/RISC), microcontrollers, embedded systems, and HW/SW codesign.',
    prerequisites: ['CEG2136'],
    corequisites: [],
    year: 3,
    semester: 'Fall',
    category: 'Core',
    tags: ['Computer Architecture', 'Microprocessors']
  },
  {
    id: 'CEG3155',
    code: 'CEG 3155',
    name: 'Digital Systems II',
    units: 3,
    description: 'Sequential logic, FSMs (Mealy/Moore), ASM, HDL (e.g., VHDL), synchronous design with PLDs/FPGA, asynchronous hazards.',
    prerequisites: ['CEG2136'],
    corequisites: [],
    year: 3,
    semester: 'Fall',
    category: 'Core',
    tags: ['Digital Systems', 'HDL']
  },
  {
    id: 'ELG3125',
    code: 'ELG 3125',
    name: 'Signal and System Analysis',
    units: 3,
    description: 'Signals and systems in time/frequency domains, Fourier and Laplace transforms, linear time-invariant systems.',
    prerequisites: ['ELG2138'],
    corequisites: [],
    year: 3,
    semester: 'Fall',
    category: 'Core',
    tags: ['Signals', 'Systems']
  },
  {
    id: 'GNG2101',
    code: 'GNG 2101',
    name: 'Introduction to Product Development and Management for Engineers and Computer Scientists',
    units: 3,
    description: 'Product development principles, team dynamics, and project management for engineers.',
    prerequisites: [],
    corequisites: [],
    year: 3,
    semester: 'Fall',
    category: 'Core',
    tags: ['Product Development', 'Management']
  },
  {
    id: 'HIS2129',
    code: 'HIS 2129',
    name: 'Technology, Society and Environment since 1800',
    units: 3,
    description: 'Historical analysis of the relationship between technology, society, and environmental change.',
    prerequisites: [],
    corequisites: [],
    year: 3,
    semester: 'Fall',
    category: 'Complementary',
    tags: ['History', 'Society']
  },
  {
    id: 'PHI2394',
    code: 'PHI 2394',
    name: 'Scientific Thought and Social Values',
    units: 3,
    description: 'Philosophical examination of scientific methodology and its relationship to social values.',
    prerequisites: [],
    corequisites: [],
    year: 3,
    semester: 'Fall',
    category: 'Complementary',
    tags: ['Philosophy', 'Ethics']
  },

  // Year 3 Winter (Computer Engineering)
  {
    id: 'MAT2384',
    code: 'MAT 2384',
    name: 'Ordinary Differential Equations and Numerical Methods',
    units: 3,
    description: 'Solution methods for ordinary differential equations and numerical analysis techniques.',
    prerequisites: ['MAT1322', 'MAT1341'],
    corequisites: [],
    year: 3,
    semester: 'Winter',
    category: 'Core',
    tags: ['Mathematics', 'Differential Equations']
  },
  {
    id: 'CEG3156',
    code: 'CEG 3156',
    name: 'Computer Systems Design',
    units: 3,
    description: 'Design principles of computer systems and HW/SW integration; performance, interfaces, and design tradeoffs.',
    prerequisites: ['CEG3136'],
    corequisites: [],
    year: 3,
    semester: 'Winter',
    category: 'Core',
    tags: ['Computer Systems', 'Design']
  },
  {
    id: 'CEG3185',
    code: 'CEG 3185',
    name: 'Introduction to Data Communications and Networking',
    units: 3,
    description: 'Fundamentals of data communications and computer networks; layered architectures and protocols.',
    prerequisites: ['CEG2136'],
    corequisites: [],
    year: 3,
    semester: 'Winter',
    category: 'Core',
    tags: ['Networking', 'Data Communications']
  },
  {
    id: 'CSI3131',
    code: 'CSI 3131',
    name: 'Operating Systems',
    units: 3,
    description: 'Processes/threads, synchronization, memory management, file systems, and OS design principles.',
    prerequisites: ['CSI2110'],
    corequisites: [],
    year: 3,
    semester: 'Winter',
    category: 'Core',
    tags: ['Operating Systems']
  },
  {
    id: 'ELG3155',
    code: 'ELG 3155',
    name: 'Introduction to Control Systems',
    units: 3,
    description: 'Control system analysis and design, stability, and classical controller design methods.',
    prerequisites: ['ELG3125'],
    corequisites: [],
    year: 3,
    semester: 'Winter',
    category: 'Core',
    tags: ['Control Systems']
  },
  {
    id: 'COMPELECTIVE3W',
    code: '',
    name: 'Complementary Elective',
    units: 3,
    description: 'Approved complementary elective from Faculty list.',
    prerequisites: [],
    corequisites: [],
    year: 3,
    semester: 'Winter',
    category: 'Complementary',
    tags: ['Elective']
  },

  // Year 4 Fall (Computer Engineering)
  {
    id: 'CEG4136',
    code: 'CEG 4136',
    name: 'Computer Architecture III',
    units: 3,
    description: 'Advanced topics in computer architecture such as parallelism and performance evaluation.',
    prerequisites: ['CEG3136'],
    corequisites: [],
    year: 4,
    semester: 'Fall',
    category: 'Core',
    tags: ['Computer Architecture']
  },
  {
    id: 'CEG4912',
    code: 'CEG 4912',
    name: 'Computer Engineering Design: Project I',
    units: 3,
    description: 'Capstone design project in computer engineering, part I.',
    prerequisites: ['CEG3156'],
    corequisites: [],
    year: 4,
    semester: 'Fall',
    category: 'Core',
    tags: ['Capstone', 'Design Project']
  },
  {
    id: 'SCIENCEELECTIVE4F',
    code: '',
    name: 'Science Elective',
    units: 3,
    description: 'Approved science elective from Faculty list.',
    prerequisites: [],
    corequisites: [],
    year: 4,
    semester: 'Fall',
    category: 'Elective',
    tags: ['Science', 'Elective']
  },
  {
    id: 'TECHELECTIVE4F1',
    code: '',
    name: 'Technical Elective',
    units: 3,
    description: 'Approved technical elective from Faculty list.',
    prerequisites: [],
    corequisites: [],
    year: 4,
    semester: 'Fall',
    category: 'Technical',
    tags: ['Technical', 'Elective']
  },
  {
    id: 'TECHELECTIVE4F2',
    code: '',
    name: 'Technical Elective',
    units: 3,
    description: 'Approved technical elective from Faculty list.',
    prerequisites: [],
    corequisites: [],
    year: 4,
    semester: 'Fall',
    category: 'Technical',
    tags: ['Technical', 'Elective']
  },

  // Year 4 Winter (Computer Engineering)
  {
    id: 'CEG4166',
    code: 'CEG 4166',
    name: 'Real-Time Systems Design',
    units: 3,
    description: 'Design and analysis of real-time systems and scheduling; implementation considerations.',
    prerequisites: ['CEG3156'],
    corequisites: [],
    year: 4,
    semester: 'Winter',
    category: 'Core',
    tags: ['Real-Time Systems']
  },
  {
    id: 'CEG4913',
    code: 'CEG 4913',
    name: 'Computer Engineering Design: Project II',
    units: 3,
    description: 'Capstone design project in computer engineering, part II.',
    prerequisites: ['CEG4912'],
    corequisites: [],
    year: 4,
    semester: 'Winter',
    category: 'Core',
    tags: ['Capstone', 'Design Project']
  },
  {
    id: 'COMPELECTIVE4W',
    code: '',
    name: 'Complementary Elective',
    units: 3,
    description: 'Approved complementary elective from Faculty list.',
    prerequisites: [],
    corequisites: [],
    year: 4,
    semester: 'Winter',
    category: 'Complementary',
    tags: ['Elective']
  },
  {
    id: 'TECHELECTIVE4W1',
    code: '',
    name: 'Technical Elective',
    units: 3,
    description: 'Approved technical elective from Faculty list.',
    prerequisites: [],
    corequisites: [],
    year: 4,
    semester: 'Winter',
    category: 'Technical',
    tags: ['Technical', 'Elective']
  },
  {
    id: 'TECHELECTIVE4W2',
    code: '',
    name: 'Technical Elective',
    units: 3,
    description: 'Approved technical elective from Faculty list.',
    prerequisites: [],
    corequisites: [],
    year: 4,
    semester: 'Winter',
    category: 'Technical',
    tags: ['Technical', 'Elective']
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getPrerequisites = (courseId: string): Course[] => {
  const course = getCourseById(courseId);
  if (!course) return [];
  return course.prerequisites.map(prereqId => getCourseById(prereqId)).filter(Boolean) as Course[];
};

export const getCorequisites = (courseId: string): Course[] => {
  const course = getCourseById(courseId);
  if (!course) return [];
  return course.corequisites.map(coreqId => getCourseById(coreqId)).filter(Boolean) as Course[];
};

export const getCoursesByYearAndSemester = (year: number, semester: 'Fall' | 'Winter'): Course[] => {
  return courses.filter(course => course.year === year && course.semester === semester);
};
