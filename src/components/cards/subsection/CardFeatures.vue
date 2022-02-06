<template>
  <div class="row feature-container q-pa-lg">
    <div class="col">
      <div class="text-center">
        <button class="feature-btn cursor-pointer" @click="toggleCardFreeze">
          <img src="~assets/Freeze_card.svg" />
        </button>
      </div>
      <div class="text-center">{{freezeText}}</div>
    </div>
    <div class="col">
      <div class="text-center">
        <button class="feature-btn cursor-pointer"> 
          <img src="~assets/Set_spend_limit.svg" />
        </button>
      </div>
      <div class="text-center">Set spend limit</div>
    </div>
    <div class="col">
      <div class="text-center">
        <button class="feature-btn cursor-pointer">
          <img src="~assets/Gpay.svg" />
        </button>
      </div>
      <div class="text-center">Add to GPay</div>
    </div>
    <div class="col">
      <div class="text-center">
        <button class="feature-btn cursor-pointer">
          <img src="~assets/Replace_card.svg" />
        </button>
      </div>
      <div class="text-center">Replace Card</div>
    </div>
    <div class="col">
      <div class="text-center">
        <button class="feature-btn cursor-pointer"
          @click="confirm = true"
        >
          <img src="~assets/Deactivate_card.svg" />
        </button>
      </div>
      <div class="text-center">Cancel card</div>
    </div>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Do you want to cancel this card ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="negative" v-close-popup />
          <q-btn flat label="Confirm"  @click="cancelCard" color="positive" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'CardFeatures',
  setup() {
    return {
      confirm: ref(false),
    }
  },
  props: {
    cards: {
      type: Array,
      required: true
    },
    selectedCard: {
      type: String,
      required: true,
    },
  },

  computed: {
    card() {
      return this.cards.find((card) => {return card.name === this.selectedCard ;})
    },

    freezeText() {
      console.log("card is", this.card)
      return this.card && this.card.canFreeze ? 'Freeze card' : 'Unfreeze Card'
    }

  },

  methods: {
    toggleCardFreeze() {
       this.$emit('toggle-freeze', this.card);
    },
    cancelCard() {
      this.$emit('cancel-card', this.card)
    }
  }
})
</script>

<style>

.feature-btn {
  border: none;
  background: transparent;
}

.feature-container {
  background-color: #EDF3FF;
  border-radius: 10px;
}

@media screen and (max-width: 600px) {
  .feature-container {
    background-color: #EDF3FF;
    border-radius: 30px 30px 0 0;
  }
}
</style>