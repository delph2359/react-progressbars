import React, { Component } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import Button from "./components/Button";
import CustomSelect from "./components/CustomSelect";
import { getData } from "./data/api";

class App extends Component {
  state = {
    barToChange: 1
  };

  componentDidMount() {
    getData("http://pb-api.herokuapp.com/bars").then(res => {
      const { buttons, bars, limit } = res;
      this.setState({ buttons, bars, limit });
    });
  }

  handleClick = button => {
    const bars = [...this.state.bars];
    let index = this.state.barToChange - 1;
    bars[index] = Math.max(this.state.bars[index] + button, 0);
    this.setState({ bars });
  };

  onChange = e => {
    this.setState({ barToChange: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Progress Bars</h1>
        {this.state.bars &&
          this.state.bars.map((bar, index) => (
            <ProgressBar
              key={index}
              percentage={bar}
              limit={this.state.limit}
            />
          ))}
        <div className="controls">
          {this.state.bars && (
            <CustomSelect
              options={this.state.bars.map((_, index) => {
                return { value: index + 1, text: `#progress${index + 1}` };
              })}
              onChange={e => this.onChange(e)}
            />
          )}
          {this.state.buttons &&
            this.state.buttons.map((button, index) => (
              <Button
                key={index}
                onClick={() => this.handleClick(button)}
                text={button > 0 ? `+${button}` : button}
              ></Button>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
