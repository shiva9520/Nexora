import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
      >
        {/* Badge */}
        <div className="relative w-[95%] sm:w-52 h-10 bg-gradient-to-r from-[#5f7cff] to-[#3ee7e7] shadow-[0_0_15px_rgba(94,124,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-sm tracking-widest">
            <i className="bx bx-bolt text-cyan-300"></i> NOW LIVE
          </div>
        </div>
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight my-8">
          Build APIs. <br /> Scale Products.
        </h1>
        {/* Description */}
        <p className="text-base sm:text-lg tracking-wide text-gray-400 max-w-[26rem] lg:max-w-[32rem]">
          A unified platform for developers to design, deploy, and monitor
          high-performance applications without worrying about infrastructure.
        </p>
        {/* CTA Buttons */}
        <div className="flex gap-4 my-12">
          <Link
            to="/docs"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
          >
            View Docs <i className="bx bx-book-open"></i>
          </Link>
          <Link
            to="/start-building"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-9 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 bg-cyan-300 text-black hover:bg-cyan-200"
          >
            Start Building <i className="bx bx-rocket"></i>
          </Link>
        </div>
      </div>
      {/* 3D Scene */}
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%]"
        scene="https://prod.spline.design/97nKwJ3ULtt1I0wp/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
