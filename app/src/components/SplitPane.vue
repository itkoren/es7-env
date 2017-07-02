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
  right: -1rem;
  width: 1rem;
  cursor: ew-resize;
}
.dragger::before {
  content: '\2846';
  position: absolute;
  /* .22em is an offset from the glyph's own surrounding empty-space */
  top: calc(50% - .22em);
  left: calc(50% - .22em);
  width: 0;
  line-height: 0;
  /* font size can be changed to control the dragger dots size without changing any other property,
   all other layout properties are computed relative to the glyph size */
  font-size: 44px;
  color: #0275d8;
}
</style>
