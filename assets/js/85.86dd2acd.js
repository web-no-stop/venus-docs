(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{402:function(e,s,t){"use strict";t.r(s);var a=t(17),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),t("p",[e._v(e._s(e.$frontmatter.description))]),e._v(" "),t("p",[e._v("During miner initialization, a "),t("em",[e._v("miner actor")]),e._v(" is created on the chain, and this actor gives the miner its ID "),t("code",[e._v("t0...")]),e._v(". The miner actor is in charge of collecting all the payments sent to the miner. For example, when a payment is sent for honoring the different types of deals, that payment goes to the miner actor, not the miner itself.")]),e._v(" "),t("p",[e._v("The currently configured addresses used by a miner can be listed with:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("venus-miner actor control list\n")])])]),t("p",[e._v("The different types of addresses associated with a miner are described below:")]),e._v(" "),t("h2",{attrs:{id:"the-owner-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-owner-address"}},[e._v("#")]),e._v(" The owner address")]),e._v(" "),t("p",[e._v("The owner address corresponds to a Venus node address provided during the miner initialization. The "),t("em",[e._v("owner address")]),e._v(" is only needed when:")]),e._v(" "),t("ul",[t("li",[e._v("Changing the owner or the worker address in the "),t("em",[e._v("miner actor")]),e._v(".")]),e._v(" "),t("li",[e._v("Withdrawing balance from the "),t("em",[e._v("miner actor")]),e._v(".")]),e._v(" "),t("li",[e._v("Submit "),t("em",[e._v("WindowPoSts")]),e._v(", "),t("strong",[e._v("unless "),t("em",[e._v("control addresses")]),e._v(" are defined and have enough balance")]),e._v(" (continued below).")])]),e._v(" "),t("p",[e._v("The owner address can be updated with the following command:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("venus-miner actor set-owner --really-do-it "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h2",{attrs:{id:"the-worker-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-worker-address"}},[e._v("#")]),e._v(" The worker address")]),e._v(" "),t("p",[e._v("The "),t("em",[e._v("worker address")]),e._v(" is used to send and pay for day-to-day operations performed by the miner:")]),e._v(" "),t("ul",[t("li",[e._v("Initializing the miner on the chain.")]),e._v(" "),t("li",[e._v("Changing the miner peer id or the multiaddresses.")]),e._v(" "),t("li",[e._v("Interacting with market and payment channel actors.")]),e._v(" "),t("li",[e._v("Signing new blocks.")]),e._v(" "),t("li",[e._v("Submitting proofs, declaring faults. "),t("em",[e._v("WindowPoSts")]),e._v(" are submitted using the "),t("em",[e._v("worker address")]),e._v(" if:\n"),t("ul",[t("li",[e._v("Control addresses are not defined or do not have enough balance.")]),e._v(" "),t("li",[e._v("The "),t("em",[e._v("owner address")]),e._v(" does not have enough balance.")])])])]),e._v(" "),t("p",[e._v("Unlike the "),t("em",[e._v("owner address")]),e._v(", the address set as the miner's "),t("em",[e._v("worker address")]),e._v(" should be part of the Venus local wallet and accessible by the miner. The Venus Miner will trigger all the necessary transactions using the Venus node to which it is connected. The "),t("em",[e._v("worker address")]),e._v(" must have enough funds to pay for the day-to-day operations of the miner, including initialization.")]),e._v(" "),t("h2",{attrs:{id:"control-addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#control-addresses"}},[e._v("#")]),e._v(" Control addresses")]),e._v(" "),t("p",[t("em",[e._v("Control addresses")]),e._v(" are used to submit "),t("em",[e._v("WindowPoSts")]),e._v(" proofs to the chain. "),t("em",[e._v("WindowPoSt")]),e._v(" is the mechanism through which storage is verified in Filecoin and is required by miners to submit proofs for all sectors every 24 hours. Those proofs are submitted as messages to the blockchain and therefore need to pay the respective fees.")]),e._v(" "),t("p",[e._v("Many mining-related actions require sending messages to the chain, but not all of those are as high-value as "),t("em",[e._v("WindowPoSts")]),e._v(". By using "),t("em",[e._v("control addresses")]),e._v(" you can stop the first transaction holding up a line of transactions. This blocking problem is known as "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Head-of-line_blocking",target:"_blank",rel:"noopener noreferrer"}},[e._v("head-of-line blocking."),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Multiple "),t("em",[e._v("control addresses")]),e._v(" can be created and configured. The first "),t("em",[e._v("control address")]),e._v(" that has enough funds to submit a "),t("em",[e._v("WindowPoSt")]),e._v(" transaction will be used. If there are no control addresses with sufficent funds then the owner address will be used. If the owner address has insufficent funds, or is unavailable, then the worker address will be used to submit a "),t("em",[e._v("WindowPoSt")]),e._v(".")]),e._v(" "),t("p",[e._v("Otherwise, Venus fails over to the "),t("em",[e._v("owner")]),e._v(" and ultimately to the "),t("em",[e._v("worker")]),e._v(" address.")]),e._v(" "),t("p",[e._v("To set up a "),t("em",[e._v("control address")]),e._v(":")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Create a new address and send it some funds for gas fees:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("venus wallet new bls\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" f3defg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\nvenus send --from "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" f3defg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Inform the miner of the new address:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("venus-miner actor control "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" --really-do-it f3defg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Add f3defg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Message CID: bafy2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Wait for the message to land on chain:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("venus state wait-msg bafy2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Exit Code: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Check the miner control address list to make sure the address was correctly added:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("venus-miner actor control list\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" name       ID      key        use    balance\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" owner      t01111  f3abcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  other  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("300")]),e._v(" FIL\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" worker     t01111  f3abcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  other  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("300")]),e._v(" FIL\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" control-0  t02222  f3defg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  post   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" FIL\n")])])])])]),e._v(" "),t("p",[e._v("Repeat this procedure to add additional addresses.")]),e._v(" "),t("h3",{attrs:{id:"use-control-addresses-for-commits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-control-addresses-for-commits"}},[e._v("#")]),e._v(" Use control addresses for commits")]),e._v(" "),t("p",[e._v("Clean up the tasks required for your worker address by setting your control addresses to perform pre-commits and commits. With this, only market messages are sent from the worker address. If the basefee is high, then you can still put sectors on chain without those messages being blocked by things like publishing deals.")]),e._v(" "),t("p",[e._v("This feature is enabled as of 2020-12-09 within the "),t("a",{attrs:{href:"https://github.com/filecoin-project/venus/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("master")]),e._v(" branch of "),t("code",[e._v("filecoin-project/venus")]),t("OutboundLink")],1),e._v(", but is not yet within a tagged release. You need to build Venus from GitHub using the "),t("code",[e._v("master")]),e._v(" branch to use this feature.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Create two control addresses. Control addresses can be any "),t("em",[e._v("type")]),e._v(" of address: "),t("code",[e._v("secp256k1")]),e._v(" or "),t("code",[e._v("bls")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("venus wallet new bls\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" f3rht"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\nvenus wallet new bls\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" f3sxs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\nvenus wallet "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Address   Balance  Nonce  Default\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" f3rht"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" FIL    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("      X\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" f3sxs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" FIL    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Add some funds into those two addresses.")])]),e._v(" "),t("li",[t("p",[e._v("Wait for around 5 minutes for the addresses to be assigned IDs.")])]),e._v(" "),t("li",[t("p",[e._v("Get ID of those addresses:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("venus wallet list -i\n\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Address   ID        Balance                   Nonce  Default\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" f3rht"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  f0100933  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.59466768102284489")]),e._v(" FIL   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("      X\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" f3sxs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  f0100939  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.4")]),e._v(" FIL                   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Add control addresses:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("venus-miner actor control "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" --really-do-it"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true f0100933 f0100939\n\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Add f3rht"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Add f3sxs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Message CID: bafy2bzacecfryzmwe5ghsazmfzporuybm32yw5q6q75neyopifps3c3gll6aq\n\n venus actor control list\n\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" name       ID      key        use    balance\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" owner      t01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  f3abcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  other  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(" FIL\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" worker     t01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  f3abcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  other  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" FIL\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" control-0  t02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  f3defg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  post   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" FIL\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" control-1  t02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  f3defg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".  post   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" FIL\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Add the newly created addresses into the miner config under the "),t("code",[e._v("[Addresses]")]),e._v(" section:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Addresses"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    PreCommitControl = "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"f3rht..."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    CommitControl = "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"f3sxs..."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Restart "),t("code",[e._v("venus-miner")]),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"managing-balances"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#managing-balances"}},[e._v("#")]),e._v(" Managing balances")]),e._v(" "),t("p",[e._v("Get the balances associated with a miner wallet by calling "),t("code",[e._v("info")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("venus-miner info\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Miner: t01000\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Sector Size: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" KiB\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Byte Power:   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" KiB / "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" KiB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100.0000")]),e._v("%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Actual Power: 1e+03 Ki / 1e+03 Ki "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100.0000")]),e._v("%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   Committed: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" KiB\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   Proving: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" KiB\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Below minimum power threshold, no blocks will be won\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Deals: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" B\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   Active: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" B "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Verified: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" B"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Miner Balance: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10582.321501530685596531")]),e._v(" FIL\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   PreCommit:   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.000000286878768791")]),e._v(" FIL\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   Pledge:      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.00002980232192")]),e._v(" FIL\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   Locked:      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10582.321420164834231291")]),e._v(" FIL\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   Available:   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.000051276650676449")]),e._v(" FIL\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Worker Balance: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("49999999.999834359275302423")]),e._v(" FIL\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Market "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Escrow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" FIL\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Market "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Locked"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" FIL\n")])])]),t("p",[e._v("In this example, the miner ID is "),t("code",[e._v("t01000")]),e._v(", it has a total balance of "),t("code",[e._v("10582.321501530685596531 FIL")]),e._v(", and an available balance of "),t("code",[e._v("0.000051276650676449 FIL")]),e._v(" that can be used as collateral or to pay for the pledge. The worker balance is "),t("code",[e._v("49999999.999834359275302423 FIL")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"withdrawing-funds-from-the-miner-actor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#withdrawing-funds-from-the-miner-actor"}},[e._v("#")]),e._v(" Withdrawing funds from the Miner actor")]),e._v(" "),t("p",[e._v("Transfer funds from the Miner actor address to the owner address by calling "),t("code",[e._v("actor withdraw")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("venus-miner actor withdraw "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("The owner's address will need to be available in the Venus node and have enough funds to pay for the gas for this transaction. Cold addresses will need to be temporally imported for the operation to succeed.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);