<template>
  <div class="cover">
    <v-container>
      <v-row
        justify="center"
      >
        <v-col
          cols="6"
          md="4"
          xl="3"
        >
          <v-card
            v-vue-aos="{ animationClass: 'animate__fadeInRight animate__animated' }"
            width="1000"
            height="100%"
            class=" background mt-12"
            elevation="5"
            shaped
          >
            <v-card-title class="text-h4">
                Register Patient
            </v-card-title>
              <form
                class="my-8 "
                @submit.prevent="submit"
              >
                  <v-text-field
                    v-model="Name"
                    class="mx-12"
                    color="#000000"
                    :counter="13"
                    :error-messages="errors"
                    label="First Name"
                    required
                  />
                  <v-text-field
                    v-model="LastName"
                    class="mx-12"
                    color="#000000"
                    :counter="13"
                    :error-messages="errors"
                    label="Last Name"
                    required
                  />
                    <v-checkbox
                  v-model="isvip"
                   label="Is VIP"
                    class="mx-12"
                     >
                    </v-checkbox>
                      <v-select
                  v-model="select"
                  class="mx-12"
                  :items="department"
                 :rules="[v => !!v || 'Item is required']"
                  label="Department"
                  required
                    ></v-select>
                      <v-select
                  v-model="select"
                  class="mx-12 mb-5"
                  :items="gender"
                 :rules="[v => !!v || 'Item is required']"
                  label="Gender"
                  required
                    ></v-select>
                 <v-btn class="gbtn rounded-5 mx-7"
                      rounded
                       type="submit"
                     color="primary"
                      :disabled="invalid"
                         >
                      Submit
                    </v-btn>
                <v-dialog
                  v-model="dialog"
                  width="100"
                >
                  <v-card>
                    <v-card-title
                      class="text-h5 amber lighten-2"
                    >
                      Wrong login
                    </v-card-title>

                    <v-card-text class="text-center mt-5">
                      Please try again
                    </v-card-text>
                    <v-divider />
                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        color="#F5CE3F"
                        @click="dialog = false"
                      >
                       ok
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                     <v-btn class="gbtn pl-6 pr-6 rounded-5 mx-7"
                      rounded
                     color="primary"
                      @click="clear"
                         >
                      Clear
                    </v-btn>
              </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
// import * as VeeValidate from 'vee-validate'
// import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

// setInteractionMode('eager')

// extend('required', {
//   ...required,
//   message: '{_field_} can not be empty'
// })

// extend('regex', {
//   ...regex,
//   message: '{_field_} It must be mobile {regex}'
// })

export default {
  data: () => ({
    password: '',
    phoneNumber: '',
    Name: '',
    dialog: '',
    password_confirmation: '',
    LastName: '',
    UserName: '',
    department: [
      'department 1',
      'department 2',
      'department 3',
      'department 4'
    ],
    gender: [
      'Male',
      'Female'
    ],
    isvip: false

  }),

  methods: {
    submit () {
      const payload = {
        phone_number: this.phoneNumber,
        LastName: this.LastName,
        name: this.Name,
        department: this.department,
        gender: this.gender,
        isvip: this.isvip
      }
      const self = this

      this.axios.post('/register', payload).then(res => {
        if (res.data.message === 'register was successful') {
          localStorage.setItem('token', res.data.data.token)
          self.$store.state.token = res.data.data.token
          window.location = '/'
        } else {
          this.dialog = true
        }
        this.$refs.observer.validate()
      })
    },
    clear () {
      this.phoneNumber = ''
      this.Name = ''
      this.LastName = ''
      this.department = ''
      this.gender = ''
      this.isvip = false
      this.$refs.observer.reset()
    }
  }
}
</script>
<style>
.background{
  position: relative;
    transform: translate(-50%,-50%);
    top:50%;
    left:50%;
    opacity: 0.9;

}
.cover{
  width: 100%;
  height: 100vh;
  background-image: url(https://preview.colorlib.com/theme/medino/assets/images/xbanner-bg.jpg.pagespeed.ic.N8X8MMmfrL.jpg);
background-size: cover;
}

</style>
