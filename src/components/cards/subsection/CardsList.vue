<template>
  <div class="fit mobile-py">
    <div class="text-right text-positive">
      <img class="vertical-middle" src="~/assets/eye.svg">
      <span class="q-pl-sm text-caption">Show card Number</span>
    </div>
    <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        height="300px"
        swipeable
        animated
        control-color="green"
        navigation
        class="mobile-background"
        @update:model-value="changeCard(slide)"
      >

        <q-carousel-slide v-for="card in cards"
          :key="card.maskedCardNumer"
          :name="card.name" 
          class="q-pa-none"
        >
          <div class="card-layout q-pa-lg"
            :class="card.canFreeze ? 'bg-positive': 'bg-grey'"
          >
            <div class="text-right">
              <img src="~assets/Aspire_Logo_white.svg" />
            </div>
            <div class="q-pt-lg">
                <h4 class="q-ma-none">{{card.name}}</h4>
            </div>
            <div class="q-pt-md row text-bold">
              <div class="col-2" v-for="n in 3" :key="n">
                <span class="maskedCardNumber">****</span>
              </div>
              <div class="col-2 actualCardNumber">{{card.maskedCardNumer}}</div>
            </div>
            <div class="row">
              <div class="col-4">
                <span>Thru: </span> <span>{{card.validity}}</span>
              </div>
              <div class="col-3">
                <span>CVV </span> <span class="">***</span>
              </div>
            </div>
            <div class="text-right">
              <img src="~assets/Visa_Logo.svg" />
            </div>
          </div>
        </q-carousel-slide>
    </q-carousel>

    <q-card>

    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'CardsList',
  setup (props) {
    return {
      slide: ref(props.cards[0].name),
    }
  },
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.changeCard(this.slide);
  },
  watch: {
    cards(newValue,oldValue) {
      if(newValue.length != oldValue.length) {
        this.slide = ref(this.cards[0].name)
      }
      this.changeCard(this.cards[0]);
    } 
  },
  methods: {
    changeCard(val) {
      this.$emit('card-changed', this.slide);
    }
  },
})
</script>

<style lang="scss">
.card-layout {
  width: 100%;
  color: #fff;
  border-radius: 10px
}

.maskedCardNumber {
  font-size: 1.5rem;
}

.actualCardNumber {
  font-size: 1rem;
}

@media screen and (max-width: 600px) {
  
}

</style>