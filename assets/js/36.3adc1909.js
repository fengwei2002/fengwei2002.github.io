(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{521:function(v,_,t){"use strict";t.r(_);var a=t(2),b=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"在-vim-中进行打字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-vim-中进行打字"}},[v._v("#")]),v._v(" 在 vim 中进行打字")]),v._v(" "),t("p",[t("kbd",[v._v("i")]),v._v("  从正常模式切换到插入模式，当前方块的前面为具体的插入位置： insert")]),v._v(" "),t("p",[t("kbd",[v._v("a")]),v._v("  从当前位置的后面进入插入模式，一般使用 a 较多 ：append")]),v._v(" "),t("p",[t("kbd",[v._v("o")]),v._v("  光标移动到下一行开始，切换到插入模式")]),v._v(" "),t("p",[t("kbd",[v._v("ctrl")]),v._v(" + "),t("kbd",[v._v("[")]),v._v(" 退出插入模式，（右手拇指加食指）")]),v._v(" "),t("p",[t("kbd",[v._v(":q")]),v._v(" 退出文件（会有文件临时存储记录，忘记保存也可以）"),t("br"),v._v(" "),t("kbd",[v._v(":w")]),v._v(" + 文件名 保存文件"),t("br"),v._v(" "),t("kbd",[v._v(":wq")]),v._v(" + 空格 + 文件名 存档后离开")]),v._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"20210708223403-2021-07-08","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_01/master/img/20210708223403-2021-07-08.png",loading:"lazy"}})]),v._v(" "),t("h2",{attrs:{id:"在-vim-中进行移动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-vim-中进行移动"}},[v._v("#")]),v._v(" 在 vim 中进行移动")]),v._v(" "),t("p",[v._v("tips:"),t("br"),v._v("\nctrl + z 将 vim 放在背景"),t("br"),v._v("\n fg 将 vim 移到前面")]),v._v(" "),t("p",[t("kbd",[v._v("h j k l")]),v._v(" 上下左右，熟练即可")]),v._v(" "),t("p",[t("kbd",[v._v("w")]),v._v(" 跳单词"),t("br"),v._v(" "),t("kbd",[v._v("W")]),v._v(" 跳完全匹配的单词"),t("br"),v._v(" "),t("kbd",[v._v("b")]),v._v(" 往前跳"),t("br"),v._v(" "),t("kbd",[v._v("B")]),v._v(" 完全匹配往前跳"),t("br"),v._v(" "),t("kbd",[v._v("}")]),v._v(" 右边的大括号跳一个段落"),t("br"),v._v(" "),t("kbd",[v._v("{")]),v._v(" 左边的大括号往左侧跳一个段落")]),v._v(" "),t("p",[t("kbd",[v._v("G")]),v._v(" 跑到文章末尾 Graph （相比滚轮方便很多）"),t("br"),v._v(" "),t("kbd",[v._v("gg")]),v._v(" 两个小写 g 字母跑到文章起始点"),t("br"),v._v(" "),t("kbd",[v._v("0")]),v._v(" 跑到一行的行首"),t("br"),v._v(" "),t("kbd",[v._v("$")]),v._v(" 跑到一行的行尾 （数字 4）")]),v._v(" "),t("p",[v._v("gk 进行视图层级的上下移动， （编辑器会对超过规定长度的文字进行折行）"),t("br"),v._v("\ngj")]),v._v(" "),t("p",[v._v("在 insert 模式下不需要移动，打字，离开，移动，插入，打字 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mo",[v._v("⋯")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[v._v("\\cdots")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.31em","vertical-align":"0em"}}),t("span",{staticClass:"minner"},[v._v("⋯")])])])])]),v._v(" "),t("h2",{attrs:{id:"在文件里面搜寻文字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在文件里面搜寻文字"}},[v._v("#")]),v._v(" 在文件里面搜寻文字")]),v._v(" "),t("p",[t("kbd",[v._v("?")]),v._v(" + content 触发搜索动作")]),v._v(" "),t("p",[t("kbd",[v._v(":set hlsearch")]),v._v(" 高亮")]),v._v(" "),t("p",[t("kbd",[v._v("n")]),v._v(" 向上搜索结果跳动")]),v._v(" "),t("p",[t("kbd",[v._v("N")]),v._v(" 向上搜索结果跳动")]),v._v(" "),t("p",[v._v("问号和斜线在同一个位置，使用不同的按键，n 和 N 的作用相反")]),v._v(" "),t("p",[v._v("如果懒得打那个单词的话，就先让光标停留在对应单词位置，使用数字 8 对应的 "),t("kbd",[v._v("*")]),v._v(" 进行查询，编辑器会自动将光标对应单词进行高亮，和这个字母相反的是使用 "),t("kbd",[v._v("#")])]),v._v(" "),t("p",[t("kbd",[v._v(":set nohlsearch")])]),v._v(" "),t("p",[t("kbd",[v._v("f")]),v._v(" + 任意字母，光标跳转到行中出现的第一个字母，"),t("br"),v._v(" "),t("kbd",[v._v("F")]),v._v(" + 任意字母，光标进行向前跳转，")]),v._v(" "),t("p",[t("kbd",[v._v("zz")]),v._v(" 打字机模式，"),t("br"),v._v(" "),t("kbd",[v._v("zt")]),v._v(" 置顶"),t("br"),v._v(" "),t("kbd",[v._v("zb")]),v._v(" 底部充满查看")]),v._v(" "),t("h2",{attrs:{id:"在-vim-中进行复制粘贴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-vim-中进行复制粘贴"}},[v._v("#")]),v._v(" 在 vim 中进行复制粘贴")]),v._v(" "),t("p",[t("kbd",[v._v("v")]),v._v(" 进入 visual 模式 然后就可以使用 之前的光标移动操作进行内容选块操作")]),v._v(" "),t("p",[t("kbd",[v._v("V")]),v._v(" 进入 visual line 模式，使用 hjkl 进行移动的时候按照代码块进行移动")]),v._v(" "),t("p",[t("kbd",[v._v("y")]),v._v(" 复制选中的内容 yank: 猛拉")]),v._v(" "),t("p",[t("kbd",[v._v("p")]),v._v(" 粘贴，粘贴的时候不用调回 insert 模式，直接在当前模式下进行粘贴即可 paste")]),v._v(" "),t("p",[t("kbd",[v._v("yy")]),v._v(" 直接 yank 一整行 ，p 进行粘贴即可 yy5p 粘贴五行相同的内容")]),v._v(" "),t("h2",{attrs:{id:"关于选取复制粘贴的更多内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于选取复制粘贴的更多内容"}},[v._v("#")]),v._v(" 关于选取复制粘贴的更多内容")]),v._v(" "),t("p",[t("kbd",[v._v("3yy")]),v._v(" 复制从光标行之后的三行内容（并不需要选中内容）")]),v._v(" "),t("p",[t("kbd",[v._v("y$")]),v._v(" 字面意思：把光标到行末的内容 copy 起来")]),v._v(" "),t("p",[t("kbd",[v._v("yG")]),v._v(" 将当前光标开始直到文件末尾的内容全部复制")]),v._v(" "),t("p",[t("kbd",[v._v(" u")]),v._v(" 撤回上一步操作：uodo"),t("br"),v._v(" "),t("kbd",[v._v(" ctrl + r")]),v._v(" 撤销撤销操作 redo")]),v._v(" "),t("p",[t("kbd",[v._v('"ap')]),v._v(" 可以调用很多个不同的剪切板"),t("br"),v._v(" "),t("kbd",[v._v('"bp')]),v._v(" （相对高级的操作，可以自定义用户片段）")]),v._v(" "),t("p",[t("kbd",[v._v(":set clipboard=unnamed ")]),v._v(" 将电脑的剪切板和暂存器同步")]),v._v(" "),t("blockquote",[t("p",[v._v("vim 共有 48 个不同的暂存器，每个暂存器都有不同的效果")])]),v._v(" "),t("h2",{attrs:{id:"编辑文字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑文字"}},[v._v("#")]),v._v(" 编辑文字")]),v._v(" "),t("p",[t("kbd",[v._v(" A")]),v._v(" 跳到行末 用 I 和 A 来替换 0i 和 $a"),t("br"),v._v(" "),t("kbd",[v._v(" O")]),v._v(" 在当前行上方插入一行并进入插入模式（小写 o 在下一行开始写）")]),v._v(" "),t("p",[t("kbd",[v._v(" D")]),v._v(" 将光标后面的行中内容全部删除")]),v._v(" "),t("p",[t("kbd",[v._v(" x")]),v._v(" 删除单个字，放到暂存器中")]),v._v(" "),t("p",[t("kbd",[v._v(" dd")]),v._v(" "),t("strong",[v._v("删除当前行")]),t("br"),v._v(" "),t("kbd",[v._v(" 2dd")]),v._v(" 删除两行"),t("br"),v._v(" "),t("kbd",[v._v(" d + h,l")]),v._v(" 删除光标左侧的内容或者删除光标右侧的单个字"),t("br"),v._v(" "),t("kbd",[v._v(" dG")]),v._v(" 删除光标之后直到文章末尾")]),v._v(" "),t("p",[t("kbd",[v._v(" c")]),v._v(" 删除选中内容并且把内容放到寄存器，直接进入 insert 模式，参数同 d")]),v._v(" "),t("blockquote",[t("p",[v._v("使用 c 的话删除之后会立即进入 insert 模式，可以少打一下键盘，不用删除文字后再使用")])]),v._v(" "),t("p",[t("kbd",[v._v(" C")]),v._v(" 和大写"),t("kbd",[v._v(" D")]),v._v(" 的作用相同 （将光标后面的行中内容全部删除，同时进入 insert 模式）")]),v._v(" "),t("p",[t("kbd",[v._v(" r")]),v._v("：replace 替换单个字母，替换之后仍然处于 normal 状态")]),v._v(" "),t("p",[t("kbd",[v._v(">> OR <<")]),v._v(" 增加或者减少缩进")]),v._v(" "),t("p",[v._v("将所有内容选中之后，进行 "),t("kbd",[v._v("=")]),v._v(" 操作，他们会自动格式化代码")]),v._v(" "),t("h2",{attrs:{id:"编辑多个档案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑多个档案"}},[v._v("#")]),v._v(" 编辑多个档案")]),v._v(" "),t("p",[v._v("TODO  > vim 编辑多个档案实操")]),v._v(" "),t("p",[t("kbd",[v._v(":e")]),v._v(" 后面加上文件名，可以在不离开 vim 的情况下打开一个文件")]),v._v(" "),t("p",[t("kbd",[v._v(":tabe")]),v._v(" 多窗口开启一个文件，后面跟文件名就打开那个对应的文件")]),v._v(" "),t("p",[t("kbd",[v._v("gt")]),v._v(" 向后切换 tab 页")]),v._v(" "),t("p",[t("kbd",[v._v("gT")]),v._v(" 向前切换 tab 页")]),v._v(" "),t("p",[t("kbd",[v._v(":new")]),v._v(" 开启页面分割"),t("br"),v._v(" "),t("kbd",[v._v("ctrl w w")]),v._v(" 循环切换"),t("br"),v._v(" "),t("kbd",[v._v("ctrl w + j")]),v._v(" 向下切换光标")]),v._v(" "),t("p",[t("kbd",[v._v(":vnew")]),v._v(" 开启右侧页面 （垂直）"),t("br"),v._v(" "),t("kbd",[v._v("ctrl w + l / h")]),v._v(" 进行切换光标位置")]),v._v(" "),t("p",[t("kbd",[v._v("vim -o filename filename")]),v._v(" 同时打开文档，水平窗口"),t("br"),v._v(" "),t("kbd",[v._v("vim -O filename filename")]),v._v(" 垂直窗口")]),v._v(" "),t("p",[t("kbd",[v._v("vim -p")]),v._v(" 按照不同的 tab 页打开")]),v._v(" "),t("p",[v._v("可以用 buffer 操作代替多窗口操作"),t("br"),v._v(" "),t("kbd",[v._v(":bp")]),t("br"),v._v(" "),t("kbd",[v._v(":bn")]),t("br"),v._v(" "),t("kbd",[v._v(":blast \\ :bl ")]),t("br"),v._v(" "),t("kbd",[v._v(":bf ")]),t("br"),v._v(" "),t("kbd",[v._v(":b filename")]),t("br"),v._v(" "),t("kbd",[v._v(":bdelete \\ :bd ")])]),v._v(" "),t("h2",{attrs:{id:"更多的选取功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多的选取功能"}},[v._v("#")]),v._v(" 更多的选取功能")]),v._v(" "),t("p",[t("kbd",[v._v("ctrl + v")]),v._v(" 进入 v-block 模式。可以实现竖着的光标选取，即 shift + alt 样式， （注意先关闭 ctrl v 的粘贴映射）")]),v._v(" "),t("p",[t("kbd",[v._v("vw")]),v._v(" 选取一个单词，vwwwwww 就是按照单词进行光标区的扩充")]),v._v(" "),t("p",[t("kbd",[v._v("viw")]),v._v(" "),t("strong",[v._v("选取光标所处的单词")]),v._v(" 常用 + c 字母进行对某一个块进行修改")]),v._v(" "),t("p",[t("kbd",[v._v("vaw")]),v._v(" 按照块区选择单词")]),v._v(" "),t("p",[t("kbd",[v._v('vi"')]),v._v(" 选取一个字符串中的内容，哇哇哇，vscode 中选中的话就很不方便")]),v._v(" "),t("p",[t("kbd",[v._v("vit")]),v._v(" 选取 tag 中的所有内容 例如 html 中的内容")]),v._v(" "),t("p",[t("kbd",[v._v("vat")]),v._v(" 相比于 vit 选取之后包含两边的 tag")]),v._v(" "),t("p",[t("kbd",[v._v("v+{")]),v._v(" 选取下方文本块 （复制一段函数很方便）"),t("br"),v._v(" "),t("kbd",[v._v("v+}")])]),v._v(" "),t("p",[t("kbd",[v._v("diw ciw")]),v._v(" 等操作同理")]),v._v(" "),t("h2",{attrs:{id:"vim-text-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim-text-object"}},[v._v("#")]),v._v(" vim text object")]),v._v(" "),t("p",[v._v("名词："),t("br"),v._v(" "),t("code",[v._v("w = word , s = sentence， p = paragraph t = tag;")]),v._v(" "),t("br"),v._v("\n 单双引号， 双括号，小括号，中括号，大括号")]),v._v(" "),t("p",[v._v("动词："),t("br"),v._v("\ny = yank , p = paste, d = delete, c = change,")]),v._v(" "),t("p",[v._v("范围："),t("br"),v._v("\ni= inner a = around")]),v._v(" "),t("p",[v._v("例如合起来的一个操作 "),t("kbd",[v._v("yiw")])]),v._v(" "),t("h2",{attrs:{id:"其他使用技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他使用技巧"}},[v._v("#")]),v._v(" 其他使用技巧")]),v._v(" "),t("p",[t("kbd",[v._v("^")]),v._v(" 6 跳到行首，（去除空格部分）更加方便的开始再次写代码 代替 0"),t("br"),v._v("\n 正则表达式")]),v._v(" "),t("p",[v._v("10G 跑到 vim 的全局第十行")]),v._v(" "),t("p",[t("kbd",[v._v("ctrlf")]),v._v(" 往后面翻页"),t("br"),v._v(" "),t("kbd",[v._v("ctrlb")]),v._v(" 往前面翻页")]),v._v(" "),t("p",[t("kbd",[v._v("zf")]),v._v(" 折叠代码段"),t("br"),v._v(" "),t("kbd",[v._v("zd")]),v._v(" 展开代码段")]),v._v(" "),t("p",[t("kbd",[v._v("zf i p")]),v._v(" 就可以快捷的把一段文本进行折叠，而不用先选中再折叠")]),v._v(" "),t("p",[t("kbd",[v._v(".")]),v._v(" 重复上一个《大动作》")]),v._v(" "),t("p",[t("kbd",[v._v("J")]),v._v("选中内容后，将多段文字的回车去除")]),v._v(" "),t("p",[t("kbd",[v._v("ctrl w")]),v._v(" 删除一个 word 在 insert 模式下")]),v._v(" "),t("p",[t("kbd",[v._v("ctrl u")]),v._v(" 前面的所有东西全部删除")]),v._v(" "),t("p",[t("kbd",[v._v(":!")]),v._v(" + 想要执行的指令，就可以在 vim 窗口下面执行一些想要执行的指令")]),v._v(" "),t("p",[t("kbd",[v._v(":r!")]),v._v(" + 指令 复制相应的内容")]),v._v(" "),t("p",[t("kbd",[v._v(":h")]),v._v(" + 想要查询的内容")]),v._v(" "),t("p",[v._v("终端下执行："),t("kbd",[v._v("vimtutor zh")]),v._v(" 进入官方给出的 vim 教程")]),v._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV1fV41187Zr?p=1",target:"_blank",rel:"noopener noreferrer"}},[v._v("即将失传的技艺 vim 【1P-14P】"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=b.exports}}]);