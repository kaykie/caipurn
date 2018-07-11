import {get} from '../utils/request'
import PubliceService from './publiceService'
export default class myRequest {
  // 获取分类标签 key为必须
  static getCategory = (data) => {
    return new Promise((resolve,reject)=>{
      let params = {parentid:'',dtype:'json',key:'7665140dffd3c1e73c40a1076203efae',...data};
      get('https://apis.juhe.cn/cook/category', params)
        .then(res =>{
          switch (res.data.error_code){
            case 0:
              resolve(res);
              break;
            case 204601:
              PubliceService.showToast('菜谱名称不能为空','loading');
              break;
            case 204602:
              PubliceService.showToast('查询不到相关信息','loading');
              break;
            case 204603:
              PubliceService.showToast('菜谱名过长','loading');
              break;
            case 204604:
              PubliceService.showToast('错误的标签ID','loading');
              break;
            case 204605:
              PubliceService.showToast('查询不到数据','loading');
              break;
            case 204606:
              PubliceService.showToast('错误的菜谱ID','loading');
              break;
            default:
              PubliceService.showToast('系统错误','loading');
              break;
          }
        })
        .catch(err =>{
          reject(err);
          PubliceService.showToast('数据加载失败','loading');
        })
    })
  };


  // 根据目录id查所有菜谱,categoryId,key为必须
  static getByCategory = (data) => {
    return new Promise((resolve,reject)=>{
      let params = {categoryId:1,dtype:'json',key:'7665140dffd3c1e73c40a1076203efae',size:10,current:1,format:1,...data};
      get('https://apis.juhe.cn/cook/index',
        {
          cid:params.categoryId,
          key:params.key,
          dtype:params.dtype,
          rn:params.size,
          pn:params.current,
          format:params.format
        }
      )
        .then(res =>{
          resolve(res)
        })
        .catch(err=>{
          reject(err)
        })
    })
  };


  // 通过名字搜索获取菜谱,menu,key为必须
  static getMenu = (data) => {
    return new Promise((resolve,reject)=>{
      let params = {menu:1,dtype:'json',key:'7665140dffd3c1e73c40a1076203efae',size:10,current:1,albums:'int',...data};
      get('https://apis.juhe.cn/cook/query.php',
        {
          menu:params.menu,
          dtype:params.dtype,
          key:params.key,
          rn:params.size,
          pn:params.current,
          albums:params.albums
        }
      )
        .then(res =>{
          resolve(res)
        })
        .catch(err =>{
          resolve(err)
        })

    })
  };

  // 根据菜谱id来获取该菜谱详情
  static getByMenuId = (params={menuId:1,dtype:'json',key:'7665140dffd3c1e73c40a1076203efae'}) => {
    return new Promise((resolve,reject)=>{
      get('https://apis.juhe.cn/cook/index',
        {
          id:params.menuId,
          key:params.key,
          dtype:params.dtype,
        }
      )
        .then(res => {
          resolve(res)
        })
        .catch(err =>{
          reject(err)
        })
    })
  }

}

