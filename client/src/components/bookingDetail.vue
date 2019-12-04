<template lang="html">
  <div id="booking">
    <h3>{{booking.name}}</h3>
    <p>{{booking.email}}</p>
    <p>{{booking.checkInStatus}}</p>
    <button type="button" name="button" v-on:click="handleUpdate">Edit Checkin</button>

  <button type="buttom" name="Delete" v-on:click="handleDelete">Delete Booking</button>

  </div>
</template>

<script>
import BookingService from '@/services/BookingService.js';
import {eventBus} from '@/main.js';

export default {
  name:"booking-detail",
  props: ["booking"],
  methods: {
    handleDelete(){
      BookingService.deleteBooking(this.booking._id)
      .then(()=> eventBus.$emit('deleted-booking', this.booking._id))
    },
    handleUpdate(){
      const checkin = !this.booking.checkInStatus
      const updateBooking = {
        checkInStatus: checkin
      }
      BookingService.updateBooking(updateBooking, this.booking._id)
      // .then()
    }

  }
}
</script>

<style lang="css" scoped>
</style>
