<template>
<v-container>
 <v-row
      class="my-12"
      justify="center"
    >
     <v-col md="4" cols="12">
      <v-card
      outlined
      class="rounded-xl card-with-border"
      min-height="220px"
      max-height="220px"
      border-color="#18A3EB"
      >
         <v-card
          max-width="fit-content"
          flat
          class="mt-n8 ml-n3"
          >
             <v-card-title  class="text-h5 font-weight-medium">
             Opening Hours
            </v-card-title>
          </v-card>
          <v-card-text>
            <div class="mb-4 d-flex justify-space-between subtitle-2">
            Monday - Thursday <span>8.00 - 19.00</span>
            </div>
             <div class="mb-4 d-flex justify-space-between subtitle-2">
            Friday   <span class="ml-16">8.00 - 18.30</span>
            </div>
             <div class="mb-4 d-flex justify-space-between subtitle-2">
            Saturday <span class="ml-16">9.30 - 17.00</span>
            </div>
             <div class="mb-4 d-flex justify-space-between subtitle-2">
            Sunday   <span class="ml-16">9.30 - 15.00</span>
            </div>
          </v-card-text>
      </v-card>
     </v-col>

       <v-col md="3" cols="12">
      <v-card
      outlined
      class="rounded-xl"
      min-height="220px"
      max-height="220px"
      border-color="#18A3EB"
      >
         <v-card
          max-width="fit-content"
          flat
          class="mt-n8 ml-n3">
             <v-card-title class="text-h5 font-weight-medium">
             Emargency
            </v-card-title>
          </v-card>
          <div class="d-flex flex-column align-center">
            <v-card-actions>
               <v-btn class="gbtn pa-6"
               rounded
               color="primary"
                   >
              <v-icon left color="white" >
                mdi-phone-plus
               </v-icon>
               0999 999 999
               </v-btn>
            </v-card-actions>
               <v-card-text class="grey--text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dolores aperiam nostrud.
               </v-card-text>
          </div>
      </v-card>
     </v-col>

      <v-col md="5" cols="12">
      <v-card
      outlined
      class="rounded-xl"
       min-height="220px"
      max-height="220px"
      border-color="#18A3EB"
      >
         <v-card
          max-width="fit-content"
          flat
          class="mt-n8 ml-n3">
             <v-card-title  class="text-h5 font-weight-medium">
             Make an Appointment
            </v-card-title>
          </v-card>
          <validation-observer
    ref="observer"

  >
          <v-form v-model="valid">
    <v-container>
      <v-row class="mt-n10">
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :error-messages="errors"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
        <v-text-field
          v-model="phoneNumber"
          :counter="13"
          label="Phone Number"
          required
        ></v-text-field>
        </v-col>
      </v-row>
        <v-row class="mt-n6">
        <v-col
          cols="12"
          md="6"
        >
          <v-select
          v-model="select"
         :items="departments"
         :rules="[v => !!v || 'Item is required']"
         label="Select department"
         required
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
            <v-select
      v-model="select"
      :items="doctors"
      :rules="[v => !!v || 'Item is required']"
      label="Select doctor"
      required
      ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
    </validation-observer>
  <v-card-actions>

            <v-btn class="gbtn pl-6 pr-6 ml-5 mt-n2"
             rounded
             color="primary"
             :disabled="invalid"
                 >
             Boom Appointment
             </v-btn>
            <v-btn class="gbtn pl-6 pr-6 ml-5 mt-n2"
             rounded
             color="primary"
                 >
             New patient
             </v-btn>
            </v-card-actions>
      </v-card>
     </v-col>
 </v-row>
</v-container>
</template>

<script>
// import { required, digits, max, regex } from 'vuelidate/lib/validators'
// import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vuelidate'

export default {

  data: () => ({
    valid: false,
    firstname: '',
    phoneNumber: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    doctors: [
      'doctor 1',
      'doctor 2',
      'doctor 3',
      'doctor 4'
    ],
    departments: [
      'department 1',
      'department 2',
      'department 3',
      'department 4'
    ]
  })
}
</script>

<style scoped>
 .card-with-border
  {
    border-style: solid; border-width: 2px; border-color: #18A3EB;
   }
  .gbtn{
  background: rgb(86,129,229);
background: linear-gradient(90deg, rgba(86,129,229,1) 0%, rgba(54,193,248,1) 100%);
}
 </style>
