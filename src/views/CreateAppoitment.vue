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
                New Appoitment
            </v-card-title>
              <form
                class="my-8 "
                @submit.prevent="submit"
              >
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
                  class="mx-12"
                  :items="Doctor"
                 :rules="[v => !!v || 'Item is required']"
                  label="Doctor/Nurse"
                  required
                    ></v-select>
                  <v-text-field
                    v-model="Patient"
                    class="mx-12"
                    color="#000000"
                    :counter="13"
                    :error-messages="errors"
                    label="Patient Num."
                    required
                  />
                <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
        class="mx-12"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Pick a Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            class="mx-12"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
                  <v-select
                  v-model="select"
                  class="mx-12 "
                  :items="Priority"
                  label="Priority"
                  required
                    ></v-select>
                  <v-select
                  v-model="select"
                  class="mx-12 mb-7"
                  :items="Status"
                  label="Status"
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

export default {
  data: () => ({
    password: '',
    phoneNumber: '',
    Name: '',
    dialog: '',
    Patient: '',
    department: [
      'department 1',
      'department 2',
      'department 3',
      'department 4'
    ],
    Priority: [
      'Priority 1',
      'Priority 2',
      'Priority 3',
      'Priority 4'
    ],
    Status: [
      'Status 1',
      'Status 2',
      'Status 3',
      'Status 4'
    ],
    Doctor: [
      'Doctor1',
      'Doctor2',
      'Doctor3',
      'Doctor4',
      'Doctor5'
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
        Doctor: this.gender,
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
      this.Doctor = ''
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
