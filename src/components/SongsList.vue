<template>
  <div class="d-flex flex-wrap">
    <v-col
      lg="4"
      md="12"
      sm="12"
      class="mt-n8 my-10"
      v-for="(song, index) in playlist"
      :key="index"
      v-show="song.displayable"
    >
      <v-card dark shaped class="pa-3" height="100%">
        <div>
          <div class="d-flex justify-space-between">
            <div>
              <v-card-title class="overline">{{ song.title }}</v-card-title>
              <v-card-subtitle>
                <span @click="seeArtistDescription(song.id)" style="color: #EE44AA;">
                  Artiste - {{ song.artist }}
                </span>
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
                class="d-flex justify-space-between align-center"
                style="width: 100%;"
              >
                <div>
                  <v-btn
                    class="mx-2"
                    rounded
                    dark
                    color="primary"
                    small
                    @click="getSong(song.id, index)"
                  >
                    Écouter
                  </v-btn>
                </div>
                <div>
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    color="primary"
                    small
                    @click="toggleWaitingQueue(song.id)"
                  >
                    <v-icon dark>
                      {{
                        priorityQueue.includes(song.id)
                          ? 'mdi-playlist-minus'
                          : 'mdi-playlist-plus'
                      }}
                    </v-icon>
                  </v-btn>
                  <v-btn
                    class="mx-2"
                    fab
                    color="primary"
                    dark
                    small
                    @click="toggleBookmark(index)"
                  >
                    <v-icon>
                      {{ song.bookmarked ? 'mdi-heart' : 'mdi-heart-outline' }}
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
import priorityQueue from '../data/queue';

export default {
  name: 'SongsList',
  data() {
    return {
      selectedSong: null,
      priorityQueue,
    };
  },
  methods: {
    getSong(id, index) {
      this.selectedSong = this.playlist[index];
      this.$router.push({ name: 'player', params: { id } });
    },
    toggleBookmark(index) {
      const isBookmarked = this.playlist[index]['bookmarked'];

      this.playlist[index]['bookmarked'] = !isBookmarked;
    },
    toggleWaitingQueue(songId) {
      if (!this.priorityQueue.includes(songId)) {
        this.priorityQueue.push(songId);
      } else {
        this.priorityQueue.splice(this.getQueueIndex(songId), 1);
      }
    },
    getQueueIndex(songId) {
      return this.priorityQueue.findIndex(el => el === songId);
    },
    seeArtistDescription(songId) {
      this.$router.push({
        name: 'artist',
        params: { id: songId },
      });
    },
  },
  props: {
    playlist: Array,
  },
};
</script>
