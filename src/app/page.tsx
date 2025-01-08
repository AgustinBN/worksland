import Section from "@/components/section";
import SkillCard from "@/components/skill-card";
import { FaNewspaper } from "react-icons/fa6";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const skills = [
  { icon: IoLogoHtml5, label: "HTML" },
  { icon: IoLogoJavascript, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: IoLogoCss3, label: "CSS" },
  { icon: IoLogoReact, label: "React" },
  { icon: SiNextdotjs, label: "Next JS" },
];

const Home = () => {
  return (
    <main className="min-h-fit px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-5 mt-5 justify-center items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-neutral-300">
            Software Engineering Student
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-neutral-200">
            Hello!, I&apos;m Agustín{" "}
            <span className="text-indigo-500">Bianchi</span>
          </h1>
        </div>
        <p className="text-center w-full sm:w-2/3 lg:w-1/3">
          A developer based in Buenos Aires, Argentina, with one dream: to
          become a Software Engineer. Currently, I&apos;m learning and focusing
          on React and React Native.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-1 p-2 rounded-xl font-semibold border border-indigo-500/40 bg-indigo-500/20 text-sm text-neutral-200 hover:cursor-pointer hover:brightness-75">
            <FaNewspaper />
            Download CV
          </div>
          <div className="p-2 rounded-xl font-semibold border border-indigo-500/40 bg-indigo-500/20 text-sm text-neutral-200 hover:cursor-pointer hover:brightness-75">
            Reach me!
          </div>
        </div>
      </div>

      <Section title="Works">
        <p className="text-justify w-full sm:w-2/3 lg:w-1/3">
          I was involved in the development of a{" "}
          <a
            href="https://fivem.net/"
            target="_blank"
            className="text-[#f40552] font-bold hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            FiveM
          </a>{" "}
          server called&nbsp;
          <a
            href="https://x.com/infamesrp"
            target="_blank"
            className="text-[#f9f6c5] font-bold hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            InfamesRP
          </a>
          , where I gained valuable experience working with an incredible
          team.&nbsp;
          <a className="font-bold text-indigo-400 hover:underline hover:decoration-2" href="/works">
            More information about my works.
          </a>
        </p>
      </Section>

      <Section title="Passions">
        <p className="text-justify w-full sm:w-2/3 lg:w-1/3">
          I&apos;m passionate about{" "}
          <span className="text-indigo-400 font-bold">aviation</span>,
          fascinated by the science behind flight and the innovation in aircraft
          design. <span className="text-indigo-400 font-bold">Soccer</span> is
          another big part of my life, as I enjoy both playing and following the
          global game, appreciating the strategy and unity it brings to people.{" "}
          <span className="text-indigo-400 font-bold">Technologies</span> also
          excite me, especially the constant advancements that shape our world,
          from AI to the latest invention. Above all, I&apos;m driven by a love
          for <span className="text-indigo-400 font-bold">learning</span>,
          always seeking new knowledge to fuel both my personal and professional
          growth.
        </p>
      </Section>

      <Section title="Skills">
        <div className="grid grid-cols-3 gap-3">
          {skills.map(({ icon, label }, index) => (
            <SkillCard key={index} Icon={icon} label={label} />
          ))}
        </div>
      </Section>
      <Section title="Lenguage">
        <div className="grid grid-cols-2 gap-3">
          <SkillCard label={"SPANISH"} />
          <SkillCard label={"ENGLISH"} />
        </div>
      </Section>
    </main>
  );
};

export default Home;
