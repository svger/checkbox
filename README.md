# CheckBox
多选框


| 属性        | 说明                          | 类型            | 默认值         |
| --------- | --------------------------- | ------------- | ----------- |
| prefixCls | 样式前缀，如：`cefc-checkbox`，可用于自定义样式 | String        | `cefc-checkbox` |
| value  |  值，如果结合 ChecboxGroup 使用，与其选中的值相对应                         | 	string/number | 无           |
| checked  |  	是否选中                         | 	bool | 无           |
| defaultChecked  |  初始是否选中                          | 	bool | 无           |
| onChange  |  	切换选中后的回调，参数为 event 对象                         | 	func | 无           |
| indeterminate	  |  是否半选中状态                         | 	bool | 无           |
| disabled  |  是否禁用                         | 	bool | 无           |
| block  |  是否块级布局                         | 	bool | 无           |

 
# CheckboxGroup
多选框组


| 属性        | 说明                          | 类型            | 默认值         |
| --------- | --------------------------- | ------------- | ----------- |
| prefixCls | 样式前缀，如：`cefc-checkbox`，可用于自定义样式 | String        | `cefc-checkbox` |
| selects  |  选中的值                        | 	array | 无           |
| defaultSelects  |  	初始选中的值                      | 	array | 无           |
| onChange  |  更改选择后的回调，参数为选中的值                         | 	func | 无           |
| values  |  	针对 value 和 label 相同时快速创建复选框组，无需再调用 Checkbox                       | 	array	| 无           |
| block	  |  是否垂直排列                        | 	bool | 无           |
| toggleable  |  是否开启全选功能                    | 	bool | 无           |
| toggleAllContent  |  全选切换复选框显示的文字                         | 	string | 无           |
