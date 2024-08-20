import {animate, motion} from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculate the reverse index for stgged delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index -1;
};


const Stairs = () => {
    return <>
    
    {/* render 6 motion divs, each representing a step of the stairs
    
    Each div will have the same anuimation defined by the stairsAnimation object,
    the delay for each dev id calcualted dynamically based on the index of the div
    */}

    {[...Array(6)].map((_, index) => {
        return (
            <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration: 0.4, ease: "easeInOut", delay: reverseIndex(index) * 0.1}}
            className="h-full w-full bg-white relative"
            />
        );
    })}
    </>
};

export default Stairs; 