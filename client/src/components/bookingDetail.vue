<template lang="html">
  <div id="booking">
    <h3>{{booking.name}}</h3>
    <p>{{booking.email}}</p>
    <p>{{booking.checkInStatus}}</p>
  </div>
</template>

<script>
export default {
  name:"booking-detail",
  props: ["booking"]
}
</script>

<style lang="css" scoped>
</style>
