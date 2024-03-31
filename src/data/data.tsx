import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Milin Portfolio',
  description: "Welcome to Milin's Portfolio! As a Full Stack Software Engineer, I bring a wealth of expertise in developing end-to-end solutions. Explore my skills and projects to see how I can drive innovation and success for your team. Let's collaborate and build something extraordinary together!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Milin Chhipavadiya.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer </strong> freelancing in<strong className="text-stone-100"> Surat</strong> , adept at both front-end and back-end development. Constantly updating skills to deliver top-notch solutions for<strong className="text-stone-100"> diverse clients</strong>.
        {/* I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder. */}
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        During my free time, you'll find me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring the stunning landscapes of{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/14r8QTAQhjjBevUqEgs2dwx_n4uR6iZLP/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a versatile Full Stack Software Engineer from Surat, shaping the digital landscape at Instant Domains. Proficient in JavaScript frameworks like React.js and Node.js, I blend creativity with technical expertise to craft seamless user experiences. As a graphic designer and UI/UX developer, I ensure that every pixel tells a story and enhances user interaction. Outside coding, I find balance in Muay Thai's discipline and banjo's melodies. Driven by curiosity and fueled by passion, I thrive on challenges and embrace every opportunity for growth.`,
  aboutItems: [
    {label: 'Location', text: 'Surat, Gujarat, India /  Paris, France', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Long Drive, Motorcycles, Watching Movies, Travaling, Street Food', Icon: SparklesIcon},
    {label: 'Study', text: 'ECOLE SUPÉRIEURE DE COMMERCE ET DE COMMUNICATION', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Freelancer', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Gujarati',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 9,
      },
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Franch',
        level: 2,
      },
    ],
  },
  {
    name: 'Designing ',
    skills: [
      {
        name: 'Adobe Photoshop',
        level: 9,
      },
      {
        name: 'Adobe Illustrator',
        level: 7,
      },
      {
        name: 'Adobe XD',
        level: 7,
      },
      {
        name: 'Hypertext Markup Language',
        level: 9,
      },
      {
        name: 'Cascading Style Sheets',
        level: 7,
      },

    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript',
        level: 8,
      },
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'Sassy Cascading Style Sheets',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'SOLDCODER',
    description: `SolDecoder.app appears to be a website designed to provide decoding services for Solana blockchain transactions and data. It likely offers users the ability to decode transaction data, explore blocks, and interact with various elements of the Solana blockchain. The website's interface seems user-friendly and intuitive, making it accessible for both developers and enthusiasts interested in understanding and analyzing Solana blockchain data. Overall, SolDecoder.app appears to be a valuable tool for individuals seeking to gain insights into the inner workings of the Solana network.`,
     url: 'https://soldecoder.app/',
    image: porfolioImage1,
  },
  {
    title: 'SOFTNET,CRM',
    description: 'The website you provided belongs to Focus Softnet, a company that offers business software solutions, including Customer Relationship Management (CRM) modules. The CRM module is designed to help businesses effectively manage their customer interactions, streamline sales processes, and enhance customer satisfaction. On the website, you can find detailed information about the features and functionalities of their CRM software, along with case studies and success stories showcasing how their solutions have benefited various businesses. Additionally, there may be resources such as whitepapers, videos, and demos available to help potential customers understand the value proposition of their CRM module. Overall, the website serves as a comprehensive platform for businesses looking to explore and invest in CRM solutions offered by Focus Softnet.',
    url: 'https://www.focussoftnet.com/us/crm-module',
    image: porfolioImage2,
  },
  {
    title: 'METAESTATE.IO',
    description: `The website for MetaEstate provides an innovative platform for virtual real estate experiences, showcasing properties in immersive and interactive ways. As a leading provider of virtual property tours and digital staging services, MetaEstate revolutionizes the real estate industry by offering a visually stunning and engaging way for potential buyers to explore properties remotely. Through cutting-edge technology and high-quality visuals, the platform enables users to experience properties as if they were physically present, fostering deeper engagement and informed decision-making. Whether you're a real estate agent, developer, or prospective buyer, MetaEstate offers a unique and impactful solution for showcasing and experiencing properties in the digital age.`,
    url: 'https://www.metaestate.com/',
    image: porfolioImage5,
  },
  // {
  //   title: 'Project title 1',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage1,
  // },
  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2024',
    location: 'ECOLE SUPÉRIEURE DE COMMERCE ET DE COMMUNICATION, PARIS,FRANCE',
    title: 'Artificial Intelligence and Big Data Management',
    content: <p>Joining soon......</p>,
  },
  {
    date: 'June 2022',
    location: 'AD-Tech IT & Design Institute',
    title: 'Full-stack developers as well as Designing Courses    ',
    content: <p>In my journey as a Full-stack developer and Designer, I embarked on a comprehensive learning path that encompassed a diverse array of skills and technologies. Through dedicated courses, I acquired proficiency in Adobe Photoshop, Adobe Illustrator, and Adobe XD for graphic design and UI/UX prototyping. Additionally, I delved into web development technologies such as HTML, CSS, JavaScript, and Bootstrap, mastering the art of crafting visually appealing and responsive user interfaces. Building upon this foundation, I further expanded my skills with frameworks like React.js and libraries like React-Bootstrap, enabling me to develop dynamic and interactive frontend applications. On the backend, I honed my expertise in Node.js and explored the power of SCSS for enhanced styling capabilities. This holistic approach to learning equipped me with the versatility and creativity to excel both as a developer and a designer, allowing me to seamlessly integrate aesthetics with functionality in my projects.</p>,
  },
  {
    date: 'May 2021',
    location: 'Gujarat Technological University',
    title: 'Bachelor of Engineering in Computer Science',
    content: <p>As a Bachelor of Engineering in Computer Science graduate, I've had the privilege of immersing myself in a multitude of programming languages. From foundational languages like C, C++, and Java to versatile web development languages like HTML, CSS, and JavaScript, my educational journey has been a rich tapestry of linguistic exploration. Additionally, I've delved into specialized languages such as Python for data analysis and machine learning, SQL for database management, and PHP for server-side scripting. This diverse linguistic repertoire equips me with the versatility and adaptability necessary to tackle a wide array of technological challenges with confidence and proficiency.</p>,
  },
  {
    date: 'March 2017',
    location: 'P P Savani Vidhya Bhavan',
    title: '12th',
    content: <p>In my 12th grade, I focused on solidifying my foundational understanding of computer science fundamentals. I delved into key concepts such as data structures, algorithms, and object-oriented programming principles.</p>,
  },
  {
    date: 'March 2015',
    location: 'P P Savani Vidhya Bhavan',
    title: '10th',
    content: <p>During my 10th grade, I embarked on a comprehensive educational journey encompassing a wide range of subjects. From mathematics and science to languages and social studies, I delved into various disciplines to gain a well-rounded understanding of the world. This foundational year equipped me with essential knowledge and skills that serve as the bedrock of my academic and intellectual growth. It instilled in me a curiosity to explore diverse fields of study and laid the groundwork for my future academic pursuits and career aspirations.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - August 2023',
    location: 'DI Solutions',
    title: 'Junior bug fixer, Senior UX Engineer',
    content: (
      <p>
        At DI Solutions, I thrive as a Full Stack Developer, seamlessly transitioning between roles as a Junior Bug Fixer and a Senior UX Engineer. In my capacity as a bug fixer, I meticulously troubleshoot and resolve issues, ensuring the smooth functioning of our applications. As a Senior UX Engineer, I lead initiatives to elevate user experience, leveraging my frontend skills and design expertise to craft intuitive interfaces. Through collaborative efforts, I strive to enhance both the technical stability and user satisfaction of our products, driving continuous improvement and innovation within the company.
      </p>
    ),
  },
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Thomas Fuchse',
      text: 'The best error message is the one that never shows up.',
      image: 'https://i1.rgstatic.net/ii/profile.image/11431281086517256-1664259094003_Q512/Thomas-Fuchs-6.jpg',
    },
    {
      name: 'Martin Fowler',
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4We2XpHfYqi9mCnDrw5rReEOC9qCrDWSRgzk5XqaeDWyRJNP_zUd-Jpx9MEEe-E3sxgk&usqp=CAU',
    },
    {
      name: 'Guido van Rossum',
      text: 'The joy of coding Python should be in seeing short, concise, readable classes that express a lot of action in a small amount of clear code, not in reams of trivial code that bores the reader to death.',
      image: 'https://gvanrossum.github.io/images/guido-headshot-2019.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to us on email or social media for any inquiries or feedback.',
  items: [
    {
      type: ContactType.Email,
      text: 'milinchhipavadiya@gmail.com',
      href: 'mailto:milinchhipavadiya@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'A-84, Hansh Societ,Varchha Road, Surat-395006, Gujarat, India',
      href: 'https://maps.app.goo.gl/EhJDbBYAWr2Auy3L7',
    },
    {
      type: ContactType.Instagram,
      text: 'milin_3474',
      href: 'https://www.instagram.com/milin_3474/',
    },
    {
      type: ContactType.Github,
      text: 'milinchhipavadiya',
      href: 'https://github.com/Milinchhipavadiya',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Milinchhipavadiya'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/23724629/milin-chhipavadiya'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/milin-chhipavadiya-59374a23a/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/milin_3474/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/MChhipavadiya3'}
];
