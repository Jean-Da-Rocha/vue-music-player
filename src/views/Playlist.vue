<template>
  <div>
    <v-app-bar dark color="primary">
      <v-toolbar-title class="mr-auto ml-auto">
        Lecteur de musique Vuetify
      </v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row>
        <SearchSong :songs="songs" />
        <v-col cols="3" lg="2" class="d-flex align-center mb-3">
          <v-dialog v-model="dialog" dark>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mx-2" fab color="primary" dark v-bind="attrs" v-on="on">
                <v-icon dark>mdi-playlist-star</v-icon>
              </v-btn>
            </template>
            <v-card color="#24293d">
              <v-card-title class="headline mb-6">
                Liste de morceaux favoris
              </v-card-title>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Single-line item</v-list-item-title>
                  <v-divider class="my-3"></v-divider>
                  <v-list-item-title>Single-line item</v-list-item-title>
                  <v-divider class="my-3"></v-divider>
                  <v-list-item-title>Single-line item</v-list-item-title>
                  <v-divider class="my-3"></v-divider>
                  <v-list-item-title>Single-line item</v-list-item-title>
                  <v-divider class="my-3"></v-divider>
                </v-list-item-content>
              </v-list-item>
              <v-card-text></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  Fermer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          lg="4"
          md="12"
          sm="12"
          class="mt-n8 my-10"
          v-for="(song, index) in songs"
          :key="index"
          v-show="song.displayable"
        >
          <v-card dark shaped class="pa-3" height="100%">
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
                <v-avatar class="ma-3" size="100" color="primary" style="filter: drop-shadow(0 0 2mm #ee44aa);">
                  <v-img class="rounded-circle" :src="require(`@/assets/${song.coverImage}`)"></v-img>
                </v-avatar>
              </div>
              <div>
                <v-card-text>
                  {{ song.description }}
                </v-card-text>
                <v-card-actions>
                  <div class="d-flex justify-space-between" style="width: 100%;">
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
import SearchSong from '../components/SearchSong';

export default {
  name: 'Playlist',
  components: {
    SearchSong,
  },
  data() {
    return {
      songs,
      dialog: false,
    };
  },
};
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #ee44aa;
}
</style>
