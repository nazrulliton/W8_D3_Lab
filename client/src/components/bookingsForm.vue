<template lang="html">
<form id="bookingsForm" v-on:submit.prevent="handleSubmit">

<label for="name">Name</label>
<input type="text" name="" value="" v-model="name">

<label for="email">Email address</label>
<input type="text" name="" value="" v-model="email">

<label for="CheckedIn">Checked In</label>
<select  name="" v-model="checkInStatus">
  <option value="True">Yes</option>
  <option value="False">No</option>
</select>
<input type="submit" name="" value="Submit Booking">


</form>



</template>

<script>
import BookingService from '@/services/BookingService.js'
import {eventBus} from '@/main.js'

export default {
  name: "bookings-form",
  data(){
    return {
      name:"",
      email: "",
      checkInStatus: ""
    }
  },
  methods: {
    handleSubmit(){
      const booking = {
        name: this.name,
        email: this.email,
        checkInStatus: this.checkInStatus
      }
      BookingService.postBooking(booking)
      .then((res) => eventBus.$emit("booking-added", res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
