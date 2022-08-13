<template>
  <v-app>
    <v-app-bar style="">
      <div class="d-flex align-center">
        <v-img
          alt="MedArt"
          class="shrink mx-16 my-1 hidden-sm-and-down"
          contain
          min-width="135"
          src="data:image/webp;base64,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"
          width="135"
        />
      </div>

      <v-spacer></v-spacer>
       <div class="d-flex align-center mr-16">
        <v-hover   v-slot="{ hover }">
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
         :color="hover ? 'primary' : '' "
      >
        <span class="mr-2">Home</span>
      </v-btn>
        </v-hover>
         <v-hover   v-slot="{ hover }">
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
         :color="hover ? 'primary' : '' "
      >
        <span class="mr-2">About us</span>
      </v-btn>
         </v-hover>
       <v-hover   v-slot="{ hover }">
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        :color="hover ? 'primary' : '' "
      >
        <span class="mx-2">Services</span>
      </v-btn>
         </v-hover>
       <v-hover   v-slot="{ hover }">
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        :color="hover ? 'primary' : '' "
      >
        <span class="mr-2">Contact us</span>
      </v-btn>
         </v-hover>
      <v-btn class="gbtn"
             rounded
             color="primary"
                 >
            <v-icon left color="white" >
              mdi-phone
             </v-icon>
             0999999999
             </v-btn>
        </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style scoped>

.v-sheet.theme--light.v-toolbar.v-app-bar{
  background-color: transparent !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet{
 background-color: transparent !important;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined){
box-shadow: none;
}
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){
  box-shadow: none;
}
.v-toolbar{
  flex: 0;
}
.gbtn{
  background: rgb(86,129,229);
background: linear-gradient(90deg, rgba(86,129,229,1) 0%, rgba(54,193,248,1) 100%);
}
</style>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
