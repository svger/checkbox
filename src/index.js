import React, { Component } from "react";
import classnames from "classnames";
import Checkbox from "./Checkbox";
import "./style/index.less";
const defaultPrefixCls = "cefc-checkbox-group";
import PropTypes from "prop-types";

class CheckboxGroup extends Component {
  constructor(props) {
    super();
    this.state = {
      selects: props.selects || props.defaultSelects || []
    };
  }

  isEqual(source, target) {
    if (!source) return true;
    return Object.keys(source).every(key => {
      let isEqual = true;
      const prop = source[key];
      if (typeof prop !== "function" && target[key] !== source[key]) {
        isEqual = false;
      }
      return isEqual;
    });
  }

  componentWillReceiveProps(nextProps) {
    nextProps.selects && this.setState({ selects: nextProps.selects });
  }

  arrayRemoveByValue(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == val) {
        arr.splice(i, 1);
        break;
      }
    }
  }

  change(behavior, props, value) {
    console.log("change-value", value);

    let state = this.state[props];

    if (behavior === "push") {
      state.push(value);
    }

    if (behavior === "splice") {
      this.arrayRemoveByValue(state, value);
    }

    console.log("change-state", state);

    this.setState({ selects: state });
    this.props.onChange && this.props.onChange(state);
  }

  addSelect(value) {
    this.change("push", "selects", value);
  }

  removeSelect(value) {
    this.change("splice", "selects", value); //this.state.selects.indexOf(value)
  }

  toggleAll = e => {
    const selects = e.target.checked
      ? this.state.selects.concat(this.unSelects)
      : [];
    this.setState({ selects: selects });
  };

  handleCheckboxChange(value, e) {
    this[(e.target.checked ? "add" : "remove") + "Select"](value);
  }

  render() {
    const {
      children,
      className,
      defaultSelects,
      onChange,
      values,
      block,
      toggleable,
      toggleAllContent,
      prefixCls,
      ...other
    } = this.props;
    const { selects } = this.state;

    const unSelects = [];
    delete other.selects;

    let checkboxes;
    if (values) {
      checkboxes = values.map((value, i) => {
        const checked = selects.indexOf(value) !== -1;
        checked || unSelects.push(value);

        return (
          <Checkbox
            key={i}
            value={value}
            checked={checked}
            onChange={this.handleCheckboxChange.bind(this, value)}
            block={block}
          >
            {value}
          </Checkbox>
        );
      });
    } else {
      checkboxes = React.Children.map(children, (Checkbox, i) => {
        if (!Checkbox) return;
        const props = Checkbox.props;
        const value = props.value;

        const checked = selects.indexOf(value) !== -1;

        if (!checked && !props.disabled) {
          unSelects.push(value);
        }

        return React.cloneElement(Checkbox, {
          key: i,
          checked,
          block: props.block || block,
          onChange: this.handleCheckboxChange.bind(this, value)
        });
      });
    }

    this.unSelects = unSelects;

    return (
      <div className={classnames(prefixCls, className)} {...other}>
        {toggleable &&
          checkboxes &&
          checkboxes.length > 1 && (
            <Checkbox
              block={block}
              checked={unSelects.length === 0}
              indeterminate={
                unSelects.length > 0 && unSelects.length < checkboxes.length
              }
              onChange={this.toggleAll}
            >
              {toggleAllContent}
            </Checkbox>
          )}
        {checkboxes}
      </div>
    );
  }
}

CheckboxGroup.defaultProps = {
  toggleAllContent: "全选",
  prefixCls: defaultPrefixCls
};

CheckboxGroup.propTypes = {
  selects: PropTypes.array, // 选中的值
  defaultSelects: PropTypes.array, // 初始选中的值（不可控）
  onChange: PropTypes.func, // 更改选择后的回调，参数为选中的值
  values: PropTypes.array, // 针对 value 和 label 相同时快速创建复选框组，无需再调用 Checkbox
  block: PropTypes.bool, // 是否垂直排列
  toggleable: PropTypes.bool, // 是否开启全选功能
  toggleAllContent: PropTypes.string, // 全选切换复选框显示的文字
  prefixCls: PropTypes.string,
  customProp({ selects, onChange }) {
    if (selects && !onChange) {
      return new Error(
        "You provided a `selects` prop without an `onChange` handler"
      );
    }
  }
};
export { Checkbox };
export default CheckboxGroup;
