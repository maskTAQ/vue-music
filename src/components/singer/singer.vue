<template>
<div class="singer">
  <list-view @select="selectSinger" :data="singers"></list-view>
  <router-view></router-view>
</div>
</template>

<script type="text/javascript">
import {
  getSingerList
} from 'api/singer'
import {
  ERR_OK
} from 'api/config'
import Singer from 'common/js/singer';
import ListView from 'base/listview/listview'
import {mapMutations} from 'vuex'

const HOT_NAME = '热门';
const HOT_SINGER_LEN = 10;
export default {
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingerList();
  },
  components: {
    ListView
  },
  methods: {
    _getSingerList() {
      getSingerList()
        .then(res => {
          this.singers = this._normalizeSinger(res.data.list)
        });
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, i) => {
        if (i < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }));
        }

        const key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        }));


      });

      //map > array
      let hot = [],
        ret = [];

      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {

        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      });

      return hot.concat(ret)
    },
    selectSinger(singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      })
      this.setSinger(singer)
    },
    ...mapMutations({
      setSinger:'SET_SINGER'
    })
  }
}
</script>

<style scoped lang="scss">
.singer {
    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%;
}
</style>
