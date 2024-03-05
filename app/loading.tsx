import {CircularProgress} from "@nextui-org/react";


export default function Loading(){
    return(
        <div className="w-full h-screen flex items-center justify-center ">
            <CircularProgress color="primary" aria-label="Loading..."/>
        </div>

    )
}