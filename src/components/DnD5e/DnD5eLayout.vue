<script>
import {defineComponent} from 'vue'
import SkillsDisplay from "components/DnD5e/SkillsComponents/SkillsDisplay.vue";
import TopStatBarDesktop from "components/DnD5e/TopStatBarDesktop.vue";
import SecondStatBarDesktop from "components/DnD5e/SecondStatBarDesktop.vue";
import ProficienciesLanguagesDisplay from "components/DnD5e/ProficienciesLanguagesDisplay.vue";
import SavingThrows from "components/DnD5e/SavingThrowsComponents/SavingThrowsDisplay.vue";
import UltraDisplay from "components/DnD5e/UltraDisplay/UltraDisplay.vue";
import SensesDisplay from "components/DnD5e/SensesDisplay.vue";

export default defineComponent({
  name: "DnD5eLayout",
  props: ['data'],
  components: {
    SensesDisplay,
    UltraDisplay,
    SavingThrows,
    ProficienciesLanguagesDisplay,
    SecondStatBarDesktop,
    TopStatBarDesktop,
    SkillsDisplay
  },
})
</script>

<template>
  <div class="stack row q-col-gutter-md">
    <top-stat-bar-desktop :data="data"/>
    <div class="col-4 q-gutter-md leftCol">
      <saving-throws/>
      <senses-display/>
      <proficiencies-languages-display/>
    </div>
    <div class="col q-px-none q-mx-none centerCol">
      <skills-display class="q-mr-none"/>
    </div>
    <div class="col-5 rightCol q-pl-none">
      <second-stat-bar-desktop class="q-mb-md"/>
      <ultra-display/>
    </div>
  </div>
</template>

<style scoped>
.stack{
  max-width: 1154px;
}
.leftCol {
  width: 348px;
}
.centerCol {
  width: 400px;
}
.rightCol {

}
</style>
