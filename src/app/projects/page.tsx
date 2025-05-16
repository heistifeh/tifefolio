import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../contents/projects";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
      <p className="text-lg text-secondary mb-16 text-center max-w-3xl mx-auto">
        I love building things that live on the internet. Here are some of the
        projects I have worked on. Click on the links to view the code or live
        demo.
      </p>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33w"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4 cursor-pointer">
              {project.technologies.map((tech) => (
                <span className="px-3 py-1 bg-primary/10 " key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                <FaGithub className="w-5 h-5" />
                <span>Code</span>
              </Link>
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                <FaExternalLinkAlt className="w-5 h-5" /> <span>Live Demo</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Projects;
