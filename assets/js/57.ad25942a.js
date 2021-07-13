(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{560:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("只针对使用 vuepress 默认框架构建的项目"),s("br")])]),t._v(" "),s("h2",{attrs:{id:"vuepress-plugin-auto-sidebar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-auto-sidebar"}},[t._v("#")]),t._v(" vuepress-plugin-auto-sidebar")]),t._v(" "),s("p",[t._v("vuepress 构建完成后我发现得手动配置 sidebar？？？, 虽然自由度高了些，但我"),s("s",[t._v("觉得没什么必要")]),t._v("懒")]),t._v(" "),s("p",[t._v("然后我发现大多数人类使用的方式都有点非人类")]),t._v(" "),s("p",[t._v("所以找啊找，就找到了一个自动生成分组的插件，有好多人问我怎么用，那我就记录一下我的使用步骤")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件的文档"),s("OutboundLink")],1),t._v(" 写的很清晰了，其他可选项还是看插件提供的文档，我举个例子")])]),t._v(" "),s("h2",{attrs:{id:"安装插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[t._v("#")]),t._v(" 安装插件")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress-plugin-auto-sidebar\n")])])]),s("h2",{attrs:{id:"配置插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置插件"}},[t._v("#")]),t._v(" 配置插件")]),t._v(" "),s("ul",[s("li",[t._v("打开如下目录:")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"20200326165624.png","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20200326165624.png",loading:"lazy"}})]),t._v(" "),s("ul",[s("li",[t._v("打开 config.js "),s("strong",[t._v("插件添加处")]),t._v("添加这三行配置:")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"20200326165856.png","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20200326165856.png",loading:"lazy"}})]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress-plugin-auto-sidebar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        titleMode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uppercase"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自动生成侧边栏")]),t._v("\n")])])]),s("p",[t._v("[[ctrl]]+[[s]] 保存一下")]),t._v(" "),s("h2",{attrs:{id:"应有的文件层级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应有的文件层级"}},[t._v("#")]),t._v(" 应有的文件层级")]),t._v(" "),s("p",[s("code",[t._v("docs/")]),t._v("  下放你的文章"),s("strong",[t._v("大框架目录")]),t._v("（与。vuepress 同级）")]),t._v(" "),s("p",[t._v("例如：Designer，后端，基础，联系方式，算法")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"20200326170131.png","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20200326170131.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("然后在大框架内填充"),s("strong",[t._v("内容文件夹")])]),t._v(" "),s("p",[t._v("例如:"),s("br"),t._v(" "),s("img",{staticClass:"lazy",attrs:{alt:"20200326170241.png","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20200326170241.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("eg: 现在打开上图编程基础中的数据结构文件夹，就可以放你的第一章，第二章第三章了")]),t._v(" "),s("p",[t._v("在子文件夹里放你的博文时，如果按照我的配置只需要在文章前标号"),s("br"),t._v("\n 00-01-02-03 等等，就可以按照编号顺序生成侧边栏")]),t._v(" "),s("p",[s("mark",[t._v("每个"),s("strong",[t._v("子文件夹")]),t._v("都应该有一个和博文同级的 RAEADME.md")])]),t._v(" "),s("p",[t._v("例如:"),s("br"),t._v(" "),s("img",{staticClass:"lazy",attrs:{alt:"20200326170352.png","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20200326170352.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("侧面目录栏将 title 内容填充，而一级标题和二级标题会列在 title 下，也就是 "),s("code",[t._v("##")]),t._v(" "),s("code",[t._v("#")]),t._v(" 开头的标题")]),t._v(" "),s("p",[t._v("三级以及其以下的标题不会被显示在侧边栏")]),t._v(" "),s("p",[t._v("所以每个 markdown 文件都应该长这样:")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token front-matter-block"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[t._v("title: 啥啥啥")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 1 侧边栏展示的一级标题是 title 的内容 !, 等同于二级标题")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.1 ")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" 1.1.1 三级标题不会被在侧边栏列出")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 一级标题下的 1.2")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 一级标题下的 1.3")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"与-navbar-配合使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与-navbar-配合使用"}},[t._v("#")]),t._v(" 与 navbar 配合使用")]),t._v(" "),s("p",[t._v("按照如上结构就可以自动生成并且访问了，使用如下 navbar 配置体验更佳")]),t._v(" "),s("p",[t._v("文件结构:"),s("br"),t._v(" "),s("img",{staticClass:"lazy",attrs:{alt:"20200326172312.png","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20200326172312.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("navbar 配置举例:"),s("br"),t._v(" "),s("img",{staticClass:"lazy",attrs:{alt:"20200326170946.png","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20200326170946.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("展示效果:"),s("br"),t._v(" "),s("img",{staticClass:"lazy",attrs:{alt:"20200326171704.png","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20200326171704.png",loading:"lazy"}}),s("br"),t._v(" "),s("img",{staticClass:"lazy",attrs:{alt:"20200326171816.png","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/20200326171816.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"一些问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些问题"}},[t._v("#")]),t._v(" 一些问题")]),t._v(" "),s("ul",[s("li",[t._v("navbar 的 url 别写错")]),t._v(" "),s("li",[t._v("每个子文件夹别忘了 README.md")]),t._v(" "),s("li",[t._v("不识别 markdown 后缀，只识别 md 后缀")]),t._v(" "),s("li",[t._v("折叠可选:config.js 配置: "),s("code",[t._v("displayAllHeaders: false,")]),t._v("  即可")])])])}),[],!1,null,null,null);a.default=e.exports}}]);