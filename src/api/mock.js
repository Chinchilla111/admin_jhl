import Mock from "mockjs";
import homeApi from "./mockServeData/home";

//定义mock请求拦截
// Mock.mock('/api/home/getData' , 'get' ,function (){
//     //拦截到请求后的处理函数
//     console.log('拦截到了');
//     return {
//         code:'0000',
//         data:{
//             userName:'姜海龙'
//         }
//     }
// })

Mock.mock('/api/home/getData' , 'get' , homeApi.getStatisticalData)