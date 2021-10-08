import ButtonCotainer from "./ButtonContainer";
import Display from "./Display";
import './main.css'

function Main() {

    const styles = {
        border: '1px solid grey'
    };

    return <div className="display" style={styles}>
        <h1>Calculator</h1>
        <Display />
        <ButtonCotainer />
    </div>;
}

export default Main;
