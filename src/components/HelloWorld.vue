<template>
  <h1>{{ msg }}</h1>
  <a-button type="primary">hello Antdesign你  好</a-button>
  <!-- 添加主题模式 -->
  <div v-if="theme=='light'">
      333
  </div>
  <a-switch v-model:checked="checked" @change="change">
    <template #checkedChildren><check-outlined /></template>
      <template #unCheckedChildren><profile-filled /></template>
  </a-switch>

<div>
  正规{{theme}}
</div>
</template>


<script setup lang="ts">
import { ref ,toRefs,toRef, reactive,onBeforeMount, watch, nextTick, onMounted} from 'vue'
// <profile-filled />
import { CheckOutlined, CloseOutlined,ProfileFilled } from '@ant-design/icons-vue';
import {useThemeStore} from '../store/index'

defineProps<{ msg: string }>()

const count = ref(0)
const checked = ref(false)
const Obj = reactive({
  name:'hy'
})

const themes = useThemeStore()
const theme= toRef(themes,'theme')
console.log(theme,"theme11")
 
const change = ()=>{
  themes.useChangeTheme()
}
console.log(theme,"theme11222")
const body = document.documentElement as HTMLElement;
console.log(body,"body值")
onMounted(()=>{
  console.log(themes.isDay,"onMounted箭头")
  if (themes.isDay) {
      body.setAttribute("class", "dark");
      body.setAttribute("style", "filter: grayscale(1)");

    }
    else{
      body.setAttribute("class", "")
      body.setAttribute("style", "filter: invert(80%)")
    } ;
})
watch(()=>themes.isDay,(new1,old1)=>{
  console.log(22,new1,33,old1)
  nextTick(()=>{
    
  })
},{immediate:true,deep:true})
</script>



<style scoped>
.read-the-docs {
  color: #888;
}

</style>
