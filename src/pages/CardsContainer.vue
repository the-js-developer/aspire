<template>
  <q-page class="q-pa-xl p-none mobile-background">
    <div class="row justify-between mobile-p-15">
      <div class="col mobile-text">
        <p class="text-heading">Available Balance </p>
        <div>
          <span class="currency-text bg-positive q-mr-sm">S$</span>
          <span class="text-h6">3,000</span>
        </div>
      </div>
      <div class="col text-right">
        <q-btn color="secondary" 
          icon="add_circle_outline" 
          label="New Card" 
          :no-caps="true" 
          :dense="true"
          :type="button"
          padding="10px"
          @click="confirm = true"
          class="mobile-background"
        />
      </div>
    </div>
    <div class="q-mt-xl">
      <Tabs :list="tabsList" />
    </div>

    <q-dialog v-model="confirm" persistent
      @hide="hideModal"
    >
      <q-card style="width: 300px">
        <q-form
          ref="myForm"
          @submit="onSubmit"
          class="q-gutter-md q-pa-lg"
        >
          <q-card-section class="items-center full-width">
            <q-input
              filled
              v-model="name"
              label="Your full name *"
              input-class="full-width"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'This field is required']"
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn label="Submit" type="submit" color="primary" v-close-popup="name.length > 1 ? '1': '0'"/>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Tabs from 'components/Tabs.vue'
import { ref } from 'vue'
import { useStore } from 'vuex';
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'CardsContainer',
  components: {
    Tabs
  },
  setup () {
    const $q = useQuasar()
    const $store = useStore()
    const myForm = ref(null)
    return {
      confirm: ref(false),
      tabsList: [
        {
          name: 'myCards',
          label: 'My debit cards',
          disable: false,
        },
        {
          name: 'companyCards',
          label: 'All company cards',
          disable: true,
        },
      ],
      myForm,
      $store
    }
  },

  data() {
    return {
      name: '',
      toClose: 0,
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addCard', this.name);
    },
    hideModal () {
      this.name = '';
    }
  },
})
</script>

<style lang="scss">
  .currency-text  {
    padding: 4px 14px;
    border-radius: 5px;
    color: #fff;
    font-size:13pt;
  }

  @media screen and (max-width: 600px) {
    .text-heading {
      color: #fff;
    }
  }


</style>