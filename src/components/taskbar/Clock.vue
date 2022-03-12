<template>
  <div class="taskbar-clock">{{currentTime}}</div>
</template>
<script>
export default {
  name: "Clock",
  data() {
    return {
      currentTime: this.clock(),
    };
  },
  methods: {
      clock() {         
        setTimeout(function() {   
            const d = new Date();
            const n = d.toLocaleTimeString();
            return n
        }, 1000)
    }
  }
};
</script>
<style lang="scss" scoped>
$highlight: #000080;
</style>
