<template>
  <div class="page" :class="pageModifiers">
    <div class="page__container">
      <MovieDetails
        :movie="movie"
        :inverted="inverted"
        :grayscale="grayscale"
        :flipped="flipped"
        :party="party"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import MovieDetails from './components/MovieDetails.vue'
import './globals.css'
import { Movie } from './types/Movie'

export default defineComponent({
  components: { MovieDetails },
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
    inverted: {
      type: Boolean,
      required: false,
      default: false,
    },
    grayscale: {
      type: Boolean,
      required: false,
      default: false,
    },
    flipped: {
      type: Boolean,
      required: false,
      default: false,
    },
    party: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    pageModifiers() {
      return {
        'page--party': this.party,
      }
    },
  },
})
</script>

<style lang="scss">
.page {
  background: #1f1f1f;
  color: white;
  position: relative;
  z-index: -1;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &--party::after {
    content: '';
    position: fixed;
    top: 60%;
    left: -1000px;
    right: -1000px;
    margin: 0 auto;

    height: 4000px;
    aspect-ratio: 1;
    box-shadow: 0rem -10rem 10rem green;
    background: green;
    border-radius: 100%;
    z-index: -1;

    animation: background-party 1s linear infinite;
    opacity: 0.5;
  }
}

@keyframes background-party {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
