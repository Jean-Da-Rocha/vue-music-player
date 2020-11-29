<template>
  <div>
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
              <div class="d-flex justify-space-between" style="width: 100%;">
                <div>
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    color="primary"
                    small
                    @click="playSong(song.id)"
                  >
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
  </div>
</template>

<script>
export default {
  name: 'SongsList',
  props: {
    songs: Array,
  },
  methods: {
    playSong(id) {
      this.$router.push({ name: 'play-song', params: { id } });
    },
  },
};
</script>
