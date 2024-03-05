import { Link, Snippet, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import Ease from "../components/Ease";
import Stagger from "../components/Stagger";
import SlideIn from "../components/SlideIn";


export default function Main() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-24 px-40">
            <div className="z-10 max-w-2xl w-full items-center justify-between">
                <h1 className="font-bold text-3xl antialiased">Text animations by Ignacio Doria</h1>
                <h2 className="font-semibold pt-10 text-xl antialiased"> Framer-Motion Installation </h2>
                <Snippet className="mt-6 " color="secondary">npm install framer-motion</Snippet>
                <h2 className="font-semibold pt-10 text-xl antialiased">Intersection Observer API</h2>
                <Snippet className="mt-6 " color="secondary">npm install react-intersection-observer --save</Snippet>
                <p className="pt-10 text-gray-500"> Once the framer-motion library is installed, we will create components that receive our text and give us back our desired improved and animated text! </p>
                <Ease text="My name is Ignacio"></Ease> 
                <SlideIn text="I'm a developer"></SlideIn>
                <Stagger text="See you soon!"></Stagger>
            </div>
            <footer className="max-w-2xl w-full flex items-start justify-start pt-20 flex-col">
                <p className="text-gray-500">Made By Ignacio Doria Oberman.</p>
                <Link color="primary" href="https://nachodoria.vercel.app" target="_blank">https://nachodoria.vercel.app</Link>
            </footer>
        </main>
        

    );
}
