<template>
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
</template>

<script>
export default {
  name: 'BookmarkedSongsDialog',
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
