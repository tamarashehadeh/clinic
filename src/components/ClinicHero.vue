<template>
  <v-carousel :show-arrows="false" cycle height="700" vertical  vertical-delimiters="true"  hide-delimiter-background>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
      <v-row
      align="center"
      justify="center"
      class="mt-16"
    >
      <v-col
        class="text-left mt-16"
        cols="6"
        style="margin-right: 350px;"
      >
        <h1 class="text-h2 font-weight-bold mb-4 grey--text text--darken-4" >
          {{item.subtitle}}
        </h1>
        <h4  class="text-h2 font-weight-bold mb-4 grey--text text--darken-4">
        {{item.title}}
        </h4>
        <h4  class="subheading grey--text text--darken-2 mt-10" style="margin-right: 300px;">
          {{item.text}}
        </h4>
        <div class="mt-10">
           <v-btn class="gbtn"
             rounded
             color="primary"
                 >
             Make an appointment
             </v-btn>
         </div>
      </v-col>
    </v-row>
    </v-carousel-item>

  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://preview.colorlib.com/theme/medart/images/xhero.jpg.pagespeed.ic.wpK4QWw-_6.webp',
          subtitle: 'The Best ',
          title: 'Medical Service',
          text: 'Leading the way in medical excellence Earth greater grass for good. Place for divide evening yielding them that. Creeping beginning over gathered brought.'
        },
        {
          src: 'https://preview.colorlib.com/theme/medino/assets/images/xbanner-bg.jpg.pagespeed.ic.N8X8MMmfrL.jpg',
          subtitle: 'We Are Here',
          title: ' For Your Care',
          text: 'Leading the way in medical excellence Earth greater grass for good. Place for divide evening yielding them that. Creeping beginning over gathered brought.'

        },
        {
          src: 'https://preview.colorlib.com/theme/docmed/img/banner/xbanner2.png.pagespeed.ic.B9cM6-Ibkd.png',
          subtitle: 'We Care for Your',
          title: ' Health Every Moment',
          text: 'Leading the way in medical excellence Earth greater grass for good. Place for divide evening yielding them that. Creeping beginning over gathered brought.'

        }

      ]
    }
  }
}
</script>

<style scoped>
.gbtn{
  background: rgb(86,129,229);
background: linear-gradient(90deg, rgba(86,129,229,1) 0%, rgba(54,193,248,1) 100%);
}
</style>
