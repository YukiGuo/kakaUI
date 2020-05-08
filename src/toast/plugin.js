import KToast from "./KToast"

let currentToast;

export default {
    install(Vue,options){
        Vue.prototype.$toast=function (message,toastOptions) {
            console.log(toastOptions)
            if(currentToast){
                currentToast.close()
            }
            currentToast=  createToast({Vue,message,toastOptions,onCLose:()=>{
                    currentToast=null
            }
            })
        }
    }
}
function createToast({Vue,message,propsData,onCLose}) {
    const  Constructor= Vue.extend(KToast)
    const toast =new Constructor({propsData})
    toast.$slots.default=[message]
    toast.$mount()
    toast.$on('close',onCLose)
    document.body.appendChild(toast.$el)
    return toast
}