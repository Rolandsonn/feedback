import { Component } from "react";
import Feedback from "./components/Feedback/Feedback";
import Statistics from "./components/Statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    <Feedback />;
    return <div>App</div>;
  }
}
