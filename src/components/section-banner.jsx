import dot from "../assets/banner-divider.svg"

// create a for loop for this

function SectionBanner({text1, text2, text3}) {
    return (
        <div id="wrapper" className="bg-lime-400">
            <ul className="flex gap-1.5">
                <li id="items">
                    <ul className="flex gap-2.5 items-center text-xs py-4 px-4">
                        <li><img src={dot}/></li>
                        <li>{text1}</li>
                        <li><img src={dot}/></li>
                        <li>{text2}</li>
                        <li><img src={dot}/></li>
                        <li>{text3}</li>
                    </ul>
                </li>
                <li id="items">
                    <ul className="flex gap-2.5 items-center text-xs py-4 px-4">
                        <li><img src={dot}/></li>
                        <li>{text1}</li>
                        <li><img src={dot}/></li>
                        <li>{text2}</li>
                        <li><img src={dot}/></li>
                        <li>{text3}</li>
                    </ul>
                </li>
                <li id="items">
                    <ul className="flex gap-2.5 items-center text-xs py-4 px-4">
                        <li><img src={dot}/></li>
                        <li>{text1}</li>
                        <li><img src={dot}/></li>
                        <li>{text2}</li>
                        <li><img src={dot}/></li>
                        <li>{text3}</li>
                    </ul>
                </li>
                <li id="items">
                    <ul className="flex gap-2.5 items-center text-xs py-4 px-4">
                        <li><img src={dot}/></li>
                        <li>{text1}</li>
                        <li><img src={dot}/></li>
                        <li>{text2}</li>
                        <li><img src={dot}/></li>
                        <li>{text3}</li>
                    </ul>
                </li>
                <li id="items">
                    <ul className="flex gap-2.5 items-center text-xs py-4 px-4">
                        <li><img src={dot}/></li>
                        <li>{text1}</li>
                        <li><img src={dot}/></li>
                        <li>{text2}</li>
                        <li><img src={dot}/></li>
                        <li>{text3}</li>
                    </ul>
                </li>
                <li id="items">
                    <ul className="flex gap-2.5 items-center text-xs py-4 px-4">
                        <li><img src={dot}/></li>
                        <li>{text1}</li>
                        <li><img src={dot}/></li>
                        <li>{text2}</li>
                        <li><img src={dot}/></li>
                        <li>{text3}</li>
                    </ul>
                </li>
                <li id="items">
                    <ul className="flex gap-2.5 items-center text-xs py-4 px-4">
                        <li><img src={dot}/></li>
                        <li>{text1}</li>
                        <li><img src={dot}/></li>
                        <li>{text2}</li>
                        <li><img src={dot}/></li>
                        <li>{text3}</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default SectionBanner;