<script lang="ts">
export default {
  globalData: {
    sensors: sensors,
  },
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log(sensors,"App onShow");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>
<style></style>
