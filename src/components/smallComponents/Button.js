import IconContainer from "./IconContainer";

export default function Button({ children, buttonType, buttonOnClick }) {

    return (
        <button type={buttonType} onClick={buttonOnClick} className="bg-slate-900 rounded-full w-24 md:w-36 block mx-auto my-1 py-3 text-purple-600 font-semibold hover:text-white hover:bg-purple-800 hover:opacity-80 focus:outline-none focus:bg-purple-800 focus:text-white">
            <IconContainer>
                {children}
            </IconContainer>
        </button>
    );
}