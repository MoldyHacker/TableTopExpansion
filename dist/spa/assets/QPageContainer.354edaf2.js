import{c as n,b as i}from"./render.a7501c6e.js";import{c as l,h as p,i as c,j as s,H as d,l as f,a0 as g,g as h}from"./index.58564a6b.js";var v=n({name:"QToolbarTitle",props:{shrink:Boolean},setup(o,{slots:a}){const t=l(()=>"q-toolbar__title ellipsis"+(o.shrink===!0?" col-shrink":""));return()=>p("div",{class:t.value},i(a.default))}}),y=n({name:"QToolbar",props:{inset:Boolean},setup(o,{slots:a}){const t=l(()=>"q-toolbar row no-wrap items-center"+(o.inset===!0?" q-toolbar--inset":""));return()=>p("div",{class:t.value,role:"toolbar"},i(a.default))}}),Q=n({name:"QPageContainer",setup(o,{slots:a}){const{proxy:{$q:t}}=h(),e=c(f,s);if(e===s)return console.error("QPageContainer needs to be child of QLayout"),s;d(g,!0);const u=l(()=>{const r={};return e.header.space===!0&&(r.paddingTop=`${e.header.size}px`),e.right.space===!0&&(r[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(r.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(r[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),r});return()=>p("div",{class:"q-page-container",style:u.value},i(a.default))}});export{y as Q,v as a,Q as b};
