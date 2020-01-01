import React from 'react';
import './SearchingVisualizer.css';
import {getLinearSearch} from '../SearchingAlgorithms/linearSearch';
import {getBinarySearch} from '../SearchingAlgorithms/binarySearch';
import {getJumpSearch} from '../SearchingAlgorithms/jumpSearch';

// tasks to work on
// 2). display index after calculated
// 4). hover disable problem
// 5). refactor

// constant declared global variables
const ANIMATION_SPEED_MS = 1000;
const SIZE = 15;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const FOUND_COLOR = '#59D60D';
const arrayBars = document.getElementsByClassName('array-bar');

// declared global variables
let submitted = false;
let searched = false;

export default class SearchingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            key: null,
        }
    };

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        let key = null;

        document.getElementById('input').value = null;

        for (let i = 0; i < SIZE; i++) {
            // array.push(50 + i);
            array.push(randomIntFromInterval(1, 99));
        }

        array.sort(function(a, b){return a - b});

        if (searched) {
            this.resetToTurquoise();
        }

        submitted = false;

        this.setState({key});
        this.setState({array});
    }

    disableButtons() {
        document.getElementById("reset").disabled = true;
        let buttonStyle = document.getElementById("reset").style;
        buttonStyle.cursor = "default";

        document.getElementById("linearSearch").disabled = true;
        buttonStyle = document.getElementById("linearSearch").style;
        buttonStyle.cursor = "default";

        document.getElementById("binarySearch").disabled = true;
        buttonStyle = document.getElementById("binarySearch").style;
        buttonStyle.cursor = "default";

        document.getElementById("jumpSearch").disabled = true;
        buttonStyle = document.getElementById("jumpSearch").style;
        buttonStyle.cursor = "default";
    }

    restoreButtons() {
        document.getElementById("reset").disabled = false;
        let buttonStyle = document.getElementById("reset").style;
        buttonStyle.cursor = "pointer";

        document.getElementById("linearSearch").disabled = false;
        buttonStyle = document.getElementById("linearSearch").style;
        buttonStyle.cursor = "pointer";

        document.getElementById("binarySearch").disabled = false;
        buttonStyle = document.getElementById("binarySearch").style;
        buttonStyle.cursor = "pointer";

        document.getElementById("jumpSearch").disabled = false;
        buttonStyle = document.getElementById("jumpSearch").style;
        buttonStyle.cursor = "pointer";
    }

    linearSearch() {
        if (searched) {
            this.resetToTurquoise();
        }

        this.disableButtons();
        searched = true;

        console.log("Key: " + this.state.key);

        const [animations, keyIndex] = getLinearSearch(this.state.array, this.state.key);
        console.log("Index: " + keyIndex);

        for (let i = 0; i < animations.length; i++) {
            const barStyle = arrayBars[i].style;

            setTimeout(() => {
                barStyle.backgroundColor = SECONDARY_COLOR;
                if (i >= 1) {
                    const resetStyle = arrayBars[i - 1].style;
                    resetStyle.backgroundColor = PRIMARY_COLOR;
                }
                setTimeout(() => {
                    if (this.state.array[i] === this.state.key) {
                        barStyle.backgroundColor = FOUND_COLOR;
                    }
                    else {
                        barStyle.backgroundColor = PRIMARY_COLOR;
                    }
                }, ANIMATION_SPEED_MS);
            }, i * ANIMATION_SPEED_MS);
        }
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);
        setTimeout(() => this.restoreButtons(), RESTORE_TIME); 
    }

    binarySearch() {
        if (searched) {
            this.resetToTurquoise();
        }

        this.disableButtons();
        searched = true;

        console.log("Key: " + this.state.key);

        const [animations, keyIndex] = getBinarySearch(this.state.array, this.state.key);
        console.log("Index: " + keyIndex);

        for (let i = 0; i < animations.length; i++) {
            const barStyle = arrayBars[animations[i]].style;

            setTimeout(() => {
                barStyle.backgroundColor = SECONDARY_COLOR;
                if (i >= 1) {
                    const resetStyle = arrayBars[animations[i - 1]].style;
                    resetStyle.backgroundColor = PRIMARY_COLOR;
                }
                setTimeout(() => {
                    if (animations[i] === keyIndex) {
                        barStyle.backgroundColor = FOUND_COLOR;
                    }
                    else {
                        barStyle.backgroundColor = PRIMARY_COLOR;
                    }
                }, ANIMATION_SPEED_MS);
            }, i * ANIMATION_SPEED_MS);
        }
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 - 1000);
        setTimeout(() => this.restoreButtons(), RESTORE_TIME); 
    }

    jumpSearch() {
        if (searched) {
            this.resetToTurquoise();
        }

        this.disableButtons();
        searched = true;

        console.log("Key: " + this.state.key);

        const [animations, keyIndex] = getJumpSearch(this.state.array, this.state.key);
        console.log("Index: " + keyIndex);

        for (let i = 0; i < animations.length; i++) {
            const barStyle = arrayBars[animations[i]].style;

            setTimeout(() => {
                barStyle.backgroundColor = SECONDARY_COLOR;
                if (i >= 1) {
                    const resetStyle = arrayBars[animations[i - 1]].style;
                    resetStyle.backgroundColor = PRIMARY_COLOR;
                }
                setTimeout(() => {
                    if (animations[i] === keyIndex) {
                        barStyle.backgroundColor = FOUND_COLOR;
                    }
                    else {
                        barStyle.backgroundColor = PRIMARY_COLOR;
                    }
                }, ANIMATION_SPEED_MS);
            }, i * ANIMATION_SPEED_MS);
        }
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);
        setTimeout(() => this.restoreButtons(), RESTORE_TIME); 
    }

    resetToTurquoise() {
        for (let i = 0; i < this.state.array.length; i++) {
            const barStyles = arrayBars[i].style;
            barStyles.backgroundColor = PRIMARY_COLOR;
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({key: parseInt(this.state.key)});
        submitted = true;
    }

    changeHandler = (event) => {
        this.setState({key: event.target.value});
    }

    render() {
        const {array} = this.state;

        let header = '';
        if (submitted) {
            header = <h1>Key: {this.state.key}</h1>;
        }

        return (
            <>
            <div className="array-container">
                {array.map((value, index) => (
                    <div className="array-bar" key={index}>
                        {value}
                    </div>
                ))}
            </div>
            <div className="buttons">
                <button id="reset" onClick={() => this.resetArray()}>Reset</button>
                <button id="linearSearch" onClick={() => this.linearSearch()}>Linear Search</button>
                <button id="binarySearch" onClick={() => this.binarySearch()}>Binary Search</button>
                <button id="jumpSearch" onClick={() => this.jumpSearch()}>Jump Search</button>
            </div>
            <label id="label">
                <form onSubmit={this.submitHandler}>
                    {header}
                    <p>Enter the key value:</p>
                    <input id="input" type="text" onChange={this.changeHandler}/>
                    <input type="submit" value="Submit"/>
                </form>
            </label>
            </>
        )
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}