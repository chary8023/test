import axios from 'axios'

export const IP = 'http://localhost:3000'
const ax = axios.create({
    baseURL: IP
})

// 登陆接口
export function login(account,password){
    return ax.post('/login',{account,password})
}

/* ----------------------------------------账户相关接口---------------------------------------- */
// 添加帐户接口
export function accountAdd(account,password,userGroup){
    return ax.post('/accountAdd',{account,password,userGroup})
}

// 管理帐户接口
export function accountManage(){
    return ax.post('/accountManage')
}

// 删除帐户接口
export function accountDel(id){
    return ax.post('/accountDel',{id})
}

// 账户修改密码
export function changePwd(id,oldPassword,newPassword){
    return ax.post('/changePwd',{id,oldPassword,newPassword})
}

/* ----------------------------------------token相关接口---------------------------------------- */

// 验证token接口
export function getToken(token){
    return ax.get('/getToken',{params:{token}})
}

/* ----------------------------------------商品相关接口---------------------------------------- */
// 添加商品接口
export function addGoods(category,name,barCode,salePrice,marketPrice,stockPrice,stockCount,commodityWeight,commodityUnit,vipDiscount,promotion,goodsDesc){
    return ax.get('/addGoods',{params:{category,name,barCode,salePrice,marketPrice,stockPrice,stockCount,commodityWeight,commodityUnit,vipDiscount,promotion,goodsDesc}})
}
// 管理商品接口
export function allGoodsSelect(page,pagecell,searchName,searchCategory){
    return ax.get('/allGoodsSelect',{params:{page,pagecell,searchName,searchCategory}})
}