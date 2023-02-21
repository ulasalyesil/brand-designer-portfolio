import line from "../assets/line-black.svg"


function Button({type, label}) {

    const states = {
        default: "flex text-xs bg-none border border-black m-auto p-3 gap-2 items-center hover:bg-black hover:text-white",
        primary: "flex text-xs bg-lime-400 m-auto p-3 gap-2 items-center hover:bg-lime-300",
        secondary: "flex text-xs bg-black text-white m-auto p-3 gap-2 items-center"
    }

    return (
        <button className={states.primary}>
        <img src={line}/>
        {label}</button>
    );
}

export default Button;