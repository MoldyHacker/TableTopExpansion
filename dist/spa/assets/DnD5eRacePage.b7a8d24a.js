import{d as c,Q as l}from"./QItem.e7d9baa2.js";import{Q as p}from"./QSelect.b9124267.js";import{u as m}from"./user-store.0afc118d.js";import{_ as h,J as d,K as u,Y as f,X as o,d as a,M as r,O as g}from"./index.58564a6b.js";import"./position-engine.c3f824e7.js";import"./use-router-link.8ff5dd5e.js";import"./render.a7501c6e.js";import"./focus-manager.b507780d.js";import"./use-dark.611856a0.js";import"./use-key-composition.cdded255.js";import"./QSpinner.bb55e475.js";import"./uid.42677368.js";import"./rtl.b51694b1.js";import"./use-form.48d835c9.js";const R=d({name:"DnD5eRacePage",props:["id"],data(){return{userStore:m(),activeCharacter:{},characterRace:"",stringOptions:["Aarakocra","Dragonborn","Hill Dwarf","Mountain Dwarf","High Elf","Wood Elf","Eladrin Elf","Air Genasi","Earth Genasi","Fire Genasi","Water Genasi","Rock Gnome","Deep Gnome","Goliath","Half-Elf","Half-Orc","Lightfoot Halfling","Stout Halfling","Human","Human Variant","Tiefling","Variant Aasimar"],options:this.stringOptions}},methods:{update(){this.characterRace&&this.userStore.updateCharacterVariable(this.id,"race",this.characterRace)},filterFn(e,t){if(e===""){t(()=>{this.options=this.stringOptions});return}t(()=>{const i=e.toLowerCase();this.options=this.stringOptions.filter(s=>s.toLowerCase().indexOf(i)>-1)})}},mounted(){this.activeCharacter=this.userStore.activeCharacter,this.characterRace=this.activeCharacter.race},computed:{},beforeUnmount(){}}),_={class:"flex flex-center"},C={class:"characterRace column"},V=o("span",{class:"label text-h6"},[o("strong",null,"Character Race")],-1);function D(e,t,i,s,H,b){return u(),f("div",_,[o("div",C,[V,a(p,{filled:"",modelValue:e.characterRace,"onUpdate:modelValue":t[0]||(t[0]=n=>e.characterRace=n),"use-input":"","input-debounce":"0",label:"Race",options:e.options,onFilter:e.filterFn,style:{width:"250px"},behavior:"menu",onBlur:e.update},{"no-option":r(()=>[a(c,null,{default:r(()=>[a(l,{class:"text-grey"},{default:r(()=>[g(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter","onBlur"])])])}var L=h(R,[["render",D]]);export{L as default};