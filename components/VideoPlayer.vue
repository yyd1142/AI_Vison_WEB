<template>
  <div class="VideoPlayer">
    <div class="video-image" 
        :playsinline="playsinline"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @ready="playerReadied"
        @statechanged="playerStateChanged($event)"
        v-video-player:myVideoPlayer="options">
    </div>
  </div>
</template>

<script>
import 'videojs-contrib-hls';

export default {
  name: "VideoPlayer",
  props: {
    options: Object
  },
  data() {
    return {
      playsinline: true
    };
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      //   console.log("player current update state", playerCurrentState);
    },
    // player is ready
    playerReadied(player) {
      var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls;
      player.tech_.hls.xhr.beforeRequest = function(options) {
        return options;
      };
    }
  }
};
</script>

<style lang="less">
.VideoPlayer {
  .video-image {
    width: 100%;
    height: 280px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    .video-js {
      width: 100% !important;
      height: 280px !important;
      .vjs-big-play-button {
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
      }
    }
  }
}
</style>
