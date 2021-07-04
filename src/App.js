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
        return (
                <form>
                    <label>{this.name}:
                    <input type="text" name={this.name}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
        )
    }
}

function render_boxes() {
    let box_names = ["Time", "Reps", "Resistance", "Difficulty"]
    let boxes = []
    for(let name in box_names) {
        const box = new TextBox(name)
        boxes.push(box)
    }
    let x = null
    for(let box in boxes) {
        console.log(box.render())
        x = x + box.render()
    }
    return(x)
}
function App() {
    const box = new TextBox("Time")
  return (
    <div className="Workout Logging">
        {box.render()}
        <script src={render_boxes}/>
      <button>
        Submit
      </button>
    </div>
  );
}

export default App;
