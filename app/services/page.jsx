"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Machine Learning',
    description: 'Machine Learning is a method of data analysis that automates analytical model building.',
    href: "/machine-learning"
  },
  {
    num: '02',
    title: 'Data Analysis',
    description: 'Data analysis is essential for interpreting data, making it meaningful, and deriving insights.',
    href: "/data-analysis"
  },
  {
    num: '03',
    title: 'Artificial Intelligence',
    description: 'AI involves building smart machines capable of performing tasks that typically require human intelligence.',
    href: "/artificial-intelligence"
  },
  {
    num: '04',
    title: 'App Development',
    description: 'App development involves creating software applications for mobile devices and desktops.',
    href: "/app-development"
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid frid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
            <div key={index} className="flex-1 flex-col xl:flex-center gap-8 group">

                {/* number and title */}
              <div className="w-full flex items-center gap-2">
                <div className="text-xl font-bold text-outline text-transparent group-hover:text-outline-hover duration-500">{service.num}</div>
                <Link href={service.href} className="text-accent flex items-center gap-2">
                  {service.title}
                  <BsArrowDownRight />
                </Link>
              </div>
              {/* title */}
              <h2>{service.title}</h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full "></div>
            </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
