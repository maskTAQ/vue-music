<template lang="html">
<transition name="slide">
  <music-list :songs="songs" :bg-image="bgImage" :title="title"></music-list>
</transition>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import {
  getSingerDetail
} from 'api/singer'
import {
  ERR_OK
} from 'api/config'
import {createSong} from 'common/js/song'

import MusicList from 'components/music-list/music-list'
export default {
  data(){
    return {
      songs:[]
    }
  },
  components:{
    MusicList
  },
  computed: {
    title(){
      return this.singer.name;
    },
    bgImage(){
      return this.singer.avatar;
    },
    ...mapGetters(['singer'])
  },
  created() {
    this._getDetail();
  },
  methods: {
    _getDetail() {
      const {
        id: singerId
      } = this.singer;
      //singer数据是通过点击歌手列表的歌手来设置的 直接进入页面获取不到singerId
      if(!singerId){
        return this.$router.push({
          path:'/singer',
        });
      }

      getSingerDetail(singerId)
        .then(res => {
          if(res.code === ERR_OK){
            this.songs = this._normalizeSongs(res.data.list);
            console.log(this.songs);
          }
        })
    },
    _normalizeSongs(list){
      let ret = [];
      list.forEach(item=>{
        let {musicData} = item;
        if(musicData.songid && musicData.albummid){
          ret.push(createSong(musicData));
        }
      });
      return ret;
    }
  }
}
</script>

<style lang="scss">
@import "~common/styles/variable";
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
    transform: translate3d(100%, 0, 0);
}
</style>
