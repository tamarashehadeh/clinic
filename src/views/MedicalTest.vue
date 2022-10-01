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
              Medical Test
            </v-card-title>
              <form
                class="my-8 "
                @submit.prevent="submit"
              >
                     <v-select
                  v-model="select"
                  class="mx-12"
                  :items="medicaltest"
                 :rules="[v => !!v || 'Item is required']"
                  label="choose mdical Test"
                  required
                    ></v-select>
                          <v-select
                  v-model="select"
                  class="mx-12"
                  :items="Doctor"
                 :rules="[v => !!v || 'Item is required']"
                  label="User"
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
                  <template>
             <v-file-input
             v-model="files"
              class="mx-12 mb-5"
             show-size
               counter
              multiple
              label="File input"
             ></v-file-input>
            </template>
                <v-textarea
                    v-model="notes"
                    outlined
                    class="mx-12"
                    color="#000000"
                    :error-messages="errors"
                    label="Notes"
                    required
                  />
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
    Patient: '',
    medicaltest: [
      'medicaltest 1',
      'medicaltest 2',
      'medicaltest 3',
      'medicaltest 4'
    ],
    Doctor: [
      'Doctor1',
      'Doctor2',
      'Doctor3',
      'Doctor4',
      'Doctor5'
    ],
    notes: '',
    files: ''
  }),

  methods: {
    submit () {
      const payload = {
        patient: this.Patient,
        medicaltest: this.medicaltest,
        Doctor: this.Doctor,
        notes: this.notes,
        files: this.files
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
      this.Patient = ''
      this.medicaltest = ''
      this.Doctor = ''
      this.notes = ''
      this.files = ''
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
