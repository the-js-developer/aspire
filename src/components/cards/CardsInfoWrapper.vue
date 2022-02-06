<template>
  <div class="row">
    <div class="col-sm-6 col-md-6 col-lg-6 col-xs-12 ">
        <div class="row mobile-background">
            <CardsList 
                :cards="cardsList"
                @cardChanged="cardChanged"
            />
        </div>
        <div class="row mobile-background">
            <CardFeatures
                :cards="cardsList"
                :selectedCard="selectedCard"
                @toggleFreeze="toggleFreeze"
                @cancelCard="cancelCard"
            />
        </div>       
    </div>

    <div class="offset-lg-1 offset-md-1 offset-sm-1 col-sm-5 col-md-5 col=lg-5 col-xs-12">
        <CardDetails />
        <CardTransaction
            :transactions="transactions"
         />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CardsList from 'components/cards/subsection/CardsList.vue';
import CardFeatures from 'components/cards/subsection/CardFeatures.vue';
import CardDetails from 'components/cards/subsection/CardDetails.vue';
import CardTransaction from 'components/cards/subsection/CardTransaction.vue';
import { useStore } from 'vuex'


export default defineComponent({
  name: 'CardsInfoWrapper',
  components: {
      CardsList,
      CardFeatures,
      CardDetails,
      CardTransaction
  },
  setup() {
      const $store = useStore()
      $store.dispatch('fetchCards');    
      let cards = $store.getters.getCards;
      $store.dispatch('fetchTransactions');
      let transactions = $store.getters.getTransactions;
      return {
        cards,
        transactions,
        $store
      }
  },

  data() {
      return {
          selectedCard: '',
      }
  },

  methods : {
      cardChanged(card) {
          this.selectedCard = card;
      },
      toggleFreeze(card) {
          this.$store.dispatch('toggleCardFreeze', card);    
      },
      cancelCard(card) {
          this.$store.dispatch('cancelCard', card);
          //this.cards = this.$store.getters.getCards;    
      }
  },

  computed:{
      cardsList() {
          return this.$store.getters.getCards;
      }
  }
 
})
</script>
