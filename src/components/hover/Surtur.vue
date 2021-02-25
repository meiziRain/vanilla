<template>
  <div id="surtur">
    <button class="button button--surtur">
      <svg class="textcircle" viewBox="0 0 500 500">
        <title>Past Days &amp; Photos &lt; 2021</title>
        <defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" /></defs>
        <text><textPath xlink:href="#textcircle" aria-label="Past Days &amp; Photos &lt; 2021" textLength="900">Past Days &amp; Photos &lt; 2021</textPath></text>
      </svg>
      <svg aria-hidden="true" class="eye" width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
        <path class="eye__outer" d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z" />
        <path class="eye__lashes-up" d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192" />
        <path class="eye__lashes-down" d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z" />
        <circle class="eye__iris" cx="35" cy="35.31" r="5.221" />
        <circle class="eye__inner" cx="35" cy="35.31" r="10.041" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Surtur',
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.button--surtur {
	padding: 0;
	background: none;
	-webkit-clip-path: circle(40% at 50% 50%);
	clip-path: circle(40% at 50% 50%);
}

.textcircle {
	position: relative;
	display: block;
	width: 200px;
}

.textcircle text {
	font-size: 32px;
	text-transform: uppercase;
	fill: var(--text-color);
}

.textcircle textPath {
	letter-spacing: 17px; /* Firefox needs this */
}

// .button--surtur:hover .textcircle {
// 	animation: rotateIt 7s linear infinite;
// }

// .button--surtur .textcircle {
// 	animation: rotateIt 7s linear infinite;
// }

.eye {
	position: absolute;
	z-index: 2;
	width: 60px;
	height: 60px;
	top: calc(50% - 30px);
	left: calc(50% - 30px);
}

.eye__outer,
.eye__inner,
.eye__lashes-up,
.eye__lashes-down {
	stroke: var(--text-color);
	fill: none;
	stroke-width: 1.5px;
}

.eye__lashes-down {
	opacity: 0;
}

.button--surtur:hover .eye__lashes-up,
.button--surtur:hover .eye__inner,
.button--surtur:hover .eye__iris {
	animation: blinkHide 2s step-end infinite;
}

.button--surtur:hover .eye__lashes-down {
	animation: blinkShow 2s step-end infinite;
}
</style>

