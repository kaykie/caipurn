/* ========================================================

 ** 全局store **

 直接实例化，在 ./App.js 通过 Provider 渗透。
 在模块内用 @inject('GStore')，将 Store 注入到 props 上。
 哪里用，哪里 @inject('GStore')。

 MobX：可代替redux的状态管理
 1) useStrict(true)：严格模式，这里的严格模式只约束mobx(版本小于4)
 2) @observable：定义被观察者，说白了就是定义一个 *可修改* 的 *局部变量*
 3) @action：唯一可以改变观察者的地方

 优化react组件渲染：
 MobX非常快，甚至比Redux更快。
 1) 使用大量的小组件，并用@observable监测，因为组件越小，它们需要重新渲染产生的变化则越小。这意味着用户界面的更多部分具备彼此*独立渲染*的可能性。
 2) 将大型数据列表抽离成单独的组件。
 3) 尽可能晚一点使用间接引用值。

 MobX中文文档：http://cn.mobx.js.org/
 context相关：http://blog.csdn.net/beverley__/article/details/73847518

 ====================================================== */

import {observable, configure, action, computed} from 'mobx'

configure({enforceActions: true}); // 设置了 必须通过action来改变值
import service from './service/service'

class GStore {
  constructor(){
    this.getCategoryList()
  }
  @observable right = {
    city: '',
    district: '',
    weather: '',
    temperature: ''
  };
  @action changeRight = (transmit) => {
    this.right = transmit
  };

  @computed get showLoader() {
    return this.right.city === ''
  };


  @observable categoryList = [];
  @action getCategoryList = () => {
    service.getCategory()
      .then(res =>{
        console.log(res)
      })
  }
}

export default new GStore()