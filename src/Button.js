function Button(props) {
    const { styles, text, onPress, isOperator = false } = props;

    function onBtnClick() {
        onPress(text, isOperator);
    }

    return <button style={styles} onClick={onBtnClick}
        className="btn btn-lg btn-dark">
        {text}
    </button>
}

export default Button;
