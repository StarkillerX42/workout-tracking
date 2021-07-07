// import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";


export class TextBox extends Component {
    constructor(name) {
        super(undefined);
        this.name = name
    }
    displayName = TextBox.name
    render() {
        return (<div><label>{this.name}: </label>
                <input type="text" name={this.name}/>
        </div>
        )
    }
}

function render_boxes() {
    let box_names = ["Time", "Reps", "Resistance", "Difficulty"]
    let boxes = []
    for(let name in box_names) {
        const box = new TextBox(name)
        console.log(typeof box)
        boxes.push(box)
    }
    let x = null
    for(let box in boxes) {
        console.log(box.render())
        x = x + box.render()
    }
    return(x)
}

function TextBoxes () {
    return (
        <form>
            <label for="name">Name: </label><br/>
            <input type="text" id={"dur"}/><br/>
            <label for="dur">Duration: </label><br/>
            <input type="text" id="dur"/><br/>
            <label for="reps">Reps: </label><br/>
            <input type="text" id="reps"/><br/>
            <label for="res">Resistance: </label><br/>
            <input type={"text"} id={"res"}/><br/>
            <label for={"dif"}>Difficulty: </label><br/>
            <input type={"text"} id={"dif"}/><br/>
            <input type={"submit"} value={"Submit"}/>
        </form>
    )
}

function App() {
  let boxes = TextBoxes()
  return (
    <div className="rowLogging" id="rowLogging">
        {boxes}
    </div>
  );
}

export default App;
