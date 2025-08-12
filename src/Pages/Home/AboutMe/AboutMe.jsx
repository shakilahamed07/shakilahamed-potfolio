import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FiAward, FiUsers, FiCheckCircle, FiClock } from "react-icons/fi";

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const StatCard = ({ end, text, Icon }) => (
    <div className="min-h-35 rounded-xl border-2 border-primary group hover:scale-102 transition-transform duration-300 p-6 flex flex-col items-center gap-3">
      <h3 className="text-4xl font-extrabold text-primary transition-transform duration-300 group-hover:scale-110 sm:flex gap-3 mt-2 space-y-3 sm:space-y-0">
      <Icon /> {inView && <CountUp end={end} duration={3} />}+
      </h3>
      <p className="text-gray-300 font-medium text-center">{text}</p>
    </div>
  );

  return (
    <div
      className="pt-20 max-w-[1350px] mx-auto text-white py-10 px-5 md:px-10"
      id="about-me"
      ref={ref}
    >
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center lg:text-start">
        <span className="text-primary">About</span> Me
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <p className="mb-6 text-gray-300 text-center text-sm sm:text-lg lg:text-start">
            I’m Shakil Ahamed, a dedicated Full-Stack Web Developer with
            hands-on experience in HTML, CSS, JavaScript, React.js, Next.js,
            Node.js, Express.js, and MongoDB. I love turning ideas into fully
            functional, visually engaging, and high-performing web applications. I focus on clean, maintainable code and building solutions that are fast, scalable, and user-friendly. My expertise covers everything from crafting interactive, responsive frontends to architecting secure and efficient backend systems. I’m passionate about continuous learning, exploring emerging web technologies, and solving real-world problems through innovative digital solutions.
          </p>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-6">
          <StatCard end={2} text="Year of Experience" Icon={FiClock} />
          <StatCard end={8} text="Projects Complete" Icon={FiCheckCircle} />
          <StatCard end={5} text="Happy Clients" Icon={FiUsers} />
          <StatCard end={2} text="Awards Won" Icon={FiAward} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
