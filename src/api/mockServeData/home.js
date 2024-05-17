import Mock from 'mockjs';

let List = [];
export default {
    getStatisticalData: () => {
        for(let i = 0 ; i < 7; i++){
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100,8000,0,0),
                    vivo: Mock.Random.float(100,8000,0,0),
                    oppo: Mock.Random.float(100,8000,0,0),
                    魅族: Mock.Random.float(100,8000,0,0),
                    三星: Mock.Random.float(100,8000,0,0),
                    小米: Mock.Random.float(100,8000,0,0),
                })
            )
        }
        return {
            code:'0000',
            data:{
                ordderData:{
                    date:['2018','2019','2020','2021','2022','2023','2024'],
                    data:List,
                }
            }
        }
    }
}