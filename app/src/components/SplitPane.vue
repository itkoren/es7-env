<template>
  <div class="split-pane"
    @mousemove="dragMove"
    @mouseup="dragEnd"
    @mouseleave="dragEnd"
    :class="{ dragging: dragging }">
    <div class="left" :style="{ width: split + '%' }">
      <slot name="left"></slot>
      <div class="dragger" @mousedown.prevent="dragStart">
      </div>
    </div>
    <div class="right" :style="{ width: (100 - split) + '%' }">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      split: 50,
      dragging: false
    }
  },
  methods: {
    dragStart (e) {
      this.dragging = true
      this.startX = e.pageX
      this.startSplit = this.split
    },
    dragMove (e) {
      if (this.dragging) {
        const dx = e.pageX - this.startX
        const totalWidth = this.$el.offsetWidth
        this.split = this.startSplit + ~~(dx / totalWidth * 100)
      }
    },
    dragEnd () {
      this.dragging = false
    }
  }
}
</script>

<style scoped>
.split-pane {
  display: flex;
  height: 100%;
}
.split-pane .dragging {
    cursor: ew-resize;
}
.left, .right {
  position: relative;
}
.left {
  border-right: 1rem solid transparent;
}
.dragger {
  position: absolute;
  z-index: 99;
  top: 0;
  bottom: 0;
  right: -15px;
  width: 15px;
  cursor: ew-resize;
}
.dragger::before {
  content: '\2219\2219\2219';
  position: absolute;
  /* 15px are half the height of three characters one on top of the other */
  top: calc(50% - 15px);
  left: 4px;
  font-size: 16px;
  line-height: 10px;
  word-break: break-all;
  color: #0275d8;
}
</style>
