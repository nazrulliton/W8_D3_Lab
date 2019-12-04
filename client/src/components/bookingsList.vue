<template lang="html">
  <div>
    <div id="booking" v-for="booking in bookings">
      <booking-detail :booking='booking'></booking-detail>

    </div>
  </div>
</template>

<script>
import BookingDetail from '@/components/bookingDetail.vue';
import {eventBus} from '@/main.js';

export default {
  name: "bookings-list",
  props:['bookings'],
  components: {
    "booking-detail": BookingDetail
  },
  mounted(){
    eventBus.$on("booking-added", booking => {
      this.bookings.push(booking)
    })
  }
}
</script>

<style lang="css" scoped>
</style>
