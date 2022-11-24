import {defineStore} from 'pinia'
export const useThemeStore = defineStore('themeStore',{
    state:()=>{
        return {theme:"light",isDay:true}
    },
    actions:{
        useChangeTheme(){
            this.isDay = ! this.isDay 
            this.theme = this.isDay ?"light":"night"
            console.log(this.isDay,"this.isDay",this.theme)
            

        }
    }
})