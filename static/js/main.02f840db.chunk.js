(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),i=a(21),s=a.n(i),n=a(3),l=a(5),o=a(6),j=a(23),d=a(4),m=a(8),u=function(e,t){switch(console.log(t.type),t.type){case"LOADING":return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case"CLEAR_CART":return Object(d.a)(Object(d.a)({},e),{},{cart:[]});case"DISPLAY_ITEMS":return Object(d.a)(Object(d.a)({},e),{},{cart:t.payload,loading:!1});case"REMOVE":return console.log(e.cart,t.payload),Object(d.a)(Object(d.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload}))});case"ADD":var a=[],c=t.payload.item;return void 0!==e.cart.length&&(a=e.cart.map((function(e){return e})),c.id=a.length+1),a.push(c),Object(d.a)(Object(d.a)({},e),{},{cart:a});case"GET_TOTALS":if(void 0!==e.cart.length){var r=e.cart.reduce((function(e,t){var a=t.amount,c=t.price;e.amount=e.amount+a;var r=a*c;return e.priceTotal=e.priceTotal+r,console.log(e.amount),e}),{priceTotal:0,amount:0}),i=r.priceTotal,s=r.amount;return i=parseFloat(i.toFixed(2)),Object(d.a)(Object(d.a)({},e),{},{amount:s,priceTotal:i})}return Object(d.a)(Object(d.a)({},e),{},{amount:0,priceTotal:0});case"HANDLE_AMOUNT":var n=e.cart.map((function(e){if(e.id===t.payload.id){if("inc"===t.payload.type)return Object(d.a)(Object(d.a)({},e),{},{amount:e.amount+1});if("dec"===t.payload.type)return Object(d.a)(Object(d.a)({},e),{},{amount:e.amount-1})}return e})).filter((function(e){return 0!==e.amount}));return Object(d.a)(Object(d.a)({},e),{},{cart:n})}throw new Error("no action type matched, dispatch: ".concat(e.type,", payload: ").concat(t.payload))},b=[{id:1,img:"https://www.armani.com/16/16013304ag_13_d.jpg",title:"jackets"},{id:2,img:"https://www.armani.com/38/38941839cj_13_d.jpg",title:"Shirts"},{id:3,img:"https://www.armani.com/12/12566246us_13_d.jpg",title:"T_shirts"},{id:4,img:"https://www.armani.com/13/13551966xx_13_d.jpg",title:"Pants"},{id:5,img:"https://www.armani.com/42/42841362ci_13_d.jpg",title:"Jeans"}],h=[{id:"j1",img:[{color:"brown",url:["https://www.armani.com/16/16011413TS_16_d.jpg"]},{color:"black",url:["https://www.armani.com/16/16007146GV_16_d.jpg"]}],hoverImage:"https://www.armani.com/16/16011413TS_16_f.jpg",title:"Blouson in technical twill with a hood",price:2675,sizes:[36,38,40,42,44,46],labels:["featured"]},{id:"j2",img:[{color:"navy blue",url:["https://www.armani.com/16/16013352UF_16_d.jpg","https://www.armani.com/16/16013352UF_16_r.jpg"]}],hoverImage:"https://www.armani.com/16/16013352UF_16_f.jpg",title:"Blouson in wool jersey",price:1995,sizes:[36,38,40,42,44,46],labels:[]},{id:"j3",img:[{color:"black",url:["https://www.armani.com/41/41994834DH_16_d.jpg","https://www.armani.com/41/41994834DH_16_r.jpg"]}],hoverImage:"https://www.armani.com/41/41994834DH_16_f.jpg",title:"Double-breasted velvet coat",price:2995,sizes:[40,42,44],labels:["new"]},{id:"j4",img:[{color:"navy blue",url:["https://www.armani.com/16/16004841HB_16_d.jpg","https://www.armani.com/16/16004841HB_16_r.jpg"]}],hoverImage:"https://www.armani.com/16/16004841HB_16_f.jpg",title:"Cashmere trench with a water-repellent coating",price:3265,sizes:[40,42,44],labels:["featured"]}],p=[{id:"t1",img:[{color:"midnight blue",url:["https://www.armani.com/12/12532527MJ_16_d.jpg","https://www.armani.com/12/12532527MJ_16_r.jpg"]}],hoverImage:"https://www.armani.com/12/12532527MJ_16_f.jpg",title:"Cotton piqu\xe9 polo shirt",price:395,sizes:[38,40,42,44,46],labels:["new","featured"]},{id:"t2",img:[{color:"midnight blue",url:["https://www.armani.com/12/12539970AQ_16_d.jpg","https://www.armani.com/12/12539970AQ_16_r.jpg"]},{color:"white",url:["https://www.armani.com/12/12532528PJ_16_d.jpg","https://www.armani.com/12/12532528PJ_16_r.jpg"]}],hoverImage:"https://www.armani.com/12/12539970AQ_16_f.jpg",title:"Striped silk and linen T-shirt",price:665,sizes:[38,40,42,44,46],labels:[]},{id:"t3",img:[{color:"ice",url:["https://www.armani.com/12/12548247RS_16_d.jpg","https://www.armani.com/12/12548247RS_16_r.jpg"]},{color:"avio",url:["https://www.armani.com/12/12490477JE_16_d.jpg"]},{color:"black",url:["https://www.armani.com/12/12280908BD_16_d.jpg"]},{color:"white",url:["https://www.armani.com/12/12061043SG_16_d.jpg"]},{color:"lilla",url:["https://www.armani.com/12/12546920HM_16_d.jpg"]}],hoverImage:"https://www.armani.com/12/12548247RS_16_f.jpg",title:"T-shirt in viscose bamboo jersey",price:315,sizes:[36,38,40,42,44,46,48],labels:["new"]},{id:"t4",img:[{color:"midnight blue",url:["https://www.armani.com/12/12539970AQ_16_d.jpg","https://www.armani.com/12/12539970AQ_16_r.jpg"]},{color:"white",url:["https://www.armani.com/12/12555827ND_16_d.jpg","https://www.armani.com/12/12555827ND_16_r.jpg"]}],hoverImage:"https://www.armani.com/12/12555827ND_16_f.jpg",title:"T-shirt in jersey seersucker with contrasting profiles",price:665,sizes:[38,40,42,44,46],labels:[]}],O=[{id:"s1",img:[{color:"navi blue",url:["https://www.armani.com/38/38809456TI_16_d.jpg","https://www.armani.com/38/38809456TI_16_r.jpg"]},{color:"white",url:["https://www.armani.com/38/38805389WF_16_d.jpg"]}],hoverImage:"https://www.armani.com/38/38809456TI_16_f.jpg",title:"Short-sleeved shirt in cotton",price:375,sizes:[36,38,40,42],labels:["featured"]},{id:"s2",img:[{color:"beige",url:["https://www.armani.com/39/39990332RT_16_d.jpg","https://www.armani.com/39/39990332RT_16_e.jpg"]},{color:"midnight blue",url:["https://www.armani.com/39/39990144VI_16_d.jpg"]},{color:"bordeaux",url:["https://www.armani.com/14/14076490TV_16_d.jpg"]},{color:"black",url:["https://www.armani.com/39/39990144VI_16_d.jpg"]}],hoverImage:"https://www.armani.com/39/39990332RT_16_f.jpg",title:"Polo in cashmere knit",price:400,sizes:[36,38,40,42],labels:["new"]},{id:"s3",img:[{color:"midnight blue",url:["https://www.armani.com/39/39990144VI_16_d.jpg","https://www.armani.com/39/39990144VI_16_e.jpg"]},{color:"beige",url:["https://www.armani.com/39/39990332RT_16_d.jpg"]},{color:"bordeaux",url:["https://www.armani.com/14/14076490TV_16_d.jpg"]},{color:"black",url:["https://www.armani.com/39/39990135AH_16_d.jpg"]}],hoverImage:"https://www.armani.com/39/39990144VI_16_f.jpg",title:"Long-sleeved cashmere polo shirt",price:400,sizes:[36,38,40,42],labels:[]},{id:"s4",img:[{color:"navi blue",url:["https://www.armani.com/38/38963578AR_16_d.jpg"]}],hoverImage:"https://www.armani.com/38/38963578AR_16_f.jpg",title:"Slim-fit shirt in exclusive patterned fabric",price:475,sizes:[36,38,40,42],labels:[]},{id:"s5",img:[{color:"midnight blue",url:["https://www.armani.com/14/14099681EP_16_d.jpg"]},{color:"black",url:["https://www.armani.com/14/14100978TC_16_d.jpg","https://www.armani.com/14/14100978TC_16_r.jpg"]}],hoverImage:"https://www.armani.com/14/14099681EP_16_f.jpg",title:"Knit cashmere polo",price:575,sizes:[36,38,40,42,44,46],labels:["new"]},{id:"s6",img:[{color:"azure",url:["https://www.armani.com/38/38963659CO_16_d.jpg","https://www.armani.com/38/38963659CO_16_r.jpg"]}],hoverImage:"https://www.armani.com/38/38963659CO_16_f.jpg",title:"Striped shirt in cotton and silk",price:565,sizes:[36,38,40,42,44],labels:[]},{id:"s7",img:[{color:"midnight blue",url:["https://www.armani.com/38/38968736CX_16_d.jpg","https://www.armani.com/38/38968736CX_16_r.jpg"]}],hoverImage:"https://www.armani.com/38/38968736CX_16_f.jpg",title:"Silk shirt with a guru collar",price:625,sizes:[36,38,40,42,44],labels:[]},{id:"s8",img:[{color:"avio",url:["https://www.armani.com/38/38968023WB_16_d.jpg","https://www.armani.com/38/38968023WB_16_r.jpg"]}],hoverImage:"https://www.armani.com/38/38968023WB_16_f.jpg",title:"Silk shirt with corozo buttons",price:825,sizes:[36,38,40,42,44],labels:["featured"]}],w=[{id:"p1",img:[{color:"midnight blue",url:["https://www.armani.com/13/13551966XX_16_d.jpg","https://www.armani.com/13/13551966XX_16_r.jpg"]}],hoverImage:"https://www.armani.com/13/13551966XX_16_f.jpg",title:"Silk shirt with a guru collar",price:995,sizes:[32,36,38,40,42],labels:["featured"]},{id:"p2",img:[{color:"blue",url:["https://www.armani.com/13/13588728VM_16_d.jpg","https://www.armani.com/13/13588728VM_16_r.jpg"]}],hoverImage:"https://www.armani.com/13/13588728VM_16_f.jpg",title:"Belted, stretch wool-blend canvas pants",price:1125,sizes:[32,36,38,40,42],labels:["new"]},{id:"p3",img:[{color:"black",url:["https://www.armani.com/13/13554582HK_16_d.jpg","https://www.armani.com/13/13554582HK_16_r.jpg"]}],hoverImage:"https://www.armani.com/13/13554582HK_16_f.jpg",title:"Black pants",price:955,sizes:[30,32,36,38,40,42],labels:[]},{id:"p4",img:[{color:"midnight blue",url:["https://www.armani.com/13/13364739XA_16_d.jpg","https://www.armani.com/13/13364739XA_16_r.jpg"]}],hoverImage:"https://www.armani.com/13/13364739XA_16_f.jpg",title:"Wool flannel pants",price:765,sizes:[32,36,38,40,42],labels:[]},{id:"p5",img:[{color:"midnight blue",url:["https://www.armani.com/13/13574761KH_16_d.jpg","https://www.armani.com/13/13574761KH_16_r.jpg"]}],hoverImage:"https://www.armani.com/13/13574761KH_16_f.jpg",title:"Casual pants",price:865,sizes:[32,36,38,40,42],labels:["featured","new"]}],g=[{id:"l1",img:[{color:"midnight blue",url:["https://www.armani.com/42/42840202LX_16_d.jpg","https://www.armani.com/42/42840202LX_16_r.jpg"]},{color:"black",url:["https://www.armani.com/42/42838029KL_16_d.jpg"]}],hoverImage:"https://www.armani.com/42/42840202LX_16_f.jpg",title:"Regular jeans",price:495,sizes:[32,36,38,40,42],labels:["featured"]},{id:"l2",img:[{color:"blue",url:["https://www.armani.com/42/42841362CI_16_d.jpg"]}],hoverImage:"https://www.armani.com/42/42841362CI_16_d.jpg",title:"Regular jeans",price:695,sizes:[32,36,38,40,42],labels:["new"]},{id:"l3",img:[{color:"black",url:["https://www.armani.com/42/42810148SK_16_d.jpg","https://www.armani.com/42/42810148SK_16_r.jpg"]}],hoverImage:"https://www.armani.com/42/42810148SK_16_f.jpg",title:"Slim-fit jeans in Japanese denim",price:495,sizes:[32,36,38,40,42],labels:[]}],_=a(0),f=r.a.createContext(),x={loading:!1,cart:{},amount:0,priceTotal:0},v=function(e){var t=e.children,a=Object(c.useState)(!1),r=Object(o.a)(a,2),i=r[0],s=r[1],n=Object(c.useState)(!1),l=Object(o.a)(n,2),j=l[0],v=l[1],N=Object(c.useState)(""),y=Object(o.a)(N,2),C=y[0],S=y[1],I=Object(c.useState)([]),k=Object(o.a)(I,2),T=k[0],A=k[1],B=Object(c.useState)(!1),z=Object(o.a)(B,2),M=z[0],E=z[1],R=Object(c.useState)([]),L=Object(o.a)(R,2),P=L[0],D=L[1],H=Object(c.useState)([]),G=Object(o.a)(H,2),F=G[0],K=G[1],V=function(e){var t=e.filter((function(e){return e.labels.includes("featured")})).map((function(e){var t=e.id,a=e.title,c=e.hoverImage,r=e.img,i=e.price;return{id:t,name:a,hoverImg:c,image:r[0].url[0],price:i}})),a=e.filter((function(e){return e.labels.includes("new")})).map((function(e){var t=e.id,a=e.title,c=e.hoverImage,r=e.img,i=e.price;return{id:t,name:a,hoverImg:c,image:r[0].url[0],price:i}}));D(t),K(a)};Object(c.useEffect)((function(){!function(){var e=[];switch(C){case"jackets":e=Object(m.a)(h);break;case"shirts":e=Object(m.a)(O);break;case"t_shirts":e=Object(m.a)(p);break;case"pants":e=Object(m.a)(w);break;case"jeans":e=Object(m.a)(g)}var t=e.map((function(e){var t=e.id,a=e.img,c=e.hoverImage;return{id:t,name:e.title,hoverImg:c,images:a,price:e.price,sizes:e.sizes,labels:e.labels}}));if(A(t),0===P.length){var a=[].concat(Object(m.a)(h),Object(m.a)(O),Object(m.a)(p),Object(m.a)(w),Object(m.a)(g));V(a)}}()}),[C]);var J=Object(c.useReducer)(u,x),U=Object(o.a)(J,2),X=U[0],Y=U[1];return Object(c.useEffect)((function(){Y({type:"GET_TOTALS"})}),[X.cart]),Object(_.jsx)(f.Provider,{value:Object(d.a)({addItem:function(e){Y({type:"ADD",payload:{item:e}})},clearCart:function(){Y({type:"CLEAR_CART"})},handleAmount:function(e,t){Y({type:"HANDLE_AMOUNT",payload:{id:e,type:t}})},removeItem:function(e){Y({type:"REMOVE",payload:e})},toggleSideBar:function(){s(!i)},sideBar:i,toggleCartBar:function(){v(!j)},cartBar:j,categories:b,category:C,setCategory:S,products:T,loading:M,fetchPro:function(e){var t=e.id;E(!1);var a=t.slice(1),c=[].concat(Object(m.a)(h),Object(m.a)(O),Object(m.a)(p),Object(m.a)(w),Object(m.a)(g)).find((function(e){return e.id===a}));return E(!0),c},featureds:P,news:F},X),children:t})},N=function(){return Object(c.useContext)(f)},y=a(2),C=["toggleCartBar","toggleSideBar"],S=function(){var e=N(),t=e.toggleCartBar,a=e.toggleSideBar,r=Object(j.a)(e,C),i=Object(c.useState)(!1),s=Object(o.a)(i,2),l=s[0],d=s[1];return window.addEventListener("scroll",(function(){window.scrollY>=25?d(!0):d(!1)})),Object(_.jsxs)("nav",{className:l?"scrolled":"",children:[Object(_.jsx)(n.b,{to:"/e-commerce/",children:Object(_.jsx)("div",{className:"logo f7",children:Object(_.jsx)("h3",{children:"REVIGA"})})}),Object(_.jsxs)("div",{className:"nav_items",children:[Object(_.jsxs)("button",{className:"cart_icon nav_icon f5",onClick:function(){return t()},children:[Object(_.jsxs)("div",{children:[" ",Object(_.jsx)(y.k,{})," "]}),Object(_.jsxs)("div",{className:"cart_icon_number f1",children:[" ",Object(_.jsx)("h5",{children:r.amount})," "]})]}),Object(_.jsx)("button",{className:"nav_icon f5",onClick:function(){return a()},children:Object(_.jsx)(y.d,{})})]})]})},I=function(){var e=N(),t=e.toggleSideBar,a=e.sideBar;return Object(_.jsxs)("div",{className:a?"side_bar show_side_bar":"side_bar",children:[Object(_.jsx)("button",{className:"side_btn",onClick:function(){return t()},children:Object(_.jsx)(y.l,{})}),Object(_.jsxs)("ul",{className:"side_ul font_lib",children:[Object(_.jsx)("li",{className:"side_li",children:Object(_.jsx)(n.b,{to:"/",children:"Home"})}),Object(_.jsx)("li",{className:"side_li",children:Object(_.jsx)(n.b,{to:"/about",children:"About"})}),Object(_.jsx)("li",{className:"side_li",children:Object(_.jsx)(n.b,{to:"/contacts",children:"Contacts"})})]}),Object(_.jsxs)("ul",{className:"social_ul",children:[Object(_.jsx)("li",{children:Object(_.jsx)("a",{className:"social_icon f5",href:"https://twitter.com/mamad_coder",children:Object(_.jsx)(y.f,{})})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{className:"social_icon f5",href:"https://twitter.com/mamad_coder",children:Object(_.jsx)(y.g,{})})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{className:"social_icon f5",href:"https://twitter.com/mamad_coder",children:Object(_.jsx)(y.n,{})})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{className:"social_icon f5",href:"https://twitter.com/mamad_coder",children:Object(_.jsx)(y.e,{})})})]})]})},k=function(e){var t=e.id,a=e.img,c=e.name,r=e.color,i=e.size,s=e.price,n=e.amount,l=N(),o=l.removeItem,j=l.handleAmount;return Object(_.jsxs)("article",{className:"cart-item",children:[Object(_.jsx)("img",{className:"cart_img",src:a,alt:c}),Object(_.jsxs)("div",{className:"cart-detail",children:[Object(_.jsx)("h5",{className:"cart-title f6",children:c}),Object(_.jsxs)("div",{className:"cart-flex-detail f3",children:[Object(_.jsxs)("p",{children:["size : ",i]}),Object(_.jsxs)("p",{children:["color : ",r]})]}),Object(_.jsxs)("h4",{className:"cart-price-each f2",children:["$ ",s," : for each"]}),Object(_.jsxs)("div",{className:"amount",children:[Object(_.jsxs)("div",{className:"amount-container",children:[Object(_.jsx)("button",{className:"amount-btn f0",onClick:function(){return j(t,"dec")},children:Object(_.jsx)(y.h,{})}),Object(_.jsx)("p",{className:"amount-number f1",children:n}),Object(_.jsx)("button",{className:"amount-btn f0",onClick:function(){return j(t,"inc")},children:Object(_.jsx)(y.i,{})})]}),Object(_.jsx)("button",{className:"remove-btn f3",onClick:function(){return o(t)},children:Object(_.jsx)(y.m,{})})]})]})]})},T=function(){var e=N(),t=e.toggleCartBar,a=e.cartBar,c=e.clearCart,r=e.cart,i=e.priceTotal;return void 0===r.length||0===r.length?Object(_.jsx)("section",{className:a?"cart_bar show_cart_bar":"cart_bar",children:Object(_.jsxs)("header",{children:[Object(_.jsx)("button",{className:"cart_btn",onClick:function(){return t()},children:Object(_.jsx)(y.a,{})}),Object(_.jsx)("h2",{className:"font_lib f6 cream1",children:"Your Bag"}),Object(_.jsx)("h4",{className:"font_lib f5 cream2",children:"is currently empty!"})]})}):Object(_.jsxs)("section",{className:a?"cart_bar show_cart_bar":"cart_bar",children:[Object(_.jsx)("header",{children:Object(_.jsx)("h1",{className:"font_lib f5 cart-header",children:"your bag"})}),Object(_.jsx)("button",{className:"cart_btn",onClick:function(){return t()},children:Object(_.jsx)(y.a,{})}),Object(_.jsx)("div",{className:"cart_container",children:r.map((function(e){return Object(_.jsx)(k,Object(d.a)({},e),e.id)}))}),Object(_.jsx)("hr",{}),Object(_.jsxs)("div",{className:"cart-footer",children:[Object(_.jsxs)("div",{className:"cart-total",children:[Object(_.jsxs)("h3",{children:["total :  ",Object(_.jsxs)("span",{children:["$ ",i]})]}),Object(_.jsx)("button",{className:"clear-btn f2",onClick:c,children:"clear cart"})]}),Object(_.jsx)("div",{className:"center-flex",children:Object(_.jsx)(n.b,{className:"check-btn f5",onClick:function(){return t()},to:"/checkout",children:"check out"})})]})]})},A=function(){return Object(_.jsxs)("footer",{children:[Object(_.jsx)("h2",{className:"footer_h2 f7",children:"follow us on"}),Object(_.jsxs)("ul",{className:"footer_social_ul",children:[Object(_.jsx)("li",{children:Object(_.jsx)("a",{className:"social_icon f5",href:"https://twitter.com/mamad_coder",children:Object(_.jsx)(y.f,{})})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{className:"social_icon f5",href:"https://twitter.com/mamad_coder",children:Object(_.jsx)(y.g,{})})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{className:"social_icon f5",href:"https://twitter.com/mamad_coder",children:Object(_.jsx)(y.n,{})})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{className:"social_icon f5",href:"https://twitter.com/mamad_coder",children:Object(_.jsx)(y.e,{})})})]}),Object(_.jsxs)("ul",{className:"footer_links_ul",children:[Object(_.jsx)("li",{children:Object(_.jsx)(n.b,{className:"footer_links_a f2",to:"/",children:"Contacts"})}),Object(_.jsx)("li",{children:Object(_.jsx)(n.b,{className:"footer_links_a f2",to:"/",children:"privacy & policy"})}),Object(_.jsx)("li",{children:Object(_.jsx)(n.b,{className:"footer_links_a f2",to:"/",children:"cookies"})})]}),Object(_.jsxs)("p",{className:"copyright f1",children:["copyright ",Object(_.jsx)(y.j,{})," ",(new Date).getFullYear()," AllRights Reserved"]})]})},B=function(){var e=N(),t=e.categories,a=e.setCategory,i=Object(c.useState)(!0),s=Object(o.a)(i,2),l=s[0],j=s[1],d=Object(c.useRef)();Object(c.useEffect)((function(){d.current=document.getElementsByClassName("cat_slider")[0]}),[]);function m(e,t,a,c,r){var i=0,s=setInterval((function(){"left"==t?e.scrollLeft-=r:e.scrollLeft+=r,(i+=r)>=c&&window.clearInterval(s)}),a)}return window.addEventListener("scroll",(function(){window.scrollY>=500?j(!1):window.scrollY<1&&j(!0)})),Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsxs)("section",{className:l?"cat_container show-cat":"cat_container hide-cat",children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"cat_angle ang_left",onClick:function(){m(d.current,"left",25,100,10)},children:Object(_.jsx)(y.b,{})}),Object(_.jsx)("div",{className:"cat_slider hide_slider",children:t.map((function(e){var t=e.title;return t=t.toLowerCase(),Object(_.jsxs)(n.b,{className:"cat",onClick:function(){a(t)},to:"/products/".concat(t),children:[Object(_.jsx)("img",{className:"cat_img",src:e.img,alt:e.title}),Object(_.jsx)("p",{className:"cat_txt f4",children:e.title})]},e.id)}))})]}),Object(_.jsx)("div",{className:"cat_angle ang_right",onClick:function(){m(d.current,"right",25,100,10)},children:Object(_.jsx)(y.c,{})}),l?Object(_.jsx)("button",{className:"zabane",onClick:function(){return j(!l)},children:Object(_.jsx)(y.b,{})}):""]}),l?"":Object(_.jsx)("button",{className:"abs_btn",onClick:function(){return j(!l)},children:Object(_.jsx)(y.c,{})})]})},z=function(e){var t=e.label,a=e.title,r=(e.key,N()),i=r.featureds,s=r.news,l="featureds"===t?i:s,o=Object(c.useRef)();function j(e,t,a,c,r){var i=0,s=setInterval((function(){"left"===t?e.scrollLeft-=r:e.scrollLeft+=r,(i+=r)>=c&&window.clearInterval(s)}),a)}return Object(c.useEffect)((function(){o.current=document.getElementsByClassName("".concat(a,"class"))[0]}),[]),Object(_.jsxs)("section",{className:"featured_container",children:[Object(_.jsx)("h2",{className:"font_lib f6",children:a}),Object(_.jsx)("div",{className:"fang_angle fang_left f6",onClick:function(){j(o.current,"left",25,120,10)},children:Object(_.jsx)(y.b,{})}),Object(_.jsx)("div",{className:"featured_slider hide_slider ".concat(a,"class"),children:l.map((function(e){return Object(_.jsxs)(n.b,{className:"product slider_product",to:"/product/:".concat(e.id),children:[Object(_.jsx)("img",{className:"product_img",src:e.image,alt:e.name}),Object(_.jsxs)("div",{className:"product_datail_container",children:[Object(_.jsx)("p",{className:"product_title f2",children:e.name}),Object(_.jsxs)("p",{className:"product_price f3",children:["$ ",e.price]})]})]},"".concat(t).concat(e.id))}))}),Object(_.jsx)("div",{className:"fang_angle fang_right f6",onClick:function(){j(o.current,"right",25,160,10)},children:Object(_.jsx)(y.c,{})})]})},M=function(){return Object(_.jsxs)("div",{className:"home",children:[Object(_.jsx)(B,{}),Object(_.jsxs)("section",{className:"hero_1_container",children:[Object(_.jsxs)("h1",{className:"font_lib moto",children:["STYLE ",Object(_.jsx)("br",{})," in ",Object(_.jsx)("br",{})," ADVANCE"]}),Object(_.jsx)("div",{className:"hero_1"})]}),Object(_.jsx)(z,{label:"featureds",title:"Featured Products"},0),Object(_.jsxs)("section",{className:"hero_1_container hero_2_container",children:[Object(_.jsx)("div",{className:"hero_1 hero_2"}),Object(_.jsxs)("h1",{className:"font_lib moto moto2",children:["ADNANCE ",Object(_.jsx)("br",{})," in ",Object(_.jsx)("br",{})," DETAILS"]})]}),Object(_.jsx)(z,{label:"news",title:"New Products"},1)]})},E=function(){return Object(_.jsx)("h1",{className:"font_lib",children:"About"})},R=function(){var e=N(),t=e.category,a=e.products;return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsx)(B,{}),Object(_.jsxs)("section",{className:"products",children:[Object(_.jsx)("h1",{className:"font_lib f6 header_title",children:t}),Object(_.jsx)("div",{className:"product_container",children:a.map((function(e){return Object(_.jsxs)(n.b,{className:"product",to:"/product/:".concat(e.id),children:[Object(_.jsx)("div",{className:"product_img_container",children:Object(_.jsx)("img",{className:"product_img",src:e.images[0].url[0],alt:e.name,onTouchStart:function(t){return t.currentTarget.src=e.hoverImg},onMouseEnter:function(t){return t.currentTarget.src=e.hoverImg},onTouchEnd:function(t){return t.currentTarget.src=e.images[0].url[0]},onMouseLeave:function(t){return t.currentTarget.src=e.images[0].url[0]}})}),Object(_.jsxs)("div",{className:"product_datail_container",children:[Object(_.jsx)("p",{className:"product_title f3",children:e.name}),Object(_.jsxs)("p",{className:"product_price f2",children:["$ ",e.price]})]})]},e.id)}))})]})]})},L=function(){var e=Object(l.g)(),t=Object(c.useRef)(),a=Object(c.useState)(!0),i=Object(o.a)(a,2),s=i[0],n=i[1];Object(c.useEffect)((function(){n(!0);var a=d(e);t.current=a,O(a.img[0]),null!==t.current&&n(!1)}),[e]);var j=N(),d=j.fetchPro,m=j.addItem,u=j.toggleCartBar,b=Object(c.useState)({}),h=Object(o.a)(b,2),p=h[0],O=h[1],w=Object(c.useState)(0),g=Object(o.a)(w,2),f=g[0],x=g[1],v=Object(c.useState)(1),y=Object(o.a)(v,2),C=y[0],S=y[1],I=function(){if(0===f)alert("Please select your size");else{var e=t.current,a={id:1,proId:"".concat(e.id),name:"".concat(e.title),color:p.color,price:e.price,amount:C,size:f,img:p.url[0]};m(a)}},k=function(e){for(var t=e.target.parentElement.getElementsByClassName("btnArr"),a=0;a<t.length;a++)t[a].classList.contains("selected")&&t[a].classList.remove("selected");e.target.classList.add("selected")};if(!1===s){var T=t.current,A=T.title,B=T.price,M=T.img,E=T.sizes;return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsx)("section",{className:"sngl",children:Object(_.jsxs)("form",{className:"abs",onSubmit:function(e){e.preventDefault()},children:[Object(_.jsxs)("div",{className:"sngl_grid",children:[Object(_.jsx)("div",{className:"gr2 sngl_clrs",children:M.map((function(e){var t=e.color,a=e.url;return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsx)("input",{type:"button",className:"clr btnArr f2",onClick:function(e){O({color:t,url:a}),k(e)},id:t,value:t},t),Object(_.jsx)("label",{for:t})]})}))}),Object(_.jsx)("div",{className:"gr3 sngl_sizes",children:E.map((function(e){return Object(_.jsx)("button",{className:"size_btn btnArr f2",onClick:function(t){x(e),k(t)},children:e},e)}))}),Object(_.jsx)("div",{className:"gr4 sngl_img_cnt",children:Object(_.jsx)("img",{className:"sngl_img",src:p.url[0],alt:A})})]}),Object(_.jsx)("div",{className:"grd_txt",children:Object(_.jsxs)("div",{className:"sngl_txt_container",children:[Object(_.jsx)("p",{className:"sngl_product_title font_lib f5",children:A}),Object(_.jsx)("p",{className:"product_desc",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis semper fringilla. Aliquam fringilla justo at nisi vulputate pharetra. Curabitur bibendum ultrices mi id accumsan. Nunc vestibulum commodo bibendum. Cras accumsan lectus sit amet metus ornare, ac bibendum elit dignissim."}),Object(_.jsxs)("div",{className:"amount_price f3",children:[Object(_.jsxs)("p",{className:"product_price",children:["$",B]}),Object(_.jsx)("input",{className:"input_amount",type:"number",placeholder:"1",onChange:function(e){return S(parseInt(e.target.value))}})]}),Object(_.jsxs)("div",{className:"sngl_repeat_btns",children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{children:"color: "}),Object(_.jsx)("select",{onChange:function(e){O(M[e.currentTarget.value])},children:M.map((function(e,t){var a=e.color;e.url;return Object(_.jsx)(r.a.Fragment,{children:Object(_.jsx)("option",{id:a,value:t,children:a},a)})}))})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{children:"size: "}),Object(_.jsx)("select",{onChange:function(e){x(e.currentTarget.value)},children:E.map((function(e){return Object(_.jsx)("option",{value:e,children:e},e)}))})]})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("input",{className:"input_submit",type:"submit",id:"buy_btn",onClick:function(){return I()}}),Object(_.jsx)("label",{className:"input_label f2 onHover",for:"buy_btn",children:"add to cart"}),Object(_.jsx)("input",{className:"input_submit",type:"submit",id:"submit_btn",onClick:function(){I(),0!==f&&u()}}),Object(_.jsx)("label",{className:"input_label f2 onHover",for:"submit_btn",children:"check out"})]})]})})]})}),Object(_.jsx)("section",{children:Object(_.jsx)(z,{label:"featureds",title:"You may also like these"},"1")})]})}return Object(_.jsx)("h1",{children:"Loading"})},P=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, Democratic Republic of the Congo","Cook Islands","Costa Rica","Cote D'Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and Mcdonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kosovo","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, the Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands, British","Virgin Islands, U.s.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],D=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=(t[0],t[1]),r=Object(c.useState)(""),i=Object(o.a)(r,2),s=(i[0],i[1]),l=Object(c.useState)(""),j=Object(o.a)(l,2),d=(j[0],j[1]),m=Object(c.useState)(""),u=Object(o.a)(m,2),b=(u[0],u[1]),h=N(),p=h.cart;h.priceTotal;return Object(_.jsxs)("article",{className:"checkout-sec",children:[Object(_.jsx)("h2",{className:"checkout-header f6",children:"Post Information"}),Object(_.jsxs)("form",{className:"checkout-form f4",children:[Object(_.jsxs)("select",{id:"country",name:"country",onChange:function(e){a(e.currentTarget.value)},required:!0,children:[Object(_.jsx)("option",{children:"select country"}),P.map((function(e){return Object(_.jsx)("option",{value:e,children:e})}))]}),Object(_.jsx)("br",{}),Object(_.jsx)("label",{for:"city",children:"city :"}),Object(_.jsx)("br",{}),Object(_.jsx)("input",{className:"f3",type:"text",id:"city",onChange:function(e){return s(e.currentTarget.value)}}),Object(_.jsx)("br",{}),Object(_.jsx)("label",{for:"address",children:"address:"}),Object(_.jsx)("br",{}),Object(_.jsx)("input",{className:"f3",type:"text",id:"adress",onChange:function(e){return d(e.currentTarget.value)}}),Object(_.jsx)("br",{}),Object(_.jsx)("label",{for:"postal-code",children:"postal code:"}),Object(_.jsx)("br",{}),Object(_.jsx)("input",{className:"f3",type:"text",id:"postal-code",onChange:function(e){return b(e.currentTarget.value)}})]}),Object(_.jsxs)("section",{className:"review-sec",children:[Object(_.jsx)("h2",{className:"checkout-header f6",children:"Your Order"}),Object(_.jsx)("div",{className:"review-container",children:Object(_.jsxs)("table",{className:"f2",children:[Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"Product"}),Object(_.jsx)("th",{children:"Color"}),Object(_.jsx)("th",{children:"Size"}),Object(_.jsx)("th",{children:"Price"}),Object(_.jsx)("th",{children:"Amnt"}),Object(_.jsx)("th",{children:"Sum"})]}),p.map((function(e){return Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:e.name}),Object(_.jsx)("td",{children:e.color}),Object(_.jsx)("td",{children:e.size}),Object(_.jsx)("td",{children:e.price}),Object(_.jsx)("td",{children:e.amount}),Object(_.jsx)("td",{children:e.price*e.amount})]})}))]})})]}),Object(_.jsxs)("section",{className:"pay-sec f4",children:[Object(_.jsxs)("form",{className:"pay-form",children:[Object(_.jsx)("p",{className:"f6",children:"Please select a payment method:"}),Object(_.jsx)("input",{type:"radio",id:"paypal",name:"payment",value:"paypal"}),Object(_.jsx)("label",{for:"paypal",children:"PayPal"}),Object(_.jsx)("br",{}),Object(_.jsx)("input",{type:"radio",id:"credit",name:"payment",value:"credit"}),Object(_.jsx)("label",{for:"credit",children:"Credit Card"}),Object(_.jsx)("br",{})]}),Object(_.jsxs)("div",{className:"pay-btn-div",children:[Object(_.jsx)(n.b,{className:"pay-btn f6",to:"/success",children:"pay"}),Object(_.jsx)(n.b,{className:"pay-btn f3",to:"/",children:"Back to Home"})]})]})]})},H=function(){var e=N().clearCart;return Object(c.useEffect)((function(){e()}),[]),Object(_.jsxs)("article",{className:"success",children:[Object(_.jsx)("h1",{className:"success-header f8",children:"Your order has submited successfully!"}),Object(_.jsx)("h3",{className:"f5",children:"you will receive your order untill next 5 days"}),Object(_.jsx)("div",{className:"success-btn f6",children:Object(_.jsx)(n.b,{to:"/",children:"Back to Home"})})]})};function G(){return Object(_.jsx)("section",{className:"error-page section",children:Object(_.jsxs)("div",{className:"error-container",children:[Object(_.jsx)("h1",{children:"oops! it's a dead end"}),Object(_.jsx)(n.b,{to:"/",className:"btn btn-primary",children:"back home"})]})})}function F(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var K=function(){return console.log("/e-commerce"),Object(_.jsx)("div",{id:"wrapper",children:Object(_.jsxs)(n.a,{children:[Object(_.jsx)(F,{}),Object(_.jsx)(I,{}),Object(_.jsx)(S,{}),Object(_.jsx)(T,{}),Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)(l.c,{children:[Object(_.jsx)(l.a,{exact:!0,path:"/e-commerce/",children:Object(_.jsx)(M,{})}),Object(_.jsx)(l.a,{path:"/products",children:Object(_.jsx)(R,{})}),Object(_.jsx)(l.a,{path:"/product/:id",children:Object(_.jsx)(L,{})}),Object(_.jsx)(l.a,{path:"/checkout",children:Object(_.jsx)(D,{})}),Object(_.jsx)(l.a,{path:"/about",children:Object(_.jsx)(E,{})}),Object(_.jsx)(l.a,{path:"/success",children:Object(_.jsx)(H,{})}),Object(_.jsx)(l.a,{path:"*",children:Object(_.jsx)(G,{})})]})}),Object(_.jsx)(A,{})]})})};a(34);s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(v,{children:Object(_.jsx)(K,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.02f840db.chunk.js.map