<template>
  <v-container>
  <v-row justify="center" class="d-flex justify-center">
    <v-col >
      <v-img
         src="../assets/undraw_doctor_kw5l.png"
         width="700px"
         class="mx-auto"
       ></v-img>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card
        tonal
        elevation="6">
      <v-card-title>
        Diagnosis
      </v-card-title>
                    <v-textarea
                    v-model="Diagnosis"
                    outlined
                    class="mx-12"
                    color="#000000"
                    :error-messages="errors"
                    label="Diagnosis"
                    required
                  />
                    <v-textarea
                    v-model="prescription"
                    outlined
                    class="mx-12"
                    color="#000000"
                    :error-messages="errors"
                    label="prescription"
                    required
                  />
             <v-row class=" mx-12">
               <v-col cols="6" class=" mx-auto text-center">
                 <v-time-picker
                    v-model="picker"
                     ampm-in-title
                     class=""
                   ></v-time-picker>
               </v-col>
               <v-spacer></v-spacer>
               <v-col cols="6" class=" mx-auto  text-center">
                 <v-time-picker
                    v-model="picker"
                     ampm-in-title
                     class=""
                   ></v-time-picker>
               </v-col>
             </v-row >
                    <v-text-field
                    v-model="Notes"
                    outlined
                    class="mx-12"
                    color="#000000"
                    :error-messages="errors"
                    label="Notes"
                    required
                  />
                   <v-card-actions>
                 <v-btn class="gbtn rounded-5 mx-auto mb-5"
                        rounded
                       type="submit"
                      color="primary"
                         >
                      Submit
                    </v-btn>
    </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<style >

</style>
