import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import MyPhoto from "./me.jpg";
import Sentry from "./sentry.png";
import ForGround from "./forground.png";
import OpenGov from "./og.png";
import FieldView from "./fv.png";

interface Publication {
  id: number;
  title: string;
  description: string;
  publicationUrl: string;
  date: string;
}

const projects = [
  {
    id: 1,
    title: "Sentry Emergency Management Group",
    description: "Company website for one of my clients",
    imageUrl: Sentry.src,
    projectUrl: "https://sentryemg.com/",
  },
  {
    id: 2,
    title: "Bayer ForGround",
    description: "Platform to enroll farmers into sustainable practices",
    imageUrl: ForGround.src,
    projectUrl: "https://myforground.com",
  },
  {
    id: 3,
    title: "OpenGov Utility Billing",
    description: "Utility billing solution for water, gas, and electric",
    imageUrl: OpenGov.src,
    projectUrl: "https://opengov.com/",
  },
  {
    id: 4,
    title: "Climate FieldView",
    description: "Worked on the internal tools portal and dealer portal",
    imageUrl: FieldView.src,
    projectUrl: "https://opengov.com/",
  },
];

const publications: Publication[] = [
  {
    id: 4,
    title:
      "Moore’s Law is Dead: Measuring the Next Generation of AI Compute in the Cloud",
    description:
      "Paper proposal for measuring the top metrics for measuring GPUs specifically for AI workloads.",
    publicationUrl:
      "https://www.linkedin.com/posts/gabedemesa_measuring-gpus-paper-activity-7282026691755974656-eLoC",
    date: "December 15, 2024",
  },
];

const educationList = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "University of Illinois, Urbana-Champaign",
    year: "January 2023 - December 2024",
    description: "Specialized in Artificial Intelligence and Machine Learning",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Irvine",
    year: "September 2018 - December 2021",
    description: "Specialized in information with high emphasis on databases",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto">
        <section className="text-center mb-16 animate-fade-in">
          <Image
            priority
            src={MyPhoto}
            alt="Profile Picture"
            className="mx-auto rounded-full mb-4 object-cover w-96 h-96"
          />
          <h1 className="text-4xl font-bold mb-2">Gabe De Mesa</h1>
          <p className="text-xl text-gray-600">Full Stack Software Engineer</p>
        </section>

        <section className="mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold mb-4">About Me 🙂</h2>
          <p className="text-gray-700">
            Hi thanks for checking me out! I&apos;m a passionate full stack
            engineer with 4+ years of experience building enterprise grade web
            applications using modern technologies. I have worked in fast paced,
            small startup environments and in large enterprise. I love solving
            complex problems. My mission is to make the world a better place
            with technology.
          </p>
        </section>

        <section className="mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold mb-4">Education 🎓</h2>
          <div className="space-y-6">
            {educationList.map((edu) => (
              <div key={edu.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-600 mb-2">{edu.institution}</p>
                <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold mb-4">Projects 🧑‍💻</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                href={project.projectUrl}
                key={project.id}
                className="block"
              >
                <div className="rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold mb-4">Publications 📝</h2>
          <div className="space-y-6">
            {publications.map((publication) => (
              <div
                key={publication.id}
                className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 ease-in-out transform"
              >
                <Link href={publication.publicationUrl} className="block">
                  <h3 className="text-xl font-semibold mb-2">
                    {publication.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {publication.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    Published on {publication.date}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-slide-up">
          <h2 className="text-2xl font-semibold mb-4">Skills 🛠️</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "Typescript",
              "React",
              "Node.js",
              "Python",
              "Frontend",
              "Backend",
              "Fullstack",
              "DevOps",
              "AI/ML",
              "Prompt Engineering",
              "Git",
              "AWS",
              "Kafka",
              "Go",
              "Java",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="text-center animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/jamesjellow"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabedemesa/"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:jellowjames@yahoo.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
