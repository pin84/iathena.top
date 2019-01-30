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

      <!-- <div class="reloadBtn">重新选择</div> -->
      <!-- <div id="blankMask">
        <img src="../../assets/img/message/bg.png">
      </div> -->

      <div id="canvasArea">
        <div
          class="imgArea"
          :class="{'mouseHover' : cutImgMoveFlag}"
        >
          <canvas
            class="imgCanvas"
            ref="canvas"
            width="300"
            height="300"
            @mousedown="setStartPoint"
            @mousemove="cutImg"
            @mouseup="stopCutImg"
            @mouseleave="stopCutImg"
          ></canvas>
          <div
            class="notice"
            v-show="isShowNotice"
          >
            {{notice}}
            <div
              id="close-notice"
              @click="closeNotic"
            >x</div>
          </div>
        </div>
        <canvas
          class="resultCanvas"
          ref="resultCanvas"
          width="100"
          height="100"
        >
        </canvas>
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
        :src="dataURL"
        alt=""
        ref="cutImg"
      >
    </div>
  </div>
</template>
<script>
/**
 * 用到的api:
 *  new FileReader() web应用异步读取本地硬盘的文件
 *      readAsDataURL  读取input中的文件 
 * 
 * canvas
 *    drawImage  把base64格式的图片渲染至canvas
 *    getImageData  从canvas中截取图片，返回一个base64格式的数据
 *    putImageData  把一个base64格式的数据展示在一个canvas中
 * 
 */
import config from '../../config/config'
export default {
  data() {
    return {
      notice: '拖拽鼠标框选所需要的区域',
      isShowNotice: true,
      imgObj: new Image(), //装载input打开的图片
      imgOptions: { //显示在图片canvas中的图片参数
        showImgWidth: undefined,
        showImgHeight: undefined,
        dy: undefined, //图片左上角距canvas左上角的y轴的距离 
        dw: undefined, //图片左上角距canvas左上角的x轴的距离 
      },
      showCanvas: true,
      isShowCurrentAvatar: false,
      cutImgFlag: false,//是否开始截图的标志
      startX: undefined,//开始截取的X坐标
      startY: undefined,//开始截取的Y坐标
      imgCanvas: undefined, //显示图片的canvas
      imgCtx: undefined,//显示图片的canvas的Context('2d')
      imgCanvasWidth: undefined,
      imgCanvasHeight: undefined,
      resultCanvas: undefined,//预览图片的canvas
      resultCtx: undefined,//预览图片的canvas的Context('2d')
      resultCanvasWidth: undefined,
      resultCanvasHeight: undefined,
      cutData: undefined, //截取的图片的数据
      //截取框的尺寸
      cutW: 0,
      cutH: 0,
      dataURL: undefined, //保存截取后的数据
      cutImgMoveFlag: false,
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
      this.isShowNotice = true
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


        //获取两个canvas 缓存到全局
        let imgCanvas = this.$refs.canvas
        let resultCanvas = this.$refs.resultCanvas
        this.imgCanvasWidth = imgCanvas.width
        this.imgCanvasHeight = imgCanvas.height
        this.resultCanvasWidth = resultCanvas.width
        this.resultCanvasHeight = resultCanvas.height
        this.imgCanvas = imgCanvas
        this.resultCanvas = resultCanvas
        this.imgCtx = imgCanvas.getContext('2d')
        this.resultCtx = resultCanvas.getContext('2d')

        let canvasWidth = imgCanvas.width
        let canvasHeight = imgCanvas.height

        //每次重新选择图片时，都清空预览canvas的数据
        this.resultCtx.clearRect(0, 0, this.resultCanvasWidth, this.resultCanvasHeight)

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
          dw = undefined
          dy = (canvasHeight - showImgHeight) / 2
        } else {
          showImgHeight = canvasHeight > imgHeight ? imgHeight : canvasHeight
          showImgWidth = showImgHeight * rateHW
          //图片在canvas居中
          dy = undefined
          dw = (canvasWidth - showImgWidth) / 2
        }

        //把 showImgWidth,showImgHeight, dy,dw 的值赋给全局变量，以传给cutImg()
        this.imgOptions.showImgWidth = showImgWidth
        this.imgOptions.showImgHeight = showImgHeight
        this.imgOptions.dy = dy
        this.imgOptions.dw = dw

        //canvas渲染图片
        this.imgCtx.clearRect(0, 0, canvasWidth, canvasHeight)
        this.imgCtx.drawImage(this.imgObj, dw ? dw : 0, dy ? dy : 0, showImgWidth, showImgHeight)
      }


    },
    setStartPoint(e) {
      if (!this.imgObj.src) return

      this.startX = e.offsetX
      this.startY = e.offsetY
      this.cutImgFlag = true

    },

    cutImg(e) {
      //https://segmentfault.com/a/1190000013038300
      if (!this.cutImgFlag) return

      //鼠标移动的距离
      this.cutW = (e.offsetX - this.startX) > 100 ? 100 : (e.offsetX - this.startX)
      this.cutH = (e.offsetY - this.startY) > 100 ? 100 : (e.offsetY - this.startY)

      //缓存drawImage的参数，给ctx使用，可以不用写这么长 
      let dw = this.imgOptions.dw ? this.imgOptions.dw : 0
      let dy = this.imgOptions.dy ? this.imgOptions.dy : 0
      let showImgWidth = this.imgOptions.showImgWidth
      let showImgHeight = this.imgOptions.showImgHeight

      this.imgCtx.clearRect(0, 0, this.imgCanvasWidth, this.imgCanvasHeight)
      this.imgCtx.drawImage(this.imgObj, dw, dy, showImgWidth, showImgHeight)

      //阴影部分
      this.imgCtx.fillStyle = 'rgba(0,0,0,0.3)'
      this.imgCtx.fillRect(0, 0, this.imgCanvas.width, this.startY)
      this.imgCtx.fillRect(this.startX + this.cutW, this.startY, this.imgCanvas.width - this.startX, this.imgCanvas.height - this.startY)
      this.imgCtx.fillRect(0, this.startY, this.startX, this.imgCanvas.height - this.startY)
      this.imgCtx.fillRect(this.startX, this.startY + this.cutH, this.cutW, this.imgCanvas.height - this.startY - this.cutH)

      //选区，并把选区的内容展示在预览区
      if (this.cutW !== 0 && this.cutH !== 0) {
        this.cutData = this.imgCtx.getImageData(this.startX, this.startY, this.cutW, this.cutH)
        this.resultCtx.clearRect(0, 0, this.resultCanvasWidth, this.resultCanvasHeight)
        this.resultCtx.putImageData(this.cutData, 0, 0)
      }

    },
    stopCutImg() {
      this.cutImgFlag = false
    },

    uploadBtn() {
      this.showCanvas = false
      this.isShowCurrentAvatar = true
      this.dataURL = this.resultCanvas.toDataURL('image/jpeg', 1.0)

      //把canvan中的图像保存成blob形式的文件，以保存到本地硬盘
      this.resultCanvas.toBlob(blob => {

        let a = blob
        //上传到后台保存
        var formData = new FormData()
        formData.append("filename", "abc");  // 文件名

        // JavaScript file-like 对象
        formData.append("file", a);

        fetch(`${config.url}/saveAvatarToLocal`, {
          method: 'POST',
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          body: formData
        }).then(res => {
          return res.json()
        }).then(data => {
          // console.log(data.size);
        })


        //测试用，读取blob中的url，用于显示图片
        /*
        let reader = new FileReader()
        let src = undefined
        reader.addEventListener('load', () => {
          src = reader.result
          console.log(src)
        })
        reader.readAsDataURL(blob)
        */
      })


    },

    closeNotic() {
      this.isShowNotice = false
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
    #canvasArea
      position relative
      .imgArea
        position relative
        display inline-block
        .imgCanvas 
          border 1px solid #ccc
          background url('../../assets/img/message/bg.png') no-repeat center
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
        &.mouseHover
          cursor move      
      .resultCanvas
        border 1px solid #ccc 
        display inline-block
        // border-radius 50%
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