(this.webpackJsonplootrunes=this.webpackJsonplootrunes||[]).push([[0],{234:function(t,e,n){},250:function(t,e){},259:function(t,e){},277:function(t,e){},279:function(t,e){},299:function(t,e){},300:function(t,e){},361:function(t,e){},363:function(t,e){},396:function(t,e){},398:function(t,e){},399:function(t,e){},404:function(t,e){},406:function(t,e){},412:function(t,e){},414:function(t,e){},427:function(t,e){},439:function(t,e){},442:function(t,e){},447:function(t,e){},455:function(t,e){},464:function(t,e){},466:function(t,e){},535:function(t,e,n){},536:function(t,e,n){},545:function(t,e,n){"use strict";n.r(e);var a=n(5),i=n.n(a),u=n(222),s=n.n(u),o=(n(234),n(122)),r=n(33),p=n.n(r),l=n(223),y=n(6),d=n(7),c=n(46),m=n(11),b=n(10),h=n(59),f=n(15),j=n(84),T=n(119),x=n.n(T),O=(n(535),n(536),n(2)),v=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(y.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)(h.b,{to:"/",children:Object(O.jsx)("h1",{children:"Loot Runes"})}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/runes",children:"Runes"})}),Object(O.jsx)("li",{children:Object(O.jsx)(h.b,{to:"/bind",children:"Bind"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://opensea.io/collection/runesmaker",target:"_blank",rel:"noopener noreferrer",children:"OpenSea"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://twitter.com/LootRunes",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://etherscan.io/address/0x6f75edbfb41f94522eed734787fbc78c5688aa1e",target:"_blank",rel:"noopener noreferrer",children:"Contract"})})]}),Object(O.jsxs)(f.c,{children:[Object(O.jsx)(f.a,{path:"/runes"}),Object(O.jsx)(f.a,{path:"/bind"}),Object(O.jsx)(f.a,{path:"/",children:Object(O.jsxs)("p",{children:["Runes is a collection of 10,101 unique bags randomly generated and carved on chain. Each runes bag contains a set of 1 yin/yang and 7 runes. ",Object(O.jsx)("br",{}),"Compatible with any part of loots. Stats, images, and other functionality are intentionally omitted for others to interpret. ",Object(O.jsx)("br",{}),"Feel free to use RUNES in any way you want!"]})})]})]})}}]),n}(a.Component),g={yin:["&#9790;","Lunar"],yang:["&#9737;","Heliacal"],Fehu:["&#5792;","Cattle/Wealth"],Uruz:["&#5794;","Ox"],Thurisaz:["&#5798;","Mallet/Giant"],Ansuz:["&#5800;","Message"],Raidho:["&#5809;","Journey"],Kenaz:["&#5810;","Torch"],Gebo:["&#5815;","Torch"],Wunjo:["&#5817;","Gift"],Hagalaz:["&#5818;","Joy"],Nauthiz:["&#5822;","Hail"],Isa:["&#5825;","Needs"],Jera:["&#5827;","Harvest"],Eihwaz:["&#5831;","Yew"],Perthro:["&#5832;","Destiny"],Algiz:["&#5833;","Elk"],Sowilo:["&#5834;","Sun"],Tiwaz:["&#5839;","Victory"],Berkana:["&#5842;","Birch"],Ehwaz:["&#5846;","Horse"],Mannaz:["&#5847;","Man"],Laguz:["&#5850;","Lake"],Ingwaz:["&#5853;","Fertility"],Othala:["&#5855;","Heritage"],Dagaz:["&#5854;","Dawn"]};function w(t){return void 0===t.id?null:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"350",height:"350",children:[Object(O.jsx)("rect",{width:"100%",height:"100%",fill:"black"}),Object(O.jsxs)("text",{textAnchor:"end",x:"345",y:"15",style:{fill:"white",fontFamily:"serif",fontSize:"12px"},children:["#",t.id]}),t.runes.map((function(t,e){return Object(O.jsx)("text",{textAnchor:"center",x:"50%",y:30*e+40,className:"rune_text",children:Object(j.decode)(g[t.value][0])},e)}))]})}function I(){return Object(O.jsx)(h.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{}),Object(O.jsxs)(f.c,{children:[Object(O.jsx)(f.a,{path:"/runes",children:Object(O.jsx)(C,{})}),Object(O.jsx)(f.a,{path:"/bind",children:Object(O.jsx)(L,{})}),Object(O.jsx)(f.a,{path:"/",children:Object(O.jsx)(M,{})})]})]})})}var k=new(new x.a(window.ethereum).eth.Contract)([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"binder",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"lootPart",type:"string"}],name:"Bound",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"amount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"lootId",type:"uint256"},{internalType:"uint8",name:"part",type:"uint8"}],name:"bind",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"boundWith",outputs:[{internalType:"uint256",name:"lootId",type:"uint256"},{internalType:"enum Runes.LootPart",name:"part",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"exists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getBoundLoot",outputs:[{components:[{internalType:"uint256",name:"lootId",type:"uint256"},{internalType:"enum Runes.LootPart",name:"part",type:"uint8"}],internalType:"struct Runes.LootComponent",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lootId",type:"uint256"},{internalType:"uint8",name:"part",type:"uint8"}],name:"getBoundRune",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint8",name:"part",type:"uint8"}],name:"getLootPartName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lootId",type:"uint256"},{internalType:"uint8",name:"part",type:"uint8"}],name:"getPartId",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"runesId",type:"uint256"}],name:"getRune",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"runesId",type:"uint256"}],name:"getRuneUnicode",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getYinYang",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getYinYangUnicode",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lootId",type:"uint256"},{internalType:"uint8",name:"part",type:"uint8"}],name:"isLootBound",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isRuneBound",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"loot",outputs:[{internalType:"contract ILoot",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"",type:"string"}],name:"loot2runes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"mintReserved",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"lootId",type:"uint256"}],name:"mintWithLoot",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"price",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"redeemedLoot",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"runesOf",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lootId",type:"uint256"},{internalType:"uint8",name:"part",type:"uint8"}],name:"unbindLoot",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"unbindRune",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],"0x6f75eDBFb41F94522EED734787fBc78C5688aA1e"),M=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(y.a)(this,n),(a=e.call(this,t)).state={account:"",runes:Array.from(Array(3)),tokenId:1,minTokenId:1,maxTokenId:9700,lootId:1,mintType:"mint"},a.handleTypeChange=a.handleTypeChange.bind(Object(c.a)(a)),a.handleTokenIdChange=a.handleTokenIdChange.bind(Object(c.a)(a)),a.handleLootIdChange=a.handleLootIdChange.bind(Object(c.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(c.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.loadBlockchainData(),Promise.all(this.state.runes.map((function(e){return t.getRunes(Math.floor(10101*Math.random())+1)}))).then((function(e){t.setState({runes:e})}))}},{key:"loadBlockchainData",value:function(){var t=this,e=new x.a(window.ethereum);this.contract=k,e.eth.getGasPrice().then((function(e){return t.setState({gas:e})})),e.eth.getAccounts().then((function(e){return t.setState({account:e[0]})})),window.ethereum.on("accountsChanged",(function(e){console.log(e),t.setState({account:e[0]})}))}},{key:"getRunes",value:function(){var t=Object(l.a)(p.a.mark((function t(e){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contract.methods.exists(e).call();case 2:return n=t.sent,t.next=5,this.contract.methods.runesOf(e).call();case 5:return a=t.sent,t.abrupt("return",{id:e,runes:JSON.parse(a),exists:n});case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleTypeChange",value:function(t){"mint"===t.target.value?this.setState({minTokenId:1,maxTokenId:9700,tokenId:Math.min(9700,Math.max(1,this.state.tokenId))}):"mintWithLoot"===t.target.value&&this.setState({minTokenId:9701,maxTokenId:1e4,tokenId:Math.min(1e4,Math.max(9701,this.state.tokenId))}),this.setState({mintType:t.target.value})}},{key:"handleTokenIdChange",value:function(t){t.target.value<=this.state.maxTokenId&&t.target.value>=this.state.minTokenId&&this.setState({tokenId:t.target.value})}},{key:"handleLootIdChange",value:function(t){t.target.value<=8e3&&t.target.value>0&&this.setState({lootId:t.target.value})}},{key:"handleSubmit",value:function(t){"mint"===this.state.mintType?k.methods.mint(this.state.tokenId).send({from:this.state.account,value:.03*Math.pow(10,18)}):"mintWithLoot"===this.state.mintType&&k.methods.mintWithLoot(this.state.tokenId,this.state.lootId).send({from:this.state.account}),t.preventDefault()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"feature",children:[Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{children:Object(O.jsxs)("select",{name:"MintType",id:"MintType",onChange:this.handleTypeChange,value:this.state.mintType,children:[Object(O.jsx)("option",{value:"mint",children:"Mint"}),Object(O.jsx)("option",{value:"mintWithLoot",children:"Mint with Loot"})]})}),Object(O.jsxs)("label",{children:["TokenId: ",Object(O.jsx)("input",{type:"number",placeholder:"tokenId",value:this.state.tokenId,onChange:this.handleTokenIdChange,min:this.state.minTokenId,max:this.state.maxTokenId})]}),Object(O.jsxs)("label",{style:{display:"mintWithLoot"===this.state.mintType?"block":"none"},children:["LootId: ",Object(O.jsx)("input",{type:"number",placeholder:"lootId",value:this.state.lootId,onChange:this.handleLootIdChange,min:"1",max:"8000"})]}),Object(O.jsxs)("label",{children:["Price: ","mintWithLoot"===this.state.mintType?0:.03," ETH"]}),Object(O.jsx)("input",{type:"submit",value:"Buy"})]}),Object(O.jsx)("span",{children:"Example Runes:"}),this.state.runes.map((function(t,e){return Object(a.createElement)(w,Object(o.a)(Object(o.a)({},t),{},{key:e}))}))]})}}]),n}(a.Component),C=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(y.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:["Rune","Name","Meaning"].map((function(t,e){return Object(O.jsx)("th",{children:t},e)}))})}),Object(O.jsx)("tbody",{children:Object.entries(g).map((function(t,e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(j.decode)(t[1][0])}),Object(O.jsx)("td",{children:t[0]}),Object(O.jsx)("td",{children:t[1][1]})]},e)}))})]})}}]),n}(a.Component),L=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(y.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"feature",children:Object(O.jsx)("h1",{children:"Coming Soon!"})})}}]),n}(a.Component),S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,549)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,u=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),u(t),s(t)}))};s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),S()}},[[545,1,2]]]);
//# sourceMappingURL=main.2e62f126.chunk.js.map