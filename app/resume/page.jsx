"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";

import { SiNextdotJs } from "react-icons/si";
import { SiTailwindcss } from 'react-icons/si';

const about = {
    title: "About Me",
    description: "I am a Software Developer with a passion for crafting intelligent systems and advanced AI solutions. I am skilled in Machine Learning, Data Analysis, Artificial Intelligence, and App Development.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Charan G"
        },
        {
            fieldName: "Phone",
            fieldValue: "+91-7022441523",
        },
        {
            fieldName: "Email",
            fieldValue: "charang2003@gmail.com",
        },
        {
            fieldName: "Address",
            fieldValue: "Bengaluru, India",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, Kannada",
        },
        {
            fieldName: "Skills",
            fieldValue: "Machine Learning, Data Analysis, Artificial Intelligence, App Development",
        },
        {
            fieldName: "Tools",
            fieldValue: "HTML5, CSS3, JavaScript, React, Figma, Node.js, Tailwind CSS, Next.js",
        },
    ]
};

const projects = {
    icon: '/assets/resume/badge.svg',
    title: "Projects",
    description: "I have worked on a variety of projects, including Machine Learning, Data Analysis, Artificial Intelligence, and App Development.",
    items: [
        {
            title: "Machine Learning",
            description: "Developed a machine learning model to predict the price of a house based on its features.",
            icon: <FaHtml5 />,
        },
        {
            title: "Data Analysis",
            description: "Analyzed data from a survey to identify trends and patterns.",
            icon: <FaCss3 />,
        },
        {
            title: "Artificial Intelligence",
            description: "Built an AI system to detect objects in images.",
            icon: <FaJs />,
        },
        {
            title: "App Development",
            description: "Created a mobile app to help users track their fitness goals.",
            icon: <FaReact />,
        },
    ]  
}

const skills = {
    title: " my skills",
    description: "I have a wide range of skills, including Machine Learning, Data Analysis, Artificial Intelligence, and App Development.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiNextdotJs />,
            name: "Next.js",
        },
    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/Tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {    
    return (
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, easr: "easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="flex felx-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About me</TabsTrigger>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* about me */}
                        <TabsContent value="about" className="w-full">
                            <h2>{about.title}</h2>
                            <p>{about.description}</p>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {about.info.map((item, index) => (
                                    <div key={index}>
                                        <h3>{item.fieldName}</h3>
                                        <p>{item.fieldValue}</p>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume; 