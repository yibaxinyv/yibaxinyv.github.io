(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{410:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("vue项目总结")]),t._v(" "),a("h2",{attrs:{id:"鼠标框选效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鼠标框选效果"}},[t._v("#")]),t._v(" 鼠标框选效果")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/renjihua/pen/NWXzMRz",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看这个演示"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"/guide/vue-sum-up/select-area.gif",alt:"鼠标框选效果"}})]),t._v(" "),a("h3",{attrs:{id:"html-和-css-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-和-css-布局"}},[t._v("#")]),t._v(" HTML 和 CSS 布局")]),t._v(" "),a("p",[t._v("┌────box────────┐"),a("br"),t._v("\n│┌───mask──────┐│"),a("br"),t._v("\n││      checkbox          ││"),a("br"),t._v("\n│└────────────┘│"),a("br"),t._v("\n└──────────────┘")]),t._v(" "),a("p",[t._v("mask 容器宽、高、偏移值根据鼠标当前位置动态计算 。")]),t._v(" "),a("h3",{attrs:{id:"js-实现框选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-实现框选"}},[t._v("#")]),t._v(" JS 实现框选")]),t._v(" "),a("p",[t._v("该部分逻辑实际上可拆分为 4 个步骤:")]),t._v(" "),a("ol",[a("li",[t._v("鼠标按下 mousedown，记录当前起点坐标 start_x，start_y，并绑定 mousemove、mouseup 事件 。")]),t._v(" "),a("li",[t._v("鼠标移动 mousemove，实时更新终点坐标 end_x，end_y，即可框选矩形大小、位置 。")]),t._v(" "),a("li",[t._v("鼠标松开 mouseup，移除 mousemove、mouseup 事件 。")]),t._v(" "),a("li",[t._v("根据框选矩形大小、位置，计算在范围内的 checkbox 数量，进行对应处理 。")])]),t._v(" "),a("h3",{attrs:{id:"处理框选逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理框选逻辑"}},[t._v("#")]),t._v(" 处理框选逻辑:")]),t._v(" "),a("p",[a("strong",[t._v("难点是如何判断元素是否被框选住")]),a("br"),t._v("\n问题可转化为 框选矩形是否与 checkbox 矩形 相交或者包含在内,即"),a("strong",[t._v("两矩形是否相交或者存在包含关系")]),a("br"),t._v("\n假定矩形 A1 左上角坐标为 (x1,y1);矩形宽度为"),a("code",[t._v("width1")]),t._v(",高度为"),a("code",[t._v("height1")]),t._v(";"),a("br"),t._v("\n假定矩形 A2 左上角坐标为 (x2,y2);矩形宽度为"),a("code",[t._v("width2")]),t._v(",高度为"),a("code",[t._v("height2")]),t._v(";"),a("br"),t._v("\n画图分析，只看水平方向:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/guide/vue-sum-up/s1.jpg",alt:"x轴方向不相交"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/guide/vue-sum-up/s2.jpg",alt:"x轴方向相交"}})]),t._v(" "),a("p",[t._v("由图可以得出，x 方向上:"),a("br"),t._v("\n令 "),a("code",[t._v("maxX = Math.max(x1 + width1, x2 + width2)")]),a("br"),t._v("\n令 "),a("code",[t._v("minX = Math.max(x1, x2)")]),t._v("\\")]),t._v(" "),a("p",[t._v("若相交或包含则必满足:"),a("code",[t._v("maxX - minX <= width2")])]),t._v(" "),a("p",[t._v("同理可以容易得到 y 轴相交的判断 。")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("Element.getBoundingClientRect()")]),t._v("获取 dom 元素位置信息, 遍历 checkbox 集合，每个 checkbox 都执行上面的矩形相交判断，并进行相应的勾选处理 。")]),t._v(" "),a("h2",{attrs:{id:"方便查看项目发布时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方便查看项目发布时间"}},[t._v("#")]),t._v(" 方便查看项目发布时间")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("build/webpack.prod.conf.js")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" moment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前时间作为更新版本号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERSION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD HH:mm:ss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefinePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'process.env'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'VERSION'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERSION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("在登录页显示:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("更新时间:"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("updateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERSION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updateTime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERSION")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在"),a("code",[t._v("src/main.js")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'项目更新时间:'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERSION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"element-ui默认配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-ui默认配置"}},[t._v("#")]),t._v(" Element UI默认配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ElementUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui/lib/theme-chalk/index.css'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认开启悬浮提示样式，定义FitTable 扩展table的样式")]),t._v("\nElementUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TableColumn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showOverflowTooltip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局修改默认配置，点击空白处不能关闭弹窗")]),t._v("\nElementUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("closeOnClickModal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局修改默认配置，输入框可清空")]),t._v("\nElementUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clearable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ElementUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'small'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在"),a("code",[t._v("src/styles/element-ui.scss")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 有些地方不显示清空按钮 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".el-input--suffix {")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&.hide-clearable .el-input__suffix {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none;")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".el-input__inner {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15px;")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input[type=password]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input[type=number] {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("& + .el-input__suffix {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);