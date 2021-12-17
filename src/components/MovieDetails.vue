<template>
  <div class="layout">
    <div class="layout__split" :class="splitModifiers">
      <div class="layout__left">
        <div class="details">
          <div class="details__title">{{ movie.title }}</div>
          <div class="details__stats">
            <div>{{ movie.year }}</div>
            <div>{{ movie.ageLimit }}</div>
            <div>{{ movie.runtime }}</div>
          </div>
          <div class="details__rating">{{ movie.rating }}</div>
          <div class="details__genres">
            <div class="genre" v-for="genre in movie.genres" :key="genre">
              {{ genre }}
            </div>
          </div>
          <div class="details__description">{{ movie.description }}</div>
          <div class="details__credits">
            <div
              class="credit"
              v-for="credit in movie.credits"
              :key="credit.title"
            >
              <div class="credit__title">{{ credit.title }}</div>
              <div class="credit__name">{{ credit.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="layout__right">
        <img class="poster" :class="posterModifiers" :src="movie.poster" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Movie } from '../types/Movie'

export default defineComponent({
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
    splitModifiers() {
      return {
        'layout__split--flipped': this.flipped,
      }
    },
    posterModifiers() {
      return {
        'poster--grayscale': this.grayscale,
        'poster--inverted': this.inverted,
        'poster--party': this.party,
      }
    },
  },
})
</script>

<style lang="scss">
@import './MovieDetails.scss';
</style>
