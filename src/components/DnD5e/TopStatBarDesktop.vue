<script>
import {defineComponent} from 'vue'
import HealthTrackerDesktop from "components/DnD5e/HealthTrackerDesktop.vue";
import AbilityStatGroup from "components/DnD5e/AbilityComponents/AbilityStatGroup.vue";
import MovementSpeed from "components/DnD5e/MovementSpeed.vue";
import ArmorClass from "components/DnD5e/ArmorClass.vue";

export default defineComponent({
  name: "TopStatBarDesktop",
  components: {ArmorClass, MovementSpeed, AbilityStatGroup, HealthTrackerDesktop}
})
</script>

<template>
  <div class="q-gutter-md row q-ml-none q-pl-none sized">
    <health-tracker-desktop class="col q-ml-none"/>
    <ability-stat-group class="col"/>
    <movement-speed class="col"/>
    <armor-class class="col"/>
  </div>
</template>

<style scoped lang="scss">
.sized {
  //transform: scale(105%);
}
@media (max-width: 1200px) {
  .sized {
    transform: scale(85%);
  }
}
</style>
