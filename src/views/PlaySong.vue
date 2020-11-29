<template>
  <v-container>
    <v-row>
      <v-col class="text-left">
        <v-btn
          class="mx-2"
          fab
          color="primary"
          dark
          outlined
          small
          @click="redirectTo('playlist')"
        >
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>
      </v-col>
      <div style="margin-top: 7rem"></div>
      <v-col class="text-right">
        <v-btn class="mx-2" fab color="primary" dark small>
          <v-icon>
            mdi-heart-outline
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <v-img
          :src="require(`@/assets/${currentSong.coverImage}`)"
          class="rounded-circle"
          max-height="225"
          max-width="225"
          style="filter: drop-shadow(0 2mm 15mm #ee44aa);"
        ></v-img>
      </v-col>
      <v-col cols="12" class="text-center mt-10">
        <p class="display-2 white--text" style="text-shadow: #FC0 1px 0 10px;">
          {{ currentSong.title }}
        </p>
        <p class="overline grey--text">{{ currentSong.artist }}</p>
      </v-col>
      <v-col xl="4" lg="6" md="8" sm="10" class="mr-auto ml-auto">
        <v-progress-linear value="15" height="6"></v-progress-linear>
        <div class="d-flex justify-space-between mt-2">
          <p class="grey--text">
            0:31
          </p>
          <p class="grey--text">
            {{ currentSong.howl.duration() }}
          </p>
        </div>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn class="mx-2" fab dark color="primary" outlined small>
          <v-icon dark>mdi-shuffle-variant</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark color="primary" outlined small>
          <v-icon dark>mdi-skip-previous</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark color="primary" @click="togglePlay()">
          <v-icon dark>
            {{ this.currentSong.howl.playing() ? 'mdi-pause' : 'mdi-play' }}
          </v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark color="primary" outlined small>
          <v-icon dark>mdi-skip-next</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark color="primary" outlined small>
          <v-icon dark>mdi-repeat-once</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-3">
      <v-col xl="4" lg="6" md="8" sm="10" class="mr-auto ml-auto">
        <v-slider dark color="grey">
          <v-icon slot="prepend" color="primary">mdi-volume-low</v-icon>
          <v-icon slot="append" color="primary">mdi-volume-high</v-icon>
        </v-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import songs from '../data/playlist';
import { Howl } from 'howler';

export default {
  name: 'PlaySong',
  data() {
    return {
      songs,
      currentSong: [],
      togglePlayIcon: 'mdi-play',
    };
  },
  methods: {
    redirectTo(routeName) {
      this.$router.push({ name: routeName });
    },
    togglePlay() {
      this.currentSong.howl.playing()
        ? this.currentSong.howl.pause()
        : this.currentSong.howl.play();
    },
  },
  created() {
    this.currentSong = songs.find(song => song.id === this.$route.params.id);

    this.currentSong.howl = new Howl({
      src: require(`../../playlist/${this.currentSong.file}`),
      autoplay: false,
    });

    console.log(this.currentSong.howl);
  },
};
</script>
