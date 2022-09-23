<template>
<div>
  <clinic-hero/>
  <MakeAppointment/>
</div>
</template>

<script>
import ClinicHero from '@/components/ClinicHero.vue'
import MakeAppointment from '@/components/MakeAppointment.vue'

export default {
  name: 'Home-vue',

  components: {
    ClinicHero,
    MakeAppointment
  }
}
</script>
