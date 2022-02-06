<template>
  <div class="q-pt-lg mobile-p-15">
    <q-expansion-item
      v-model="expanded"
      icon="sync_alt"
      label="Recent transactions"
      :header-style="{ backgroundColor: '#F5F9FF', color: '#0C365A' }"
      header-class="q-pa-lg"
      class="expansion-border"
    >
      <q-card>
        <q-card-section 
            v-for="(transaction) in transactions" 
            :key="transaction.id"
            class="q-pb-none"
        >
         <div class="row q-pb-md">
            <div class="col-2 flex flex-wrap ">
                <img src="~assets/file-storage.svg" />
            </div>
            <div class="col-7">
                <div class="text-bold">{{transaction.secondParty}}</div>
                <div class="disabled">{{transaction.date}}</div>
                <div>
                    <div class="inline-block bg-secondary text-center dimension"><img src="~assets/business-and-finance.svg" /></div>
                    <span class="text-secondary text-bold"> {{transaction.type === 'Debit' ? 'Charged to' : 'Refund on'}} debit card </span> 
                </div>
            </div>
            <div class="col-3" 
                :class="transaction.type === 'Credit' ? 'text-positive text-bold' : ''"
            >
                {{transaction.type === 'Debit' ? '-' : '+'}} S$ {{transaction.amount}}
            </div>
         </div>
         <q-separator inset />
        </q-card-section>
        <q-card-section class="q-pa-none">
               <q-btn no-caps class="full-width text-bold" color="green-11" text-color="positive" label="View all card transactions" />
        </q-card-section>

      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'CardTransaction', 
  setup () {
    return {
      expanded: ref(true)
    }
  },

  data() {
      return {
          images: [
              '~assets/file-storage.svg',
              '~assets/megaphone.svg',
              '~assets/flights.svg'
          ]
      }
  },

  props : {
      transactions: {
          type: Array,
          required: true,
      }
  },

})
</script>

<style>
.dimension {
    border-radius: 10px;
    width: 25px;
    height: 20px;
} 
.expansion-border {
    border: 1px solid #F5F9FF;
    border-radius:10px;
}   
</style>