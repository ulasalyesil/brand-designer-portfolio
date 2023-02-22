import dot from "../assets/banner-divider.svg"
import BannerText from "./section-banner-content";

// create a for loop for this

function SectionBanner({text1, text2, text3}) {

    const rows = [{text1}, {text2}, {text3}];
    const listItem = [];

    function CreateRow() {
        for (let i = 0; i < 10; i++) {
            console.log();
            listItem.push(<li><BannerText text1={"DESIGN"} text2={"BRAND"} text3={"STUDIO"}/></li>);
        };
    }

    
    return (
        <div id="wrapper" className="bg-lime-400 overflow-hidden">
            <ul className="flex gap-1.5">
                {CreateRow()}
                    {listItem.map(item => (<>{item}</>))}
            </ul>
        </div>
    );
}

export default SectionBanner;