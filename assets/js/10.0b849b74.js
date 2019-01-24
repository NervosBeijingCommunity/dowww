(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{178:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"python"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python "),s("a",{attrs:{href:"https://github.com/spencerwooo"}},[s("Badge",{attrs:{text:"@SpencerWoo",vertical:"middle"}})],1)]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("目前存在的一个问题是：VSCode Python 插件和 WSL 侧的工具链兼容性很糟糕，都需要一定的配置才能丝滑工作。这也是一个当前微软 VSCode 各大语言插件组和 WSL 开发组都知道并在解决的问题（参考 "),s("a",{attrs:{href:"https://github.com/Microsoft/vscode-python/issues/67",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode Python 插件 Issue #67"),s("OutboundLink")],1),t._v("）。")]),t._v(" "),s("p",[t._v("在此之前，下面的解决方法是一个 work-around，请严格按照下面讲述的步骤进行操作，否则很大概率不会成功。")])]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("安装 Visual Studio Code "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-python.python",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方 Python 插件"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("然后重启 Visual Studio Code.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("在 WSL 侧安装 Python：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),s("blockquote",[s("p",[t._v("以下内容、解决方案、代码和可执行文件来自 "),s("a",{attrs:{href:"http://blog.plusls.cn/windows/vscode-using-python-in-wsl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("plusls - VSCode using Python in WSL"),s("OutboundLink")],1),t._v("，致谢。")])]),t._v(" "),s("p",[t._v("首先从 "),s("a",{attrs:{href:"http://blog.plusls.cn/windows/vscode-using-python-in-wsl/wsl.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v(" 下载由 plusls 编译的一些工具，下载的文件内容有：")]),t._v(" "),t._m(5),s("p",[t._v("将下载文件解压至本地目录下，留作后续使用。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("在 VSCode 中设置如下：")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),s("p",[t._v("那么现在拿 VSCode 写 Python 项目的时候应该可以自动代码补全、IntelliSense 和自动美化了。👍")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("这部分内容由于涉及到修改 VSCode Python 官方插件代码，因此不建议进行配置。同时，随着插件的更新，修改的代码会失效，修改方法也不近相同，如果有需要可以考虑 "),s("a",{attrs:{href:"http://blog.plusls.cn/windows/vscode-using-python-in-wsl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看原文内容"),s("OutboundLink")],1),t._v(" 自行配置。")]),t._v(" "),t._m(14),t._v(" "),s("blockquote",[s("p",[t._v("基础配置详见 > "),s("router-link",{attrs:{to:"/3-VSCode/3-2-Code-Runner.html"}},[t._v("Code Runner")])],1)]),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装插件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装-python"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-python","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 Python")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("安装一些必备工具："),s("code",[t._v("sudo apt install -y make build-essential libssl-dev libffi-dev python3-dev")])]),t._v(" "),s("li",[t._v("安装 Python 3.7（或者你想要的 Python 版本）："),s("code",[t._v("sudo apt install python3.7")])]),t._v(" "),s("li",[t._v("安装 Python 包管理 "),s("code",[t._v("pip")]),t._v("："),s("code",[t._v("sudo apt install python3-pip")])]),t._v(" "),s("li",[t._v("更新 "),s("code",[t._v("pip")]),t._v(" 包管理源地址至清华大学 TUNA 站点：\n"),s("ul",[s("li",[t._v("在根目录下创建文件："),s("code",[t._v("~/.pip/pip.conf")])]),t._v(" "),s("li",[t._v("在其中加入如下内容：")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[global]\nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"让-vscode-集成-wsl-侧-python"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#让-vscode-集成-wsl-侧-python","aria-hidden":"true"}},[this._v("#")]),this._v(" 让 VSCode 集成 WSL 侧 Python")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(".\n├── LocalDebugClient.js\n├── completion.py\n├── pydevd_file_utils.py\n└── wsl-tools\n    ├── autopep8.exe\n    ├── ctags.exe\n    ├── pylint.exe\n    ├── python.exe\n    ├── python2.exe\n    └── python3.exe\n\n1 directory, 9 files\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"让-vscode-python-插件识别到-wsl-环境下的-python"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#让-vscode-python-插件识别到-wsl-环境下的-python","aria-hidden":"true"}},[this._v("#")]),this._v(" 让 VSCode Python 插件识别到 WSL 环境下的 Python")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("以下内容以 Python 3 为例，其他版本的 Python 原理相同。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[this._v('"python.pythonPath"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"C:\\\\$更换为 python3.exe 的路径$\\\\python3.exe"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(",")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"让-python-插件直接使用-wsl-侧的工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#让-python-插件直接使用-wsl-侧的工具","aria-hidden":"true"}},[this._v("#")]),this._v(" 让 Python 插件直接使用 WSL 侧的工具")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("官方 Python 插件集成了实时代码风格检查工具 "),e("code",[this._v("pylint")]),this._v("，快速定位工具 "),e("code",[this._v("ctags")]),this._v(" 和代码美化插件 "),e("code",[this._v("autopep8")]),this._v("。这些同样也可以在 WSL 侧安装并从 Windows VSCode 侧调用。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("安装 "),s("code",[t._v("pylint")]),t._v("："),s("code",[t._v("pip3 install pylint")])]),t._v(" "),s("li",[t._v("安装 "),s("code",[t._v("exuberant ctags")]),t._v("："),s("code",[t._v("sudo apt install exuberant-ctags")])]),t._v(" "),s("li",[t._v("安装 "),s("code",[t._v("autopep8")]),t._v("："),s("code",[t._v("pip3 install autopep8")])]),t._v(" "),s("li",[t._v("在 VSCode 设置中加入：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"python.linting.pylintPath"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\\\$更换为 pylint.exe 的路径$\\\\pylint.exe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"python.workspaceSymbols.ctagsPath"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\\\$更换为 ctags.exe 的路径$\\\\ctags.exe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"python.formatting.autopep8Path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\\\$更换为 autopep8.exe 的路径$\\\\autopep8.exe"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"跳转定义、调试等内容的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跳转定义、调试等内容的配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 跳转定义、调试等内容的配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"code-runner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code-runner","aria-hidden":"true"}},[this._v("#")]),this._v(" Code Runner")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("无需特殊配置，单个文件可以直接右键 "),e("code",[this._v("Run Code")]),this._v(" 执行。")])}],!1,null,null,null);a.options.__file="3-3-Python.md";e.default=a.exports}}]);