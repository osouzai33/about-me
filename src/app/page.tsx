"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GithubIcon, MenuIcon, MoonIcon, SunIcon } from "lucide-react";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-blue-50"
      } transition-colors duration-300`}
    >
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
          style={{
            backgroundColor: isDarkMode ? "#4B0082" : "#4169E1",
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: "300px",
            height: "300px",
            transition: "all 0.3s ease-out",
          }}
        ></div>
      </div>

      <header
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-blue-600"
        } text-white py-4 sticky top-0 z-10 shadow-md transition-colors duration-300`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-serif animate-pulse">
            Souta YAMASAKI
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-opacity-20 hover:bg-white transition-colors duration-200"
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon />
            </button>
            <nav
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:block absolute md:relative top-full right-0 bg-blue-600 md:bg-transparent`}
            >
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
                {["About", "Projects", "Skills", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block text-lg md:text-base hover:text-blue-200 transition-colors duration-200 ease-in-out"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6 font-serif">
            About Me
          </h2>
          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-xl p-8 transform hover:rotate-1 transition-all duration-300`}
          >
            <p className="text-lg leading-relaxed">
              こんにちは、山崎惣大です。
              <span className="inline-block animate-bounce">🚀</span>{" "}
              新しい技術に挑戦し、
              <span className="inline-block animate-spin">💡</span>{" "}
              クリエイティブなアイデアを形にすることが大好きです。
              コードを書くときは、画面上に驚きと喜びを生み出すことを目指しています。
              <span className="inline-block animate-pulse">✨</span>{" "}
              フルスタックエンジニアへ向けて勉強頑張りますっ！
            </p>
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6 font-serif">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Project 1",
                desc: "魔法のような UX を実現した web アプリ",
                emoji: "🏀",
              },
              {
                title: "Project 2",
                desc: "驚きの速さを誇る e コマースプラットフォーム",
                emoji: "⚡",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-3 ${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                <CardContent className="p-6 relative">
                  <div className="absolute top-2 right-2 text-4xl animate-bounce">
                    {project.emoji}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    {project.desc}
                  </p>
                  <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                    Click
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6 font-serif">
            Skills
          </h2>
          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-xl p-8`}
          >
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { skill: "HTML/CSS", emoji: "🎨" },
                { skill: "JavaScript", emoji: "🌟" },
                { skill: "React", emoji: "⚛️" },
                { skill: "Next.js", emoji: "🚀" },
                { skill: "TypeScript", emoji: "📘" },
                { skill: "Responsive Design", emoji: "📱" },
              ].map((item, index) => (
                <li key={index} className="flex items-center text-lg group">
                  <span className="mr-3 text-2xl group-hover:animate-spin">
                    {item.emoji}
                  </span>
                  <span className="group-hover:text-blue-500 transition-colors duration-200">
                    {item.skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6 font-serif">
            Contact Me
          </h2>
          <Card
            className={`overflow-hidden ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <CardContent className="p-8 relative">
              <div className="absolute top-2 right-2 text-4xl animate-pulse">
                💌
              </div>
              <form className="space-y-6">
                {[
                  {
                    id: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Your magical name",
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "your@magicemail.com",
                  },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium mb-2"
                    >
                      {field.label}
                    </label>
                    <Input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={
                        isDarkMode
                          ? "bg-gray-700 text-white"
                          : "bg-blue-50 text-blue-800"
                      }
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your enchanting message"
                    className={
                      isDarkMode
                        ? "bg-gray-700 text-white"
                        : "bg-blue-50 text-blue-800"
                    }
                  />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white group">
                  <span className="group-hover:animate-ping">Send</span> Magic
                  Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-blue-600"
        } text-white py-12 transition-colors duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 mb-6">
            {[GithubIcon].map((Icon, index) => (
              <a
                key={index}
                href="https://github.com/osouzai33"
                className="text-2xl hover:text-blue-300 transition-colors duration-200 transform hover:scale-125"
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="text-center text-sm">
            © {new Date().getFullYear()} 山崎惣大のアバウトミー. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
