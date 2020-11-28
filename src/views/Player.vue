<template>
  <v-container>
    <v-row>
      <v-col class="text-left">
        <v-btn class="mx-2" fab color="primary">
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>
      </v-col>
      <div style="margin-top: 10rem"></div>
      <v-col class="text-right">
        <v-btn class="mx-2" fab color="primary">
          <v-icon>
            mdi-heart-outline
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <v-img
          src="https://media.senscritique.com/media/000016786835/source_big/The_Time_Thief.jpg"
          class="rounded-circle"
          max-height="250"
          max-width="250"
        ></v-img>
      </v-col>
      <v-col cols="12" class="text-center">
        <p class="display-2 white--text" style="text-shadow: #FC0 1px 0 10px;">
          2048
        </p>
        <p class="overline grey--text">Redtenbacher's Funkestra</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Player',
  components: {},
};
</script>
