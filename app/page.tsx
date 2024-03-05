'use client'
import { NextUIProvider } from "@nextui-org/react";
import Main from "./main/main";

export default function Home() {
  return (
    <NextUIProvider>
       <Main/>
    </NextUIProvider>

  );
}
