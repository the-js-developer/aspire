<template>
  <div class="mobile-p-15">
    <q-expansion-item
      v-model="expanded"
      icon="article"
      label="Card details"
      :header-style="{ backgroundColor: '#F5F9FF', border: '1px solid #F5F9FF', color: '#0C365A', borderRadius:'10px' }"
      header-class="q-pa-lg"
    >
      <q-card>
        <q-card-section>
          Hello
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'CardDetails', 
  setup () {
    return {
      expanded: ref(false)
    }
  }
})
</script>

<style>
  @media screen and (max-width: 600px) {
  .pt-md {
      padding-top:15px;
  }
}
</style>