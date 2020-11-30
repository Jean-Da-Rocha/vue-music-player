<template>
  <v-container fill-height>
    <v-row dense class="d-flex align-items-center">
      <v-col cols="12">
        <v-card dark>
          <v-card-title class="headline primary--text">
            {{ songInfo.artist }}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-subtitle>
            {{ songInfo.artistDescription }}
          </v-card-subtitle>
          <v-card-actions>
            <router-link to="/" class="primary--text ml-2">
              Retour
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import playlist from '../data/playlist';

export default {
  name: 'Artist',
  data() {
    return {
      songInfo: '',
    };
  },
  created() {
    this.songInfo = playlist.find(song => song.id === this.$route.params.id);
  },
};
</script>
