<template>
  <div>Project{{mobile}}<svg-icon icon-class="qunzhu" /></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Project',
  components: {

  },
  computed: {
    ...mapGetters(['mobile'])
  }
};
</script>
