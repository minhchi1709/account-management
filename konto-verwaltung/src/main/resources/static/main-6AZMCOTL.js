import{a as _,b as C,d as le,e as D,f as ce,g as de,h as pe,i as me,j as he}from"./chunk-U6OQCU2U.js";import{E as y,F as O,G as ie,c as X,d as Z,e as q,h as Q,i as ee,j as te,k as ne,ma as re,qa as oe,ra as ae,ta as se}from"./chunk-EASR6PZ5.js";import{$ as M,$a as R,Cb as z,Eb as W,Ha as Y,Mb as V,Nb as m,Ob as B,Qb as J,Va as c,Vb as g,Wa as p,Wb as $,Xa as N,Xb as U,Z as S,Za as F,bb as j,ca as w,cb as L,ea as T,f as v,fa as I,ka as f,lb as b,mc as G,na as E,nb as d,uc as H,vc as K,wb as a,xb as s,yb as l}from"./chunk-WF2K2LCF.js";function Te(i,n){if(i&1&&(a(0,"div",2)(1,"div")(2,"div",3)(3,"button",4)(4,"strong"),m(5),s(),a(6,"div",5),l(7,"div",6),s(),a(8,"div",7),l(9,"div",8)(10,"div",8),s()()(),l(11,"app-graph",9),s()()),i&2){let e=W();c(5),J("Kontostand: ",e.currencyManagementService.numberInEUR(e.balance)," | ",e.currencyManagementService.numberInVND(e.Math.round(e.balance*e.rate)),""),c(6),d("title",e.title)("vibDataPoints",e.dataPoints)("xTitle",e.xTitle)("yTitle",e.yTitle)}}function Oe(i,n){i&1&&l(0,"app-loader")}var ue=(()=>{class i{constructor(e,t,r,o){this.transactionService=e,this.currencyService=t,this.currencyManagementService=r,this.observer=o,this.loaded=!1,this.balance=0,this.rate=0,this.dataPoints=[],this.title="",this.xTitle="",this.yTitle="",this.Math=Math}ngOnInit(){this.observer.objectUpdate$.subscribe(e=>{e&&this.init()}),this.init(),this.title="J\xE4hrliche Analyse",this.xTitle="Jahr",this.yTitle="\u20AC",this.currencyService.getTodayRate({bank:"vib"}).subscribe({next:e=>{this.rate=e.rate||0,this.loaded=!0}})}init(){this.transactionService.getAllYearTotals().subscribe({next:e=>{this.balance=e.map(t=>t.total||0).reduce((t,r)=>t+r,0),this.dataPoints=e.map(t=>({y:t.total,label:t.year}))}})}static{this.\u0275fac=function(t){return new(t||i)(p(_),p(oe),p(ae),p(C))}}static{this.\u0275cmp=f({type:i,selectors:[["app-account-balance"]],standalone:!0,features:[g],decls:3,vars:2,consts:[["loading",""],["style","display: flex; align-items: center; justify-content: center; width: 100%",4,"ngIf","ngIfElse"],[2,"display","flex","align-items","center","justify-content","center","width","100%"],["id","account-balance"],["type","button",1,"btn"],["id","container-stars"],["id","stars"],["id","glow"],[1,"circle"],[3,"title","vibDataPoints","xTitle","yTitle"]],template:function(t,r){if(t&1&&b(0,Te,12,6,"div",1)(1,Oe,1,0,"ng-template",null,0,U),t&2){let o=V(2);d("ngIf",r.loaded)("ngIfElse",o)}},dependencies:[K,se,re],styles:["#account-balance[_ngcontent-%COMP%]{background-color:#212121;margin-bottom:10rem;border-radius:20px;box-shadow:6px 6px 20px #0003,-6px -6px 20px #00000030;margin-top:2rem;display:flex;justify-content:center;align-items:center;padding:2rem;width:1000px}app-account-balance[_ngcontent-%COMP%]{height:100%}.btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:4rem;overflow:hidden;background-size:300% 300%;cursor:pointer;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem);border-radius:5rem;transition:.5s;animation:_ngcontent-%COMP%_gradient_301 5s ease infinite;border:double 4px transparent;background-image:linear-gradient(#212121,#212121),linear-gradient(137.48deg,#ffdb3b 10%,#fe53bb 45%,#8f51ea 67%,#04f 87%);background-origin:border-box;background-clip:content-box,border-box}#container-stars[_ngcontent-%COMP%]{position:absolute;z-index:-1;width:110%;height:100%;overflow:hidden;transition:.5s;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem);border-radius:5rem}strong[_ngcontent-%COMP%]{z-index:2;font-family:Roboto,sans-serif;font-size:20px;letter-spacing:5px;color:#fff;text-shadow:0 0 4px white}#glow[_ngcontent-%COMP%]{position:absolute;display:flex;width:13rem}.circle[_ngcontent-%COMP%]{width:100%;height:30px;filter:blur(2rem);animation:_ngcontent-%COMP%_pulse_3011 4s infinite;z-index:-1}.circle[_ngcontent-%COMP%]:nth-of-type(1){background:#fe53baa2}.circle[_ngcontent-%COMP%]:nth-of-type(2){background:#8e51eab4}.btn[_ngcontent-%COMP%]:hover   #container-stars[_ngcontent-%COMP%]{z-index:1;background-color:#212121}.btn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.btn[_ngcontent-%COMP%]:active{border:double 4px #fe53bb;background-origin:border-box;background-clip:content-box,border-box;animation:none}.btn[_ngcontent-%COMP%]:active   .circle[_ngcontent-%COMP%]{background:#fe53bb}#stars[_ngcontent-%COMP%]{position:relative;background:transparent;width:200rem;height:200rem}#stars[_ngcontent-%COMP%]:after{position:absolute;top:-10rem;left:-100rem;width:100%;height:100%;animation:_ngcontent-%COMP%_animStarRotate 90s linear infinite}#stars[_ngcontent-%COMP%]:after{background-image:radial-gradient(#ffffff 1px,transparent 1%);background-size:50px 50px}#stars[_ngcontent-%COMP%]:before{position:absolute;top:0;left:-50%;width:170%;height:500%;animation:_ngcontent-%COMP%_animStar 60s linear infinite}#stars[_ngcontent-%COMP%]:before{background-image:radial-gradient(#ffffff 1px,transparent 1%);background-size:50px 50px;opacity:.5}@keyframes _ngcontent-%COMP%_animStar{0%{transform:translateY(0)}to{transform:translateY(-135rem)}}@keyframes _ngcontent-%COMP%_animStarRotate{0%{transform:rotate(360deg)}to{transform:rotate(0)}}@keyframes _ngcontent-%COMP%_gradient_301{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}@keyframes _ngcontent-%COMP%_pulse_3011{0%{transform:scale(.75);box-shadow:0 0 #000000b3}70%{transform:scale(1);box-shadow:0 0 0 10px #0000}to{transform:scale(.75);box-shadow:0 0 #0000}}"]})}}return i})();var fe=[{path:"",component:ue},{path:"years",loadChildren:()=>import("./chunk-ZZXA4HBF.js").then(i=>i.YearOverviewModule)},{path:"currency",loadChildren:()=>import("./chunk-ENU2OXXV.js").then(i=>i.CurrencyModule)},{path:"**",redirectTo:""}];var Ae="@",ke=(()=>{class i{constructor(e,t,r,o,u){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=I(F,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-QC35SDMV.js")).catch(t=>{throw new S(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:r})=>{this._engine=t(this.animationType,this.doc,this.scheduler);let o=new r(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new A(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let Ce=u.createRenderer(e,t);o.use(Ce)}).catch(u=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(t){N()}}static{this.\u0275prov=M({token:i,factory:i.\u0275fac})}}return i})(),A=class{constructor(n){this.delegate=n,this.replay=[],this.\u0275type=1}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,t,r){this.delegate.insertBefore(n,e,t,r)}removeChild(n,e,t){this.delegate.removeChild(n,e,t)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,r){this.delegate.setAttribute(n,e,t,r)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,r){this.delegate.setStyle(n,e,t,r)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(n,e,t)),this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(n,e,t)),this.delegate.listen(n,e,t)}shouldReplay(n){return this.replay!==null&&n.startsWith(Ae)}};function k(i="animations"){return j("NgAsyncAnimations"),E([{provide:R,useFactory:(n,e,t)=>new ke(n,e,t,i),deps:[G,Z,L]},{provide:Y,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Pe=v(D(),1),ge=v(D(),1),h=ge.default||Pe,P=new w("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:Se});function Se(){return{useUtc:!1}}function we(i,n){let e=Array(i);for(let t=0;t<i;t++)e[t]=n(t);return e}var Ie=(()=>{class i extends O{constructor(e,t){super(),this._options=t,this.setLocale(e||h.locale())}setLocale(e){super.setLocale(e);let t=h.localeData(e);this._localeData={firstDayOfWeek:t.firstDayOfWeek(),longMonths:t.months(),shortMonths:t.monthsShort(),dates:we(31,r=>this.createDate(2017,0,r+1).format("D")),longDaysOfWeek:t.weekdays(),shortDaysOfWeek:t.weekdaysShort(),narrowDaysOfWeek:t.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return e=="long"?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return e=="long"?this._localeData.longDaysOfWeek:e=="short"?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,t,r){let o=this._createMoment({year:e,month:t,date:r}).locale(this.locale);return o.isValid(),o}today(){return this._createMoment().locale(this.locale)}parse(e,t){return e&&typeof e=="string"?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,t){return e=this.clone(e),this.isValid(e),e.format(t)}addCalendarYears(e,t){return this.clone(e).add({years:t})}addCalendarMonths(e,t){return this.clone(e).add({months:t})}addCalendarDays(e,t){return this.clone(e).add({days:t})}toIso8601(e){return this.clone(e).format()}deserialize(e){let t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if(typeof e=="string"){if(!e)return null;t=this._createMoment(e,h.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):super.deserialize(e)}isDateInstance(e){return h.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return h.invalid()}_createMoment(e,t,r){let{strict:o,useUtc:u}=this._options||{};return u?h.utc(e,t,r,o):h(e,t,r,o)}static{this.\u0275fac=function(t){return new(t||i)(T(y,8),T(P,8))}}static{this.\u0275prov=M({token:i,factory:i.\u0275fac})}}return i})(),Ee={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}};function ye(i=Ee,n){let e=[{provide:O,useClass:Ie,deps:[y,P]},{provide:ie,useValue:i}];return n&&e.push({provide:P,useValue:n}),e}var Ye={parse:{dateInput:"DD.MM.YYYY"},display:{dateInput:"DD.MM.YYYY",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}},ve={providers:[ne(fe),X(),k(),ye(Ye),{provide:y,useValue:"de"},k()]};var Re=v(D()),be=v(D());var Ne=i=>["years",i];function Fe(i,n){if(i&1&&(a(0,"li",13)(1,"div",16)(2,"a",17),m(3),s(),a(4,"div",3),l(5,"span",4)(6,"span",5)(7,"span",6)(8,"span",7)(9,"span",8)(10,"span",9)(11,"span",10),s()()()),i&2){let e=n.$implicit;c(2),d("routerLink",$(2,Ne,e)),c(),B(e)}}var Me=(()=>{class i{constructor(e,t){this.transactionService=e,this.observer=t,this.years=[]}ngOnInit(){this.transactionService.getAllYears().subscribe({next:e=>this.years=e,error:e=>console.log(e)})}reset(){this.observer.detailNotify({type:"reset"})}static{this.\u0275fac=function(t){return new(t||i)(p(_),p(C))}}static{this.\u0275cmp=f({type:i,selectors:[["app-navigation"]],standalone:!0,features:[g],decls:42,vars:4,consts:[[1,"nav","flex-column"],[1,"nav-item","box"],["matTooltip","Home","href","",1,"nav-link","nav-icon","nav-nav",3,"matTooltipPosition"],[1,"space"],[1,"star",2,"--i","31"],[1,"star",2,"--i","12"],[1,"star",2,"--i","57"],[1,"star",2,"--i","93"],[1,"star",2,"--i","23"],[1,"star",2,"--i","70"],[1,"star",2,"--i","6"],["matTooltip","Geldwechselsrate","href","currency",1,"nav-link","nav-icon","nav-nav",3,"matTooltipPosition"],["matTooltip","Neue Transaktion","data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"nav-link","nav-icon","nav-nav",3,"click","matTooltipPosition"],[1,"nav-item"],["aria-disabled","true",1,"nav-link","disabled"],["class","nav-item",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"box"],[1,"nav-link","nav-nav",3,"routerLink"]],template:function(t,r){t&1&&(l(0,"app-create-transaction"),a(1,"ul",0)(2,"li",1)(3,"a",2)(4,"mat-icon"),m(5,"home"),s()(),a(6,"div",3),l(7,"span",4)(8,"span",5)(9,"span",6)(10,"span",7)(11,"span",8)(12,"span",9)(13,"span",10),s()(),a(14,"li",1)(15,"a",11)(16,"mat-icon"),m(17,"currency_exchange"),s()(),a(18,"div",3),l(19,"span",4)(20,"span",5)(21,"span",6)(22,"span",7)(23,"span",8)(24,"span",9)(25,"span",10),s()(),a(26,"li",1)(27,"a",12),z("click",function(){return r.reset()}),a(28,"mat-icon"),m(29,"payments"),s()(),a(30,"div",3),l(31,"span",4)(32,"span",5)(33,"span",6)(34,"span",7)(35,"span",8)(36,"span",9)(37,"span",10),s()(),a(38,"li",13)(39,"a",14),m(40,"Jahr ausw\xE4hlen"),s()(),b(41,Fe,12,4,"li",15),s()),t&2&&(c(3),d("matTooltipPosition","after"),c(12),d("matTooltipPosition","after"),c(12),d("matTooltipPosition","after"),c(14),d("ngForOf",r.years))},dependencies:[H,ee,he,de,ce,le,me,pe,te],styles:[".nav-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}a[_ngcontent-%COMP%]{color:#000;cursor:pointer}.nav-link[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}"]})}}return i})();var je=be.default||Re,_e=(()=>{class i{sum(e){let t=0;for(let r of e)t+=r.value?r.value:0;return t}reformatDate(e){let t=e.split("-");return`${t[2]}-${t[1]}-${t[0]}`}numberWithCommas(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}constructor(){this.title="konto-verwaltung-ui",je.updateLocale("de",{months:["Januar","Februar","Marsch","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthsShort:["Januar","Februar","Marsch","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],weekdays:["Ch\u1EE7 nh\u1EADt","Th\u1EE9 2","Th\u1EE9 3","Th\u1EE9 4","Th\u1EE9 5","Th\u1EE9 6","Th\u1EE9 7"],weekdaysShort:["Ch\u1EE7 nh\u1EADt","Th\u1EE9 2","Th\u1EE9 3","Th\u1EE9 4","Th\u1EE9 5","Th\u1EE9 6","Th\u1EE9 7"],weekdaysMin:["So","Mo","Di","Mi","Do","Fr","Sa"]})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=f({type:i,selectors:[["app-root"]],standalone:!0,features:[g],decls:4,vars:0,consts:[[1,"row",2,"height","100%"],[1,"col-1",2,"padding-right","0"],[1,"col",2,"margin","0","padding-left","0","height","100%"]],template:function(t,r){t&1&&(a(0,"div",0),l(1,"app-navigation",1),a(2,"div",2),l(3,"router-outlet"),s()())},dependencies:[Q,Me],styles:["a[_ngcontent-%COMP%]{color:#000}"]})}}return i})();q(_e,ve).catch(i=>console.error(i));
