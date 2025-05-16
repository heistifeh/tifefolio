import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* Bio Section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          explicabo optio corporis numquam facere iusto aperiam quo autem
          officiis delectus.
        </p>
      </section>

      {/* skill section */}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* frontend card */}
          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul>
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>
          {/* backend card */}
          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
          {/* Others card */}
          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>Insomnia </li>
              <li>Postman</li>
              <li>MailTrap</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>

      {/* experience section */}
      <section className="mb-16">
        <h2 className="section-title">Experience</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Frontend Engineer</h3>
            <p className="text-primary mb-2">Sabi Programmers | 2024 - 2025</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, voluptatem!
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* education section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science and Education in Computer Science
            </h3>
            <p className="text-primary mb-2">
              University of Ilorin | 2018 - 2023
            </p>

            <p className="text-secondary mb-2">
              Graduated with honors, Focused and software engineering, web and
              app development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
