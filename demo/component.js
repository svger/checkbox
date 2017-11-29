import React from "react";
import CheckboxGroup from "../src/index";
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
        <CheckboxGroup toggleable>
          <Checkbox value="apple">苹果</Checkbox>
          <Checkbox value="samsung">三星</Checkbox>
          <Checkbox value="mi">小米</Checkbox>
        </CheckboxGroup>
      </div>;
  }
}

export default App;

/**
 * CheckBox列表组件
 * 
 * @example 1  基本的 Checkbox
  <Checkbox onChange={e => console.log(e.target.checked)}>
              选择
  </Checkbox>
 */

/**
 * CheckBox列表组件
 * 
 * @example 2  半选中的 Checkbox
   <Checkbox indeterminate onChange={e => console.log(e.target.checked)}>
              选择
   </Checkbox>
 */

 /**
 * CheckboxGroup列表组件
 * 
 * @example 1  基本的 CheckboxGroup
    <CheckboxGroup defaultSelects={['apple']} onChange={selects => console.log(selects)}>
       <Checkbox value="apple">苹果</Checkbox>
       <Checkbox value="samsung">三星</Checkbox>
       <Checkbox value="mi" disabled>小米</Checkbox>
    </CheckboxGroup>
 */

/**
 * CheckboxGroup列表组件
 * 
 * @example 2  快速创建复选框组： 针对 value 和显示值相同时
  <CheckboxGroup values={['苹果', '三星', '小米']} />
 */

/**
 * CheckboxGroup列表组件
 * 
 * @example 3  CheckboxGroup 垂直排列
    <CheckboxGroup block>
      <Checkbox value="apple">苹果</Checkbox>
      <Checkbox value="samsung">三星</Checkbox>
      <Checkbox value="mi">小米</Checkbox>  
    </CheckboxGroup>
 */

/**
 * CheckboxGroup列表组件
 * 
 * @example 4  全选
   <CheckboxGroup toggleable>
      <Checkbox value="apple">苹果</Checkbox>
      <Checkbox value="samsung">三星</Checkbox>
      <Checkbox value="mi">小米</Checkbox>
    </CheckboxGroup>
 */