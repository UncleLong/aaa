if (!('MomentCam' in window)) {
    window['MomentCam'] = {}
}
MomentCam.urls = {
    checkUser: "http://121.41.80.48:8083/api/user/GetUserByToken",
    loginUrl: "http://121.41.80.48:8083/api/user/login",
    regUrl: "http://121.41.80.48:8083/api/user/Register",
    RegAndLogin: "http://121.41.80.48:8083/api/user/RegisterAndLogin",
    updatePassword: "http://121.41.80.48:51000/account/UpdatePasswordWebService.ashx",
    sendEmailCode: "http://121.41.80.48:51000/account/GetCodeWebService.ashx",
    checkUserUrl: "http://121.41.80.48:8083/api/user/CheckUserName",
    getTemplateProduct: "http://121.41.80.48:55000/api/product/GetTemplateProduct",
    addArtWorks: "http://121.41.80.48:9004/api/Art/AddArtWorks",
    getProductUrl: "http://121.41.80.48:55000/api/product/GetProduct",
    carouseFigureMaskUrl: "http://172.16.1.47:7000/API/CarouseFigureMask.ashx",
    authUrl: "http://or.momentcam.net/resource/getresoucebyname.ashx",
    syncOrderDataUrl: "http://172.16.1.47:7000/API/SyncOrderData.ashx",  
    getFacesUrl: "http://172.16.1.47:7000/API/GetFaces.ashx",
    getBackgroundData: "http://172.16.1.47:7000/API/GetBackgroundData.ashx",
    serverRender: "http://172.16.1.47:7000/API/ServerRender.ashx",
    serverRenderIcon: "http://172.16.1.47:7000/API/ServerRenderIcon.ashx",
    regionsURL: "http://121.41.80.48:8083/api/Region/GetRegionsByPId",
    getAllAdressUrl: "http://121.41.80.48:8083/api/Addr/GetAddrs",
    gatherUrl: "http://121.41.80.48:60000/api/ProductInfos/Gather",
    insertAddressUrl: "http://121.41.80.48:8083/api/Addr/InsertAddress",
    updateAddressUrl: "http://121.41.80.48:8083/api/Addr/UpdateAddress",  
    deleteAddressUrl: "http://121.41.80.48:8083/api/Addr/DeleteAddress",
    setDefaultUrl: "http://121.41.80.48:8083/api/Addr/SetDefaultAddress",
    SyncOrderItemsDataUrl: "http://172.16.1.47:7000/API/SyncOrderItemsData.ashx",
    getAddrUrl: "http://121.41.80.48:8083/api/Addr/GetAddr",
    shopUrl: "http://121.41.80.48:60000/api/ShopInfos/GetShopInfoByShopId",
    submitVirtualOrderUrl: "http://121.41.80.48:8081/api/Mobile/SubmitVirtualOrder",
    submitOrderUrl: "http://121.41.80.48:8081/api/Mobile/SubmitOrder",
    getTradeFlow: "http://121.41.80.48:8081/api/Mobile/GetTradeFlow",
    getInvoiceContent: "http://121.41.80.48:8081/api/Mobile/GetInvoiceContent", //发票内容
    saveInvoice: "http://121.41.80.48:8081/api/Mobile/SaveInvoice", //保存发票
    getSendDataTypes: "http://121.41.80.48:8081/api/Mobile/GetSendDataTypes", //获取送货时间
    saveCoupon: "http://121.41.80.48:8081/api/Mobile/SaveCoupon", //优惠码
    saveShipment: "http://121.41.80.48:8081/api/Mobile/SaveShipment", //保存送货方式
    saveConsignee: "http://121.41.80.48:8081/api/Mobile/SaveConsignee", //保存收货地址
    submitVirtualOrder: "http://121.41.80.48:8081/api/Mobile/SubmitVirtualOrder", //提交虚拟品订单
    pay: "http://paytest1.momentcam.net/content/braintreePayOrder.html", // H5手机网页支付跳转链接
    supplyChainUrl: "http://artist.api.momentcam.net/api/Cooperation/SubmitCooperationInfo",
    myStuidioFavoriteUrl: "http://121.41.80.48:60000/api/ProductInfos/Favorite",
    myStudioComplaintUrl: "http://upload.momentcam.net/message/Complaint.ashx",
    getallthemeUrl: "http://or.momentcam.net/theme/getalltheme.ashx", //获取分类列表
    getresourceUrl: "http://or.momentcam.net/resource/getresource.ashx", //获取素材
    updateSkinColorsURL: "http://172.16.1.47:7000/API/AddOrUpdateComicSkinColors.ashx", //设置肤色
    getSettingsUrl: "http://config.momentcam.net/Json/GetSettings.ashx", //获取肤色色值
    updataMakeUpUrl: "http://172.16.1.47:7000/API/AddOrUpdateAttachments.ashx", //修改美妆
    getFaceUidUrl: "http://172.16.1.47:7000/API/FaceDetection.ashx", //获取faceUID
    fileUploadUrl: "http://imgupload.momentcam.net/api/Image/Upload",
    searchResourceUrl: "http://search.momentcam.net/searchServer/search/search.do", //搜索url
    searchThemeUrl: "http://search.momentcam.net/searchServer/search/relevance.do", //联想词url
    hotSearchUrl: "http://search.momentcam.net/searchServer/search/getHotSearch.do", //热搜词url
    myStudioGetShopByUserIdUrl: "http://121.41.80.48:60000/api/ShopInfos/GetShopInfoByUserId",
    myStuidioProductInfosUrl: 'http://121.41.80.48:60000/api/ProductInfos',
    GetMyPsdWorks: "http://121.41.80.48:9004/api/Art/GetMyPsdWorks", //发布作品

    GetAllRegionCode: "http://121.41.80.48:8083/api/Region/GetAllRegionCode",//获取国家列表

    addusercartoonsorder: "http://121.41.80.48:50000/h5/addusercartoonsorder.ashx",//提交用户购买高清图接口
    getusercartoonsorder: "http://121.41.80.48:50000/h5/getusercartoonsorder.ashx",//获取用户购买的高清图

    HairStyleMatchUrl: "http://172.16.1.47:7000/API/HairStyleMatch.ashx",
    FaceShapeMatchUrl: "http://172.16.1.47:7000/API/FaceShapeMatch.ashx",
    AddSuggessUrl: "http://upload.momentcam.net/suggest/addsuggest.ashx",

    submitVirtualProduct: "http://121.41.80.48:8081/api/Mobile/SubmitVirtualOrder",
    getProductInfo: "http://121.41.80.48:50000/product/getproductinfo.ashx",
    CartoonUrl: 'http://moman-res-ali.momentcam.net/Images/MagicShop/',//漫画大图地址
    CartoonIconUrl: "http://moman-res-ali.momentcam.net/Images/GiftAD/",//漫画图标地址
    searchResourceUrl: "http://search.momentcam.net/searchServer/search/search.do", //搜索url
    searchThemeUrl: "http://search.momentcam.net/searchServer/search/relevance.do", //联想词url
    OrderReturnUrl: "http://172.16.1.14:5555/Pages/Success.html",
    GetUserAddressList: "http://121.41.80.48:8083/api/Addr/GetAddrs",
    digitalCoupon: "http://121.41.80.48:50000/couponcode/usecouponcode.ashx",
    checkCoupon:"http://121.41.80.48:50000/couponcode/checkcode.ashx",
    GetFavoriteUrl: "http://121.41.80.48:58000/Favorite/GetAllFavorites.ashx",
    VirtualID: 424,
    VirtualIDWithC: 444,
    CancelCoupon:"http://121.41.80.48:8081/api/Mobile/CancelCoupon"
}
storage = {
    get: function (key) {
        return window['sessionStorage'].getItem(key);
    },
    set: function (key, value) {
        window['sessionStorage'].setItem(key, value);
    },
    remove: function (key) {
        window['sessionStorage'].removeItem(key);
    }
};
MomentCam.config = {
    platform: 'html:1.0:pc',
    countryCode: 'CN',
    lang: 'zh-cn',
    isSupportWebp: false,
    imageSuffix: "x-oss-process=image/resize,m_lfit,h_100,w_100/format,jpg",
}
MomentCam.skinSetting = { "defaultColorID": 1, "comicSkinColors": [{ "genderColors": { "femaleColor": { "iconRGBColor": "252,211,187", "skinMap": { "face_shade": "178,111,95,98,56,42", "etou": "248,195,167,248,195,167", "pifu": "255,241,232,191,71,0", "face_skin": "255,231,217,252,211,187", "saihong": "245,194,174,245,194,174", "face_sucai": "252,211,187,252,211,187", "face_brow": "0,0,0,182,126,113", "face_eye": "0,0,0,99,62,48", "lip_color": "239,159,144,170,88,83", "lip_shade": "244,181,164,244,181,162", "lip_highlight": "236,141,141,160,60,80" }, "bodyMap": { "pifu": "255,239,229,191,71,0" } }, "maleColor": { "iconRGBColor": "247,203,177", "skinMap": { "face_shade": "178,111,95,98,56,42", "etou": "240,185,158,240,185,158", "pifu": "255,241,232,191,71,0", "face_skin": "255,231,217,247,203,177", "saihong": "243,186,162,243,186,162", "face_sucai": "247,203,177,247,203,177", "face_brow": "0,0,0,182,126,113", "face_eye": "0,0,0,86,53,41", "lip_color": "230,158,146,109,50,42", "lip_shade": "230,158,146,109,50,42", "lip_highlight": "230,158,146,109,50,42" }, "bodyMap": { "pifu": "255,239,229,191,71,0" } } }, "colorID": 1 }, { "genderColors": { "femaleColor": { "iconRGBColor": "244,192,161", "skinMap": { "face_eye": "67,37,24,67,37,24", "face_brow": "120,66,45,120,66,45", "face_sucai": "244,197,169,244,197,169", "saihong": "242,186,164,242,186,164", "etou": "245,188,158,178,111,75", "lip_color": "223,134,116,205,87,75", "face_skin": "255,231,217,244,197,169", "face_shade": "140,67,55,75,33,20" }, "bodyMap": { "pifu": "252,211,187,197,126,82" } }, "maleColor": { "iconRGBColor": "244,192,161", "skinMap": { "face_eye": "0,0,0,86,53,41", "face_brow": "0,0,0,182,126,113", "face_sucai": "244,197,169,244,197,169", "saihong": "242,186,164,242,186,164", "etou": "245,188,158,178,111,75", "lip_color": "230,158,146,109,50,42", "face_skin": "255,231,217,239,191,162", "face_shade": "140,67,55,75,33,20" }, "bodyMap": { "pifu": "252,211,187,192,121,77" } } }, "colorID": 4 }, { "genderColors": { "femaleColor": { "iconRGBColor": "219,163,124", "skinMap": { "face_shade": "140,67,55,75,33,20", "etou": "226,170,136,226,170,136", "pifu": "212,138,88,70,25,0", "face_skin": "255,231,217,235,187,156", "saihong": "229,171,145,229,171,145", "face_sucai": "230,181,150,235,187,156", "face_brow": "0,0,0,120,66,45", "face_eye": "0,0,0,67,37,24", "lip_color": "212,127,111,127,64,61", "lip_shade": "212,127,111,127,64,61", "lip_highlight": "212,127,111,127,64,61" }, "bodyMap": { "pifu": "237,191,161,187,117,72" } }, "maleColor": { "iconRGBColor": "219,163,124", "skinMap": { "face_shade": "140,67,55,75,33,20", "etou": "212,154,119,212,154,119", "pifu": "212,138,88,70,25,0", "face_skin": "255,231,217,227,174,140", "saihong": "212,144,119,212,144,119", "face_sucai": "227,177,145,227,174,140", "face_brow": "0,0,0,120,66,45", "face_eye": "0,0,0,67,37,24", "lip_color": "204,130,100,123,59,36", "lip_shade": "217,138,120,130,55,53", "lip_highlight": "217,138,120,130,55,53" }, "bodyMap": { "pifu": "235,187,156,187,110,72" } } }, "colorID": 2 }, { "genderColors": { "femaleColor": { "iconRGBColor": "184,116,71", "skinMap": { "face_shade": "100,49,29,69,38,29", "etou": "178,111,75,178,111,75", "pifu": "212,138,88,70,25,0", "face_skin": "255,231,217,191,133,93", "saihong": "183,115,73,183,115,73", "face_sucai": "187,128,88,187,128,88", "face_brow": "0,0,0,120,66,45", "face_eye": "0,0,0,67,37,24", "lip_color": "169,100,63,124,40,26", "lip_shade": "173,94,87,99,39,31", "lip_highlight": "86,7,0,86,7,0" }, "bodyMap": { "pifu": "198,139,98,124,67,49" } }, "maleColor": { "iconRGBColor": "184,116,71", "skinMap": { "face_shade": "100,49,29,76,42,32", "etou": "169,110,78,169,110,78", "pifu": "212,138,88,70,25,0", "face_skin": "255,231,217,186,126,89", "saihong": "183,120,73,183,120,73", "face_sucai": "187,128,88,187,128,88", "face_brow": "0,0,0,120,66,45", "face_eye": "0,0,0,67,37,24", "lip_color": "170,97,91,112,60,47", "lip_shade": "170,97,91,112,60,47", "lip_highlight": "170,97,91,112,60,47" }, "bodyMap": { "pifu": "199,136,93,118,61,44" } } }, "colorID": 3 }, { "genderColors": { "femaleColor": { "iconRGBColor": "152,90,47", "skinMap": { "face_eye": "67,37,24,42,21,12", "face_brow": "120,66,45,100,48,28", "face_sucai": "152,90,47,152,90,47", "saihong": "152,82,47,152,82,47", "etou": "136,76,44,136,76,44", "lip_color": "169,85,78,96,34,25", "face_skin": "255,231,217,152,90,47", "face_shade": "89,39,20,75,33,20" }, "bodyMap": { "pifu": "153,91,47,123,65,25" } }, "maleColor": { "iconRGBColor": "152,90,47", "skinMap": { "face_eye": "67,37,24,42,21,12", "face_brow": "120,66,45,100,48,28", "face_sucai": "152,90,47,152,90,47", "saihong": "152,82,47,152,82,47", "etou": "136,76,44,136,76,44", "lip_color": "169,85,78,96,34,25", "face_skin": "255,231,217,152,90,47", "face_shade": "89,39,20,75,33,20" }, "bodyMap": { "pifu": "153,91,47,123,65,25" } } }, "colorID": 5 }], "skinValueThreePoints": [255, 255, 255, 0, 0, 0, 156, 110, 85], "skinValueDetected": [212, 177, 155, 33, 20, 15, 75, 37, 15], "nameToID": { "white": 1, "wheat": 2, "dark": 3 }, "StatusCode": 0, "Description": "" };
try {
    var canvas = document.createElement('canvas');
    MomentCam.config.isSupportWebp = canvas.getContext && canvas.getContext('2d') && canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
} catch (err) {
}
MomentCam.appendWebpForImgUrl = function (imgUrl) {
    if (!imgUrl || !MomentCam.config.isSupportWebp) {
        return imgUrl;
    }
    return imgUrl + '?x-oss-process=image/format,webp';
}

//根据浏览器获取最优的图片地址
MomentCam.getOptimizedImgUrl = function (imgUrl, maxWidth) {
    if (!imgUrl) {
        return imgUrl;
    }
    var param = '?x-oss-process=image/format,' + (MomentCam.config.isSupportWebp ? 'webp' : 'jpg');

    if (maxWidth && maxWidth > 0) {
        param += '/resize,w_' + maxWidth;
    }
    return imgUrl + param;
}
$.ajaxSetup({
    headers: {
        // 默认添加请求头
        'Lang': MomentCam.config.lang,
        'Platform': MomentCam.config.platform,
        'EncryptType': 'NONE'
    }
});
String.prototype.startWith = function (s) {
    if (s == null || s == "" || this.length == 0 || s.length > this.length)
        return false;
    if (this.substr(0, s.length) == s)
        return true;
    else
        return false;
}

String.prototype.endWith = function (s) {
    if (s == null || s == "" || this.length == 0 || s.length > this.length)
        return false;
    if (this.substring(this.length - s.length) == s)
        return true;
    else
        return false;
}


function CallAjax(url, data, callBack) {//请求数据
    jQuery.ajax({
        type: "post",
        async: true,
        url: url,
        data: data,
        cache: false,
        success: function (result) {
            try {
                return callBack(JSON.parse(result));
            } catch (e) {
                return callBack(result);
            }
        },
        error: function (e) {
            throw e.message;
        }
    });
}