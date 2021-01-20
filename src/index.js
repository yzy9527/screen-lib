import Test2 from "./components/Test2"
import Test3 from "./components/Test3/index.js"
import SvgAnimation from './components/SvgAnimation/index'
import yLoading from './components/yLoading/index'
import yFlyBox from './components/yFlyBox/index'
import contaienr from './components/container/index'
import yLogo from './components/yLogo/index'
import VueCountTo from './components/VueCountTo/index'

import vueEcharts from './components/VueEcharts'

export default function (Vue) {
    Vue.use(Test2)
    Vue.use(Test3)
    Vue.use(SvgAnimation)
    Vue.use(yLoading),
    Vue.use(yFlyBox),
    Vue.use(contaienr),
    Vue.use(yLogo),
    Vue.use(VueCountTo),
    Vue.use(vueEcharts)

}
