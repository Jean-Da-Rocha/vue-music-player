<template>
  <v-col cols="9" lg="10" class="mt-5">
    <v-text-field
      label="Rechercher"
      outlined
      dark
      color="primary"
      clearable
      rounded
      solo
      v-model="searchQuery"
      @click:clear="resetSearchField()"
      @keydown="searchSongs()"
    >
      <v-icon slot="append" color="primary">mdi-magnify</v-icon>
    </v-text-field>
  </v-col>
</template>

<script>
export default {
  name: 'SearchSong',
  data() {
    return {
      searchQuery: '',
      initialState: [],
    };
  },
  methods: {
    searchSongs() {
      if (this.searchQuery) {
        this.searchQuery = this.searchQuery.toLowerCase();

        this.playlist.map(song => {
          song.displayable = this.hasMatches(
            song.artist,
            song.title,
            song.description
          );
        });
      }
    },
    hasMatches(...attributes) {
      return attributes.some(attribute =>
        attribute.toLowerCase().includes(this.searchQuery)
      );
    },
    resetSearchField() {
      this.displayAllSongs();
    },
    displayAllSongs() {
      this.playlist.map(song => {
        song.displayable = true;
      });
    },
  },
  props: {
    playlist: Array,
  },
};
</script>
