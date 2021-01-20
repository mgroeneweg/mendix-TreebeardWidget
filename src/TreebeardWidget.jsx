import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/TreebeardWidget.css";

export default class TreebeardWidget extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
