function Button({ isActive, isDisabled }) {
    const handleClick = () => {
        console.log("Przycisk został nasiśnięty");
        alert("Przycisk został wciśnięty");
    };

    const btnClass = `btn ${isActive ? "btn-active" : ""} ${isDisabled ? "btn-disabled" : ""}`

    return (
        <button onClick={handleClick} className={btnClass}>Kliknij mnie</button>
    );
}

export default Button;