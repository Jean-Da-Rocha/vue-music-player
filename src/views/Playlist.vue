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
        <BookmarkedSongsDialog />
      </v-row>
      <v-row>
        <SongsList :songs="songs" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import songs from '../data/playlist';

import BookmarkedSongsDialog from '../components/BookmarkedSongsDialog';
import SearchSong from '../components/SearchSong';
import SongsList from '../components/SongsList';

export default {
  name: 'Playlist',
  components: {
    BookmarkedSongsDialog,
    SearchSong,
    SongsList,
  },
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
