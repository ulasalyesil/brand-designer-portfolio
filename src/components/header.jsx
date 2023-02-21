import logo from "../assets/logo.svg"
import Button from "./button";

export default function Header() {
  return (
    <header className="flex w-full py-8">
        <div id="wrapper" className="w-full flex justify-between items-center">
            <div id="logo">
                <img src={logo}/>
            </div>
            <ul className="flex align-center gap-12">
                <ul className="flex align-center gap-8">
                    <li className="text-xs m-auto">WORK</li>
                    <li className="text-xs m-auto">CONTACT</li>
                </ul>
                <Button label="GET IN TOUCH"/>
            </ul>
        </div>
    </header>
  );
}