(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{150:function(e,t,r){"use strict";r.r(t);var s=r(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("p",[r("a",{attrs:{href:"https://github.com/spencerwoo98/Dev-on-Windows-with-WSL/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/license-MIT-blue.svg",alt:"license"}}),r("OutboundLink")],1),e._v(" "),r("img",{attrs:{src:"https://img.shields.io/badge/Made%20with-love-ff69b4.svg",alt:"love"}}),e._v(" "),r("img",{attrs:{src:"https://img.shields.io/badge/Perfect-Windows-orange.svg",alt:"windows"}}),e._v(" "),r("a",{attrs:{href:"https://travis-ci.org/spencerwoo98/Dev-on-Windows-with-WSL",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://travis-ci.org/spencerwoo98/Dev-on-Windows-with-WSL.svg?branch=master",alt:"Build Status"}}),r("OutboundLink")],1)]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("本仓库由 "),r("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),r("OutboundLink")],1),e._v(" 生成，已经发布于：🔗 "),r("a",{attrs:{href:"https://spencerwoo.com/Dev-on-Windows-with-WSL/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spencer Woo | 👨‍💻 Dev on Win with WSL"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("目前仍然有很多地方需要完善，当然 WSL 本身也有很多小 bug，希望有经验的同学前来帮我共同完善本项目。鞠躬。")]),e._v(" "),r("p",[e._v("详细请见 > "),r("router-link",{attrs:{to:"/3-VSCode/3-3-HelpNeeded.html"}},[e._v("💗💗💗 Help needed.")])],1),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("hr"),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("Authored and maintained by Spencer Woo.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://spencerwoo.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Blog"),r("OutboundLink")],1),e._v(" · "),r("a",{attrs:{href:"https://web.okjike.com/user/4DDA0425-FB41-4188-89E4-952CA15E3C5E/post",target:"_blank",rel:"noopener noreferrer"}},[e._v("ⒿJike"),r("OutboundLink")],1),e._v(" · "),r("a",{attrs:{href:"https://github.com/spencerwoo98",target:"_blank",rel:"noopener noreferrer"}},[e._v("@GitHub"),r("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("在 Windows 上面用 WSL 优雅开发")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("首先达成一个共识："),t("strong",[this._v("Windows 给编程初学者带来了很大的困难")]),this._v("。比如缺乏好用的包管理系统、终端环境难看难用和环境变量不易配置等等，这些都让 Windows 在开发体验上难以匹敌 Linux 甚至 macOS（不包括一定需要 IDE 支持的语言，比如 Java 和 .NET 等等）。然而 Linux 桌面环境虽然在 2018 年的今天有很大的改善，但是相比 Windows 还是有很大的差距，程序假死、卡住、崩掉的情况数不胜数。（还有 Linux 每一个发行版几乎都没有很好的支持 Emoji 啊！😫）")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("WSL 的出现似乎缓解了这些烦恼。我们可以在 Windows 上借助 Windows Subsystem for Linux 来给我们的 Windows 配置一个可用的开发环境，包括：Linux 终端环境 "),t("code",[this._v("zsh")]),this._v("、Linux 下的包管理器 "),t("code",[this._v("apt")]),this._v("、Visual Studio Code 开发环境等等。这篇文章的意义即此。🎉🎉🎉")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"相关信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关信息")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"license-许可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license-许可","aria-hidden":"true"}},[this._v("#")]),this._v(" License 许可")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by-nc-nd/4.0/"}},[t("img",{staticStyle:{"border-width":"0","padding-top":"10px"},attrs:{alt:"創用 CC 授權條款",src:"https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("本著作係採用"),t("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by-nc-nd/4.0/"}},[this._v("創用 CC 姓名標示-非商業性-禁止改作 4.0 國際 授權條款")]),this._v("授權。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("👨‍💻 Dev on Windows with WSL")]),this._v(" ©Spencer Woo. Released under the CC BY-NC-ND 4.0 International License.")])}],!1,null,null,null);n.options.__file="README.md";t.default=n.exports}}]);