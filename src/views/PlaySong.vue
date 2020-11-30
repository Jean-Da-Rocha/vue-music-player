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
        <v-btn
          class="mx-2"
          fab
          color="primary"
          dark
          small
          @click="toggleBookmark()"
        >
          <v-icon>
            {{ currentSong.bookmarked ? 'mdi-heart' : 'mdi-heart-outline' }}
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
        <v-progress-linear
          v-model="getSongProgress"
          height="6"
        ></v-progress-linear>
        <div class="d-flex justify-space-between mt-2">
          <p class="grey--text">
            {{ currentPlayerTime | minutes }}
          </p>
          <p class="grey--text">
            {{ currentSong.howl.duration() | minutes }}
          </p>
        </div>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          :outlined="!shuffle"
          small
          @click="toggleShuffle()"
        >
          <v-icon dark>mdi-shuffle-variant</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          outlined
          small
          @click="previousSong()"
        >
          <v-icon dark>mdi-skip-previous</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          @click="toggleSongPlaying()"
        >
          <v-icon dark>
            {{ this.currentSong.howl.playing() ? 'mdi-pause' : 'mdi-play' }}
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          outlined
          small
          @click="nextSong()"
        >
          <v-icon dark>mdi-skip-next</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          :outlined="!loop"
          small
          @click="toggleLoop()"
        >
          <v-icon dark>mdi-repeat-once</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-3">
      <v-col xl="4" lg="6" md="8" sm="10" class="mr-auto ml-auto">
        <v-slider
          dark
          color="grey"
          v-model="songVolume"
          max="1"
          step="0.01"
          @change="setVolume(songVolume)"
          style="touch-action: none;"
        >
          <v-icon slot="prepend" color="primary" @click="toggleVolumeMuted()">
            {{ muted ? 'mdi-volume-off' : 'mdi-volume-low' }}
          </v-icon>
          <v-icon slot="append" color="primary">mdi-volume-high</v-icon>
        </v-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import playlist from '../data/playlist';
import priorityQueue from '../data/queue';
import { Howl, Howler } from 'howler';

export default {
  name: 'PlaySong',
  data() {
    return {
      currentIndex: 0,
      currentPlayerTime: 0,
      currentSong: [],
      muted: false,
      loop: false,
      shuffle: false,
      playlist,
      priorityQueue,
      oldVolumeValue: 0,
      songVolume: 0.5,
      songProgress: 0,
      togglePlayIcon: 'mdi-play',
    };
  },
  methods: {
    redirectTo(routeName) {
      this.$router.push({ name: routeName });
    },
    play() {
      this.currentSong.howl.play();
    },
    pause() {
      this.currentSong.howl.pause();
    },
    stop() {
      this.currentSong.howl.stop();
    },
    previousSong() {
      this.currentIndex -= 1;

      if (this.currentIndex < 0) {
        this.currentIndex = this.playlist.length - 1;
      }

      this.getPreviousSongRoute();
    },
    nextSong() {
      if (this.shuffle) {
        this.currentIndex = this.generateRandomIndex();
      } else {
        this.currentIndex += 1;
      }

      if (this.priorityQueue.length > 0) {
        this.currentIndex = this.playlist.findIndex(
          song => song.id === this.priorityQueue[0]
        );

        this.priorityQueue.shift();
      }

      if (this.currentIndex >= this.playlist.length) {
        this.currentIndex = 0;
      }

      this.getNextSongRoute();
    },
    generateRandomIndex() {
      let randomIndex = Math.floor(Math.random() * this.playlist.length);

      while (randomIndex === this.currentIndex) {
        randomIndex = Math.floor(Math.random() * this.playlist.length);
      }

      return randomIndex;
    },
    getPreviousSongRoute() {
      this.stop();

      this.currentSong = playlist[this.currentIndex];

      this.$router.push({
        name: 'play-song',
        params: { id: this.currentSong.id },
      });

      this.howlerize();
    },
    getNextSongRoute() {
      this.getPreviousSongRoute();
    },
    getSongDuration() {
      return this.currentSong.howl.duration();
    },
    setVolume(songVolume) {
      Howler.volume(songVolume);
    },
    toggleVolumeMuted() {
      Howler.mute(!this.muted);

      this.muted = !this.muted;
    },
    toggleSongPlaying() {
      this.currentSong.howl.playing() ? this.pause() : this.play();
    },
    toggleLoop() {
      this.loop = !this.loop;
    },
    toggleShuffle() {
      this.shuffle = !this.shuffle;
    },
    toggleBookmark() {
      this.currentSong.bookmarked = !this.currentSong.bookmarked;
    },
    howlerize() {
      return (this.currentSong.howl = new Howl({
        src: require(`../../playlist/${this.currentSong.file}`),
        autoplay: false,
        volume: this.songVolume,
        onend: () => {
          if (this.loop) {
            this.play();

            this.loop = false;
          } else {
            this.nextSong();
          }
        },
      }));
    },
  },
  created() {
    this.currentSong = playlist.find(song => song.id === this.$route.params.id);

    this.currentIndex = playlist.findIndex(
      song => song.id === this.$route.params.id
    );

    this.howlerize();

    setInterval(() => {
      this.currentPlayerTime = this.currentSong.howl.seek();
    }, 200);
  },
  computed: {
    getSongProgress: {
      get() {
        if (this.getSongDuration() === 0) {
          return 0;
        }

        return (this.currentPlayerTime / this.getSongDuration()) * 100;
      },
      set(value) {
        if (this.currentSong.howl.playing()) {
          return this.currentSong.howl.seek(
            (this.getSongDuration() / 100) * value
          );
        }
      },
    },
  },
};
</script>
