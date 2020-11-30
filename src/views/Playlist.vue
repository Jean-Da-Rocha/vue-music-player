<template>
  <div>
    <v-app-bar dark color="primary">
      <v-toolbar-title class="mr-auto ml-auto">
        Lecteur de musique Vuetify
      </v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row>
        <SearchSong :playlist="playlist" />
        <BookmarkedSongsDialog :playlist="playlist" />
      </v-row>
      <v-row>
        <SongsList :playlist="playlist" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import playlist from '../data/playlist';
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
      playlist,
    };
  },
};
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #ee44aa;
}
</style>
