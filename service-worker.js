/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "48588b0f18da479d7c1e3cfa40e78258"
  },
  {
    "url": "About/index.html",
    "revision": "cfa8be942bc3d668a0a337220ff4db56"
  },
  {
    "url": "Algorithm/index.html",
    "revision": "29c2042c3aa8dc4f08a70618f83195b7"
  },
  {
    "url": "assets/css/0.styles.8c89cc94.css",
    "revision": "c366eb671e05c29b3a03dcabd1f1a13f"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/head.jpg",
    "revision": "97dc4efebb36df093bf50e134a6b8cd3"
  },
  {
    "url": "assets/img/head002.jpg",
    "revision": "39b9936df1fc2d5fdc66217f4f96e336"
  },
  {
    "url": "assets/js/1.181eaf55.js",
    "revision": "98b3a4cd668f045a0b22a0c0481d4610"
  },
  {
    "url": "assets/js/10.a740bfd5.js",
    "revision": "1f1abf379a2a007f0dc025796201307b"
  },
  {
    "url": "assets/js/11.33f28795.js",
    "revision": "0330eb581a39c7a1dd5830bb815df589"
  },
  {
    "url": "assets/js/12.063d7da9.js",
    "revision": "57afa32b7cdfd1cc48f81c663ca75e56"
  },
  {
    "url": "assets/js/13.8b9422fe.js",
    "revision": "7a73e6c0244aacaea9bb24d430ba1ef7"
  },
  {
    "url": "assets/js/14.a0650725.js",
    "revision": "e9bf57921b5958c9f13652617e1e9023"
  },
  {
    "url": "assets/js/15.b10e1b95.js",
    "revision": "11ecfaf502f4d39d6e0136a95ce7e46a"
  },
  {
    "url": "assets/js/16.fefa62fd.js",
    "revision": "4a1915a6cadf4039e744eaf447d3b20e"
  },
  {
    "url": "assets/js/17.00269735.js",
    "revision": "11206172d6a7baf60e6fc094eb0fbbe6"
  },
  {
    "url": "assets/js/18.fa706d65.js",
    "revision": "aaabd6891a62bb436cf00315a563fef8"
  },
  {
    "url": "assets/js/19.1764f81f.js",
    "revision": "6efa4a1edbe7f821f771d8e658e002ef"
  },
  {
    "url": "assets/js/20.839e79f7.js",
    "revision": "e7226702af0558463e606a288e33d2d9"
  },
  {
    "url": "assets/js/21.9bcb7822.js",
    "revision": "b2bb5dd70c9120de2ef923e7de3d05c8"
  },
  {
    "url": "assets/js/22.04e70a65.js",
    "revision": "0fac4d54eb73a4e27727fe04579f6ecc"
  },
  {
    "url": "assets/js/23.cfc88c38.js",
    "revision": "48bd5a3ff58136858fac4aef8aa110b8"
  },
  {
    "url": "assets/js/24.4f3e69c3.js",
    "revision": "7ad82fe39103e432806f918008eeed12"
  },
  {
    "url": "assets/js/25.0c7bad0c.js",
    "revision": "cea7d967e3515d93a6e9eaaf30a71990"
  },
  {
    "url": "assets/js/26.b583202e.js",
    "revision": "b2a6bc2d76742539cc96faf4600391d9"
  },
  {
    "url": "assets/js/27.46b48fcf.js",
    "revision": "44ad881ce8a4ebffeca15213a7421e93"
  },
  {
    "url": "assets/js/28.10f1cbae.js",
    "revision": "34aa7a8cf05b8b48fe84f5c5136b004d"
  },
  {
    "url": "assets/js/29.8a380584.js",
    "revision": "0fc76404e756e9c8573560c7bd732722"
  },
  {
    "url": "assets/js/30.826316d5.js",
    "revision": "e261f435b94603e12a959e88792a7035"
  },
  {
    "url": "assets/js/31.6cc7c24a.js",
    "revision": "7ccaa5cfaffb1bfd3d97eff3188b8e12"
  },
  {
    "url": "assets/js/32.d2eb9877.js",
    "revision": "ea5c429ee20d194b2f2061e71be028f1"
  },
  {
    "url": "assets/js/33.4206c8c8.js",
    "revision": "3ec6d22778c1b3d5119b1e9ce128aad0"
  },
  {
    "url": "assets/js/34.bb817ee9.js",
    "revision": "53384ded95b86a06d4e1197cefabfbf5"
  },
  {
    "url": "assets/js/35.e922496a.js",
    "revision": "4312dcab4b48eb9fdf8de7b80cb63c77"
  },
  {
    "url": "assets/js/36.3adc1909.js",
    "revision": "43475920d9bfbb22ba122d22ef493971"
  },
  {
    "url": "assets/js/37.2656e099.js",
    "revision": "1ea46dc87f19f91eb6057ea0ddfc5f33"
  },
  {
    "url": "assets/js/38.0b833e7c.js",
    "revision": "f2d1ea5e22366498e46d912ab0fe5c48"
  },
  {
    "url": "assets/js/39.80b569f6.js",
    "revision": "c04b732fced8876c69ce83481f47a8e2"
  },
  {
    "url": "assets/js/4.e83067f1.js",
    "revision": "064fa89c11514a9c3f605abf898748e6"
  },
  {
    "url": "assets/js/40.2d1887a9.js",
    "revision": "f7a88343e486b2168f9143a99c01908b"
  },
  {
    "url": "assets/js/41.fc21cb66.js",
    "revision": "adf998add9c1358ecfb397e8b3cb0a73"
  },
  {
    "url": "assets/js/42.e2343566.js",
    "revision": "786fdc6dd9f68cd59084ee664e4394d0"
  },
  {
    "url": "assets/js/43.2ed916f6.js",
    "revision": "c789f9267de0b1579c0998410f90ab48"
  },
  {
    "url": "assets/js/44.d6e0b257.js",
    "revision": "005b0703eb6b59c805b05c5ba2620105"
  },
  {
    "url": "assets/js/45.e3376c91.js",
    "revision": "45161b234996bcd11e1eba662e09e54e"
  },
  {
    "url": "assets/js/46.bec138fe.js",
    "revision": "9edc7ea8553f543e61f8761591c08467"
  },
  {
    "url": "assets/js/47.74cbc399.js",
    "revision": "f100c974e8b38d433d77b8915410016f"
  },
  {
    "url": "assets/js/48.adc43e56.js",
    "revision": "8383631f0e1dd6348afd7330d6b2274b"
  },
  {
    "url": "assets/js/49.ee5ff3d8.js",
    "revision": "626b190df72a572f1a9351da3ae36fe7"
  },
  {
    "url": "assets/js/5.a1cf69f7.js",
    "revision": "8229568a9c1613f0ef802b07e54db535"
  },
  {
    "url": "assets/js/50.cf9170d4.js",
    "revision": "0d411f197a6fda3feb3cbc25de4423b3"
  },
  {
    "url": "assets/js/51.b8693890.js",
    "revision": "2ffc5abc63a2ab54ec2913bf4e23baec"
  },
  {
    "url": "assets/js/52.cb76106f.js",
    "revision": "fe7468c358a209c46cfc7709adb775bb"
  },
  {
    "url": "assets/js/53.4c46a42b.js",
    "revision": "1f7fb3b38492b33a987ed5fdd1c8bee0"
  },
  {
    "url": "assets/js/54.6d454534.js",
    "revision": "73697b932ef69de8debbfa56c0980ee8"
  },
  {
    "url": "assets/js/55.02111ec0.js",
    "revision": "8a18b1cfb58eacbb54c3d1cb027c1f20"
  },
  {
    "url": "assets/js/56.410436b1.js",
    "revision": "46869cd99340f910c822185a74232812"
  },
  {
    "url": "assets/js/57.ad25942a.js",
    "revision": "7628461edf097d4b6c815b392bd964c0"
  },
  {
    "url": "assets/js/58.282c8da1.js",
    "revision": "1dc23585641fe4eac8ba9b8cb01af9e2"
  },
  {
    "url": "assets/js/59.080fbadb.js",
    "revision": "fd88c0eb8fb026ea4765cd2da762eef9"
  },
  {
    "url": "assets/js/6.39ef4f91.js",
    "revision": "a00c2025a4151b925ed5080789455cf6"
  },
  {
    "url": "assets/js/60.20501f2f.js",
    "revision": "d578372ab3a3964b1ff970d5e9a25e66"
  },
  {
    "url": "assets/js/61.00b5c8fb.js",
    "revision": "e079bc3766f85dae862b03fc6ba57203"
  },
  {
    "url": "assets/js/62.4abd1625.js",
    "revision": "818457f449baac3fe7e35d5a57b943d5"
  },
  {
    "url": "assets/js/63.6a4818d8.js",
    "revision": "8647fd292c78f65fde33bc4e350f0b5b"
  },
  {
    "url": "assets/js/64.77146b86.js",
    "revision": "07c54de7592d57106cb0bf797a36c28c"
  },
  {
    "url": "assets/js/65.6edd994c.js",
    "revision": "8c8f2e4a6baeda1e71bd0028d2ad32f7"
  },
  {
    "url": "assets/js/66.204ac639.js",
    "revision": "84b637ab9423468795828241c7db56b4"
  },
  {
    "url": "assets/js/67.9dbf6e97.js",
    "revision": "1545c6c7ff32a42bd9eb62ce0c2d568e"
  },
  {
    "url": "assets/js/68.8f892ff8.js",
    "revision": "5fa319190721682013e781d4e1e88e27"
  },
  {
    "url": "assets/js/69.5aa01036.js",
    "revision": "92b4b865c3218957e117fd2859796722"
  },
  {
    "url": "assets/js/7.c9f2a6a8.js",
    "revision": "9befd0b54dba030e7b1f0e2d29c64215"
  },
  {
    "url": "assets/js/70.81f679f0.js",
    "revision": "0bef2db92b99280b4a88e4223c1de730"
  },
  {
    "url": "assets/js/71.c12678d7.js",
    "revision": "08975b549a20cd466f78a6936b119648"
  },
  {
    "url": "assets/js/72.1437139e.js",
    "revision": "588d15af71a937d312571762f4a9bddf"
  },
  {
    "url": "assets/js/73.ea48feed.js",
    "revision": "cad90e91c23e5cc2a34899833206d753"
  },
  {
    "url": "assets/js/74.60a6a9d0.js",
    "revision": "8b4498b5a6d47cae74c1c3ed613b54d1"
  },
  {
    "url": "assets/js/75.24e33a36.js",
    "revision": "9db8eb226898e05a92a9b177d8ff906b"
  },
  {
    "url": "assets/js/76.4f1c8402.js",
    "revision": "34482d19d1b905160787b2ac1e22d257"
  },
  {
    "url": "assets/js/77.06d6400f.js",
    "revision": "07b2b72080ad32cccdfb0c933e3acc09"
  },
  {
    "url": "assets/js/78.834006c6.js",
    "revision": "c0999e969c6e53f073bb074de6b5d5a3"
  },
  {
    "url": "assets/js/8.7799e00b.js",
    "revision": "a39994234b94fba245cf4d5406e15ac6"
  },
  {
    "url": "assets/js/9.ba3ad4ce.js",
    "revision": "dc6fd2653943227ff2e975b59a7742d2"
  },
  {
    "url": "assets/js/app.bfd04b02.js",
    "revision": "70a6e5ac3ce92c8b7afe47271b229d25"
  },
  {
    "url": "assets/js/vendors~flowchart.4f4edd06.js",
    "revision": "1fbf4a6aface442d8b3b6d620a40c641"
  },
  {
    "url": "index.html",
    "revision": "7f987689d21010ae37a32701a710f9d3"
  },
  {
    "url": "posts/1970/01/01/_10-vscode-中自定义css-的使用.html",
    "revision": "475c341eb6bf986b49482191a4417962"
  },
  {
    "url": "posts/2020/02/14/_01vscode使用picgo插件.html",
    "revision": "9e45f58d175380d764e738d516384f4d"
  },
  {
    "url": "posts/2020/02/14/_02vscode使用markdown-formatter插件.html",
    "revision": "c3c7b51314c99f5aa37bb9531b437638"
  },
  {
    "url": "posts/2020/03/09/_00markdown中使用数学公式.html",
    "revision": "22fa9e7da137603eace3c8c74b51b211"
  },
  {
    "url": "posts/2020/03/11/_01markdown流程图.html",
    "revision": "3c2768e28a946c8deadbd587275e52eb"
  },
  {
    "url": "posts/2020/03/14/_00-vuepress.html",
    "revision": "d2db154c7f1b6bbe49d5e11735d77206"
  },
  {
    "url": "posts/2020/04/14/_01-vuepress自动生成侧边栏.html",
    "revision": "9577ea9c21f86fd089c43da01dbe1108"
  },
  {
    "url": "posts/2020/04/22/_03-vuepress-code-snippet-enhanced.html",
    "revision": "122819944ccc1c524d3288c55c738a09"
  },
  {
    "url": "posts/2020/05/03/在github主页添加-weekly-development-breakdown.html",
    "revision": "77962d47e7bbe5e79dbb6d04de7e1f26"
  },
  {
    "url": "posts/2020/05/05/_01-stl中的-vector.html",
    "revision": "85fce0ee9f41874dda24753a57b3d59c"
  },
  {
    "url": "posts/2020/05/06/git-操作模板.html",
    "revision": "a7171d418d444ba8b4fd5dd81459ae2e"
  },
  {
    "url": "posts/2020/05/08/_01-stl中的-sort.html",
    "revision": "85da37488e99408da1d5f14d07ae76d6"
  },
  {
    "url": "posts/2020/05/10/_04vscode使用自定义css.html",
    "revision": "a494380237fdc8f978941078ebe58ff6"
  },
  {
    "url": "posts/2020/05/19/_02-c-数据类型的相互转换.html",
    "revision": "482f50b2fc632a8123622a54fb1e5181"
  },
  {
    "url": "posts/2020/05/20/_05vscode-markdown预览插件.html",
    "revision": "f5d1d1f045e38b578e3da4301c0a83d6"
  },
  {
    "url": "posts/2020/05/23/_04-c-异常处理.html",
    "revision": "2afc470c0e3e8d1d3045c257e0c88a33"
  },
  {
    "url": "posts/2020/05/25/_04-vuepress中的markdown高阶用法.html",
    "revision": "f47b1be3a8a4e3d5d430e93827c0e99b"
  },
  {
    "url": "posts/2020/09/07/_05-c-new的用法.html",
    "revision": "7adebc7f5e32c8e04c126550de0e0e0e"
  },
  {
    "url": "posts/2020/09/07/_06-c-auto关键字.html",
    "revision": "85f16d8495b1157ab33c815d1d49a19e"
  },
  {
    "url": "posts/2020/11/02/_01-绪论-性能测度.html",
    "revision": "5a655aa9dc23bd960fe6fd08b85f83fe"
  },
  {
    "url": "posts/2020/11/04/_00-eof的使用.html",
    "revision": "22c5922f7b136db28be12fe13d4bca7f"
  },
  {
    "url": "posts/2020/11/11/_02-vector.html",
    "revision": "a6ec8a118a55eed42a7177e6dfc94d55"
  },
  {
    "url": "posts/2020/11/13/_03-list.html",
    "revision": "15af64ed76e62befc489a39d3729ce1f"
  },
  {
    "url": "posts/2020/11/20/_10-size-type-size-t.html",
    "revision": "ff317f19a8374d7235defd9e4bd1a364"
  },
  {
    "url": "posts/2020/11/20/_11-c-virtual.html",
    "revision": "e11f5c18c5c25be03ba0f1acca1ebcf1"
  },
  {
    "url": "posts/2020/11/26/_04-stack-queue.html",
    "revision": "77b89de19381bcf21201a955f26a45f6"
  },
  {
    "url": "posts/2020/12/10/_02-vuepress部署到githubpages.html",
    "revision": "81e5bff19c1c5a1d91d1bb1cf3cd9303"
  },
  {
    "url": "posts/2020/12/19/npm全局安装后仍然提示找不到命令.html",
    "revision": "39754839770333fa3bc1640f54a9e438"
  },
  {
    "url": "posts/2021/01/26/_03-dom-操作元素.html",
    "revision": "e3973ee9c54f681782da7c1f163a5bc5"
  },
  {
    "url": "posts/2021/01/28/_04-dom-事件高级.html",
    "revision": "d491ad647a5be2a77168aaf8ade5bdb2"
  },
  {
    "url": "posts/2021/01/29/_05-bom-浏览器对象模型.html",
    "revision": "215baa0aba83ca33c71e0c8cd83ef0ef"
  },
  {
    "url": "posts/2021/02/02/_05-use-github-action-deploy-vuepress.html",
    "revision": "ac74bbc417853615d5b956e896bde3e3"
  },
  {
    "url": "posts/2021/02/20/_12-c-快速输入输出处理.html",
    "revision": "57c8fe8a722ef85d16ac9347e5e10649"
  },
  {
    "url": "posts/2021/02/23/_07-vscode快捷键-字体-插件.html",
    "revision": "b8b61ecfe9c5fb8f33c29a6b504b6d0c"
  },
  {
    "url": "posts/2021/02/23/_08-vscode创建代码片段.html",
    "revision": "83b3c5e0264a00951790024c73089b15"
  },
  {
    "url": "posts/2021/03/07/_01-java-basic-syntax.html",
    "revision": "6448d968bb55fb9145664144ecebe505"
  },
  {
    "url": "posts/2021/03/14/_02-java进阶特性.html",
    "revision": "8a715a6194e7e70bab3446f9ab57d581"
  },
  {
    "url": "posts/2021/03/17/_03-awt-swing-frame-jframe.html",
    "revision": "c6b443adbefafaf47ecb6a2ee2f59ba4"
  },
  {
    "url": "posts/2021/03/24/_12-b-树.html",
    "revision": "aaa323f69945b264e5a85ec43e3f3f88"
  },
  {
    "url": "posts/2021/04/06/_09-vscode中运行cpp.html",
    "revision": "20cca4e60c6437bf13c166c553990002"
  },
  {
    "url": "posts/2021/04/10/_05-二叉树binary-tree.html",
    "revision": "83b41c9c146f4d3a4cb76df9f13a9c33"
  },
  {
    "url": "posts/2021/04/10/书-javascript-01语言基础.html",
    "revision": "16cb012d31730bb3902f72cf83dd5197"
  },
  {
    "url": "posts/2021/04/11/_05-01morris遍历.html",
    "revision": "7507ca2a6947911cd3bd905d9cd0aeb2"
  },
  {
    "url": "posts/2021/05/03/_06-javascript正则表达式.html",
    "revision": "40e9d50802cf5b939fbbad22c6d66bd4"
  },
  {
    "url": "posts/2021/05/04/_02-关系代数.html",
    "revision": "66876498c65f7bd0260ce43e48d6cf65"
  },
  {
    "url": "posts/2021/05/10/书-javascript-02对象-类-面向对象.html",
    "revision": "7019e42a2f1dbd5a131eb36a11ae45f8"
  },
  {
    "url": "posts/2021/05/11/书-javascript-04代理与反射.html",
    "revision": "8b042e9b62a22bb625640dff6617f3ad"
  },
  {
    "url": "posts/2021/05/14/书-javascript-03函数.html",
    "revision": "dfaaf8fa7ec784ff8b3749ae02d4f6f8"
  },
  {
    "url": "posts/2021/05/17/书-javascript-05期约与异步函数.html",
    "revision": "9e4386b06c5618c4b30c34acdaa58430"
  },
  {
    "url": "posts/2021/05/18/书-javascript-06bom.html",
    "revision": "087926b1117a0d2c6bec6eef1d51614c"
  },
  {
    "url": "posts/2021/05/24/intj.html",
    "revision": "74de19e5fcbb01d862f2e2b2017fffcd"
  },
  {
    "url": "posts/2021/05/26/书-javascript-07dom.html",
    "revision": "891e31ab64d7cbd608bb0284551b8334"
  },
  {
    "url": "posts/2021/06/12/_01-数据库系统概述.html",
    "revision": "2c26c320258c91f83b32313496ba7cef"
  },
  {
    "url": "posts/2021/06/13/_02-关系数据库.html",
    "revision": "51249e5d5953c1a54bf910908829ff12"
  },
  {
    "url": "posts/2021/06/14/_03-sql语句.html",
    "revision": "515eafb380e50649d1ac7c346eb0eb19"
  },
  {
    "url": "posts/2021/06/19/_04-数据库安全性.html",
    "revision": "0681d736288a36eaff66d9abb79b8cc7"
  },
  {
    "url": "posts/2021/06/20/_05-数据库完整性.html",
    "revision": "422a03d1ecd5e8581cf2597529a40667"
  },
  {
    "url": "posts/2021/07/03/_01基础算法-数据结构.html",
    "revision": "5673bedd7179dac54f410ed6babed8f4"
  },
  {
    "url": "posts/2021/07/10/_01vim基础使用模板.html",
    "revision": "30cb399efdcb15d61e30a98932034726"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "b30dd6a520d40ff1cadd9d41b332ba09"
  },
  {
    "url": "posts/index.html",
    "revision": "c3e309241844819b841f0eec78b21c7a"
  },
  {
    "url": "posts/tags/BOM.html",
    "revision": "eeb63b8c1325316bd3e88b896d29dc8d"
  },
  {
    "url": "posts/tags/C++.html",
    "revision": "6020f8790de0453708be6a3cdd1a34a0"
  },
  {
    "url": "posts/tags/DOM.html",
    "revision": "b793a9e6698e4714344fba3c7e390e65"
  },
  {
    "url": "posts/tags/ES6.html",
    "revision": "407ead53ccadc1468693a2c6afb4e11f"
  },
  {
    "url": "posts/tags/Git.html",
    "revision": "5d1ee4253a4b2044094a6453d092f82b"
  },
  {
    "url": "posts/tags/Github Action.html",
    "revision": "81cc2553842fdb2914ce1f7de0c1b066"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "24c408d24c3d962534203e073f3ea909"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "b898532d840efa5aab3484c73df6fd0a"
  },
  {
    "url": "posts/tags/INTJ.html",
    "revision": "e42b341fa2ef6447e311a82cb12a3d6d"
  },
  {
    "url": "posts/tags/java.html",
    "revision": "f01b4b8db160c653f8f7027457956a17"
  },
  {
    "url": "posts/tags/JavaScript 高级程序设计（第四版）.html",
    "revision": "b623c26787babf7320f5cd303ecd5d19"
  },
  {
    "url": "posts/tags/JavaScript.html",
    "revision": "21cf063f0facec0e26d94dad2b1664cf"
  },
  {
    "url": "posts/tags/markdown.html",
    "revision": "745b3a53eff5eed1fdf75c06bd210d0b"
  },
  {
    "url": "posts/tags/npm.html",
    "revision": "16381243ed7c36eeca46c7d4ececef07"
  },
  {
    "url": "posts/tags/STL.html",
    "revision": "0b645f73954909b5148b97db34d65def"
  },
  {
    "url": "posts/tags/vim.html",
    "revision": "32fdf08dd54b559111a31335f314c2ed"
  },
  {
    "url": "posts/tags/vscode.html",
    "revision": "fa38fcb59948b68cb6284f9a6bab0790"
  },
  {
    "url": "posts/tags/vuepress.html",
    "revision": "c74697a0a145c3bdd9cb8244958da44a"
  },
  {
    "url": "posts/tags/数据库.html",
    "revision": "1d29ed935fb225410f1dd99229f5be2a"
  },
  {
    "url": "posts/tags/数据结构.html",
    "revision": "59809c2f770b913f9016fedb1f45f36f"
  },
  {
    "url": "posts/tags/算法模板.html",
    "revision": "c3fcbb9f5485c437534dc226208a8d32"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
