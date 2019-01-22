<template>
  <div id="avatar">
    <span id="upladAvatar">
      <label for="uploadAvatar">{{showCanvas ? '重新选择':'本地上传'}}</label>
      <input
        id="uploadAvatar"
        type="file"
        @change="loadImg"
        ref="selectedImg"
        hidden
      >
    </span>
    <div
      id="fileUpload"
      v-show="showCanvas"
    >

      <div class="notice">
        {{notice}}
        <div id="close-notice">x</div>
      </div>
      <!-- <div class="reloadBtn">重新选择</div> -->
      <div id="blankMask">
        <img src="../../assets/img/message/bg.png">
      </div>

      <div id="canvasArea">
        <canvas
          ref="canvas"
          width="300"
          height="300"
          @mousedown="cutAvatar"
        ></canvas>
      </div>
      <div
        id="submitBtn"
        @click='uploadBtn'
      >
        <i>确定</i>
      </div>

    </div>
    <div
      id="currentAvatar"
      v-if="isShowCurrentAvatar"
    >
      <img
        src="../../assets/img/message/avatar/01.gif"
        alt=""
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notice: '拖拽鼠标框选所需要的区域',
      imgObj: new Image(), //装载input打开的图片
      showCanvas: true,
      isShowCurrentAvatar: false,
      startX: undefined,
      startY: undefined,
    }
  },
  computed: {

  },
  mounted() {


  },
  methods: {
    //将图片渲染到canvas
    loadImg() {
      this.showCanvas = true
      this.isShowCurrentAvatar = false
      this.$emit('hiddenAvatarList')

      //fileReader() 异步从input中读取文件
      let inputImg = this.$refs.selectedImg
      let reader = new FileReader()
      reader.readAsDataURL(inputImg.files[0])
      reader.onload = (e) => {
        this.imgObj.src = e.target.result;
      }

      //图像加载完成后，用drawImage加载至canvas
      this.imgObj.onload = () => {
        //计算图片的长宽比。决定图像的显示方式
        let imgWidth = this.imgObj.width
        let imgHeight = this.imgObj.height
        let rateHW = imgWidth / imgHeight

        let canvas = this.$refs.canvas
        let canvasWidth = canvas.width
        let canvasHeight = canvas.height

        //图片在canvas中的显示，大于canvas的尺寸，就缩小，小于就不变
        /**
         * showImgWidth:图片显示在canvas中的宽
         * showImgHeight:图片显示在canvas中的高
         * dy:图片原点坐标距canvas原点的Y轴距离
         * dw:图片原点坐标距canvas原点的X轴距离
         */
        let showImgWidth, showImgHeight, dy, dw
        if (imgWidth > imgHeight) {
          showImgWidth = canvasWidth > imgWidth ? imgWidth : canvasWidth
          showImgHeight = Math.round(showImgWidth / rateHW)
          //图片在canvas居中
          dy = (canvasHeight - showImgHeight) / 2
        } else {
          showImgHeight = canvasHeight > imgHeight ? imgHeight : canvasHeight
          showImgWidth = showImgHeight * rateHW
          dw = (canvasWidth - showImgWidth) / 2
        }

        //canvas渲染图片
        let ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        ctx.drawImage(this.imgObj, dw ? dw : 0, dy ? dy : 0, showImgWidth, showImgHeight)
        ctx.fillStyle = 'rgba(0,0,0,0.5)'
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)
      }


    },

    //鼠标截取图像,在canvas上按下鼠标触发
    cutAvatar(e) {
      this.startX = e.offsetX
      this.startY = e.offsetY
      let canvas = this.$refs.canvas


      canvas.addEventListener('mousemove', this.getMouseMoveDistance)


      canvas.addEventListener('mouseup', (e) => {
        // console.log('----------',e.offsetX)
        canvas.removeEventListener('mousemove', this.getMouseMoveDistance)
      })

      canvas.addEventListener('mouseleave', (e) => {
        console.log('ssssssssss')
        canvas.removeEventListener('mousemove', this.getMouseMoveDistance)
      })

    },

    getMouseMoveDistance(e) {

      //https://segmentfault.com/a/1190000013038300
      let dx = e.offsetX - this.startX
      let dy = e.offsetY - this.startY

      let canvas = this.$refs.canvas
      let ctx = canvas.getContext('2d')
      ctx.fillStyle = 'red'
      ctx.fillRect(this.startX, this.startY, dx, dy)



      // console.log(e.offsetX);


    },



    uploadBtn() {
      this.showCanvas = false
      this.isShowCurrentAvatar = true
    }

  }


}
</script>
<style lang='stylus' scoped>
#avatar
  position relative
  #upladAvatar
    display inline-block
    margin-bottom 10px
    background #6699CC
    padding 2px 5px
    border-radius 2px
    &:hover
      background #FF9900
  #fileUpload
    position relative
    background #666
    width 300px
    height 300px
    margin-bottom 20px
    .notice
      height 30px
      line-height 30px
      text-align center
      background #ffffff
      position absolute
      width 90%
      bottom 0
      margin-left 5%
      border-radius 2px
      box-shadow 0 0 5px rgba(0,0,0,0.3)
      user-select none
      z-index 3
      #close-notice
        position absolute 
        right 0px
        top 0
        width 30px
        height 30px
        line-height 30px
        cursor pointer
        font-size 16px
        &:hover
          background #eee
    #blankMask
      position absolute 
      top 0
      left 0
      width 100%
      height 100%
      color red
      // border 1px solid blue
      background #ffffff
      display flex
      justify-content center
      align-items center
      // img
      //   width 100%
      //   height 100%
    #canvasArea
      display flex
      align-items center
      justify-content center
      height 100%
      width 100%
      canvas 
        border 1px solid blue
        z-index 2
    #submitBtn
      display inline-block
      margin-top 5px
      border-radius 2px
      padding 3px 10px
      background #FF9900 
      user-select none
      &:hover
        cursor pointer
        background  #FF6600  
  #currentAvatar
    width 100px
    height 100px
    border-radius 50%
    // border 1px solid red
    overflow hidden
    img
      width 100%
      height 100%
        

</style>