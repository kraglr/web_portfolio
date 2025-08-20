import bg from "../../assets/img/generatedimg.webp";
import bgpng from "../../assets/img/generatedimg.png";
import Typewriter from "typewriter-effect";
import {
  SiLaravel,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiPostman,
  SiMysql,
  SiGithub,
  SiExpress,
  SiPhp,
} from "react-icons/si";

const TechStackIcons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 px-4 mt-4 text-xl lg:px-2">
      <SiLaravel
        title="Laravel"
        className="text-2xl cursor-pointer hover:text-red-500"
      />
      <SiPhp
        title="PHP"
        className="text-2xl cursor-pointer hover:text-blue-300"
      />
      <SiReact
        title="React"
        className="text-2xl cursor-pointer hover:text-blue-400"
      />
      <SiHtml5
        title="HTML5"
        className="text-2xl cursor-pointer hover:text-orange-700"
      />
      <SiCss3
        title="CSS3"
        className="text-2xl cursor-pointer hover:text-blue-600"
      />
      <SiMysql
        title="MySQL"
        className="text-2xl cursor-pointer hover:text-[#00758F]"
      />
      <SiNodedotjs
        title="Node.js"
        className="text-2xl cursor-pointer hover:text-green-500"
      />
      <SiSass
        title="SCSS"
        className="text-2xl cursor-pointer hover:text-pink-500"
      />
      <SiBootstrap
        title="Bootstrap"
        className="text-2xl cursor-pointer hover:text-purple-600"
      />
      <SiTailwindcss
        title="TailwindCSS"
        className="text-2xl cursor-pointer hover:text-cyan-500"
      />
      <SiPostman
        title="Postman"
        className="text-2xl cursor-pointer hover:text-orange-500"
      />
      <SiGithub
        title="GitHub"
        className="text-2xl cursor-pointer hover:text-black"
      />
      <SiExpress
        title="Express"
        className="text-2xl cursor-pointer hover:text-black"
      />
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="relative flex flex-col justify-center items-center text-[var(--textColor)] bg-[var(--bg)] lg:h-[70vh] h-screen overflow-hidden space-y-8">
      <picture>
        <source srcSet={bg} type="image/webp" />
        <img
          src={bgpng}
          alt="Background"
          className="absolute top-0 left-0 object-cover w-full h-full opacity-30 blur-sm"
        />
      </picture>

      <h1 className="relative z-10 max-w-5xl px-4 text-3xl leading-snug text-center md:text-5xl">
        <Typewriter
          options={{
            strings: [
              "Full-Stack Laravel & React Developer",
              "Building Scalable Web Systems",
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 30,
          }}
        />
      </h1>
      <TechStackIcons />
    </div>
  );
};

export default LandingPage;
