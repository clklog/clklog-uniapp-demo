<script lang="ts">
export default {
  globalData: {
    sensors: sensors,
    pageViewEventName: '$pageview'
  },
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {},
  onHide: function () {
    console.log('App Hide')
  }
}
</script>
<style></style>
