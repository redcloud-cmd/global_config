<template>
    <div>
        -------------------------------------------------------------------------------
        <p>

        </p>
        测试{{testTheme}}
    </div>

</template>
<script setup lang="ts">
 import {useThemeStore} from '../store/index'
 import { toRefs,ref,toRef } from 'vue';
 const theme = useThemeStore()
 const testTheme = toRef(theme,"theme")

</script>
