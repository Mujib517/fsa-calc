import Display from "./Display";
import Button from './Button';
import './main.css';
import React from "react";

class Main extends React.Component {

    state = { text: '', op1: '', op2: '', op: null };

    onButtonPress = (val, isOperator) => {
        if (!isOperator) {
            this.setState({ text: this.state.text + val });
        }
        else {
            if (this.state.op1 && this.state.op2) {
                let res = '';

                switch (this.state.op) {
                    case '+':
                        res = this.state.op1 + this.state.op2;
                        break;
                    case '-':
                        res = this.state.op1 - this.state.op2;
                        break;
                    case '*':
                        res = this.state.op1 * this.state.op2;
                        break;
                    case '/':
                        res = this.state.op1 / this.state.op2;
                        break;
                }
                this.setState({ text: res, op1: res, op2: '', op: null });
            }
            else this.setState({ op1: this.state.text, op: val, text: '' });
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
            <div className="row">
                <div className="col-6">
                    <Display text={this.state.text} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <hr />
                </div>
            </div>
            <div className="row">
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
            <div className="row">
                <div className="col-6">
                    <hr />
                </div>
            </div>
            <div className="row">
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
            <div className="row">
                <div className="col-6">
                    <hr />
                </div>
            </div>
            <div className="row">
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
        </div>;
    }
}

export default Main;
