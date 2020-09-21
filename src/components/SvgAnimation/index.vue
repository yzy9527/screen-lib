<template>
  <div>
    {{message}}<br>
    doubleCount1:{{doubleCount}}
    <button @click="add">add</button>
    <!-- 进度条 -->
    <div class="container">
      <svg
        width="440"
        height="440"
        viewBox="0 0 440 440"
      >
        <circle
          cx="220"
          cy="220"
          r="200"
          stroke-width="20"
          stroke="#d1d3d7"
          fill="none"
        ></circle>
        <circle
          cx="220"
          cy="220"
          r="200"
          class="circle"
          stroke-width="20"
          stroke="#00a5e0"
          fill="none"
          transform="matrix(0 -1 1 0 0 440)"
        >

        </circle>
      </svg>
    </div>
    <!-- 图标轮廓 -->
    <div class="container">

      <svg
        viewBox="0 0 1024 1024"
        width="200"
        height="200"
      >
        <path
          class="logo"
          d="M752.4 621.7c18.1 0 32.8-39.3 32.8-87.7 0-48.5-14.7-87.7-32.8-87.7s-32.8 39.3-32.8 87.7c0 48.4 14.7 87.7 32.8 87.7z m-284.1 43.8c18.1 0 32.8-34.4 32.8-76.8s-14.7-76.8-32.8-76.8c-18.1 0-32.8 34.4-32.8 76.8 0 42.5 14.7 76.8 32.8 76.8zM64 555.9c0 218.8 201.2 394.8 448 394.8s448-176 448-394.8-201.2-394.8-448-394.8c3.2 0 4.3 0.5 4.3 0.5-1.9-1.4-4-3.2-9.7-8.4-15.9-14.5-25.8-22.6-41.1-32.4-47.1-30.1-109-47.3-193.9-47.3-12.1 0-21.9 9.8-21.9 21.9s9.8 21.9 21.9 21.9c76.8 0 130.4 14.9 170.4 40.4 10.6 6.8 54.9 47.3 70 47.3 223.9 0 404.3 157.8 404.3 350.9S735.9 906.8 512 906.8 107.7 749 107.7 555.9c0-127.5 79.3-243.5 205.4-305.6 10.8-5.3 15.3-18.5 10-29.3-5.3-10.9-18.4-15.4-29.2-10C153.4 280 64 410.8 64 555.9z"
          p-id="6221"
        >
        </path>
      </svg>
    </div>
    <!-- 图标轮廓原理 -->
    <div class="container">
      <svg
        class="line-container"
        viewBox="0 0 400 400"
        width="400"
        height="400"
      >
        <line
          class="line"
          x1="0"
          y1="20"
          x2="400"
          y2="20"
          fill="none"
          stroke-width="20"
          stroke="red"
        ></line>
      </svg>
    </div>
    <!-- SMIL动画 -->
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="100" height="50">
          <!-- set放在哪个标签下就作用域哪个标签 -->
          <set attributeName="x" attributeType="XML" to="10" begin="1s"></set>
          <set attributeName="x" attributeType="XML" to="20" begin="2s"></set>
          <set attributeName="fill" attributeType="XML" to="blue" begin="3s"></set>
        </rect>
      </svg>
    </div>
    <!-- animate使用 -->
    <div class="container">
      <svg width="200" height="200">
        <circle cx="0" cy="0" r="30" fill="blue" stroke="black" stroke-width="1">
          <animate
            attributeName="cx"
            attributeType="XML"
            from="0"
            to="100"
            dur="3s"
            repeatCount="2"
            fill="freeze"
          >
          </animate>
          <animate
            attributeName="cy"
            attributeType="XML"
            from="0"
            to="100"
            dur="3s"
            repeatCount="2"
            fill="freeze"
          ></animate>
          <animate
            attributeName="fill"
            attributeType="XML"
            from="blue"
            to="red"
            dur="3s"
            repeatCount="2"
            fill="freeze"
          >
          </animate>
          <animateTransform
            attributeName="transform"
            attribureType="XML"
            begain="0"
            dur="3s"
            type="scale"
            from="1"
            to="2"
            repeatCount="2"
            fill="freeze"
          ></animateTransform>
        </circle>
      </svg>
    </div>
    <!-- animateMotion轨迹 -->
    <div class="container">
      animateMotion轨迹
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="10" height="10">
          <animateMotion
            path="M10 10 L110 10 L110 110 L10 110 Z"
            dur="5s"
            rotate="0"
            fill="freeze"
            repeatCount="2">
          </animateMotion>
        </rect>
        <path d="M10 10 L110 10 L110 110 L10 110 Z"
              fill="none"
              stroke="green"
        >
        </path>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="10" height="10">
          <animateMotion
            id="forward-rect"
            path="M10 10 L110 10 L110 110 L10 110"
            dur="5s"
            rotate="0"
            fill="freeze"
            begin="0"
          />
          <animateMotion
            id="backward-rect"
            path="M10 110 L110 110 L110 10 L10 10"
            dur="5s"
            rotate="0"
            fill="freeze"
            begin="forward-rect.end + 0.5s"
          />
        </rect>
        <path d="M10 10 L110 10 L110 110 L10 110"
              fill="none"
              stroke="green"
        >
        </path>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="10" height="10">
          <animateMotion
            id="forward-rect2"
            path="M10 10 L110 10 L110 110 L10 110"
            dur="2s"
            rotate="0"
            fill="freeze"
            begin="0; backward-rect2.end + 0.5s"
          />
          <animateMotion
            id="backward-rect2"
            path="M10 110 L110 110 L110 10 L10 10"
            dur="2s"
            rotate="0"
            fill="freeze"
            begin="forward-rect2.end + 0.5s"
          />
          <animate
            id="red-to-blue"
            attributeName="fill"
            attributeType="XML"
            from="red"
            to="green"
            dur="2s"
            fill="freeze"
            begin="0 ;blue-to-red.end + 0.5s"
          ></animate>
          <animate
            id="blue-to-red"
            attributeName="fill"
            attributeType="XML"
            from="green"
            to="red"
            dur="2s"
            fill="freeze"
            begin="red-to-blue.end + 0.5s"
          ></animate>
        </rect>
        <path d="M10 10 L110 10 L110 110 L10 110"
              fill="none"
              stroke="green"
        >
        </path>
      </svg>
    </div>
    <div class="container">
      <svg viewBox="0 0 200 200" width="200" height="200">
        <g id="rect1">
          <rect x="0" y="0" rx="0" ry="0" width="100" height="100" fill="red">
            <animate
              attributeType="XML"
              attributeName="fill"
              from="red"
              to="green"
              begin="rect1.click"
              dur="2s"
              fill="freeze"
            />
          </rect>
        </g>
        <animateTransform
          attributeType="XML"
          attributeName="transform"
          type="translate"
          from="0, 0"
          to="50, 50"
          begin="rect1.click"
          dur="2s"
          fill="freeze"
        />
        <rect x="0" y="100" width="100" height="100" fill="blue">
          <animate
            attributeType="XML"
            attributeName="fill"
            from="blue"
            to="green"
            begin="rect1.click"
            dur="2s"
            fill="freeze"
          />
        </rect>
      </svg>
    </div>
    <!--蒙版-->
    <div class="container">
      蒙版
      <svg width="400" height="400">
        <defs>
          <mask id="test-mask">
            <!--                        <rect x="5" y="5" width="390" height="390" fill="white"></rect>-->
            <circle fill="yellow" r="50" cx="150" cy="150"></circle>
          </mask>
        </defs>
        <rect x="5" y="5" width="390" height="390" fill="red"></rect>
        <rect x="5" y="5" width="390" height="390" fill="blue"
              mask="url(#test-mask)"
        ></rect>
      </svg>
    </div>
    <!--linearGradient渐变-->
    <div class="container">
      <div>
        linearGradient渐变
      </div>
      <svg width="400" height="400">
        <defs>
          <mask id="test-mask">
            <rect x="5" y="5" width="390" height="390" fill="white"></rect>
            <circle fill="yellow" r="50" cx="150" cy="150"></circle>
          </mask>
          <linearGradient id="test-linear-gradient">
            <!--offset="0%" 开始的颜色-->
            <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
            <stop offset="100%" stop-color="blue" stop-opacity="0.5"></stop>
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="390" height="390" fill="url(#test-linear-gradient)"></rect>
        <rect x="5" y="5" width="390" height="390" fill="blue"
              mask="url(#test-mask)"
        ></rect>
      </svg>
    </div>
    <!--radialGradient-->
    <div class="container bg-gray">
      <div>
        radialGradient渐变 光影效果
      </div>
      <svg width="400" height="400">
        <defs>
          <!--fx fy表示内圈的范围  cx cy表示外圈的范围 r表示辐射半径-->
          <radialGradient
            id="test-radial-gradient"
            r="50%"
            cx="50%"
            cy="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
            <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
          </radialGradient>
        </defs>

        <!--              <rect x="5" y="5" width="390" height="390" fill="url(#test-radial-gradient)"></rect>-->
        <circle r="150" cx="200" cy="200" fill="url(#test-radial-gradient)"></circle>
      </svg>
    </div>

  </div>
</template>

<script>
    import {computed, ref, onMounted} from 'vue'

    export default {
        name: 'SvgAnimation',
        setup() {
            const message = 'ddd5555d'
            const count = ref(1)
            const doubleCount = computed(() => count.value * 2)
            const add = () => {
                count.value++
            }
            onMounted(() => {
                const logo = document.getElementsByClassName('logo')[0]
                console.log(logo.getTotalLength());
            })
            return {
                message,
                doubleCount,
                add
            }
        }
    }
</script>

<style scoped lang="scss">
  .container {
    svg {
      border: 1px solid #333;
    }
  }

  .red {
    color: red;
  }

  .circle {
    animation: circle 5s linear infinite;
  }

  @keyframes circle {
    from {
      stroke-dasharray: 0 1257;
    }
    to {
      stroke-dasharray: 1257 0;
    }
  }

  .logo {
    fill: none;
    stroke: #333;
    stroke-width: 5;
    animation: drawBorder 10s linear infinite;
    /**animation: drawBorder 10s linear 1 forwards;  **/
  }

  /** forwards 维持完成后状态 */
  @keyframes drawBorder {
    0% {
      fill: white;
      stroke: #333;
      stroke-dasharray: 6024;
      stroke-dashoffset: 6024;
    }
    50% {
      fill: white;
      stroke: #333;
      stroke-dasharray: 6024;
      stroke-dashoffset: 0;
    }
    75% {
      fill: red;
      stroke: white;
    }
    100% {
      fill: blue;
      stroke: white;
    }
  }

  .line {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;

    transition: stroke-dashoffset 0.5s ease-out;
  }

  .line-container {
    &:hover {
      .line {
        stroke-dashoffset: 0;
      }
    }
  }

  .bg-gray {
    background: #333;
  }
</style>
