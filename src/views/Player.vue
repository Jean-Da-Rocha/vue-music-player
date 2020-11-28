<template>
  <v-container>
    <v-row>
      <v-col class="text-left">
        <v-btn class="mx-2" fab color="primary" dark>
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>
      </v-col>
      <div style="margin-top: 7rem"></div>
      <v-col class="text-right">
        <v-btn class="mx-2" fab color="primary" dark>
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
          style="filter: drop-shadow(0 2mm 15mm #ee44aa);"
        ></v-img>
      </v-col>
      <v-col cols="12" class="text-center mt-10">
        <p class="display-2 white--text" style="text-shadow: #FC0 1px 0 10px;">
          2048
        </p>
        <p class="overline grey--text">Redtenbacher's Funkestra</p>
      </v-col>
      <v-col xl="4" lg="6" md="8" sm="10" class="mr-auto ml-auto">
        <v-progress-linear value="15" height="6"></v-progress-linear>
        <div class="d-flex justify-space-between mt-2">
          <p class="grey--text">
            0:31
          </p>
          <p class="grey--text">
            4:58
          </p>
        </div>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn class="mx-2" fab dark color="primary" outlined small>
          <v-icon dark>mdi-skip-previous</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark color="primary" outlined small>
          <v-icon dark>mdi-stop</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark color="primary">
          <v-icon dark>mdi-play</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark color="primary" outlined small>
          <v-icon dark>mdi-pause</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark color="primary" outlined small>
          <v-icon dark>mdi-skip-next</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-3">
      <v-col xl="4" lg="6" md="8" sm="10" class="mr-auto ml-auto">
        <v-slider
          v-model="media"
          prepend-icon="mdi-volume-low"
          append-icon="mdi-volume-high"
          dark
          color="grey"
        ></v-slider>
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
