import{b as ie,c as T,d as oe,e as ae,f as se,g as le,h as C,i as x,j as ce}from"./chunk-MFTLXP5R.js";import{Y as v,Z as k,_ as re,c as q,d as Q,e as ee,h as te,i as ne,na as de,oa as pe,pa as me,qa as he}from"./chunk-HVHTCMX4.js";import{$ as M,$a as j,Cb as V,Eb as W,Ha as Y,Hb as B,Ib as J,Ob as $,Pb as h,Qb as U,Sb as X,Ta as N,Va as d,Wa as p,Xa as F,Xb as y,Yb as G,Z as w,Za as R,bb as L,ca as P,cb as z,ea as D,f as b,fa as I,ka as g,lb as _,na as E,nb as m,nc as H,vc as K,wb as s,wc as Z,xb as l,yb as c}from"./chunk-IPVIUVLN.js";function De(i,t){if(i&1&&(s(0,"div",2)(1,"div")(2,"div",3)(3,"button",4)(4,"strong"),h(5),l(),s(6,"div",5),c(7,"div",6),l(),s(8,"div",7),c(9,"div",8)(10,"div",8),l()()(),c(11,"app-graph",9),l()()),i&2){let r=W();d(5),X("Kontostands: ",r.currencyManagementService.numberInEUR(r.balance)," | ",r.currencyManagementService.numberInVND(r.Math.round(r.balance*r.rate)),""),d(6),m("setTitle",r.title)("setVIB",r.dataPoints)("setXTitle",r.xTitle)("setYTitle",r.yTitle)}}function ke(i,t){i&1&&c(0,"app-loader")}var ue=(()=>{let t=class t{constructor(e,n,o,a){this.transactionService=e,this.currencyService=n,this.currencyManagementService=o,this.observer=a,this.loaded=!1,this.balance=0,this.rate=0,this.dataPoints=[],this.title="",this.xTitle="",this.yTitle="",this.Math=Math}ngOnInit(){this.observer.objectUpdate$.subscribe(e=>{e&&this.init()}),this.init(),this.title="J\xE4hrliche Analyse",this.xTitle="Jahr",this.yTitle="\u20AC",this.currencyService.getTodayRate({bank:"vib"}).subscribe({next:e=>{this.rate=e.rate||0,this.loaded=!0}})}init(){this.transactionService.getAllYears().subscribe({next:e=>{for(let n of e.reverse())this.transactionService.getAllTransactionsOfYear({year:n}).subscribe({next:o=>{this.dataPoints.push({label:n,y:this.currencyManagementService.sum(o)})}})}}),this.transactionService.getAllTransactions().subscribe({next:e=>this.balance=this.currencyManagementService.sum(e)})}};t.\u0275fac=function(n){return new(n||t)(p(C),p(de),p(pe),p(x))},t.\u0275cmp=g({type:t,selectors:[["app-account-balance"]],standalone:!0,features:[y],decls:3,vars:2,consts:[["loading",""],["style","display: flex; align-items: center; justify-content: center; width: 100%",4,"ngIf","ngIfElse"],[2,"display","flex","align-items","center","justify-content","center","width","100%"],["id","account-balance"],["type","button",1,"btn"],["id","container-stars"],["id","stars"],["id","glow"],[1,"circle"],[3,"setTitle","setVIB","setXTitle","setYTitle"]],template:function(n,o){if(n&1&&_(0,De,12,6,"div",1)(1,ke,1,0,"ng-template",null,0,G),n&2){let a=$(2);m("ngIf",o.loaded)("ngIfElse",a)}},dependencies:[Z,me,he],styles:["#account-balance[_ngcontent-%COMP%]{background-color:#212121;margin-bottom:10rem;border-radius:20px;box-shadow:0 6px 20px #0003,0 6px 20px #00000030;margin-top:2rem;display:flex;justify-content:center;align-items:center;padding:2rem;width:1000px}app-account-balance[_ngcontent-%COMP%]{height:100%}.btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:4rem;overflow:hidden;background-size:300% 300%;cursor:pointer;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem);border-radius:5rem;transition:.5s;animation:_ngcontent-%COMP%_gradient_301 5s ease infinite;border:double 4px transparent;background-image:linear-gradient(#212121,#212121),linear-gradient(137.48deg,#ffdb3b 10%,#fe53bb 45%,#8f51ea 67%,#04f 87%);background-origin:border-box;background-clip:content-box,border-box}#container-stars[_ngcontent-%COMP%]{position:absolute;z-index:-1;width:100%;height:100%;overflow:hidden;transition:.5s;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem);border-radius:5rem}strong[_ngcontent-%COMP%]{z-index:2;font-family:Roboto,sans-serif;font-size:20px;letter-spacing:5px;color:#fff;text-shadow:0 0 4px white}#glow[_ngcontent-%COMP%]{position:absolute;display:flex;width:12rem}.circle[_ngcontent-%COMP%]{width:100%;height:30px;filter:blur(2rem);animation:_ngcontent-%COMP%_pulse_3011 4s infinite;z-index:-1}.circle[_ngcontent-%COMP%]:nth-of-type(1){background:#fe53baa2}.circle[_ngcontent-%COMP%]:nth-of-type(2){background:#8e51eab4}.btn[_ngcontent-%COMP%]:hover   #container-stars[_ngcontent-%COMP%]{z-index:1;background-color:#212121}.btn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.btn[_ngcontent-%COMP%]:active{border:double 4px #fe53bb;background-origin:border-box;background-clip:content-box,border-box;animation:none}.btn[_ngcontent-%COMP%]:active   .circle[_ngcontent-%COMP%]{background:#fe53bb}#stars[_ngcontent-%COMP%]{position:relative;background:transparent;width:200rem;height:200rem}#stars[_ngcontent-%COMP%]:after{position:absolute;top:-10rem;left:-100rem;width:100%;height:100%;animation:_ngcontent-%COMP%_animStarRotate 90s linear infinite}#stars[_ngcontent-%COMP%]:after{background-image:radial-gradient(#ffffff 1px,transparent 1%);background-size:50px 50px}#stars[_ngcontent-%COMP%]:before{position:absolute;top:0;left:-50%;width:170%;height:500%;animation:_ngcontent-%COMP%_animStar 60s linear infinite}#stars[_ngcontent-%COMP%]:before{background-image:radial-gradient(#ffffff 1px,transparent 1%);background-size:50px 50px;opacity:.5}@keyframes _ngcontent-%COMP%_animStar{0%{transform:translateY(0)}to{transform:translateY(-135rem)}}@keyframes _ngcontent-%COMP%_animStarRotate{0%{transform:rotate(360deg)}to{transform:rotate(0)}}@keyframes _ngcontent-%COMP%_gradient_301{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}@keyframes _ngcontent-%COMP%_pulse_3011{0%{transform:scale(.75);box-shadow:0 0 #000000b3}70%{transform:scale(1);box-shadow:0 0 0 10px #0000}to{transform:scale(.75);box-shadow:0 0 #0000}}"]});let i=t;return i})();var fe=[{path:"",component:ue},{path:"years",loadChildren:()=>import("./chunk-57IZVJ3P.js").then(i=>i.YearOverviewModule)},{path:"currency",loadChildren:()=>import("./chunk-Z5E2QRT5.js").then(i=>i.CurrencyModule)},{path:"**",redirectTo:""}];var Ae="@",Se=(()=>{let t=class t{constructor(e,n,o,a,f){this.doc=e,this.delegate=n,this.zone=o,this.animationType=a,this.moduleImpl=f,this._rendererFactoryPromise=null,this.scheduler=I(R,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-CDKY5XHO.js")).catch(n=>{throw new w(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:o})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let o=this.delegate.createRenderer(e,n);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let a=new A(o);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(f=>{let Ce=f.createRenderer(e,n);a.use(Ce)}).catch(f=>{a.use(o)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(n){F()},t.\u0275prov=M({token:t,factory:t.\u0275fac});let i=t;return i})(),A=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let r of this.replay)r(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,r){return this.delegate.createElement(t,r)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,r){this.delegate.appendChild(t,r)}insertBefore(t,r,e,n){this.delegate.insertBefore(t,r,e,n)}removeChild(t,r,e){this.delegate.removeChild(t,r,e)}selectRootElement(t,r){return this.delegate.selectRootElement(t,r)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,r,e,n){this.delegate.setAttribute(t,r,e,n)}removeAttribute(t,r,e){this.delegate.removeAttribute(t,r,e)}addClass(t,r){this.delegate.addClass(t,r)}removeClass(t,r){this.delegate.removeClass(t,r)}setStyle(t,r,e,n){this.delegate.setStyle(t,r,e,n)}removeStyle(t,r,e){this.delegate.removeStyle(t,r,e)}setProperty(t,r,e){this.shouldReplay(r)&&this.replay.push(n=>n.setProperty(t,r,e)),this.delegate.setProperty(t,r,e)}setValue(t,r){this.delegate.setValue(t,r)}listen(t,r,e){return this.shouldReplay(r)&&this.replay.push(n=>n.listen(t,r,e)),this.delegate.listen(t,r,e)}shouldReplay(t){return this.replay!==null&&t.startsWith(Ae)}};function ge(i="animations"){return L("NgAsyncAnimations"),E([{provide:j,useFactory:(t,r,e)=>new Se(t,r,e,i),deps:[H,Q,z]},{provide:Y,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var we=b(T(),1),ye=b(T(),1),u=ye.default||we,S=new P("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:Pe});function Pe(){return{useUtc:!1}}function Ie(i,t){let r=Array(i);for(let e=0;e<i;e++)r[e]=t(e);return r}var Ee=(()=>{let t=class t extends k{constructor(e,n){super(),this._options=n,this.setLocale(e||u.locale())}setLocale(e){super.setLocale(e);let n=u.localeData(e);this._localeData={firstDayOfWeek:n.firstDayOfWeek(),longMonths:n.months(),shortMonths:n.monthsShort(),dates:Ie(31,o=>this.createDate(2017,0,o+1).format("D")),longDaysOfWeek:n.weekdays(),shortDaysOfWeek:n.weekdaysShort(),narrowDaysOfWeek:n.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return e=="long"?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return e=="long"?this._localeData.longDaysOfWeek:e=="short"?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,n,o){let a=this._createMoment({year:e,month:n,date:o}).locale(this.locale);return a.isValid(),a}today(){return this._createMoment().locale(this.locale)}parse(e,n){return e&&typeof e=="string"?this._createMoment(e,n,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,n){return e=this.clone(e),this.isValid(e),e.format(n)}addCalendarYears(e,n){return this.clone(e).add({years:n})}addCalendarMonths(e,n){return this.clone(e).add({months:n})}addCalendarDays(e,n){return this.clone(e).add({days:n})}toIso8601(e){return this.clone(e).format()}deserialize(e){let n;if(e instanceof Date)n=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if(typeof e=="string"){if(!e)return null;n=this._createMoment(e,u.ISO_8601).locale(this.locale)}return n&&this.isValid(n)?this._createMoment(n).locale(this.locale):super.deserialize(e)}isDateInstance(e){return u.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return u.invalid()}_createMoment(e,n,o){let{strict:a,useUtc:f}=this._options||{};return f?u.utc(e,n,o,a):u(e,n,o,a)}};t.\u0275fac=function(n){return new(n||t)(D(v,8),D(S,8))},t.\u0275prov=M({token:t,factory:t.\u0275fac});let i=t;return i})(),Ye={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}};function ve(i=Ye,t){let r=[{provide:k,useClass:Ee,deps:[v,S]},{provide:re,useValue:i}];return t&&r.push({provide:S,useValue:t}),r}var Ne={parse:{dateInput:"DD.MM.YYYY"},display:{dateInput:"DD.MM.YYYY",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}},be={providers:[ne(fe),q(),ge(),ve(Ne),{provide:v,useValue:"de"}]};var Re=b(T()),_e=b(T());function Fe(i,t){if(i&1&&(s(0,"li",13)(1,"div",16)(2,"a",17),h(3),l(),s(4,"div",3),c(5,"span",4)(6,"span",5)(7,"span",6)(8,"span",7)(9,"span",8)(10,"span",9)(11,"span",10),l()()()),i&2){let r=t.$implicit;d(2),B("id",r),J("href","years/",r,"",N),d(),U(r)}}var Me=(()=>{let t=class t{constructor(e,n){this.transactionService=e,this.observer=n,this.years=[]}ngOnInit(){this.transactionService.getAllYears().subscribe({next:e=>this.years=e,error:e=>console.log(e)})}reset(){this.observer.detailNotify({type:"reset"})}};t.\u0275fac=function(n){return new(n||t)(p(C),p(x))},t.\u0275cmp=g({type:t,selectors:[["app-navigation"]],standalone:!0,features:[y],decls:42,vars:4,consts:[[1,"nav","flex-column"],[1,"nav-item","box"],["matTooltip","Home","href","",1,"nav-link","nav-icon","nav-nav",3,"matTooltipPosition"],[1,"space"],[1,"star",2,"--i","31"],[1,"star",2,"--i","12"],[1,"star",2,"--i","57"],[1,"star",2,"--i","93"],[1,"star",2,"--i","23"],[1,"star",2,"--i","70"],[1,"star",2,"--i","6"],["matTooltip","Geldwechselsrate","href","currency",1,"nav-link","nav-icon","nav-nav",3,"matTooltipPosition"],["matTooltip","Neue Transaktion","data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"nav-link","nav-icon","nav-nav",3,"click","matTooltipPosition"],[1,"nav-item"],["aria-disabled","true",1,"nav-link","disabled"],["class","nav-item",4,"ngFor","ngForOf"],[1,"box"],[1,"nav-link","nav-nav",3,"id","href"]],template:function(n,o){n&1&&(c(0,"app-create-transaction"),s(1,"ul",0)(2,"li",1)(3,"a",2)(4,"mat-icon"),h(5,"home"),l()(),s(6,"div",3),c(7,"span",4)(8,"span",5)(9,"span",6)(10,"span",7)(11,"span",8)(12,"span",9)(13,"span",10),l()(),s(14,"li",1)(15,"a",11)(16,"mat-icon"),h(17,"currency_exchange"),l()(),s(18,"div",3),c(19,"span",4)(20,"span",5)(21,"span",6)(22,"span",7)(23,"span",8)(24,"span",9)(25,"span",10),l()(),s(26,"li",1)(27,"a",12),V("click",function(){return o.reset()}),s(28,"mat-icon"),h(29,"payments"),l()(),s(30,"div",3),c(31,"span",4)(32,"span",5)(33,"span",6)(34,"span",7)(35,"span",8)(36,"span",9)(37,"span",10),l()(),s(38,"li",13)(39,"a",14),h(40,"Jahr ausw\xE4hlen"),l()(),_(41,Fe,12,4,"li",15),l()),n&2&&(d(3),m("matTooltipPosition","after"),d(12),m("matTooltipPosition","after"),d(12),m("matTooltipPosition","after"),d(14),m("ngForOf",o.years))},dependencies:[K,ce,ae,oe,ie,le,se],styles:[".nav-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}a[_ngcontent-%COMP%]{color:#000;cursor:pointer}.nav-link[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}"]});let i=t;return i})();var je=_e.default||Re,Te=(()=>{let t=class t{sum(e){let n=0;for(let o of e)n+=o.value?o.value:0;return n}reformatDate(e){let n=e.split("-");return`${n[2]}-${n[1]}-${n[0]}`}numberWithCommas(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}constructor(){this.title="konto-verwaltung-ui",je.updateLocale("de",{months:["Januar","Februar","Marsch","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthsShort:["Januar","Februar","Marsch","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],weekdays:["Ch\u1EE7 nh\u1EADt","Th\u1EE9 2","Th\u1EE9 3","Th\u1EE9 4","Th\u1EE9 5","Th\u1EE9 6","Th\u1EE9 7"],weekdaysShort:["Ch\u1EE7 nh\u1EADt","Th\u1EE9 2","Th\u1EE9 3","Th\u1EE9 4","Th\u1EE9 5","Th\u1EE9 6","Th\u1EE9 7"],weekdaysMin:["So","Mo","Di","Mi","Do","Fr","Sa"]})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=g({type:t,selectors:[["app-root"]],standalone:!0,features:[y],decls:4,vars:0,consts:[[1,"row",2,"height","100%"],[1,"col-1",2,"padding-right","0"],[1,"col",2,"margin","0","padding-left","0","height","100%"]],template:function(n,o){n&1&&(s(0,"div",0),c(1,"app-navigation",1),s(2,"div",2),c(3,"router-outlet"),l()())},dependencies:[te,Me],styles:["a[_ngcontent-%COMP%]{color:#000}"]});let i=t;return i})();ee(Te,be).catch(i=>console.error(i));