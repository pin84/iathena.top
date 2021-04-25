class PopUpInfo extends HTMLElement {
  constructor() {
    super() //必须首先调用super方法


    let shadow = this.attachShadow({ mode: 'open' })

    let div = document.createElement('div')
    let img = document.createElement('img')

    img.setAttribute('src','http://img1.imgtn.bdimg.com/it/u=1781421683,4157193774&fm=26&gp=0.jpg')

    shadow.appendChild(div)
    div.appendChild(img)
  }


}


// Define the new element
export default customElements.define('popup-info', PopUpInfo)

