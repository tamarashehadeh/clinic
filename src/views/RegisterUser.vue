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
            class=" background"
            elevation="5"
            shaped
          >
            <v-card-title class="text-h4">
                Register
            </v-card-title>
              <form
                class="my-8 "
                @submit.prevent="submit"
              >
                  <v-text-field
                    v-model="name"
                    class="mx-12"
                    color="#000000"
                    :counter="13"
                    :error-messages="errors"
                    label="First name"
                    required
                  />
                  <v-text-field
                    v-model="last_name"
                    class="mx-12"
                    color="#000000"
                    :counter="13"
                    :error-messages="errors"
                    label="Last name"
                    required
                  />
                  <v-text-field
                    v-model="phone"
                    class="mx-12"
                    :error-messages="errors"
                    label="phone"
                    required
                  />
                  <v-text-field
                    v-model="username"
                    class="mx-12"
                    color="#000000"
                    :counter="13"
                    :error-messages="errors"
                    label="User name"
                    required
                  />
                      <v-select
                  v-model="select"
                  class="mx-12"
                  :items="gender"
                 :rules="[v => !!v || 'Item is required']"
                  label="Gender"
                  required
                    ></v-select>
                  <v-text-field
                    v-model="email"
                    class="mx-12"
                    color="#000000"
                    :error-messages="errors"
                    label="email"
                    required
                  />
                  <v-text-field
                    v-model="password"
                    color="#000000"
                    class="mx-12 text-dark"
                    type="password"
                    :error-messages="errors"
                    label="Password"
                    required
                  />
                  <v-text-field
                    v-model="role_id"
                    color="#000000"
                    class="mx-12 text-dark mb-6"
                    :error-messages="errors"
                    label="role "
                    required
                  />
                  <v-text-field
                    v-model="address"
                    color="#000000"
                    class="mx-12 text-dark mb-6"
                    :error-messages="errors"
                    label="Address"
                    required
                  />
                  <template>
  <v-row justify="center">
    <v-date-picker v-model="date_of_birth"></v-date-picker>
  </v-row>
</template>

                 <v-btn class="gbtn rounded-5 mx-7"
                      rounded
                       type="submit"
                     color="primary"
                      :disabled="invalid"
                         >
                      Submit
                    </v-btn>
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
    phone: '',
    name: '',
    email: '',
    last_name: '',
    username: '',
    gender: [
      'Male',
      'Female'
    ],
    role_id: '',
    address: '',
    date_of_birth: ''

  }),

  methods: {
    submit () {
      const payload = {
        password: this.password,
        password_confirmation: this.password_confirmation,
        phone: this.phone,
        username: this.username,
        last_name: this.last_name,
        email: this.email,
        name: this.name,
        gender: this.gender,
        role_id: this.role_id,
        address: this.address,
        date_of_birth: this.date_of_birth
      }
      // const self = this

      this.axios.post('/http://127.0.0.1:8000/api/user', payload).then(res => {
        alert('heelo')
        // alert(res)
      })
    },
    clear () {
      this.password = ''
      this.password_confirmation = ''
      this.phoneNumber = ''
      this.username = ''
      this.last_name = ''
      this.email = ''
      this.department = ''
      this.gender = ''
      this.role_id = ''
      this.address = ''
      this.date_of_birth = ''
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
