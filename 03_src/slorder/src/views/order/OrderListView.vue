<template>
  <data-table
    headers=""
    items=""
    item-key=""
    search=""
    custom-filter>
    
  </data-table>
</template>
<script>
  export default {
    name: 'OrderListView',
    data: function() {
      return {
        search: '',
      }
    },
    computed: {
      headers: function() {
        return [
          {text: this.$t('project.no')}
        ]
      }
    }
  }
</script>