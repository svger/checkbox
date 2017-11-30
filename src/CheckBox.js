import React, { PropTypes } from "react";
import classnames from "classnames";
import "./style/CheckBox.less";
const defaultPrefixCls = "cefc-checkbox";

const Checkbox = props => {
  const {
    children,
    className,
    block,
    indeterminate,
    onClick,
    value,
    checked,
    defaultChecked,
    onChange,
    disabled,
    prefixCls,
    ...other,
  } = props;

  const inputProps = { value, checked, defaultChecked, onChange, disabled };

  const classNames = classnames(
    prefixCls,
    {
      [`${prefixCls}--disabled`]: inputProps.disabled,
      [`${prefixCls}--block`]: block,
      [`${prefixCls}--indeterminate`]: indeterminate
    },
    className
  );

  return (
    <label
      tabIndex={inputProps.disabled ? -1 : 0}
      className={classNames}
      onClick={e => {
        if (e.target.tagName === "INPUT") {
          e.stopPropagation();
        } else {
          onClick && onClick(e);
        }
      }}
      {...other}
    >
      <input type="checkbox" className={`${prefixCls}__input`}  {...inputProps} />
      <span className={`${prefixCls}__status`}/>
      {children && <span className={`${prefixCls}__text`}>{children}</span>}
    </label>
  );
};

Checkbox.defaultProps = {
  prefixCls: defaultPrefixCls
};

Checkbox.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),// 值，如果结合 ChecboxGroup 使用，与其选中的值相对应
  checked: PropTypes.bool, // 是否选中
  defaultChecked: PropTypes.bool, // 初始是否选中（不可控）
  onChange: PropTypes.func,  // 切换选中后的回调，参数为 event 对象
  indeterminate: PropTypes.bool,  // 是否半选中状态
  disabled: PropTypes.bool,  // 是否禁用
  block: PropTypes.bool,  // 是否块级布局
  prefixCls: PropTypes.string,
  customProp({ checked, onChange }) {
    if (checked && !onChange) {
      return new Error(
        "You provided a `checked` prop without an `onChange` handler"
      );
    }
  }
};
export default Checkbox;
