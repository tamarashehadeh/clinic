<template>
    <v-container>
 <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="patient"
      :search="search"
    >
     <!-- <template #item.show="{ value }">
            <a target="_blank" :href="value">
              {{ value }}
            </a>
        </template> -->
  </v-data-table>
  </v-card>
    </v-container>

</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Patient Name',
          align: 'start',
          filterable: false,
          value: 'name'
        },
        { text: 'Appoitment Date', value: 'Date' },
        { text: 'Status', value: 'Status' },
        { text: 'Priority', value: 'Priority' },
        { text: 'diagnosis', value: 'diagnosis' },
        { text: 'show', value: 'show' }
      ],
      patients: [
        {
          name: 'Tamara',
          Date: '20-20-2020',
          Status: 'Done',
          Priority: '',
          diagnosis: '',
          show: ''
        }
      ]
    }
  }
}
</script>
