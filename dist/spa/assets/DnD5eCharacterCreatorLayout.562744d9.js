import{Q as u,b as c,a as p}from"./QPageContainer.354edaf2.js";import{u as b,a as f}from"./use-router-link.8ff5dd5e.js";import{u as _,a as v,b as C,Q as g}from"./QTabs.7a6464f7.js";import{c as h}from"./render.a7501c6e.js";import{c as D,w as T,_ as x,J as Q,K as y,Y as k,X as w,d as e,M as r,F as $,W as L,O as s,P}from"./index.58564a6b.js";import{Q as R}from"./QTooltip.cc173ac6.js";import{Q as S}from"./QBtn.0cceea7f.js";import{u as q}from"./user-store.0afc118d.js";import"./QSpinner.bb55e475.js";import"./uid.42677368.js";import"./QResizeObserver.8c08070d.js";import"./position-engine.c3f824e7.js";import"./focus-manager.b507780d.js";import"./rtl.b51694b1.js";var t=h({name:"QRouteTab",props:{...b,..._},emits:v,setup(a,{slots:n,emit:i}){const o=f({useDisableForRouterLinkProps:!1}),{renderTab:l,$tabs:d}=C(a,n,i,{exact:D(()=>a.exact),...o});return T(()=>`${a.name} | ${a.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{d.verifyRouteModel()}),()=>l(o.linkTag.value,o.linkAttrs.value)}});const B=Q({name:"DnD5eCharacterCreatorLayout",props:["id"],data(){return{userStore:q()}},mounted(){this.userStore.activateCharacter(this.id),console.log("Character ID: ",this.id)}}),E={class:"layout text-white"};function F(a,n,i,o,l,d){const m=L("router-view");return y(),k($,null,[w("div",E,[e(u,null,{default:r(()=>[e(p,null,{default:r(()=>[s(" DnD5e | Character Creator: "+P(a.userStore.activeCharacter.name),1)]),_:1})]),_:1}),e(g,{align:"center","outside-arrows":"","inline-label":""},{default:r(()=>[e(t,{exact:"",name:"dnd5e-settings",to:{name:"dnd5e-settings",params:{id:a.id}},label:"Settings",icon:"settings"},null,8,["to"]),e(t,{exact:"",name:"dnd5e-race",to:{name:"dnd5e-race",params:{id:a.id}},label:"Race"},null,8,["to"]),e(t,{exact:"",name:"dnd5e-class",to:{name:"dnd5e-class",params:{id:a.id}},label:"Class"},null,8,["to"]),e(t,{exact:"",name:"dnd5e-abilities",to:{name:"dnd5e-abilities",params:{id:a.id}},label:"Abilities"},null,8,["to"]),e(t,{exact:"",name:"dnd5e-description",to:{name:"dnd5e-description",params:{id:a.id}},label:"Description"},null,8,["to"]),e(t,{exact:"",name:"dnd5e-equipment",to:{name:"dnd5e-equipment",params:{id:a.id}},label:"Equipment"},null,8,["to"]),e(t,{exact:"",name:"dnd5e-extras",to:{name:"dnd5e-extras",params:{id:a.id}},label:"Extras"},null,8,["to"]),e(S,{disable:"",dense:"",square:"",class:"no-wrap gameBtn q-ml-lg bg-primary"},{default:r(()=>[e(R,null,{default:r(()=>[s("Game Page")]),_:1}),s(" Game Page")]),_:1})]),_:1})]),e(c,null,{default:r(()=>[e(m)]),_:1})],64)}var z=x(B,[["render",F],["__scopeId","data-v-1e569f8c"]]);export{z as default};
