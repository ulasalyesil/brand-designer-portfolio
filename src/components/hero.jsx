import name from "../assets/name.svg"
import image from "../assets/images/hero-image.png"
import SectionBanner from "./section-banner";

function Hero() {
    return (
        
        <div id="hero-wrapper">
            <div id="hero-title" className="flex flex-col gap-4 mb-8">
                <img src={name}/>
                <h1 className="text-5xl">BRAND DESIGNER FROM BERLIN</h1>
            </div>
            <div id="section-wrapper">
                <div id="image-wrapper" className="w-full overflow-hidden"></div>
                <SectionBanner text1="BRAND" text2="DESIGN" text3="STUDIO"/>
                <img src={image}/>
            </div>
            
        </div>
    );
}

export default Hero;