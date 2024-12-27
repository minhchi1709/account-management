import{a as x,b as V,c as H,d as K,f as Q,g as W,j as X}from"./chunk-TBROEZWS.js";import{a as b}from"./chunk-UV5LCXQC.js";import{g as _,h as J,j as L,k as Z,na as k,oa as N,pa as j,qa as A}from"./chunk-Y4FW7FD5.js";import{Cb as M,Eb as l,Hb as U,Jb as z,Ob as I,Pb as o,Qb as T,Rb as q,Sb as g,Ta as B,Va as s,Wa as c,Xb as v,Yb as E,aa as w,ka as f,la as O,lb as h,nb as p,ra as $,sa as S,ta as C,vc as y,wb as n,wc as P,xb as a,yb as u,zb as F,zc as G}from"./chunk-AVNLXCBV.js";function ct(i,d){if(i&1&&(n(0,"div")(1,"li",1)(2,"div",4)(3,"a",5),o(4),a(),n(5,"div",6),u(6,"span",7)(7,"span",8)(8,"span",9)(9,"span",10)(10,"span",11)(11,"span",12)(12,"span",13),a()()()()),i&2){let t=d.$implicit,e=l();s(3),U("id",t),z("href","years/",e.year,"/months/",t,"",B),s(),q(" ",e.dateService.getMonthNameDE(t)," ")}}var nt=(()=>{class i{constructor(t,e,r){this.transactionService=t,this.router=e,this.dateService=r,this.months=[],this.year=0}ngOnInit(){this.year=this.router.snapshot.params.year,this.transactionService.getAllMonths({year:this.year}).subscribe({next:t=>{this.months=t.map(e=>this.capitalize(e))},error:t=>console.log(t)})}capitalize(t){let e=t.toLowerCase();return e.charAt(0).toUpperCase()+e.slice(1)}static{this.\u0275fac=function(e){return new(e||i)(c(x),c(_),c(b))}}static{this.\u0275cmp=f({type:i,selectors:[["app-navigation-year"]],standalone:!0,features:[v],decls:5,vars:1,consts:[[1,"nav","flex-column"],[1,"nav-item"],["aria-disabled","true",1,"nav-link","disabled"],[4,"ngFor","ngForOf"],[1,"box"],[1,"nav-link","nav-nav",3,"id","href"],[1,"space"],[1,"star",2,"--i","31"],[1,"star",2,"--i","12"],[1,"star",2,"--i","57"],[1,"star",2,"--i","93"],[1,"star",2,"--i","23"],[1,"star",2,"--i","70"],[1,"star",2,"--i","6"]],template:function(e,r){e&1&&(n(0,"ul",0)(1,"li",1)(2,"a",2),o(3,"Monat ausw\xE4hlen"),a()(),h(4,ct,13,5,"div",3),a()),e&2&&(s(4),p("ngForOf",r.months))},dependencies:[y],styles:["a[_ngcontent-%COMP%]{color:#000}"]})}}return i})();function pt(i,d){if(i&1&&(n(0,"tbody")(1,"tr")(2,"td"),o(3),a(),n(4,"td"),o(5),a()()()),i&2){let t=d.$implicit,e=l(2);s(3),T(t.label),s(2),g("",e.currencyManagementService.numberInEUR(t.y)," | ",e.currencyManagementService.numberInVND(e.Math.round(t.y*e.rate)),"")}}function ut(i,d){if(i&1&&(n(0,"div"),u(1,"app-graph",2),n(2,"table",3)(3,"thead")(4,"tr")(5,"th"),o(6,"Monat"),a(),n(7,"th"),o(8,"Betrag"),a()()(),h(9,pt,6,3,"tbody",4),n(10,"tbody")(11,"tr")(12,"th"),o(13,"Summe"),a(),n(14,"td"),o(15),a()()()()()),i&2){let t=l();s(),p("title",t.title)("vibDataPoints",t.dataPoints)("xTitle",t.xTitle)("yTitle",t.yTitle),s(8),p("ngForOf",t.dataPoints),s(6),g("",t.currencyManagementService.numberInEUR(t.sum)," | ",t.currencyManagementService.numberInVND(t.Math.round(t.sum*t.rate))," ")}}function ht(i,d){i&1&&u(0,"app-loader")}var rt=(()=>{class i{constructor(t,e,r,m,R,Y){this.transactionService=t,this.router=e,this.currencyService=r,this.currencyManagementService=m,this.dateService=R,this.observer=Y,this.loaded=!1,this.rate=1,this.months=[],this.year=0,this.sum=0,this.dataPoints=[],this.title="",this.xTitle="",this.yTitle="",this.Math=Math}ngOnInit(){this.year=this.router.snapshot.params.year,this.init(),this.observer.objectUpdate$.subscribe(t=>{t&&this.init()}),this.title="Monatliche Analyse",this.xTitle="Monat",this.yTitle="\u20AC",this.currencyService.getTodayRate({bank:"vib"}).subscribe({next:t=>{this.rate=t.rate||0}})}init(){this.transactionService.getAllMonthTotals({year:this.year}).subscribe({next:t=>{this.sum=0,this.dataPoints=t.map(e=>({label:this.dateService.getMonthNameDE(this.capitalize(e.month||"")),y:e.total})),this.months=t.map(e=>this.capitalize(e.month||"")),t.map(e=>e.total).forEach(e=>this.sum+=e||0),this.loaded=!0}})}capitalize(t){let e=t.toLowerCase();return e.charAt(0).toUpperCase()+e.slice(1)}static{this.\u0275fac=function(e){return new(e||i)(c(x),c(_),c(k),c(N),c(b),c(V))}}static{this.\u0275cmp=f({type:i,selectors:[["app-year-details"]],standalone:!0,features:[v],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[3,"title","vibDataPoints","xTitle","yTitle"],[1,"table","table-hover"],[4,"ngFor","ngForOf"]],template:function(e,r){if(e&1&&h(0,ut,16,7,"div",1)(1,ht,1,0,"ng-template",null,0,E),e&2){let m=I(2);p("ngIf",r.loaded)("ngIfElse",m)}},dependencies:[y,Z,P,j,A],styles:["app-year-details[_ngcontent-%COMP%]{height:100%}"]})}}return i})();var at=(()=>{class i{ngOnInit(){let t=window.location.href.split("/");t.includes("years")&&(document.querySelectorAll(".nav-link").forEach(e=>{e.classList.remove("active")}),document.getElementById(t[t.indexOf("years")+1])?.classList.add("active"))}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=f({type:i,selectors:[["app-overview-page"]],standalone:!0,features:[v],decls:6,vars:0,consts:[[1,"row",2,"height","100%"],[1,"col-1"],[1,"col",2,"height","100%"]],template:function(e,r){e&1&&(n(0,"div",0)(1,"div",1),u(2,"app-navigation-year"),a(),n(3,"div",2),u(4,"app-create-transaction")(5,"router-outlet"),a()())},dependencies:[X,nt,J]})}}return i})();function ft(i,d){if(i&1&&(n(0,"h1",7),o(1),a()),i&2){let t=l(2);s(),g(" Aktuelle Summe: ",t.currentSum.toFixed(2)," \u20AC | ",t.currencyManagementService.numberInVND(t.Math.round(t.currentSum)*t.rate)," VND ")}}function vt(i,d){if(i&1){let t=F();n(0,"button",11),M("click",function(){S(t);let r=l().$implicit,m=l(2);return C(m.addToSum(r))}),n(1,"mat-icon"),o(2,"add"),a()()}}function gt(i,d){if(i&1){let t=F();n(0,"button",9),M("click",function(){S(t);let r=l().$implicit,m=l(2);return C(m.removeFromSum(r))}),n(1,"mat-icon"),o(2,"remove"),a()()}}function yt(i,d){if(i&1){let t=F();n(0,"tbody")(1,"tr")(2,"td"),o(3),a(),n(4,"td"),o(5),a(),n(6,"td"),o(7),a(),n(8,"td")(9,"button",8),M("click",function(){let r=S(t).$implicit,m=l(2);return C(m.editTransaction(m.transactions[r]))}),n(10,"mat-icon"),o(11,"edit"),a()()(),n(12,"td")(13,"button",9),M("click",function(){let r=S(t).$implicit,m=l(2);return C(m.deleteTransaction(m.transactions[r]))}),n(14,"mat-icon"),o(15,"delete"),a()()(),n(16,"td"),h(17,vt,3,0,"button",10)(18,gt,3,0,"ng-template",null,1,E),a()()()}if(i&2){let t=d.$implicit,e=I(19),r=l(2);s(3),T(r.dateService.reformatDate(r.transactions[t].transaction.date||"")),s(2),g("",r.currencyManagementService.numberInEUR(r.transactions[t].transaction.value)," | ",r.currencyManagementService.numberInVND(r.Math.round(((r.transactions[t]==null?null:r.transactions[t].transaction.value)||1)*r.rate)),""),s(2),T(r.transactions[t].transaction.description),s(10),p("ngIf",!r.transactions[t].included)("ngIfElse",e)}}function _t(i,d){if(i&1&&(n(0,"div"),u(1,"app-graph",3),h(2,ft,2,2,"h1",4),n(3,"table",5)(4,"thead")(5,"tr")(6,"th"),o(7,"Datum"),a(),n(8,"th"),o(9,"Betrag"),a(),n(10,"th"),o(11,"Zweck"),a(),u(12,"th")(13,"th")(14,"th"),a()(),h(15,yt,20,6,"tbody",6),n(16,"tbody")(17,"tr")(18,"th"),o(19,"Summe"),a(),n(20,"td"),o(21),a()()()()()),i&2){let t=l();s(),p("title",t.title)("vibDataPoints",t.dataPoints)("xTitle",t.xTitle)("yTitle",t.yTitle),s(),p("ngIf",t.indexes.length),s(13),p("ngForOf",t.Array.from(t.Array(t.transactions.length).keys())),s(6),g("",t.currencyManagementService.numberInEUR(t.sum)," | ",t.currencyManagementService.numberInVND(t.Math.round(t.sum*t.rate))," ")}}function xt(i,d){i&1&&u(0,"app-loader")}var ot=(()=>{class i{constructor(t,e,r,m,R,Y){this.transactionService=t,this.router=e,this.dateService=r,this.currencyService=m,this.currencyManagementService=R,this.observer=Y,this.loaded=!1,this.rate=1,this.year=0,this.month="",this.transactions=[],this.indexes=[],this.sum=0,this.dataPoints=[],this.currentSum=0,this.title="",this.xTitle="",this.yTitle="",this.Math=Math,this.Array=Array}ngOnChanges(t){console.log("change")}ngOnInit(){this.observer.objectUpdate$.subscribe(t=>{t&&this.init()}),this.currencyService.getTodayRate({bank:"vib"}).subscribe({next:t=>{this.rate=t.rate||0}}),this.year=Number(window.location.href.split("/")[4]),this.month=this.router.snapshot.params.month,this.init(),setTimeout(()=>{window.location.href.split("/").includes("months")&&(document.querySelectorAll(".nav-link").forEach(e=>{e.classList.remove("active")}),document.getElementById(String(this.year))?.classList.add("active"),document.getElementById(String(this.month))?.classList.add("active"))},100)}init(){this.transactionService.getAllTransactionsOfMonth({year:this.year,month:this.dateService.getMonthValue(this.month)}).subscribe({next:t=>{this.transactions=t.map(e=>({transaction:e,included:!1})),this.transactions=this.transactions.reverse(),this.sum=this.currencyManagementService.sum(t),this.dataPoints=t.map(e=>({label:this.dateService.reformatDate(e.date||""),y:e.value})),this.title=`Analyse im ${this.month}`,this.xTitle="Datum",this.yTitle="\u20AC",setTimeout(()=>this.loaded=!0,200)},error:t=>console.log(t)})}addToSum(t){this.transactions[t].included=!0,this.currentSum+=this.transactions[t].transaction.value,this.indexes.push(t)}removeFromSum(t){this.transactions[t].included=!1,this.currentSum-=this.transactions[t].transaction.value,this.indexes=this.indexes.filter(e=>e!=t)}editTransaction(t){this.observer.detailNotify({type:"update",object:t.transaction})}deleteTransaction(t){this.transactionService.deleteTransaction({id:t.transaction.id||0}).subscribe({next:()=>{this.observer.updateNotify(t)}})}static{this.\u0275fac=function(e){return new(e||i)(c(x),c(_),c(b),c(k),c(N),c(V))}}static{this.\u0275cmp=f({type:i,selectors:[["app-month-details"]],standalone:!0,features:[$,v],decls:3,vars:2,consts:[["loading",""],["included",""],[4,"ngIf","ngIfElse"],[3,"title","vibDataPoints","xTitle","yTitle"],["id","current-sum",4,"ngIf"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["id","current-sum"],["mat-mini-fab","","data-bs-toggle","modal","data-bs-target","#staticBackdrop","color","primary",3,"click"],["mat-mini-fab","","color","warn",3,"click"],["mat-mini-fab","","color","basic",3,"click",4,"ngIf","ngIfElse"],["mat-mini-fab","","color","basic",3,"click"]],template:function(e,r){if(e&1&&h(0,_t,22,8,"div",2)(1,xt,1,0,"ng-template",null,0,E),e&2){let m=I(2);p("ngIf",r.loaded)("ngIfElse",m)}},dependencies:[y,P,j,W,Q,K,H,A],styles:["#current-sum[_ngcontent-%COMP%]{background-color:#f3cef3;margin-left:10rem;margin-right:10rem;padding:2rem;border-radius:20px;box-shadow:0 6px 20px #0003,0 6px 20px #00000030;text-align:center}app-month-details[_ngcontent-%COMP%]{height:100%}.Btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;width:45px;height:45px;border:none;border-radius:50%;cursor:pointer;position:relative;overflow:hidden;transition-duration:.3s;box-shadow:2px 2px 10px #0003;background-color:#ff4141}.sign[_ngcontent-%COMP%]{width:100%;transition-duration:.3s;display:flex;align-items:center;justify-content:center}.sign[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:17px}.sign[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.text[_ngcontent-%COMP%]{position:absolute;right:0%;width:0%;opacity:0;color:#fff;font-size:1.2em;font-weight:600;transition-duration:.3s}"]})}}return i})();var bt=[{path:":year",component:at,children:[{path:"",component:rt},{path:"months/:month",component:ot}]}],st=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=O({type:i})}static{this.\u0275inj=w({imports:[L.forChild(bt),L]})}}return i})();var Kt=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=O({type:i})}static{this.\u0275inj=w({imports:[G,st]})}}return i})();export{Kt as YearOverviewModule};