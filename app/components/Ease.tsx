import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useInView } from "react-intersection-observer";

export default function Ease({ text }) {
    const controls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 1,
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

    const easeIn = {
        hidden: {
            opacity: 0,
            transition: { duration: .5, ease: [0.2, 0.65, 0.3, 0.9] }

        },
        visible: {
            opacity: 1,
            transition: {
                delay: .5,
                duration: .5, ease: [0.2, 0.65, 0.3, 0.9]
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
            <h1 className="font-semibold pt-10 text-2xl antialiased"> Old Fashioned Ease </h1>
            <p className="pt-4 text-gray-500">The animation we all know. The original. Ease your texts for a subtle animation that can even go unnoticed</p>
            <Button onClick={resetAnimation} className="mt-5" color="secondary" variant="bordered">Reset Animation 🚀</Button>
            <motion.div
                className="h-52 w-120 flex justify-center items-center mt-5 rounded-md mx-0 bg-slate-950 text-slate-200">
                <motion.div className="flex items-center justify-center h-18 w-fit overflow-hidden">
                    <motion.h1
                        className="text-2xl"
                        initial="hidden"
                        animate={controls}
                        variants={easeIn}
                        transition={{ duration: .5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        ref={ref}
                    >
                        {text}
                    </motion.h1>


                </motion.div>
            </motion.div >

        </>
    )
}
