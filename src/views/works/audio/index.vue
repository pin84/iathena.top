<template>
  <div class="audio-wrapper">
    <figure>
      <figcaption>Listen to the T-Rex:</figcaption>
      <!-- <audio id="audio" controls src="@/assets/music/chat.wav">
        Your browser does not support the
        <code>audio</code> element.
      </audio> -->
    </figure>

    <el-button @click="playMusic" type="primary">主要按钮</el-button>
    <el-button type="primary">按键音</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audio: null,
    };
  },
  mounted() {
    // this.audio = document.getElementById('audio')
    // let audio = document.createElement("audio");

    setTimeout(() => {
      let audio = new Audio("./09.mp3");
      console.log(audio);
      // audio.src = "./09.mp3";
      this.audio = audio;
    }, 2000);


  },
  methods: {
    async playMusic() {
      this.$nextTick(() => {
        this.audio.play().catch((err) => console.log(err));
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.audio-wrapper {
  border: 1px solid red;

  .btn {
    padding: 5px 15px;
  }
}
</style>
