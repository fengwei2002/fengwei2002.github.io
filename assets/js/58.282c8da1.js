(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{561:function(t,s,e){"use strict";e.r(s);var a=e(2),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("将 vuepress 部署到 GitHub pages 并启用 ZEIT/vercel 加速 & 域名"),e("br")])]),t._v(" "),e("blockquote",[e("p",[t._v("将 "),e("code",[t._v("vuepress")]),t._v("  主仓库  "),e("code",[t._v("repo")]),t._v("  和展示仓库 "),e("code",[t._v(".github.io")]),t._v("  分离示例:")])]),t._v(" "),e("p",[t._v("官方文档 "),e("a",{attrs:{href:"https://zeit.co/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("zeit.co/docs"),e("OutboundLink")],1),e("br"),t._v("\nzeit 现在名字是 vercel 域名为 zeit.co/vercel.com")]),t._v(" "),e("p",[t._v("前置条件")]),t._v(" "),e("ul",[e("li",[t._v("熟悉 GitHub & git 的使用")]),t._v(" "),e("li",[t._v("熟悉任意一种 vuepress|| 各种可以使用 GitHub pages 搭建的博客框架")]),t._v(" "),e("li",[t._v("熟悉域名解析操作")])]),t._v(" "),e("h2",{attrs:{id:"vuepress-相关本地配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-相关本地配置"}},[t._v("#")]),t._v(" vuepress 相关本地配置")]),t._v(" "),e("p",[t._v("vuepress  "),e("code",[t._v("package.json")]),t._v("  中添加脚本文件")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash deploy.sh"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v("将部署命令打包为脚本 deploy.sh")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feng-w.cn'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CNAME\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:fengwei2002/fengwei2002.github.io.git master\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),e("p",[t._v("推送到 github.io 域名空间即可，若自己已购买域名则添加 echo 那一行")]),t._v(" "),e("p",[t._v("bash 中执行  "),e("code",[t._v("yarn run deploy")]),t._v("  即可部署至 GitHub pages"),e("br"),t._v("\nbash 中执行  "),e("code",[t._v("yarn docs:dev")]),t._v("  即可本地预览")]),t._v(" "),e("h2",{attrs:{id:"使用-neit-vercel-进行加速-可选"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-neit-vercel-进行加速-可选"}},[t._v("#")]),t._v(" 使用 NEIT/vercel 进行加速：(可选)")]),t._v(" "),e("p",[t._v("一个小小的博客而已，完全没必要买服务器，💴多不说了"),e("br"),t._v("\n GitHub pages 使用 zeit/vercel 提供的搭载文件服务"),e("br"),t._v("\n国内访问也可以达到正常速度（图床除外）")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zeit.co/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("zeit.co 官网介绍文档"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://zeit.co/dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v(" ZEIT 控制台"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("s",[t._v("别推送太频繁（一分钟五次？），否则仓库会暂时挂掉的  "),e("code",[t._v("socket hang up")])])]),t._v(" "),e("blockquote",[e("p",[t._v("不得不说的是这个 zeit/vercel 的官网页面是真好看")])]),t._v(" "),e("p",[t._v("我之前使用的是  "),e("code",[t._v("Vuepress")]),t._v(" + "),e("code",[t._v("GitHubPages")]),t._v(" + "),e("code",[t._v("zeit.co")]),t._v("  + 腾讯云域名"),e("br"),t._v("\n我现在使用的是"),e("br"),t._v(" "),e("code",[t._v("Vuepress")]),t._v(" + "),e("code",[t._v("GitHubPages")]),t._v(" + "),e("code",[t._v("zeit.co")]),t._v(" + "),e("code",[t._v("vercel提供的 xxx.now.sh")]),t._v("  域名")]),t._v(" "),e("p",[t._v("优化前:")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"GitHub pages + 腾讯云域名",width:"424",height:"298","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-04-15-12-55-57.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("优化后:"),e("br"),t._v(" "),e("img",{staticClass:"lazy",attrs:{alt:"效果还行",width:"424",height:"298","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-04-15-12-55-29.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("官方文档有详细介绍 (英文 hhh)，就不当翻译官了，自行查阅"),e("br"),t._v("\n部署过程中重要的一些截图:（参考）")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"import仓库的最后一步","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-04-20-15-35-06.png",loading:"lazy"}})]),t._v(" "),e("blockquote",[e("p",[t._v("一直选默认配置，最后这一步选 other 即可")])]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"可选的三种域名，前两种免费","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-12-10-21-27-19.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("大概的加速过程就是先手动推送文件到 GitHub，然后 vercel 进行文件爬取，vercel 进行渲染，GitHub page 也进行渲染网页，同时两个站点刷新网页对应的域名内容"),e("br"),t._v("\n但是 vercel 在台湾，GitHub pages 在美国旧金山")]),t._v(" "),e("h2",{attrs:{id:"腾讯云域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云域名"}},[t._v("#")]),t._v(" 腾讯云域名")]),t._v(" "),e("p",[t._v("阿里云买的也一样")]),t._v(" "),e("p",[t._v("部分重要参考截图")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"添加后","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-04-20-15-40-09.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("这是控制板的解析配置")]),t._v(" "),e("blockquote",[e("p",[t._v("腾讯云一分钟内解析就会生效了")])]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"解析截图","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-04-20-15-44-57.png",loading:"lazy"}})]),t._v(" "),e("blockquote",[e("p",[t._v("注意:vercel 官网示例中的 ANAME== 域名解析中的 CNAME")])]),t._v(" "),e("p",[t._v("这样配置的话每次提交到 GitHub 后就会自动部署到 zeit/vercel 中，"),e("br"),t._v("\nvercel 进行网页渲染"),e("br"),t._v("\n实现国内的加速目的")]),t._v(" "),e("p",[t._v("记得不要开启谷歌分析，否则国内就会白加速了。。")]),t._v(" "),e("p",[t._v("还有就是每次部署后如果使用 chrome 的话如果没刷新内容"),e("br"),t._v("\n可以使用 ctrl + F5 清除浏览器缓存强制刷新一下，秒部署是秒部署，但是本地浏览器可能不生效")]),t._v(" "),e("h2",{attrs:{id:"now-sh-域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#now-sh-域名"}},[t._v("#")]),t._v(" .now.sh 域名")]),t._v(" "),e("p",[t._v("因为目前的博客其实偏向于玩具项目"),e("br"),t._v("\n自己还没有什么资历，写的文章也会只有一丁点的访问量"),e("br"),t._v("\n基本就是用来记笔记的 hhh"),e("br"),t._v("\n 然后就：一个小小的博客而已，完全没必要买域名..")]),t._v(" "),e("p",[t._v("并且突然觉得 feng-w.cn 这个域名突然觉得有点 xxs 了，喜兴厌旧本喜（")]),t._v(" "),e("p",[t._v("现在的主域名是")]),t._v(" "),e("p",[t._v("konng.vercel.app"),e("br"),t._v("\nkonng.vercel.app"),e("br"),t._v("\n（当然距离 xxs 域名过期时间还早，依然可以访问）")]),t._v(" "),e("p",[t._v("第一个域名后缀也很帅的"),e("br"),t._v("\n这两种域名后缀直接添加就好")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"选个好听的免费域名吧~","data-src":"https://raw.githubusercontent.com/fengwei2002/Pictures_02/master/img/2020-12-10-21-36-09.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("访问速度和国内域名没什么变化，减少了一次域名再解析，理应更快了")]),t._v(" "),e("h2",{attrs:{id:"推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推荐"}},[t._v("#")]),t._v(" 推荐")]),t._v(" "),e("p",[t._v("试过 hexo Jekyll hugo gitee 服务器 gitee")]),t._v(" "),e("p",[t._v("0 费用最佳方案:"),e("br"),t._v(" "),e("code",[t._v("vuepress + GitHub pages + picgo&github + vercel.com + xxx.now.sh")]),t._v(" "),e("br"),t._v("\n 不在乎💴最佳方案:"),e("br"),t._v(" "),e("code",[t._v("vuepress + 阿里云OSS + 阿里云服务器 + 阿里云域名")])]),t._v(" "),e("p",[t._v("具体每个的使用方法建议谷歌官方文档")])])}),[],!1,null,null,null);s.default=r.exports}}]);