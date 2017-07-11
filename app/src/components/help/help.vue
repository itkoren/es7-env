<template>
  <div class="help">
    <button type="button" class="trigger btn btn-lg btn-outline-primary ml-5" aria-label="Show Help" @click="show">
      <span aria-hidden="true">&quest;</span>
    </button>
    <div class="overlay" v-show="!hidden">
      <button type="button" class="close" aria-label="Hide Help" @click="hide">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="content" @click="hide">
        <h1 class="text-center">Help</h1>
        <h2>Key map</h2>
        <p class="pb-3">Some editor key-bindings worth knowing. For the full list, <a href="https://codemirror.net/doc/manual.html#commands" target="_blank" rel="noopener noreferrer">see here</a>.</p>
        <div v-for="entry in keyMap">
          <h3>{{entry.name}}<span class="float-right">
                <span v-if="!!entry.keys.all"><kbd v-for="allKey in entry.keys.all">{{allKey}}</kbd></span>
                <span v-if="!!entry.keys.pc">pc: <kbd v-for="pcKey in entry.keys.pc">{{pcKey}}</kbd></span>
                <span v-if="!!entry.keys.mac">mac: <kbd v-for="macKey in entry.keys.mac">{{macKey}}</kbd></span>
              </span></h3>
          <p>{{entry.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import keyMap from './key-map';

  export default {
    data () {
      return {
        keyMap,
        hidden: true
      };
    },
    methods: {
      show () {
        this.hidden = false;
      },
      hide () {
        this.hidden = true;
      },
    },
  };

</script>

<style scoped>

  h1, h2, h3 {
    margin: 1em 0 .5em;
    color: #fff;
  }
  h3 {
    font-size: 1.4rem;
  }
  a {
    color: #f2f2f2;
    text-decoration: none;
    border-bottom: 1px solid;
  }
  kbd + kbd {
    margin-left: .2em;
  }

  .overlay,
  .content {
    position: fixed;
  }

  .overlay {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    opacity: .9;
    background-color: #f2f2f2;
  }

  .content {
    font-size: 1.2rem;
    top: 3rem;
    bottom: 3rem;
    left: 3rem;
    right: 3rem;
    overflow-y: auto;
    padding: 2em;
    color: #e0e0e0;
    background-color: #555;
  }

  .trigger {
    border-radius: 50% !important;
    width: 2em;
    height: 2em;
    padding: 0;
  }

  .close {
    width: 1.5em;
    height: 1.5em;
    margin: 0.5em 0.5em 0 0;
  }

  .close:focus {
    outline: 0 none;
  }

</style>
