let isProd = true;

let prod = "http://m.tqingdao.com/api/phone";
// let dev = "http://192.168.2.181:8080/lghcms/lghApi";
let dev = "http://lghback.citgroup.cn:8080/lghApi";

let imgsrc="http://lghback.citgroup.cn:8080";

let base = isProd ? prod : dev;
export default {
    amap: "988b262540ae65a710f18bf4516193de",
    imgsrc,
    //最新资讯
    scenic: {
        list: `${base}/api/spot/index/0`,        //热点图片

    },


}
