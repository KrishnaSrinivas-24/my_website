import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ExternalLinkIcon, MailIcon, CodeIcon, AcademicCapIcon, BriefcaseIcon, UserIcon, HomeIcon } from '@heroicons/react/outline';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const AnimatedSection = ({ children, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = React.useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={sectionRef}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${className}`}
      >
        {children}
      </div>
    );
  };

  const projects = [
    {
      title: "FloatChat (Smart India Hackathon 2025)",
      description: "A real-time, feature-rich chat application designed to provide a seamless communication experience. Built for the Smart India Hackathon 2025 (PS ID: 25040), it features a robust architecture with live messaging powered by Socket.io.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      link: "https://github.com/KrishnaSrinivas-24/FLOATCHAT",
      liveLink: null
    },
    {
      title: "Satellite Image Classification",
      description: "A deep learning model designed to classify satellite imagery. This application, showcased with a user-friendly Streamlit interface, can accurately categorize different terrestrial features from satellite photos, demonstrating strong skills in computer vision and model deployment.",
      technologies: ["Python", "TensorFlow", "Keras", "Streamlit"],
      link: "https://github.com/KrishnaSrinivas-24/ML_TERM-PROJECT",
      liveLink: "https://mlterm-project-24krishnakesavnikil.streamlit.app/"
    },
    {
      title: "JARVIS - AI Voice Assistant",
      description: "A Python-based voice assistant inspired by JARVIS. This application can understand voice commands to perform tasks like opening websites, telling time, and interacting with the user, showcasing skills in speech recognition and automation scripting.",
      technologies: ["Python", "SpeechRecognition", "pyttsx3", "pywhatkit"],
      link: "https://github.com/KrishnaSrinivas-24/JARVIS",
      liveLink: null
    }
  ];

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C++", "SQL"],
      icon: <CodeIcon className="w-6 h-6" />
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "NLTK", "OpenCV"],
      icon: <AcademicCapIcon className="w-6 h-6" />
    },
    {
      title: "Web Technologies",
      skills: ["React", "Node.js", "Express.js", "Socket.io", "Streamlit"],
      icon: <BriefcaseIcon className="w-6 h-6" />
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB"],
      icon: <BriefcaseIcon className="w-6 h-6" />
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Docker", "Google Cloud Platform (GCP)", "VS Code"],
      icon: <BriefcaseIcon className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-indigo-400">
              Krishna Srinivas Madhira
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: <HomeIcon className="w-4 h-4" /> },
                { id: 'about', label: 'About', icon: <UserIcon className="w-4 h-4" /> },
                { id: 'projects', label: 'Projects', icon: <BriefcaseIcon className="w-4 h-4" /> },
                { id: 'skills', label: 'Skills', icon: <AcademicCapIcon className="w-4 h-4" /> },
                { id: 'contact', label: 'Contact', icon: <MailIcon className="w-4 h-4" /> }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-indigo-400 bg-indigo-400/10'
                      : 'text-gray-300 hover:text-indigo-400 hover:bg-gray-800/50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-gray-900"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.3) 0%, transparent 50%),
                             linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent),
                             linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              Hi, I'm Krishna Srinivas Madhira
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              I build intelligent solutions with AI.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              An AI Engineer passionate about leveraging machine learning and deep learning to solve complex problems and create impactful, data-driven applications.
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
            >
              View My Work
              <ChevronDownIcon className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ChevronDownIcon className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              About <span className="text-indigo-400">Me</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am an AI Engineer with a strong foundation in developing and deploying machine learning models. My journey in technology has been driven by a passion for artificial intelligence and its potential to innovate.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in areas like Natural Language Processing and Computer Vision and thrive on turning complex datasets into actionable insights. Outside of coding, I enjoy exploring new technologies and contributing to open-source projects.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["AI Engineer", "Machine Learning", "Deep Learning", "Computer Vision", "NLP"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-indigo-500/30">
                  <div className="w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold">
                    KM
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-600/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600/30 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Featured <span className="text-indigo-400">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors duration-300 text-sm"
                    >
                      <ExternalLinkIcon className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors duration-300 text-sm"
                      >
                        <ExternalLinkIcon className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Technical <span className="text-indigo-400">Skills</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-indigo-400 mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-indigo-600/20 text-indigo-300 rounded-lg text-sm font-medium border border-indigo-500/30 hover:bg-indigo-600/30 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-8 text-white">
              Get In <span className="text-indigo-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's connect and discuss opportunities to collaborate on exciting AI projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:krishnasrinivas2404@gmail.com"
                className="group inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
              >
                <MailIcon className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-srinivas-madhira-16819222a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <ExternalLinkIcon className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                LinkedIn
              </a>
              <a
                href="https://github.com/KrishnaSrinivas-24"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/25"
              >
                <ExternalLinkIcon className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                GitHub
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Krishna Srinivas Madhira. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;