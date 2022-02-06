<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      show-if-above
      bordered
      dark
      class="q-pa-lg"
    >

      <div>
        <img
          alt="Aspire logo"
          src="~assets/Aspire_Logo.svg"
          style="width: 120px; height: 80px"
        >
        <p class="disabled">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>
      <q-list>
        <EssentialLink
          :links="essentialLinks"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    isActive: false
  },
  {
    title: 'Cards',
    icon: 'credit_card',
    isActive: true
  },
  {
    title: 'Payments',
    icon: 'sync_alt',
    isActive: false
  },
  {
    title: 'Credit',
    icon: 'arrow_circle_up',
    isActive: false
  },
  {
    title: 'Settings',
    icon: 'person',
    isActive: false
  },
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss">

@media screen and (max-width: 600px) {
  
}
</style>
