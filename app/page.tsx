"use client"

import Image from "next/image"
import { Github, Mail, Phone, Facebook } from "lucide-react"
import { useState, useEffect } from "react"
import "../styles/portfolio.css"

export default function Portfolio() {
  const projects = [
    {
      title: "BitMonke",
      description:
        "A 1st year college project that demonstrates proficiency in MySQL integration in a Java-built program.",
      image: "/images/projects/bitmonkelogo.png",
      github: "https://github.com/matteo1231/BitMonke",
      tech: ["Java", "MySQL"],
    },
    {
      title: "Taskify",
      description:
        "A 2nd year college project that functions as a web based task assignment management platform",
      image: "/images/projects/nophoto.png",
      github: "https://github.com/matteo1231/TASK-TRACKER",
      tech: ["Php", "CSS"],
    },
    {
      title: "Care++",
      description:
        " A 3rd year college project that functions as a basic Clinic Management System",
      image: "/images/projects/careplus.png",
      github: "https://github.com/12Thirty8/CarePlus",
      tech: ["Java", "MySQL", "JavaFX"],
    },
    {
      title: "Auth/JWT",
      description:
        "A short backend-focused project that implements user registration, login, and token-based authentication using RESTful APIs",
      image: "/images/projects/auth.png",
      github: "https://github.com/matteo1231/auth-system",
      tech: ["JavaScript", "MongoDB"],
    },
  ]

  const skillCategories = [
    {
      title: "Languages",
      skills: "Java,JavaScript, SQL, MQL, Dart",
      description:
        "Proficient in modern programming languages but much more experienced in Java for backend systems as i have spent most of my time learning and developing in it. Familiar with JavaScript for web development, SQL for database management, and Dart for Flutter applications.",
    },
    {
      title: "Tools",
      skills: "Figma, Git, GitHub, Postman,",
      description:
        "Has experience in using modern development and design tools for collaborative workflows. Git and GitHub for version control, Figma for UI/UX design, and Postman for API testing and documentation.",
    },
    {
      title: "Development",
      skills: "Full-Stack Development",
      description:
        "Has experience building complete applications from backend logic to user-facing frontend interfaces. A handful experience with RESTful APIs, database design, and UI/UX considerations.",
    },
  ]

  const experience = [
    {
      title: "UMSDC",
      company: "Logistics Volunteer",
      period: "2023 - 2025",
      description:
        "Volunteered in various tech community events, assisting with logistics, event planning, and community engagement.",
      achievements: [
        "Connected with like-minded individuals in the tech community",
        
      ],
    },
    {
      title: "DOUM",
      company: "Creatives and Analytics Volunteer",
      period: "2024 - 2025",
      description:
        "Contributed to analytics and visual content creation for university data initiatives, combining technical skills with creative design for impactful presentations.",
      achievements: [
        "Designed visual content for data-driven projects and events.",
        "Gained experience in data visualization and analytics."
        
      ],
    },
    {
      title: "JBECP",
      company: "Core Officer",
      period: "2024 - 2025",
      description:
        "Aided in promoting blockchain education through student-led discussions, projects, development, focusing on decentralized technologies.",
      achievements: [
        "Promoted adoption and awareness of decentralized technologies among students."
      ],
    },
    {
      title: "DurianPy",
      company: "Creatives Volunteer",
      period: "Present",
      description:
        "Assisted in promoting Python and data science through creative content, event support, and community engagement.",
      achievements: [
        "Contributed graphic design and visual content for DurianPy's tech events and social media promotions.",
        "Supported branding for educational initiatives like “Big Data in Motion” and Python community campaigns.",
      ],
    },
  ]

  function ImageCarousel() {
    const [currentImage, setCurrentImage] = useState(0)

    const images = ["/images/about/profile-1.jpg.png", "/images/about/profile-2.jpg.png"]

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 3000)

      return () => clearInterval(interval)
    }, [images.length])

    return (
      <div className="carousel-container">
        <div className="carousel-images">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src || "/placeholder.svg"}
              alt={`About Clark Thompson ${index + 1}`}
              width={400}
              height={500}
              className={`carousel-image ${index === currentImage ? "active" : "inactive"}`}
            />
          ))}
        </div>

        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`carousel-indicator ${index === currentImage ? "active" : ""}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-flex">
            <div className="nav-logo">SEAN</div>
            <div className="nav-links">
              <a href="#home" className="nav-link active">
                Home
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#resume" className="nav-link">
                Resume
              </a>
              <a href="#skills" className="nav-link">
                Skills
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div>
                <p className="hero-greeting">HELLO!</p>
                <h1 className="hero-title">
                  I&apos;m <span className="hero-name-highlight">Sean</span>
                  <br />
                  Matthew
                </h1>
                <p className="hero-subtitle">An Aspiring Software Developer</p>
              </div>
              <div className="hero-buttons">
              </div>
            </div>
            <div className="hero-image-container">
              <Image
                src="/images/hero/profile-main.jpg.png"
                alt="Clark Thompson - Web Developer"
                width={500}
                height={600}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-grid">
            <div>
              <ImageCarousel />
            </div>
            <div className="about-content">
              <div>
                <h2 className="section-title">
                  About <span className="title-highlight">Me</span>
                </h2>
                <p className="about-description">
                Beyond coding, I actively contribute as a volunteer in tech communities like UMSDC, DOUM, JBECP, and DurianPy where I help organize events, design creatives, and support learning initiatives. I’m always eager to improve my skills, collaborate with like-minded peers, and prepare for a future in software engineering.
                </p>
                <div className="about-details">
                  <div className="about-detail-item">
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">Sean Matthew</span>
                  </div>
                  <div className="about-detail-item">
                    <span className="detail-label">Date of birth:</span>
                    <span className="detail-value">April 1, 2003</span>
                  </div>
                  <div className="about-detail-item">
                    <span className="detail-label">Address:</span>
                    <span className="detail-value">Davao City</span>
                  </div>
                  <div className="about-detail-item">
                    <span className="detail-label">Zip code:</span>
                    <span className="detail-value">8000</span>
                  </div>
                  <div className="about-detail-item">
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">smffronda@gmail.com</span>
                  </div>
                  <div className="about-detail-item">
                    <span className="detail-label">Phone:</span>
                    <span className="detail-value">+639935316278</span>
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: "1rem" }}>
  <a href="/Fronda_Resume.pdf" download className="btn-primary">
    DOWNLOAD CV
  </a>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume-section">
        <div className="resume-container">
          <div className="section-header">
            <h2 className="section-title">
              My <span className="title-highlight">Resume</span>
            </h2>
            <p className="section-subtitle">Developer-in-training and tech community volunteer with experience in Java-based systems and modern web technologies. Eager to contribute to innovative teams and learn from real-world development environments.</p>
          </div>

          {/* Education */}
          <div className="resume-category">
            <h3 className="category-title">Education</h3>
            <div className="education-single-card">
              <div className="resume-card">
                <div className="card-header">
                  <div>
                    <h4 className="card-title">Bachelor of Science in Computer Science</h4>
                    <p className="card-company">University of Mindanao, Davao City</p>
                  </div>
                  <span className="card-period">2022 - Present</span>
                </div>
                <p className="card-description">
                 Currently 3rd year student at the University of Mindanao, pursuing a Bachelor of Science in Computer Science.
                </p>
                <div className="card-details">
                  <p>
                    <strong>Relevant Coursework:</strong> Software Engineering 1 & 2, Programming Languages, Web
Development, Information Management, Databases
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="resume-category">
            <h3 className="category-title">Community Experience</h3>
            <div className="resume-grid experience-grid">
              {experience.map((exp, index) => (
                <div key={index} className="resume-card">
                  <div className="card-header">
                    <div>
                      <h4 className="card-title">{exp.title}</h4>
                      <p className="card-company">{exp.company}</p>
                    </div>
                    <span className="card-period">{exp.period}</span>
                  </div>
                  <p className="card-description">{exp.description}</p>
                  <ul className="achievement-list">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="section-header">
            <h2 className="section-title">
              My <span className="title-highlight">Skills</span>
            </h2>
            <p className="section-subtitle">Languages, Tools, and where i comfortably thrive in development</p>
          </div>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card">
                <h3 className="skill-category-title">{category.title}</h3>
                <h4 className="skill-list">{category.skills}</h4>
                <p className="skill-description">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-header">
            <h2 className="section-title">
              My <span className="title-highlight">Projects</span>
            </h2>
            <p className="section-subtitle">A showcase of my recent work and personal projects</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-container">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <button className="project-btn" onClick={() => window.open(project.github, "_blank")}>
                      <Github size={16} />
                      View Code
                    </button>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-highlight">Contact</span>
            </h2>
            <p className="section-subtitle">Let&apos;s connect and discuss opportunities</p>
          </div>
          <div className="contact-links-grid">
            <a
              href="https://github.com/matteo1231"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >
              <div className="contact-icon">
                <Github size={24} />
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <p>github.com/matteo1231</p>
              </div>
            </a>

            <a href="mailto:smffronda@gmail.com" className="contact-link-card">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>smffronda@gmail.com</p>
              </div>
            </a>

            <a href="tel:+12234567890" className="contact-link-card">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+639935316278</p>
              </div>
            </a>

            <a
              href="https://facebook.com/Sean.Matthew.Fronda"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >
              <div className="contact-icon">
                <Facebook size={24} />
              </div>
              <div className="contact-details">
                <h3>Facebook</h3>
                <p>facebook.com/Sean Matthew</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">&copy; 2025 Sean Matthew. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
