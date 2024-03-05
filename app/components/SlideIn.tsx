import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useInView } from "react-intersection-observer";


export default function SlideIn({ text }) {
    const controls = useAnimation();

    const { ref, inView } = useInView({
        threshold: .5,
        triggerOnce: true

    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const slideUp = {
        hidden: {
            opacity: 0,
            y: 40,
            transition: { duration: .5, ease: [0.2, 0.65, 0.3, 0.9] }

        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .5,
                duration: .8, ease: [0.2, 0.65, 0.3, 0.9],
                damping: 300,
                stiffness: 100
            }


        }
    }
    const resetAnimation = () => {
        controls.set("hidden");
        setTimeout(() => {
            controls.start("visible");
        }, 200);

    };
    return (

        <>
            <h1 className="font-semibold pt-10 text-2xl antialiased"> Slide-Up Animation </h1>
            <p className="pt-4 text-gray-500">The Slide-Up animation is very well known in the developer world nowadays. It is quite simple yet elegant and can enhance the style of almost any project.</p>
            <Button onClick={resetAnimation} className="mt-5" color="secondary" variant="bordered">Reset Animation 🚀</Button>
            <motion.div
                className="h-52 w-120 flex justify-center items-center mt-5 rounded-md mx-0 bg-slate-950 text-slate-200">
                <motion.div className="flex items-center justify-center h-18 w-fit overflow-hidden" ref={ref}
                >
                    <motion.h1
                        className="text-2xl"
                        initial="hidden"
                        animate={controls}
                        variants={slideUp}
                    >
                        {text}
                    </motion.h1>


                </motion.div>
            </motion.div>

        </>
    )

}; 
