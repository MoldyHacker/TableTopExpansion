import{Q as o}from"./QInput.adf543fa.js";import{u as s}from"./user-store.0afc118d.js";import{_ as c,J as n,K as i,Y as m,X as t,d}from"./index.58564a6b.js";import"./use-key-composition.cdded255.js";import"./QSpinner.bb55e475.js";import"./render.a7501c6e.js";import"./use-dark.611856a0.js";import"./uid.42677368.js";import"./focus-manager.b507780d.js";import"./use-form.48d835c9.js";const p=n({name:"DnD5eSettingsPage",props:["id"],data(){return{userStore:s(),activeCharacter:{},characterName:""}},methods:{update(){this.characterName&&this.userStore.updateCharacterVariable(this.id,"name",this.characterName)}},updated(){},beforeUnmount(){},mounted(){this.activeCharacter=this.userStore.activeCharacter,this.characterName=this.activeCharacter.name}}),u={class:"flex flex-center"},h={class:"characterName column"},l=t("span",{class:"label text-h6"},[t("strong",null,"Character Name")],-1);function f(e,a,N,_,v,C){return i(),m("div",u,[t("div",h,[l,d(o,{standout:"",debounce:"500",modelValue:e.characterName,"onUpdate:modelValue":a[0]||(a[0]=r=>e.characterName=r),onBlur:e.update,style:{width:"300px"}},null,8,["modelValue","onBlur"])])])}var P=c(p,[["render",f]]);export{P as default};