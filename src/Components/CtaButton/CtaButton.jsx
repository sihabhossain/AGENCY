
const CtaButton = ({onClick, buttonText }) => {
    return (
        <button onClick={onClick} className="bg-buttonBg py-2 px-4 rounded-sm text-white font-semibold uppercase">
            {buttonText}
        </button>
    );
};

export default CtaButton;