<template lang="html">
  <div id="app">
    <bookings-form></bookings-form>
    <bookings-list :bookings='bookingsData'></bookings-list>
  </div>

</template>

<script>
import BookingsForm from '@/components/bookingsForm.vue';
import BookingService from '@/services/BookingService.js';
import BookingsList from '@/components/bookingsList.vue';


export default {
  name: "app",
  data(){
    return{
      bookingsData: []
    }
  },
  components:{
    'bookings-form': BookingsForm,
    'bookings-list': BookingsList
  },
  mounted(){
   BookingService.getBookings().then((bookings)=> this.bookingsData = bookings)
  }
}
</script>

<style lang="css" scoped>
</style>
