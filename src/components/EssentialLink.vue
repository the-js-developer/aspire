<template>
  <div
    v-for="link in links"
    :key="link.title"
  >
    <q-item
      clickable
      tag="a"
      target="_blank"
      class="q-py-lg"
    >
      <q-item-section
        v-if="link.icon"
        avatar
      >
        <q-icon 
          :name="link.icon" 
          :color="link.isActive ? 'positive' : ''"
        />
      </q-item-section>

      <q-item-section>
        <q-item-label :class="link.isActive ? 'text-positive' : '' ">{{ link.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    links: {
      type: Array,
      required: true
    },
  },
})
</script>
