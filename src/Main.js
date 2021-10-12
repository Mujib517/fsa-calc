import Display from "./Display";
import Button from './Button';
import './main.css';
import React from "react";

class Main extends React.Component {

    state = { text: '', op1: '', op2: '', op: null };

    // refactoring

    hasDecimal = (val) => {
        return val === '.' && this.state.text.indexOf('.') > -1
    }

    calculate = (val) => {
        let res = '';
        const { op1, text } = this.state;

        switch (this.state.op) {
            case '+':
                res = +op1 + +text;
                break;
            case '-':
                res = +op1 - +text;
                break;
            case '*':
                res = +op1 * +text;
                break;
            case '/':
                res = +op1 / +text;
                break;
        }
        this.setState({ text: res, op1: res, op: val });
    }

    onButtonPress = (val, isOperator) => {
        if (!isOperator) {
            if (this.hasDecimal(val)) return;
            this.setState({ text: this.state.text + val });
        }
        else {
            if (!this.state.op) {
                this.setState({ op: val, op1: this.state.text, text: '' })
            }
            else this.calculate(val);
        }
    }

    // props: nouns
    // methods: verbs
    getStyles = (op) => {
        return this.state.op === op
            ? { backgroundColor: 'red' }
            : null;
    }

    //  Alt + Shift + F
    render() {
        return <div className="container">
            <div className="row mt-3">
                <div className="col-4">
                    <Display text={this.state.text} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-1">
                    <Button text="C" onPress={this.onButtonPress} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-1">
                    <Button text="7" onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button text="8" onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button text="9" onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button text="/" isOperator={true}
                        styles={this.getStyles('/')}
                        onPress={this.onButtonPress}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-1">
                    <Button text="4" onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button text="5" onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button text="6" onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button text="*" isOperator={true}
                        onPress={this.onButtonPress}
                        styles={this.getStyles('*')} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-1">
                    <Button text="1" onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button text="2" onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button text="3" onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button styles={this.getStyles('-')}
                        text="-" isOperator={true}
                        onPress={this.onButtonPress} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-1">
                    <Button text="0" onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button text="." onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button text="=" isOperator={true} onPress={this.onButtonPress} />
                </div>
                <div className="col-1">
                    <Button styles={this.getStyles('-')}
                        text="+" isOperator={true}
                        onPress={this.onButtonPress} />
                </div>
            </div>
        </div>;
    }
}

export default Main;
