import {Button} from "@/components/ui/Button";
import {FiDownload} from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Charan G</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">Machine Learning & Prompt Engineering Enthusiast |
               Crafting Intelligent Systems and Advanced AI Solutions</p>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
