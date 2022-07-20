<template>
  <div class="filtered-search-box">
    <input type="text" align="right" placeholder="ürün ara" :value="value" @input="$emit($event)"/>
  </div>
</template>

<script>
export default {
  name: 'FilteredSearchBox',
  props: {
    value: {
      type:String,
      required:false,
      default(){
        return ;
      }
    }
  }
}
</script>
