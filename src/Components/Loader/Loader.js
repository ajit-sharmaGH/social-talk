import LoaderGif from "./loader2.webp";

import "./Loader.css";
const Loader = ()=>{
    return (
        <div className="loader-container">
       <img src={LoaderGif} 
        className="loader-gif" alt="loader.." />
        </div>
    )
}
export {Loader}