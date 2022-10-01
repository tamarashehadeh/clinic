<template>
  <v-container>
    <v-row
      class="d-flex justify-space-around mt-16"
      flat
      tile
    >
    <v-col>
  <v-card
    class="mx-auto"
    max-width="344"
    shaped
    outlined
    elevation="2"
  >
  <v-card-title>
   Roles
  </v-card-title>
    <v-img
      src="../assets/undraw_medicine_b-1-ol.svg"
      height="200px"
    ></v-img>

    <v-card-actions>
       <v-btn class="gbtn rounded-5 mx-auto my-3"
                rounded
                type="submit"
               color="primary"
                :to="{name: 'addrole'}"
                 >
              ADD New Role
        </v-btn>
       <v-btn class="gbtn rounded-5 mx-auto my-3"
                rounded
                type="submit"
               color="primary"
                :to="{name: 'viewroles'}"
                 >
             View Roles
        </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
    <v-col>
  <v-card
    class="mx-auto"
    max-width="344"
    shaped
    outlined
    elevation="2"
  >
  <v-card-title>
   Services
  </v-card-title>
    <v-img
      src="../assets/undraw_scientist_0ft9.svg"
      height="200px"
    ></v-img>

    <v-card-actions>
       <v-btn class="gbtn rounded-5 mx-auto my-3"
                        rounded
                       type="submit"
                      color="primary"
                        :to="{name: 'addservice'}"
                         >
                     ADD New Service
                    </v-btn>
                       <v-btn class="gbtn rounded-5 mx-auto my-3"
                rounded
                type="submit"
               color="primary"
                 :to="{name: 'viewservice'}"
                 >
             View Services
        </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
    </v-row>
  </v-container>
</template>

<script>

</script>
