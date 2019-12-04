<template lang="html">
  <div>
    <div id="booking" v-for="booking in bookings">
      <booking-detail :booking='booking'></booking-detail>

    </div>
  </div>
</template>

<script>
import BookingDetail from '@/components/bookingDetail.vue';


export default {
  name: "bookings-list",
  props:['bookings'],
  components: {
    "booking-detail": BookingDetail
  }
}
</script>

<style lang="css" scoped>
</style>
