<template>
  <div>
    <q-tabs
        v-model="tabData"
        dense
        no-caps
        class="text-grey mobile-layout mobile-text"
        active-color="$q.screen.xs ?  '' : 'primary' "
        indicator-color="cyan-12"
        align="left"
        narrow-indicator
    >
        <q-tab v-for="tab in list" :key="tab.name"
            :name="tab.name" 
            :label="tab.label"
            :disable="tab.disable"
        />
    </q-tabs>
    <q-card>
        <q-tab-panels v-model="tabData" animated class="mobile-layout">
            <q-tab-panel v-for="tab in list" :key="tab.name"
                :name="tab.name" 
                :label="tab.label"
                :disable="tab.disable"
                class="p-none"
            >
                <div v-if="!tab.disable" class="q-pa-lg p-none">
                    <CardsInfoWrapper v-if="tab.name==='myCards'" />
                </div>

            </q-tab-panel>
        </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CardsInfoWrapper from 'components/cards/CardsInfoWrapper.vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'Tabs',
  components: {
      CardsInfoWrapper,
  },
  setup () {
    return {
      tabData: ref('myCards')
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    },
  }
})
</script>

<style lang="scss">
  @media screen and (max-width: 600px) {

  } 
</style>
