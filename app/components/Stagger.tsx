import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useInView } from "react-intersection-observer";

export default function Stagger({ text }) {
    const controls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
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

    const letter = {
        hidden: {
            opacity: 0,
            y: "0.25em"

        },
        visible: {
            opacity: 1,
            y: "0em",
            transition: {
                duration:0.5,
                ease: [0.2, 0.65, 0.3, 0.9],
            }

        }
    }
    const words = {
        hidden: {
        },
        visible: {
          
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
            <h1 className="font-semibold pt-10 text-2xl antialiased"> Stagger Words </h1>
            <p className="pt-4 text-gray-500">One of the most fancy animations your website can have, we will animate letter per letter of a word and stagger them.</p>
            <Button onClick={resetAnimation} className="mt-5" color="secondary" variant="bordered">Reset Animation 🚀</Button>
            <motion.div
                className="h-52 w-120 flex justify-center items-center mt-5 rounded-md mx-0 bg-slate-950 text-slate-200">
                <motion.div className="flex items-center justify-center h-18 w-fit overflow-hidden">
                    {text.split(" ").map((word, index) => {
                        return (
                            <motion.span
                                className="inline-block mr-1 whitespace-nowrap text-2xl"
                                ref={ref}
                                aria-hidden="true"
                                key={index}
                                initial="hidden"
                                animate={controls}
                                variants={words}
                                transition={{
                                    delayChildren: index * 0.2,
                                    staggerChildren: 0.05,
                                }}
                            >
                    {word.split("").map((character, index) => {
                        return (
                            <motion.span
                                className="inline-block -mr-0.25"
                                aria-hidden="true"
                                key={index}
                                variants={letter}
                            >
                                {character}
                            </motion.span>
                        );
                    })}
                </motion.span>
                );
                    })}
            </motion.div>
        </motion.div >

        </>
    )
}
