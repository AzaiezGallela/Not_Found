import '../Components/Buttons.css';

function Buttons({textColor, bgColor, colorBorder='grey', buttonText}){
    return (
        <form>
            <input type="submit" style={{backgroundColor: bgColor, color: textColor, borderColor: colorBorder}} value={buttonText} />
        </form>
    )
} {

}

export default Buttons;