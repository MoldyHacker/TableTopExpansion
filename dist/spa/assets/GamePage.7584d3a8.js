import{Q as M}from"./QTooltip.cc173ac6.js";import{J as f,_ as b,K as u,Y as C,ag as we,aa as ve,L as S,N as U,F as Q,ac as I,ad as T,X as s,W as p,d as i,P as x,M as h,O as g,Z as ae,n as j,p as ke,q as Ie,u as X,v as ee,z as ce,s as te,A as se,r as de,c as k,w as Te,g as he,B as Le,h as O,m as Ae,ah as De,V as Pe,af as qe,U as Be}from"./index.58564a6b.js";import{Q as z}from"./QSpinner.bb55e475.js";import{Q as oe,g as Oe}from"./QBtn.0cceea7f.js";import{u as Ve,a as Ee,b as Ne,Q as Me}from"./QTabs.7a6464f7.js";import{c as W,e as Re,b as Z,f as Ge,a as He}from"./render.a7501c6e.js";import{Q as je}from"./QSeparator.71f87a92.js";import{g as pe,s as ue}from"./touch.3df10340.js";import{c as Ue}from"./position-engine.c3f824e7.js";import{f as ze}from"./use-router-link.8ff5dd5e.js";import{a as Qe,u as We}from"./use-dark.611856a0.js";import{Q as Fe}from"./QCard.df144c86.js";import{u as Ke,a as Ye}from"./use-form.48d835c9.js";import{u as Xe,C as _e}from"./user-store.0afc118d.js";import"./uid.42677368.js";import"./QResizeObserver.8c08070d.js";import"./rtl.b51694b1.js";import"./focus-manager.b507780d.js";const Ze=f({name:"DisplayBox",props:["boxWidth","boxMinWidth","boxMaxWidth","boxHeight","boxMinHeight","boxMaxHeight","borderRad","borderColor","bgColor"]});function Je(e,t,n,r,l,o){return u(),C("div",{class:"box",style:ve({minWidth:e.boxMinWidth,maxWidth:e.boxMaxWidth,width:e.boxWidth,minHeight:e.boxMinHeight,maxHeight:e.boxMaxHeight,height:e.boxHeight,borderRadius:e.borderRad,borderColor:e.borderColor,background:e.bgColor})},[we(e.$slots,"default",{},void 0,!0)],4)}var A=b(Ze,[["render",Je],["__scopeId","data-v-5f7487aa"]]);const et=f({name:"ProficiencyBall",props:["status","custom"]}),tt=e=>(I("data-v-5c2edc77"),e=e(),T(),e),st=tt(()=>s("div",{class:"proficiencyBall"},null,-1));function ot(e,t,n,r,l,o){return u(),C(Q,null,[st,e.status==="not_proficient"?(u(),S(z,{key:0,class:"icon notProficient",name:"brightness_1",color:e.custom?"blue":"white",style:{"border-radius":"50%",border:"black 1px dashed"}},null,8,["color"])):U("",!0),e.status==="half_proficient"?(u(),S(z,{key:1,class:"icon halfProficient",name:"brightness_medium",color:e.custom?"blue":"black"},null,8,["color"])):U("",!0),e.status==="proficient"?(u(),S(z,{key:2,class:"icon proficient",name:"brightness_low",color:e.custom?"blue":"black"},null,8,["color"])):U("",!0),e.status==="expertise"?(u(),S(z,{key:3,class:"icon expertise",name:"brightness_high",color:e.custom?"blue":"black"},null,8,["color"])):U("",!0)],64)}var fe=b(et,[["render",ot],["__scopeId","data-v-5c2edc77"]]);const at=f({name:"SkillsListItem",components:{ProficiencyBall:fe},props:["skillObj"]}),nt={class:"skillsListItem row items-baseline q-gutter-sm"},it={class:"prof col-1 flex-center"},lt={class:"mod col-2"},rt={class:"skill col q-ml-none"},ct={class:"bonus col-1 q-mr-xs text-center"};function dt(e,t,n,r,l,o){const a=p("proficiency-ball");return u(),C("div",nt,[s("div",it,[i(a,{status:e.skillObj.prof,custom:e.skillObj.profCustom},null,8,["status","custom"])]),s("div",lt,x(e.skillObj.mod),1),s("div",rt,x(e.skillObj.skill),1),s("div",ct,x(e.skillObj.bonus),1)])}var pt=b(at,[["render",dt],["__scopeId","data-v-25b059af"]]);const ut=f({name:"SkillsDisplay",components:{SkillsListItem:pt,DisplayBox:A},data(){return{skillsData:[{prof:"not_proficient",profCustom:!1,mod:"dex",skill:"Acrobatics",bonus:"+3"},{prof:"not_proficient",profCustom:!1,mod:"wis",skill:"Animal Handling",bonus:"+1"},{prof:"expertise",profCustom:!0,mod:"int",skill:"Arcana",bonus:"+15"},{prof:"not_proficient",profCustom:!1,mod:"str",skill:"Athletics",bonus:"+0"},{prof:"not_proficient",profCustom:!1,mod:"cha",skill:"Deception",bonus:"+0"},{prof:"not_proficient",profCustom:!1,mod:"int",skill:"History",bonus:"+10"},{prof:"not_proficient",profCustom:!1,mod:"wis",skill:"Insight",bonus:"+6"},{prof:"not_proficient",profCustom:!1,mod:"cha",skill:"Intimidation",bonus:"+0"},{prof:"not_proficient",profCustom:!1,mod:"int",skill:"Investigation",bonus:"+7"},{prof:"not_proficient",profCustom:!1,mod:"wis",skill:"Medicine",bonus:"+1"},{prof:"not_proficient",profCustom:!1,mod:"int",skill:"Nature",bonus:"+5"},{prof:"not_proficient",profCustom:!1,mod:"wis",skill:"Perception",bonus:"+6"},{prof:"not_proficient",profCustom:!1,mod:"cha",skill:"Performance",bonus:"+0"},{prof:"not_proficient",profCustom:!1,mod:"cha",skill:"Persuasion",bonus:"+0"},{prof:"not_proficient",profCustom:!1,mod:"int",skill:"Religion",bonus:"+5"},{prof:"not_proficient",profCustom:!1,mod:"dex",skill:"Slight of Hand",bonus:"+3"},{prof:"not_proficient",profCustom:!1,mod:"dex",skill:"Stealth",bonus:"+3"},{prof:"not_proficient",profCustom:!1,mod:"wis",skill:"Survival",bonus:"+1"}]}}}),ne=e=>(I("data-v-5e54bc88"),e=e(),T(),e),_t={class:"skillsDisplay"},mt=ne(()=>s("div",{class:"topLabel text-center text-h7 text-bold"},"SKILLS",-1)),vt={class:"secondLabel row q-px-sm"},ht={class:"prof col-2"},ft={class:"mod col-2"},bt=ne(()=>s("div",{class:"skill col"},"SKILL",-1)),xt=ne(()=>s("div",{class:"bonus col-2"},"BONUS",-1));function gt(e,t,n,r,l,o){const a=p("skills-list-item"),d=p("display-box");return u(),S(d,{"box-width":"235px","box-min-width":"235px","box-max-width":"235px","box-height":"692px","box-min-height":"692px","box-max-height":"692px"},{default:h(()=>[s("div",_t,[mt,s("div",vt,[s("div",ht,[g("PROF"),i(M,null,{default:h(()=>[g("Proficiency")]),_:1})]),s("div",ft,[g("MOD"),i(M,null,{default:h(()=>[g("Modifier")]),_:1})]),bt,xt]),(u(!0),C(Q,null,ae(e.skillsData,c=>(u(),S(a,{class:"skillsList q-pl-sm",key:c.skill,"skill-obj":c},null,8,["skill-obj"]))),128))])]),_:1})}var $t=b(ut,[["render",gt],["__scopeId","data-v-5e54bc88"]]);const yt=f({name:"HealthTrackerDesktop",components:{DisplayBox:A},props:[""],data(){return{current:93,max:93,temp:0}},computed:{tempHealth(){return this.temp===0?"--":this.temp}}}),R=e=>(I("data-v-21627fb8"),e=e(),T(),e),St={class:"healthTracker"},Ct=R(()=>s("span",{class:"healthLabel"},"HEALTH",-1)),wt={class:"row items-center"},kt={class:"healthInputGroup q-ma-none q-pa-none col-4"},It=R(()=>s("input",{class:"healthInput",type:"number"},null,-1)),Tt={class:"displays row col-8"},Lt={class:"currentHealth col"},At=R(()=>s("div",{class:"label"},"CURRENT",-1)),Dt={class:"value"},Pt=R(()=>s("div",{class:"slash q-ma-none q-pa-none"},"/",-1)),qt={class:"maxHealth col"},Bt=R(()=>s("div",{class:"label"},"MAX",-1)),Ot={class:"value"},Vt={class:"tempHealth col"},Et=R(()=>s("div",{class:"label"},"TEMP",-1)),Nt={class:"value"};function Mt(e,t,n,r,l,o){const a=p("display-box");return u(),S(a,{"box-width":"300px","box-min-width":"300px","box-max-width":"300px","box-height":"100px","box-min-height":"100px","box-max-height":"100px",style:{"text-align":"center"}},{default:h(()=>[s("div",St,[Ct,s("div",wt,[s("div",kt,[It,i(oe,{class:"heal",size:"10px",padding:"none",color:"green"},{default:h(()=>[g("HEAL")]),_:1}),i(oe,{class:"damage",size:"10px",padding:"none",color:"red"},{default:h(()=>[g("DAMAGE")]),_:1})]),s("div",Tt,[s("div",Lt,[At,s("div",Dt,x(e.current),1)]),Pt,s("div",qt,[Bt,s("div",Ot,x(e.max),1)]),s("div",Vt,[Et,s("div",Nt,x(e.tempHealth),1)])])])])]),_:1})}var Rt=b(yt,[["render",Mt],["__scopeId","data-v-21627fb8"]]);const Gt=f({name:"AbilityStat",components:{DisplayBox:A},props:["statObj"],data(){return{label:"constitution",score:20,reverseScores:!1}},computed:{modifier(){let e=Math.floor((this.score-10)/2);return e>0?"+"+e:e}}}),Ht={class:"statBlock"},jt={class:"label"},Ut={class:"middleScore"},zt={class:"bottomScore"};function Qt(e,t,n,r,l,o){const a=p("display-box");return u(),S(a,{"box-width":"100%","box-min-width":"85px","box-max-width":"85px","box-height":"100px","box-min-height":"100px","box-max-height":"100px",style:{position:"relative","text-align":"center"}},{default:h(()=>[s("div",Ht,[s("div",jt,x(e.label),1),s("div",Ut,x(e.reverseScores?e.score:e.modifier),1),s("div",zt,x(e.reverseScores?e.modifier:e.score),1)])]),_:1})}var Wt=b(Gt,[["render",Qt],["__scopeId","data-v-fed047fe"]]);const Ft=f({name:"AbilityStatGroup",props:["statObj"],components:{AbilityStat:Wt},data(){return{}},computed:{},methods:{}}),Kt={class:"statGroups row"},Yt={class:"split row q-gutter-md"};function Xt(e,t,n,r,l,o){const a=p("ability-stat");return u(),C("div",Kt,[s("div",Yt,[i(a,{class:"col-4 col-md-3"}),i(a,{class:"col-4 col-md-3"}),i(a,{class:"col-4 col-md-3"}),i(a,{class:"col-4 col-md-3"}),i(a,{class:"col-4 col-md-3"}),i(a,{class:"col-4 col-md-3"})])])}var Zt=b(Ft,[["render",Xt],["__scopeId","data-v-6b734020"]]);const Jt=f({name:"MovementSpeed",components:{DisplayBox:A},props:[""],data(){return{movementType:"WALKING",distance:"ft.",speed:30}},computed:{capitalizeLabel(){return this.movementType.toUpperCase()}}}),es=e=>(I("data-v-6e1cf592"),e=e(),T(),e),ts={class:"movementSpeed"},ss={class:"movementTypeLabel"},os={class:"speedStat"},as={class:"distance"},ns=es(()=>s("div",{class:"speedLabel"},"SPEED",-1));function is(e,t,n,r,l,o){const a=p("display-box");return u(),S(a,{"box-width":"100px","box-min-width":"100px","box-max-width":"100px","box-height":"100px","box-min-height":"100px","box-max-height":"100px",style:{"text-align":"center"}},{default:h(()=>[s("div",ts,[s("div",ss,x(e.capitalizeLabel),1),s("span",os,x(e.speed),1),s("span",as,x(e.distance),1),ns])]),_:1})}var ls=b(Jt,[["render",is],["__scopeId","data-v-6e1cf592"]]);const rs=f({name:"ArmorClass",components:{DisplayBox:A},props:[""],data(){return{stat:13}},computed:{}}),be=e=>(I("data-v-554eda70"),e=e(),T(),e),cs={class:"armorClass"},ds=be(()=>s("div",{class:"topLabel"},"ARMOR",-1)),ps={class:"armorClassScore"},us=be(()=>s("div",{class:"bottomLabel"},"CLASS",-1));function _s(e,t,n,r,l,o){const a=p("display-box");return u(),S(a,{"box-width":"100px","box-min-width":"100px","box-max-width":"100px","box-height":"100px","box-min-height":"100px","box-max-height":"100px",style:{"text-align":"center"}},{default:h(()=>[s("div",cs,[ds,s("div",ps,x(e.stat),1),us])]),_:1})}var ms=b(rs,[["render",_s],["__scopeId","data-v-554eda70"]]);const vs=f({name:"TopStatBarDesktop",components:{ArmorClass:ms,MovementSpeed:ls,AbilityStatGroup:Zt,HealthTrackerDesktop:Rt}}),hs={class:"q-gutter-md row items-end sized"};function fs(e,t,n,r,l,o){const a=p("health-tracker-desktop"),d=p("ability-stat-group"),c=p("movement-speed"),L=p("armor-class");return u(),C("div",hs,[i(a,{class:"col"}),i(d,{class:"col"}),i(c,{class:"col"}),i(L,{class:"col"})])}var bs=b(vs,[["render",fs],["__scopeId","data-v-5f91c1dc"]]);const xs=f({name:"ProficiencyBonus",components:{DisplayBox:A},props:[""],data(){return{level:20}},computed:{score(){let e=Math.floor((this.level-10)/2);return e>0?"+ "+e:e}}}),xe=e=>(I("data-v-06740696"),e=e(),T(),e),gs={class:"proficiencyBonus"},$s=xe(()=>s("div",{class:"proficiencyLabel"},"PROFICIENCY",-1)),ys={class:"proficiencyScore"},Ss=xe(()=>s("div",{class:"bonusLabel"},"BONUS",-1));function Cs(e,t,n,r,l,o){const a=p("display-box");return u(),S(a,{"box-width":"100px","box-min-width":"100px","box-max-width":"100px","box-height":"100px","box-min-height":"100px","box-max-height":"100px",style:{"text-align":"center"}},{default:h(()=>[s("div",gs,[$s,s("div",ys,x(e.score),1),Ss])]),_:1})}var ws=b(xs,[["render",Cs],["__scopeId","data-v-06740696"]]);const ks=f({name:"InspirationDisplay",props:[""],data(){return{}}}),Is=e=>(I("data-v-a079beb8"),e=e(),T(),e),Ts={class:"inspirationDisplay"},Ls=Is(()=>s("div",{class:"topLabel"},"INSPIRATION",-1));function As(e,t,n,r,l,o){return u(),C("div",Ts,[Ls,i(z,{class:"inspirationIcon",name:"wb_twilight"})])}var Ds=b(ks,[["render",As],["__scopeId","data-v-a079beb8"]]);const Ps=f({name:"InitiativeStat",props:[""],data(){return{stat:"+3"}}}),qs=e=>(I("data-v-58f5af0f"),e=e(),T(),e),Bs={class:"initiativeStat"},Os=qs(()=>s("div",{class:"topLabel"},"INITIATIVE",-1)),Vs={class:"initiativeStatScore"};function Es(e,t,n,r,l,o){return u(),C("div",Bs,[Os,s("div",Vs,x(e.stat),1)])}var Ns=b(Ps,[["render",Es],["__scopeId","data-v-58f5af0f"]]);const Ms=f({name:"StackedInspirationInitiative",components:{InitiativeStat:Ns,InspirationDisplay:Ds},props:[""],data(){return{}},computed:{}}),Rs={class:"stacked"};function Gs(e,t,n,r,l,o){const a=p("inspiration-display"),d=p("initiative-stat");return u(),C("div",Rs,[i(a),i(d)])}var Hs=b(Ms,[["render",Gs],["__scopeId","data-v-aad14a58"]]);const js=f({name:"DefensesList",data(){return{resistances:[{resistance:"Bludgeoning",custom:!0},{resistance:"Magical Sleep"},{resistance:"Acid",custom:!0}],immunities:[],vulnerabilities:[]}},computed:{resistancesList(){let e=this.resistances.sort((n,r)=>n.resistance>r.resistance?1:-1),t;e.forEach(n=>n.custom?n.resistance+"* ":n.resistance+" ");for(let n of e)n.custom?t+=n.resistance+"* ":t+=n.resistance+" ";return t}}}),Us=e=>(I("data-v-5844400c"),e=e(),T(),e),zs={class:"defensesList q-pl-xs q-gutter-xs"},Qs=Us(()=>s("div",{class:"topLabel text-bold text-left"},"DEFENCES",-1)),Ws={class:"resistances row"},Fs={class:"positiveIcon icon col-1 q-mr-xs"},Ks={class:"resistancesList ellipsis col"},Ys={class:"immunities row"},Xs={class:"positiveIcon icon col-1 q-mr-xs"},Zs={class:"immunitiesList ellipsis col"},Js={class:"vulnerabilities row"},eo={class:"negativeIcon icon col-1 q-mr-xs"},to={class:"vulnerabilitiesList ellipsis col"};function so(e,t,n,r,l,o){return u(),C("div",zs,[Qs,s("div",Ws,[s("div",Fs,[g("R "),i(M,null,{default:h(()=>[g("Resistances")]),_:1})]),s("div",Ks,x(e.resistancesList),1)]),s("div",Ys,[s("div",Xs,[g("I "),i(M,null,{default:h(()=>[g("Immunities")]),_:1})]),s("div",Zs,x(),1)]),s("div",Js,[s("div",eo,[g("V "),i(M,null,{default:h(()=>[g("Vulnerabilities")]),_:1})]),s("div",to,x(),1)])])}var oo=b(js,[["render",so],["__scopeId","data-v-5844400c"]]);const ao=f({name:"ConditionsList",props:[""],data(){return{conditions:["Blinded","Deafened"]}},computed:{conditionsList(){return this.conditions.sort((e,t)=>e.resistance>t.resistance?1:-1).join(", ")}}}),no=e=>(I("data-v-2c21b164"),e=e(),T(),e),io={class:"conditionsList"},lo=no(()=>s("div",{class:"topLabel text-bold text-left"},"CONDITIONS",-1)),ro={class:"conditionsList"};function co(e,t,n,r,l,o){return u(),C("div",io,[lo,s("div",ro,x(e.conditionsList),1)])}var po=b(ao,[["render",co],["__scopeId","data-v-2c21b164"]]);const uo=f({name:"DefensesConditionsDisplay",components:{DisplayBox:A,ConditionsList:po,DefensesList:oo}}),_o=e=>(I("data-v-f7e18938"),e=e(),T(),e),mo={class:"defensesConditionsDisplay row"},vo=_o(()=>s("div",{class:"pipe col-1 text-center"},"|",-1));function ho(e,t,n,r,l,o){const a=p("defenses-list"),d=p("conditions-list"),c=p("display-box");return u(),S(c,{"box-width":"382px","box-min-width":"382px","box-max-width":"382px","box-height":"100px","box-min-height":"100px","box-max-height":"100px"},{default:h(()=>[s("div",mo,[i(a,{class:"col"}),vo,i(d,{class:"col"})])]),_:1})}var fo=b(uo,[["render",ho],["__scopeId","data-v-f7e18938"]]);const bo=f({name:"SecondStatBarDesktop",components:{DefensesConditionsDisplay:fo,StackedInspirationInitiative:Hs,ProficiencyBonus:ws}}),xo={class:"q-gutter-md row items-end secondStatBarDesktop"};function go(e,t,n,r,l,o){const a=p("proficiency-bonus"),d=p("stacked-inspiration-initiative"),c=p("defenses-conditions-display");return u(),C("div",xo,[i(a),i(d),i(c)])}var $o=b(bo,[["render",go],["__scopeId","data-v-06179de1"]]);const yo=f({name:"ProficienciesLanguagesDisplay",components:{DisplayBox:A}}),So=s("div",{class:"proficienciesLanguagesDisplay"},[s("div",{class:"topLabel text-center text-h7"},"Proficiencies & Languages"),s("div",{class:"prof"}),s("div",{class:"prof"}),s("div",{class:"prof"}),s("div",{class:"lang"})],-1);function Co(e,t,n,r,l,o){const a=p("display-box");return u(),S(a,{"box-width":"300px","box-min-width":"300px","box-max-width":"300px","box-height":"310px","box-min-height":"310px","box-max-height":"310px"},{default:h(()=>[So]),_:1})}var wo=b(yo,[["render",Co]]);const ko=f({name:"HorizontalStat",props:["score","label","overallWidth"]}),Io={class:"score q-pl-sm text-bold"},To={class:"label text-capitalize q-px-sm"};function Lo(e,t,n,r,l,o){return u(),C("div",{class:"horizontalStat row items-center",style:ve({width:e.overallWidth})},[s("div",Io,x(e.score),1),s("div",To,x(e.label),1)],4)}var ge=b(ko,[["render",Lo],["__scopeId","data-v-e2930592"]]);const Ao=f({name:"SavingThrowItem",components:{ProficiencyBall:fe,HorizontalStat:ge},props:["savingThrowObj"]}),Do={class:"savingThrowItem row inline items-center no-wrap"},Po={class:"proficiencyBall"};function qo(e,t,n,r,l,o){const a=p("proficiency-ball"),d=p("horizontal-stat");return u(),C("div",Do,[s("div",Po,[i(a,{class:"proficiencyBall",status:e.savingThrowObj.proficiencyStatus,custom:e.savingThrowObj.proficiencyCustom},null,8,["status","custom"])]),i(d,{class:"horizontalStat",score:e.savingThrowObj.score,label:e.savingThrowObj.label,"overall-width":"125px"},null,8,["score","label"])])}var Bo=b(Ao,[["render",qo],["__scopeId","data-v-044037a4"]]);const Oo=f({name:"SavingThrows",components:{SavingThrowItem:Bo,DisplayBox:A},data(){return{savingThrowData:[{label:"strength",score:"+0",proficiencyStatus:"not_proficient",proficiencyCustom:!1},{label:"intelligence",score:"+7",proficiencyStatus:"proficient",proficiencyCustom:!1},{label:"dexterity",score:"+3",proficiencyStatus:"not_proficient",proficiencyCustom:!1},{label:"wisdom",score:"+11",proficiencyStatus:"expertise",proficiencyCustom:!0},{label:"constitution",score:"+3",proficiencyStatus:"not_proficient",proficiencyCustom:!1},{label:"charisma",score:"+0",proficiencyStatus:"not_proficient",proficiencyCustom:!1}],advantagesData:["against being charmed"]}},computed:{advantages(){return this.advantagesData.sort((e,t)=>e>t?1:-1).join(", ")}}}),Vo=e=>(I("data-v-47d62d4a"),e=e(),T(),e),Eo={class:"savingThrows"},No=Vo(()=>s("div",{class:"topLabel text-center text-h7 text-bold"},"SAVING THROWS",-1)),Mo={class:"row q-gutter-xs q-pl-md items-center"},Ro={class:"advantages q-px-sm q-pt-sm q-mr-xs row"},Go={class:"advantagesIcon col-1 q-mr-xs"},Ho={class:"advantagesList col"};function jo(e,t,n,r,l,o){const a=p("saving-throw-item"),d=p("display-box");return u(),S(d,{"box-width":"300px","box-min-width":"300px","box-max-width":"300px","box-height":"175px","box-min-height":"175px","box-max-height":"175px"},{default:h(()=>[s("div",Eo,[No,s("div",Mo,[(u(!0),C(Q,null,ae(e.savingThrowData,c=>(u(),S(a,{class:"savingThrowItem","saving-throw-obj":c,key:c.label},null,8,["saving-throw-obj"]))),128))]),s("div",Ro,[s("div",Go,[g("A "),i(M,null,{default:h(()=>[g("Advantage")]),_:1})]),s("div",Ho,x(e.advantages),1)])])]),_:1})}var Uo=b(Oo,[["render",jo],["__scopeId","data-v-47d62d4a"]]),E=W({name:"QTab",props:Ve,emits:Ee,setup(e,{slots:t,emit:n}){const{renderTab:r}=Ne(e,t,n);return()=>r("div")}});function zo(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((n,r)=>{const l=parseFloat(n);l&&(t[r]=l)}),t}var Qo=Re({name:"touch-swipe",beforeMount(e,{value:t,arg:n,modifiers:r}){if(r.mouse!==!0&&j.has.touch!==!0)return;const l=r.mouseCapture===!0?"Capture":"",o={handler:t,sensitivity:zo(n),direction:pe(r),noop:ke,mouseStart(a){ue(a,o)&&Ie(a)&&(X(o,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),o.start(a,!0))},touchStart(a){if(ue(a,o)){const d=a.target;X(o,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","notPassiveCapture"],[d,"touchend","end","notPassiveCapture"]]),o.start(a)}},start(a,d){j.is.firefox===!0&&ee(e,!0);const c=ce(a);o.event={x:c.left,y:c.top,time:Date.now(),mouse:d===!0,dir:!1}},move(a){if(o.event===void 0)return;if(o.event.dir!==!1){te(a);return}const d=Date.now()-o.event.time;if(d===0)return;const c=ce(a),L=c.left-o.event.x,v=Math.abs(L),D=c.top-o.event.y,m=Math.abs(D);if(o.event.mouse!==!0){if(v<o.sensitivity[1]&&m<o.sensitivity[1]){o.end(a);return}}else if(window.getSelection().toString()!==""){o.end(a);return}else if(v<o.sensitivity[2]&&m<o.sensitivity[2])return;const $=v/d,P=m/d;o.direction.vertical===!0&&v<m&&v<100&&P>o.sensitivity[0]&&(o.event.dir=D<0?"up":"down"),o.direction.horizontal===!0&&v>m&&m<100&&$>o.sensitivity[0]&&(o.event.dir=L<0?"left":"right"),o.direction.up===!0&&v<m&&D<0&&v<100&&P>o.sensitivity[0]&&(o.event.dir="up"),o.direction.down===!0&&v<m&&D>0&&v<100&&P>o.sensitivity[0]&&(o.event.dir="down"),o.direction.left===!0&&v>m&&L<0&&m<100&&$>o.sensitivity[0]&&(o.event.dir="left"),o.direction.right===!0&&v>m&&L>0&&m<100&&$>o.sensitivity[0]&&(o.event.dir="right"),o.event.dir!==!1?(te(a),o.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ue(),o.styleCleanup=q=>{o.styleCleanup=void 0,document.body.classList.remove("non-selectable");const V=()=>{document.body.classList.remove("no-pointer-events--children")};q===!0?setTimeout(V,50):V()}),o.handler({evt:a,touch:o.event.mouse!==!0,mouse:o.event.mouse,direction:o.event.dir,duration:d,distance:{x:v,y:m}})):o.end(a)},end(a){o.event!==void 0&&(se(o,"temp"),j.is.firefox===!0&&ee(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(!0),a!==void 0&&o.event.dir!==!1&&te(a),o.event=void 0)}};if(e.__qtouchswipe=o,r.mouse===!0){const a=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";X(o,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}j.has.touch===!0&&X(o,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchswipe;n!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&n.end(),n.handler=t.value),n.direction=pe(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(se(t,"main"),se(t,"temp"),j.is.firefox===!0&&ee(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function Wo(){const e=new Map;return{getCache:function(t,n){return e[t]===void 0?e[t]=n:e[t]},getCacheWithFn:function(t,n){return e[t]===void 0?e[t]=n():e[t]}}}const Fo={name:{required:!0},disable:Boolean},me={setup(e,{slots:t}){return()=>O("div",{class:"q-panel scroll",role:"tabpanel"},Z(t.default))}},Ko={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Yo=["update:modelValue","beforeTransition","transition"];function Xo(){const{props:e,emit:t,proxy:n}=he(),{getCacheWithFn:r}=Wo();let l,o;const a=de(null),d=de(null);function c(_){const y=e.vertical===!0?"up":"left";H((n.$q.lang.rtl===!0?-1:1)*(_.direction===y?1:-1))}const L=k(()=>[[Qo,c,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),v=k(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),D=k(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),m=k(()=>`--q-transition-duration: ${e.transitionDuration}ms`),$=k(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),P=k(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),q=k(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Te(()=>e.modelValue,(_,y)=>{const B=K(_)===!0?J(_):-1;o!==!0&&ie(B===-1?0:B<J(y)?-1:1),a.value!==B&&(a.value=B,t("beforeTransition",_,y),Le(()=>{t("transition",_,y)}))});function V(){H(1)}function w(){H(-1)}function F(_){t("update:modelValue",_)}function K(_){return _!=null&&_!==""}function J(_){return l.findIndex(y=>y.props.name===_&&y.props.disable!==""&&y.props.disable!==!0)}function $e(){return l.filter(_=>_.props.disable!==""&&_.props.disable!==!0)}function ie(_){const y=_!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(_===-1?v.value:D.value):null;d.value!==y&&(d.value=y)}function H(_,y=a.value){let B=y+_;for(;B>-1&&B<l.length;){const Y=l[B];if(Y!==void 0&&Y.props.disable!==""&&Y.props.disable!==!0){ie(_),o=!0,t("update:modelValue",Y.props.name),setTimeout(()=>{o=!1});return}B+=_}e.infinite===!0&&l.length!==0&&y!==-1&&y!==l.length&&H(_,_===-1?l.length:-1)}function le(){const _=J(e.modelValue);return a.value!==_&&(a.value=_),!0}function re(){const _=K(e.modelValue)===!0&&le()&&l[a.value];return e.keepAlive===!0?[O(De,P.value,[O(q.value===!0?r($.value,()=>({...me,name:$.value})):me,{key:$.value,style:m.value},()=>_)])]:[O("div",{class:"q-panel scroll",style:m.value,key:$.value,role:"tabpanel"},[_])]}function ye(){if(l.length!==0)return e.animated===!0?[O(Ae,{name:d.value},re)]:re()}function Se(_){return l=ze(Z(_.default,[])).filter(y=>y.props!==null&&y.props.slot===void 0&&K(y.props.name)===!0),l.length}function Ce(){return l}return Object.assign(n,{next:V,previous:w,goTo:F}),{panelIndex:a,panelDirectives:L,updatePanelsList:Se,updatePanelIndex:le,getPanelContent:ye,getEnabledPanels:$e,getPanels:Ce,isValidPanelName:K,keepAliveProps:P,needsUniqueKeepAliveWrapper:q,goToPanelByOffset:H,goToPanel:F,nextPanel:V,previousPanel:w}}var N=W({name:"QTabPanel",props:Fo,setup(e,{slots:t}){return()=>O("div",{class:"q-tab-panel",role:"tabpanel"},Z(t.default))}}),Zo=W({name:"QTabPanels",props:{...Ko,...Qe},emits:Yo,setup(e,{slots:t}){const n=he(),r=We(e,n.proxy.$q),{updatePanelsList:l,getPanelContent:o,panelDirectives:a}=Xo(),d=k(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(l(t),Ge("div",{class:d.value},o(),"pan",e.swipeable,()=>a.value))}}),Jo=W({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=k(()=>{const r=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${r.length!==0?" "+r:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>O("div",{class:n.value},Z(t.default))}}),ea=W({name:"QBtnToggle",props:{...Ke,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(t=>("label"in t||"icon"in t||"slot"in t)&&"value"in t)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:t,emit:n}){const r=k(()=>e.options.find(m=>m.value===e.modelValue)!==void 0),l=k(()=>({type:"hidden",name:e.name,value:e.modelValue})),o=Ye(l),a=k(()=>Oe(e)),d=k(()=>({rounded:e.rounded,dense:e.dense,...a.value})),c=k(()=>e.options.map((m,$)=>{const{attrs:P,value:q,slot:V,...w}=m;return{slot:V,props:{key:$,"aria-pressed":q===e.modelValue?"true":"false",...P,...w,...d.value,disable:e.disable===!0||w.disable===!0,color:q===e.modelValue?v(w,"toggleColor"):v(w,"color"),textColor:q===e.modelValue?v(w,"toggleTextColor"):v(w,"textColor"),noCaps:v(w,"noCaps")===!0,noWrap:v(w,"noWrap")===!0,size:v(w,"size"),padding:v(w,"padding"),ripple:v(w,"ripple"),stack:v(w,"stack")===!0,stretch:v(w,"stretch")===!0,onClick(F){L(q,m,F)}}}}));function L(m,$,P){e.readonly!==!0&&(e.modelValue===m?e.clearable===!0&&(n("update:modelValue",null,null),n("clear")):n("update:modelValue",m,$),n("click",P))}function v(m,$){return m[$]===void 0?e[$]:m[$]}function D(){const m=c.value.map($=>O(oe,$.props,$.slot!==void 0?t[$.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&r.value===!0&&o(m,"push"),He(t.default,m)}return()=>O(Jo,{class:"q-btn-toggle",...a.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},D)}});const ta=f({name:"ButtonGroup",props:["modelValue","options"],emits:["update:modelValue"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}}});function sa(e,t,n,r,l,o){return u(),C("div",null,[i(ea,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),color:"grey",size:"12px","text-color":"black","toggle-color":"red-14","toggle-text-color":"black",padding:"0 10px","no-wrap":"",unelevated:"",dense:"",options:e.options},null,8,["modelValue","options"])])}var oa=b(ta,[["render",sa]]);const aa=f({name:"UltraDisplay",components:{ButtonGroup:oa,DisplayBox:A},data(){return{primaryTab:"actions",actionsGroup:"all",actionsOptions:[{label:"ALL",value:"all"},{label:"ATTACK",value:"attack"},{label:"ACTION",value:"action"},{label:"BONUS ACTION",value:"bonus action"},{label:"REACTION",value:"reaction"},{label:"OTHER",value:"other"},{label:"LIMITED USE",value:"limited use"}],spellsGroup:"all",spellsOptions:[{label:"ALL",value:"all"},{label:"-0-",value:"cantrip"},{label:"1st",value:"1st"},{label:"2nd",value:"2nd"},{label:"3rd",value:"3rd"},{label:"4th",value:"4th"},{label:"5th",value:"5th"},{label:"6th",value:"6th"},{label:"7th",value:"7th"},{label:"R",value:"ritual"}],inventoryGroup:"all",inventoryOptions:[{label:"ALL",value:"all"},{label:"EQUIPMENT",value:"equipment"},{label:"BACKPACK",value:"backpack"},{label:"COMPONENT POUCH",value:"component pouch"},{label:"ATTUNEMENT",value:"attunement"},{label:"OTHER POSSESSIONS",value:"other possessions"}],featuresAndTraitsGroup:"all",featuresAndTraitsOptions:[{label:"ALL",value:"all"},{label:"CLASS FEATURES",value:"class features"},{label:"RACIAL TRAITS",value:"racial traits"},{label:"FEATS",value:"feats"}],descriptionGroup:"all",descriptionOptions:[{label:"ALL",value:"all"},{label:"BACKGROUND",value:"background"},{label:"CHARACTERISTICS",value:"characteristics"},{label:"APPEARANCE",value:"appearance"}],notesGroup:"all",notesOptions:[{label:"ALL",value:"all"},{label:"ORGANIZATIONS",value:"organizations"},{label:"ALLIES",value:"allies"},{label:"ENEMIES",value:"enemies"},{label:"BACKSTORY",value:"backstory"},{label:"OTHER",value:"other"}]}}}),G=e=>(I("data-v-625dff38"),e=e(),T(),e),na={class:"ultraDisplay"},ia={class:""},la={class:"q-gutter-y-md"},ra=G(()=>s("div",null,null,-1)),ca=G(()=>s("div",{class:"text-h6"},"SPELLS",-1)),da=G(()=>s("div",{class:"text-h6"},"INVENTORY",-1)),pa=G(()=>s("div",null,null,-1)),ua=G(()=>s("div",null,null,-1)),_a=G(()=>s("div",{class:"text-h6"},"EXTRAS",-1));function ma(e,t,n,r,l,o){const a=p("button-group"),d=p("display-box");return u(),S(d,{"box-width":"641px","box-min-width":"641px","box-max-width":"641px","box-height":"576px","box-min-height":"576px","box-max-height":"576px"},{default:h(()=>[s("div",na,[s("div",ia,[s("div",la,[i(Fe,null,{default:h(()=>[i(Me,{modelValue:e.primaryTab,"onUpdate:modelValue":t[0]||(t[0]=c=>e.primaryTab=c),dense:"",class:Pe(e.$q.dark.isActive?"bg-grey-9":"bg-grey-3"),"active-color":"red-14","indicator-color":"red-14",align:"justify","narrow-indicator":""},{default:h(()=>[i(E,{class:"tab q-px-xs",name:"actions",label:"ACTIONS"}),i(E,{class:"tab q-px-xs",name:"spells",label:"SPELLS"}),i(E,{class:"tab q-px-xs",name:"inventory",label:"INVENTORY"}),i(E,{class:"tab q-px-xs",name:"features&traits",label:"FEATURES & TRAITS"}),i(E,{class:"tab q-px-xs",name:"description",label:"DESCRIPTION"}),i(E,{class:"tab q-px-xs",name:"notes",label:"NOTES"}),i(E,{class:"tab q-px-xs",name:"extras",label:"EXTRAS"})]),_:1},8,["modelValue","class"]),i(je),i(Zo,{modelValue:e.primaryTab,"onUpdate:modelValue":t[7]||(t[7]=c=>e.primaryTab=c),animated:""},{default:h(()=>[i(N,{name:"actions"},{default:h(()=>[i(a,{modelValue:e.actionsGroup,"onUpdate:modelValue":t[1]||(t[1]=c=>e.actionsGroup=c),options:e.actionsOptions},null,8,["modelValue","options"]),ra,g(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1}),i(N,{name:"spells"},{default:h(()=>[ca,i(a,{modelValue:e.spellsGroup,"onUpdate:modelValue":t[2]||(t[2]=c=>e.spellsGroup=c),options:e.spellsOptions},null,8,["modelValue","options"]),g(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1}),i(N,{name:"inventory"},{default:h(()=>[da,i(a,{modelValue:e.inventoryGroup,"onUpdate:modelValue":t[3]||(t[3]=c=>e.inventoryGroup=c),options:e.inventoryOptions},null,8,["modelValue","options"]),g(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1}),i(N,{name:"features&traits"},{default:h(()=>[i(a,{modelValue:e.featuresAndTraitsGroup,"onUpdate:modelValue":t[4]||(t[4]=c=>e.featuresAndTraitsGroup=c),options:e.featuresAndTraitsOptions},null,8,["modelValue","options"]),pa,g(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1}),i(N,{name:"description"},{default:h(()=>[i(a,{modelValue:e.descriptionGroup,"onUpdate:modelValue":t[5]||(t[5]=c=>e.descriptionGroup=c),options:e.descriptionOptions},null,8,["modelValue","options"]),ua,g(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1}),i(N,{name:"notes"},{default:h(()=>[i(a,{modelValue:e.notesGroup,"onUpdate:modelValue":t[6]||(t[6]=c=>e.notesGroup=c),options:e.notesOptions},null,8,["modelValue","options"]),g(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1}),i(N,{name:"extras"},{default:h(()=>[_a,g(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1})]),_:1},8,["modelValue"])]),_:1})])])])]),_:1})}var va=b(aa,[["render",ma],["__scopeId","data-v-625dff38"]]);const ha=f({name:"SensesDisplay",components:{HorizontalStat:ge,DisplayBox:A},props:[""],data(){return{sensesData:[{label:"passive perception (wis)",score:"16"},{label:"passive investigation (int)",score:"17"},{label:"passive insight (wis)",score:"16"}],extraSenseData:["blindsight 30ft."]}},computed:{extraSenses(){return null}}}),fa={class:"sensesDisplay"},ba=s("div",{class:"topLabel text-center text-h7 text-bold"},"SENSES",-1),xa={class:"q-gutter-sm q-px-md"},ga={class:"extraSenses"};function $a(e,t,n,r,l,o){const a=p("horizontal-stat"),d=p("display-box");return u(),S(d,{"box-width":"300px","box-min-width":"300px","box-max-width":"300px","box-height":"175px","box-min-height":"175px","box-max-height":"175px"},{default:h(()=>[s("div",fa,[ba,s("div",xa,[(u(!0),C(Q,null,ae(e.sensesData,c=>(u(),S(a,{class:"stat",key:c.label,label:c.label,score:c.score,"overall-width":"225px"},null,8,["label","score"]))),128))]),s("div",ga,x(e.extraSenses),1)])]),_:1})}var ya=b(ha,[["render",$a]]);const Sa=f({name:"DnD5eLayout",components:{SensesDisplay:ya,UltraDisplay:va,SavingThrows:Uo,ProficienciesLanguagesDisplay:wo,SecondStatBarDesktop:$o,TopStatBarDesktop:bs,SkillsDisplay:$t},props:["data"]}),Ca={class:"stack row q-col-gutter-md"},wa={class:"col-4 q-gutter-md leftCol"},ka={class:"col q-px-none q-mx-none centerCol"},Ia={class:"col-6 rightCol q-pl-none"};function Ta(e,t,n,r,l,o){const a=p("top-stat-bar-desktop"),d=p("saving-throws"),c=p("senses-display"),L=p("proficiencies-languages-display"),v=p("skills-display"),D=p("second-stat-bar-desktop"),m=p("ultra-display");return u(),C("div",Ca,[i(a,{data:e.data},null,8,["data"]),s("div",wa,[i(d),i(c),i(L)]),s("div",ka,[i(v,{class:"q-mr-none"})]),s("div",Ia,[i(D,{class:"q-mb-md"}),i(m)])])}var La=b(Sa,[["render",Ta],["__scopeId","data-v-ad1975e0"]]);const Aa=f({name:"GamePage",props:["id"],components:{DnD5eLayout:La},data(){return{userStore:Xe(),activeCharacter:{}}},methods:{abilityModifiers(){const e=this.activeCharacter.abilityScoresTotal;for(let t in e)if(e.hasOwnProperty(t)){let n=e[t];e[t]=Math.floor((n-10)/2),console.log(t,e[t])}this.activeCharacter.abilityScoreModifiers=e,this.userStore.activeCharacter.abilityScoreModifiers=e,console.log(e)},logChar(){console.log("active Char",this.activeCharacter)}},created(){qe.doc(`users/${Be().authUser.uid}/characters/${this.id}`).onSnapshot(e=>{this.userStore.activeCharacter=new _e(e.id,e.data()),this.activeCharacter=new _e(e.id,e.data()),this.abilityModifiers(),console.log("active",this.activeCharacter)})},mounted(){}}),Da={class:"name full-width bg-grey-5"},Pa={class:"constrain q-mx-auto"},qa={class:"name text-h3"},Ba={class:"details text-h5 text-weight-light"},Oa={class:"q-mt-lg flex flex-center"};function Va(e,t,n,r,l,o){var d,c;const a=p("DnD5eLayout");return u(),C(Q,null,[s("div",Da,[s("div",Pa,[s("div",qa,x(e.activeCharacter.name),1),s("div",Ba,x(e.activeCharacter.race)+" | "+x((c=(d=e.activeCharacter)==null?void 0:d.classData)==null?void 0:c.classLevelString),1)])]),s("div",Oa,[e.activeCharacter.gameType==="DnD5e"?(u(),S(a,{key:0,data:e.activeCharacter},null,8,["data"])):U("",!0)])],64)}var tn=b(Aa,[["render",Va],["__scopeId","data-v-3b23b908"]]);export{tn as default};
