<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DefensesList",
  // props: ['resistances', 'immunities', 'vulnerabilities'],
  data(){
    return{
      resistances: [{resistance: 'Bludgeoning',custom: true}, {resistance: 'Magical Sleep'}, {resistance: 'Acid', custom: true}],
      immunities: [],
      vulnerabilities: [],
    }
  },
  computed: {
    resistancesList(){
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      let resistList = this.resistances.sort((a,b) => a.resistance > b.resistance ? 1 : -1);
      let resist = [];
      resistList.forEach(r => r.custom ? r.resistance + '* ' : r.resistance + ' ')
      for (let r of resistList) {
        // console.log(r)
        if (r.custom)
          resist.push(r.resistance + '*');
        else
          resist.push(r.resistance);
      }
      console.log(resist)
      return resist.join(', ');
    }
  },
})
</script>

<template>
<div class="defensesList q-pl-xs q-gutter-xs">
  <div class="topLabel text-bold text-left">DEFENCES</div>
  <div class="resistances row">
    <div class="positiveIcon icon col-1 q-mr-xs">R <q-tooltip>Resistances</q-tooltip> </div>
    <div class="resistancesList ellipsis col">{{ resistancesList }} <q-tooltip>{{ resistancesList }}</q-tooltip></div>
  </div>
  <div class="immunities row">
    <div class="positiveIcon icon col-1 q-mr-xs">I <q-tooltip>Immunities</q-tooltip></div>
    <div class="immunitiesList ellipsis col">{{  }} <q-tooltip>{{  }}</q-tooltip></div>
  </div>
  <div class="vulnerabilities row">
    <div class="negativeIcon icon col-1 q-mr-xs">V <q-tooltip>Vulnerabilities</q-tooltip></div>
    <div class="vulnerabilitiesList ellipsis col">{{  }} <q-tooltip>{{  }}</q-tooltip></div>
  </div>
</div>
</template>

<style scoped>
.defensesList{
  //max-width: 125px;
}

.topLabel{}


.icon{
  border-radius: 50%;
  width: 15px;
  height: 15px;
  text-align: center;
  align-self: center;
  font-size: 12px;
}
.positiveIcon{
  background: #21BA45;
}
.negativeIcon{
  background: #C10015;
}

.resistances{}
.resistancesList{}

.immunities{}
.immunitiesList{}

.vulnerabilities{}
.vulnerabilitiesList{}

</style>
