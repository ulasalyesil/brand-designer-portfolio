import dot from "../assets/banner-divider.svg"

function BannerText({text1, text2, text3}) {
    return (
                    <ul className="flex gap-2.5 items-center text-xs py-4 px-4">
                        <li className="w-0.5 h-3"><img src={dot}/></li>
                        <li>{text1}</li>
                        <li className="w-0.5 h-3"><img src={dot}/></li>
                        <li>{text2}</li>
                        <li className="w-0.5 h-3"><img src={dot}/></li>
                        <li>{text3}</li>
                    </ul>
    );
}

export default BannerText;