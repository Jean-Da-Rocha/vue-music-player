<template>
  <div>
    <v-app-bar dark color="primary">
      <v-toolbar-title class="mr-auto ml-auto">
        Lecteur de musique Vuetify
      </v-toolbar-title>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            dark
            shaped
            v-for="(song, index) in songs"
            :key="index"
            class="my-5"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>{{ song.title }}</v-card-title>
                <v-card-subtitle>
                  Artiste - {{ song.artist }}
                  <br />
                  Genre - {{ song.genre }}
                </v-card-subtitle>
                <v-card-text>
                  {{ song.description }}
                </v-card-text>
                <v-card-actions>
                  <v-btn class="ml-2 mt-5" outlined rounded small>
                    Écouter
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="100"
                color="primary"
                style="filter: drop-shadow(0 0 2mm #ee44aa);"
              >
                <v-img
                  class="rounded-circle"
                  :src="require(`@/assets/${song.coverImage}`)"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import songs from '../data/playlist';

export default {
  name: 'Playlist',
  data() {
    return {
      songs,
    };
  },
};
</script>
