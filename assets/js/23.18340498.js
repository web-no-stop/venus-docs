(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{428:function(n,t,a){"use strict";a.r(t);var s=a(17),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[n._v("#")]),n._v(" Preparation")]),n._v(" "),a("ol",[a("li",[n._v("Cancel the jwt-token verification of Venus program;")]),n._v(" "),a("li",[n._v("This example has two Venus nodes: 192.168.1.125 (mainnet) and 192.168.1.134 (calibnet);")]),n._v(" "),a("li",[n._v("192.168.1.134 install nginx as the load balancing server;")])]),n._v(" "),a("h2",{attrs:{id:"configure-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-nginx"}},[n._v("#")]),n._v(" Configure nginx")]),n._v(" "),a("ol",[a("li",[a("p",[n._v("The monitoring address of Venus node is changed to / ip4 / 0.0.0.0/tcp/3453, file: ~ /. venus / api")])]),n._v(" "),a("li",[a("p",[n._v("Configure load balancing")]),n._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(".\n\nhttp\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(".\n\nserver\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        listen "),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("888")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        server_name phpmyadmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        index index.html index.htm index.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        root  /www/server/phpmyadmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#error_page   404   /404.html;")]),n._v("\n        include enable-php.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    \n        location /\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n            proxy_pass http://venussvr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n        access_log  /www/wwwlogs/access.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\nupstream venussvr\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("192.168")]),n._v(".1.125:3453 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("weight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("192.168")]),n._v(".1.134:3453 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("weight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\ninclude /www/server/panel/vhost/nginx/*.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])])]),n._v(" "),a("li",[a("p",[n._v("Restart the nginx service. You can use nginx service to proxy venus service")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('# curl http://192.168.1.134:888/rpc/v0 -X POST -H "Content-Type: application/json"  -d \'{"method": "Filecoin.StateNetworkName","params":[],"id":1}\'\n{"jsonrpc":"2.0","result":"mainnet","id":1}\n# curl http://192.168.1.134:888/rpc/v0 -X POST -H "Content-Type: application/json"  -d \'{"method": "Filecoin.StateNetworkName","params":[],"id":1}\'\n{"jsonrpc":"2.0","result":"calibrationnet","id":1}\n')])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);