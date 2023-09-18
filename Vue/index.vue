<template>
  <div>
    <span>进度：{{percentage}}%</span>
    <button @click="handleAdd"> + 10 </button>
    <button @click="handleMinum"> - 10 </button>
    </br></br>
    <!-- circle -->
    <svg width="120" height="120">
      <circle fill="none" cx="60" cy="60" r="50" stroke="#EBEDF0" stroke-width="10" />
      <path fill="none" d="M 60, 10 A 50, 50, 0, 0, 1, 60, 110 A 50, 50, 0, 0, 1, 60, 10" stroke="#50D4AB"
        stroke-width="10" :stroke-dasharray="circleDashArray" stroke-linecap="round"  style="transition: stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s"/>
    </svg>
    <!-- rect -->
    <svg width="120" height="120">
      <rect fill="none" x="10" y="10" rx="10" width="100" height="100" stroke="#ebedf0" stroke-width="10" />
      <rect fill="none" x="10" y="10" rx="10" width="100" height="100" stroke="#50D4AB" stroke-width="10"
        stroke-linecap="round" :stroke-dasharray="rectDashArray" style="transition: stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s" />
    </svg>
    <!-- triangle -->
    <svg width="120" height="120">
      <polygon fill="none" stroke-linejoin="round" :points="points" stroke="#ebedf0" stroke-width="10" />
      <polygon fill="none" stroke-linejoin="round" :points="points" stroke="#50D4AB" stroke-width="10"
        :stroke-dasharray="triangleDashArray" stroke-linecap="round"  style="transition: stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s"/>
    </svg>
  </div>
</template>

<script>
  // import Vue from 'vue';

export default {
  data() {
    return {
      percentage: 0,
      circleDashArray: '',
      rectDashArray: '',
      triangleDashArray: '',
      points: ''
    };
  },
  mounted() {
    // triangle
    const height = Math.sqrt(Math.pow(100, 2) - Math.pow(50, 2)) // 三角形的高
    this.points = `10,${height + 10} 60,10 110,${height + 10}`

    this.setProgress()
  },
  methods: {
    handleAdd () {
      this.percentage += (this.percentage === 100 ? 0 : 10)
      this.setProgress()
    },
    handleMinum () {
      this.percentage -= (this.percentage === 0 ? 0 : 10)
      this.setProgress()
    },
    setProgress () {
      // circle
      const girth = 2 * Math.PI * 50
      this.circleDashArray = `${this.percentage * 0.01 * girth} ${girth}`

      // rect
      const circleGirth = 2 * Math.PI * 10 // 圆角的圆的周长
      const width = 100 - 2 * 10 // 正方形的边长
      const totalGirth = circleGirth + 4 * width // 圆角矩形总周长
      this.rectDashArray = `${this.percentage * 0.01 * totalGirth} ${totalGirth}`

      // triangle
      const triangleGirth = 100 * 3
      this.triangleDashArray = `${this.percentage * 0.01 * triangleGirth} ${triangleGirth}`
    }

  }
};
</script>
