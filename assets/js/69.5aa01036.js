(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{551:function(t,v,_){"use strict";_.r(v);var r=_(2),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"什么是数据库的完整性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据库的完整性"}},[t._v("#")]),t._v(" 什么是数据库的完整性？")]),t._v(" "),_("p",[t._v("数据库的完整性是指数据的正确性和相容性。")]),t._v(" "),_("h2",{attrs:{id:"数据库的完整性概念与数据库的安全性概念有什么区别和联系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库的完整性概念与数据库的安全性概念有什么区别和联系"}},[t._v("#")]),t._v(" 数据库的完整性概念与数据库的安全性概念有什么区别和联系？")]),t._v(" "),_("p",[t._v("数据的完整性和安全性是两个不同的概念，但是有一定的联系。"),_("br"),t._v("\n前者是为了防止数据库中存在不符合语义的数据，防止错误信息的输入和输出，即所谓垃圾进垃圾出所造成的无效操作和错误结果。"),_("br"),t._v("\n后者是保护数据库防止恶意的破坏和非法的存取。也就是说，安全性措施的防范对象是非法用户和非法操作，完整性措施的防范对象是不合语义的数据。")]),t._v(" "),_("h2",{attrs:{id:"什么是数据库的完整性约束条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据库的完整性约束条件"}},[t._v("#")]),t._v(" 什么是数据库的完整性约束条件？")]),t._v(" "),_("p",[t._v("完整性约束条件是"),_("strong",[t._v("一组完整性规则集合")]),t._v("，是给定的数据模型中数据及其之间的联系应该满足的依存规则，用以限制符合数据模型的数据库状态及状态的变化，确保数据的正确有效和相容。")]),t._v(" "),_("p",[t._v("常见的静态关系约束有： 实体完整性约束；参照完整性约束； 函数依赖约束。")]),t._v(" "),_("h2",{attrs:{id:"rdbms-的完整性控制机制应具有哪三方面的功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rdbms-的完整性控制机制应具有哪三方面的功能"}},[t._v("#")]),t._v(" RDBMS 的完整性控制机制应具有哪三方面的功能？")]),t._v(" "),_("p",[t._v("DBMS 的完整性控制机制应具有三个方面的功能："),_("br"),t._v("\n( 1 ）定义功能，即提供定义完整性约束条件的机制；"),_("br"),t._v("\n( 2 ）检查功能，即检查用户发出的操作请求是否违背了完整性约束条件；"),_("br"),t._v("\n( 3 ）违约反应：如果发现用户的操作请求使数据违背了完整性约束条件，则采取一定的动作来保证数据的完整性。")]),t._v(" "),_("h2",{attrs:{id:"rdbms-在实现参照完整性时需要考虑哪些方面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rdbms-在实现参照完整性时需要考虑哪些方面"}},[t._v("#")]),t._v(" RDBMS 在实现参照完整性时需要考虑哪些方面？")]),t._v(" "),_("p",[t._v("RDBMs 在实现参照完整性时需要考虑以下几个方面：")]),t._v(" "),_("ol",[_("li",[t._v("外码是否可以接受空值。")]),t._v(" "),_("li",[t._v("删除被参照关系的元组时的考虑，这时系统可能采取的作法有三种：\n"),_("ul",[_("li",[t._v("级联删除（ CASCADES ) ;")]),t._v(" "),_("li",[t._v("受限删除（ RESTRICTED ) ;")]),t._v(" "),_("li",[t._v("置空值删除（ NULLIFIES ）")])])]),t._v(" "),_("li",[t._v("在参照关系中插入元组时的问题，这时系统可能采取的作法有：\n"),_("ul",[_("li",[t._v("受限插入；")]),t._v(" "),_("li",[t._v("递归插入。")])])]),t._v(" "),_("li",[t._v("修改关系中主码的问题。一般是不能用 UPDATE 语句修改关系主码的。如果需要修改主码值，只能先删除该元组，然后再把具有新主码值的元组插入到关系中。如果允许修改主码，首先要保证主码的惟一性和非空，否则拒绝修改。然后要区分是参照关系还是被参照关系。")])]),t._v(" "),_("h2",{attrs:{id:"关系系统中-当操作违反实体完整性、参照完整性和用户定义的完整性约束条件时-一般是如何分别进行处理的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关系系统中-当操作违反实体完整性、参照完整性和用户定义的完整性约束条件时-一般是如何分别进行处理的"}},[t._v("#")]),t._v(" 关系系统中，当操作违反实体完整性、参照完整性和用户定义的完整性约束条件时，一般是如何分别进行处理的？")]),t._v(" "),_("p",[t._v("答:")]),t._v(" "),_("p",[t._v("对于违反实体完整性和用户定义的完整性的操作一般都采用拒绝执行的方式进行处理。而对于违反参照完整性的操作，并不都是简单地拒绝执行，有时要根据应用语义执行一些附加的操作，以保证数据库的正确性。")])])}),[],!1,null,null,null);v.default=a.exports}}]);