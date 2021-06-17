import {request} from './requset'

export function getBanner(){
    return request({
        url:'/banner'
    })
}