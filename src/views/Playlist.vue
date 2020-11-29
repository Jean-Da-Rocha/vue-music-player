<template>
  <div>
    <v-app-bar dark color="primary">
      <v-toolbar-title class="mr-auto ml-auto">
        Lecteur de musique Vuetify
      </v-toolbar-title>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col cols="12" lg="12" class="mt-5">
          <v-text-field
            label="Rechercher"
            outlined
            dark
            color="primary"
            clearable
            rounded
            solo
          >
            <v-icon slot="append" color="primary">mdi-magnify</v-icon>
          </v-text-field>
        </v-col>
        <v-col cols="12" class="mt-n8">
          <v-card
            dark
            shaped
            v-for="(song, index) in songs"
            :key="index"
            class="my-5 pa-3"
          >
            <div>
              <div class="d-flex justify-space-between">
                <div>
                  <v-card-title class="overline">{{ song.title }}</v-card-title>
                  <v-card-subtitle>
                    Artiste - {{ song.artist }}
                    <br />
                    {{ song.genre }}
                  </v-card-subtitle>
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
              <div>
                <v-card-text>
                  {{ song.description }}
                </v-card-text>
                <v-card-actions>
                  <div
                    class="d-flex justify-space-between"
                    style="width: 100%;"
                  >
                    <div>
                      <v-btn class="mx-2" fab dark color="primary" small>
                        <v-icon dark>mdi-play</v-icon>
                      </v-btn>
                    </div>
                    <div>
                      <v-btn class="mx-2" fab dark color="primary" small>
                        <v-icon dark>mdi-playlist-plus</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="primary" dark small>
                        <v-icon>
                          mdi-heart-outline
                        </v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-card-actions>
              </div>
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

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #ee44aa;
}
</style>
