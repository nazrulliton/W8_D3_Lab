<template lang="html">
  <div id="app">
    <bookings-form></bookings-form>
    <!-- <bookings-list></bookings-list> -->
  </div>

</template>

<script>
import BookingsForm from '@/components/bookingsForm.vue';
import BookingService from '@/services/BookingService.js';


export default {
  name: "app",
  data(){
    return{
      bookingsData: []
    }
  },
  components:{
    'bookings-form': BookingsForm
  },
  mounted(){
   BookingService.getBookings().then((bookings)=> this.bookingsData = bookings)
  }
}
</script>

<style lang="css" scoped>
</style>
