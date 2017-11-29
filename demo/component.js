import React from 'react';
import CheckBoxGroup from '../src/index';
import Checkbox from "../src/CheckBox";

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            checked: false
        };
    }
 
    render() {
        let { checked } = this.state;

        return <div style={{ height: "800px" }}>
            <Checkbox onChange={e => console.log(e.target.checked)}>
              选择
            </Checkbox>
          </div>;
    }
}

export default App;
