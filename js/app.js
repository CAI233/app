var app =  angular.module('ionicApp', ['ionic']);
app .controller('SlideController', function($scope) {
    $scope.test_show = [
        {"id":"1","src1":"./images/show/img_one1.png","src":"./images/show/img_one.png","text":"偷时点一杯","bg_src":"./images/show/bg_one.png"},
        {"id":"2","src1":"./images/show/img_two1.png","src":"./images/show/img_two.png","text":"偷时看大咖","bg_src":"./images/show/bg_two.png"},
        {"id":"3","src1":"./images/show/img_three1.png","src":"./images/show/img_three.png","text":"偷时做一杯","bg_src":"./images/show/bg_three.png"}
    ]
    $scope.showA = [
        { "id": 0, "img" : "images/1.jpg", "name":"Venkman", "description" : "Back off, man. I'm a scientist.","order":[{"id":"1","img":"./images/order/01.jpg","text":"美式咖啡（热）","count":0,"price":"18.00"},
                                                                                                                        {"id":"2","img":"./images/order/05.jpg","text":"拿铁（热）","count":0,"price":"20.00"},
                                                                                                                        {"id":"3","img":"./images/order/02.jpg","text":"香草拿铁（热）","count":0,"price":"22.00"},
                                                                                                                        {"id":"4","img":"./images/order/03.jpg","text":"棒果拿铁（热）","count":0,"price":"22.00"},
                                                                                                                        {"id":"5","img":"./images/order/04.jpg","text":"卡布奇诺（热）","count":0,"price":"20.00"},
                                                                                                                        {"id":"6","img":"./images/order/05.jpg","text":"摩卡（热）","count":0,"price":"25.00"},
                                                                                                                        {"id":"7","img":"./images/order/06.jpg","text":"焦糖玛奇朵（热）","count":0,"price":"25.00"},
                                                                                                                        {"id":"8","img":"./images/order/07.jpg","text":"单份浓缩意式咖啡（仅食堂）","count":0,"price":"10.00"},
                                                                                                                        {"id":"9","img":"./images/order/03.jpg","text":"双份浓缩意式咖啡（仅食堂）","count":0,"price":"15.00"},
                                                                                                                        {"id":"10","img":"./images/order/01.jpg","text":"美式咖啡（冷）","count":0,"price":"18.00"},
                                                                                                                        {"id":"11","img":"./images/order/05.jpg","text":"拿铁（冷）","count":0,"price":"20.00"},
                                                                                                                        {"id":"12","img":"./images/order/02.jpg","text":"香草拿铁（冷）","count":0,"price":"22.00"},
                                                                                                                        {"id":"13","img":"./images/order/03.jpg","text":"棒果拿铁（冷）","count":0,"price":"22.00"},
                                                                                                                        {"id":"14","img":"./images/order/04.jpg","text":"卡布奇诺（冷）","count":0,"price":"20.00"},
                                                                                                                        {"id":"15","img":"./images/order/05.jpg","text":"摩卡（冷）","count":0,"price":"25.00"},
                                                                                                                        {"id":"16","img":"./images/order/06.jpg","text":"焦糖玛奇朵（冷）","count":0,"price":"25.00"}
                                                                                                                        ] },
        { "id": 1, "img" : "images/2.jpg", "name":"Egon", "description" : "We're gonna go full stream." },
        { "id": 2, "img" : "images/3.jpg", "name":"Ray", "description" : "Ugly little spud, isn't he?" },
        { "id": 3, "img" : "images/4.jpg", "name":"Winston", "description" : "That's a big Twinkie." },
        { "id": 4, "img" : "images/5.jpg", "name":"Tully", "description" : "Okay, who brought the dog?" },
        { "id": 5, "img" : "images/6.png", "name":"Egon", "description" : "We're gonna go full stream." },
        { "id": 6, "img" : "images/7.png", "name":"Dana", "description" : "I am The Gatekeeper!" },
        { "id": 7, "img" : "images/8.png", "name":"Slimer", "description" : "Boo!" },
        { "id": 8, "img" : "images/9.png", "name":"Egon", "description" : "We're gonna go full stream." }
    ]
    $scope.showB =[
        { "id": 0, "img" : "images/img_choose_1.png","description" : "偷时教你选" },
        { "id": 1, "img" : "images/img_choose_2.png","description" : "特色咖啡" },
        { "id": 2, "img" : "images/img_choose_3.png","description" : "拿铁" },
        { "id": 3, "img" : "images/img_choose_4.png","description" : "卡布奇诺" },
        { "id": 4, "img" : "images/img_choose_5.png","description" : "美式" },
        { "id": 5, "img" : "images/img_choose_6.png","description" : "焦糖玛奇朵" }
    ]
    $scope.sec = [
        {"id":"1","name":"coffee","text":"咖啡"},
        {"id":"2","name":"shop","text":"店铺"},
        {"id":"3","name":"supor","text":"大咖"}
    ]
    //
});
//运行坏境搭建
app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
//搭建路由
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("zhuye",{url:"/",templateUrl:"views/zhuye.html",controller:"zhuyecontroller"})
//        主页的搜索二级页面路由
        .state("search",{url:"/search",templateUrl:"views/next_one/search.html",controller:"searchcontroller"})
        .state("address",{url:"/address",templateUrl:"views/next_one/address.html",controller:"addresscontroller"})
        .state("person",{url:"/person/:id",templateUrl:"views/next_one/person.html",controller:"personcontroller"})
//        主页面地址的三级页面路由
        .state("newaddress",{url:"/address/newaddress",templateUrl:"views/next_two/newaddress.html",controller:"newaddresscontroller"})
        .state("shouye",{url:"/shouye",templateUrl:"views/shouye.html",controller:"shouyecontroller"})
        .state("toushi",{url:"/toushi",templateUrl:"views/toushi.html",controller:"toushicontroller"})
        .state("dingdan",{url:"/dingdan",templateUrl:"views/dingdan.html",controller:"dingdancontroller"})
})

//创建控制器
app.controller("zhuyecontroller",function($scope){
    //    轮播分页
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        loop:true,
        autoplay: 2000,
        autoplayDisableOnInteraction:false
    })

    $scope.chang = function(e){
        $("#sec_show>div").eq(e-1).css({"background":"url("+$scope.test_show[e-1].bg_src+")","backgroun-size":"cover","background-position":"center center","color":"white"}).siblings().css({"background":"none","color":"orange"});
        $("#sec_show>div").eq(e-1).children("img").css({"background":"url("+$scope.test_show[e-1].src+")"})
        $("#sec_show>div").eq(e-1).children("p").css("color","white").parent().siblings().children("p").css("color","orange");
        if(e-1==0){
            $(".chang1").show();
            $(".chang2").hide();
            $(".chang3").hide();
        }
        if(e-1==1){
            $(".chang1").hide();
            $(".chang2").show();
            $(".chang3").hide();
        }
        if(e-1==2){
            $(".chang1").hide();
            $(".chang2").hide();
            $(".chang3").show();
        }
    }


    //选一家和点一杯的事件
    $scope.chark = function(e){
        console.log(e);
        $(".button-bar>.button").eq(e).css("background","orange").siblings().css("background","none");
        if(e==0){
            $(".chart1").show();
            $(".chart2").hide();
        }else{
            $(".chart2").show();
            $(".chart1").hide();
        }
    }
})
app.controller("shouyecontroller",function($scope){

})
app.controller("toushicontroller",function($scope){

})
app.controller("dingdancontroller",function($scope){

})
//搜索页面路由
app.controller("searchcontroller",function($scope){
        var chang_i = $("#sec_span>i");
//        var dis_ul
        $scope.chart = function(){
            if($("#sec_span>i").hasClass("ion-arrow-down-b")){
                $("#sec_span>i").removeClass("ion-arrow-down-b").addClass("ion-arrow-up-b");
                $("#sec_ul").show();
            }else{
                $("#sec_span>i").addClass("ion-arrow-down-b").removeClass("ion-arrow-up-b");
                $("#sec_ul").hide();
            }
        }
        $scope.result = "咖啡";
        $scope.change = function(e){
            for(var i=0;i<$scope.sec.length;i++){
                if(e == $scope.sec[i].id){
                    $scope.result = $scope.sec[i].text;
                }
            }
            $("#sec_span>i").addClass("ion-arrow-down-b").removeClass("ion-arrow-up-b");
            $("#sec_ul").hide();
        }
})
//地址页面的路由
app.controller("addresscontroller",function($scope){

})
//修改地址页面的路由
app.controller("newaddresscontroller",function($scope){

})
//person页面路由
app.controller("personcontroller",function($scope,$stateParams){
//        console.log($stateParams.id);
//        console.log($scope.showA);
        for(var i=0;i<$scope.showA.length;i++){
            if($stateParams.id==$scope.showA[i].id){
                $scope.person = $scope.showA[i];
            }
        }
        //计算下标
        var findIndex = function(e){
            var index= 0;
            angular.forEach($scope.showA[0].order,function(v,i){
                if(v.id == e){
                    index = i;

                    return ;
                }
            })
            return index;
            console.log(index);
        }
        //加减数量计算
        $scope.sum = function(e,j){
            console.log(e);
            var m = findIndex(e);
            console.log(m);
            if(j=="min"){
                $scope.showA[0].order[m].count--;
                if($scope.showA[0].order[m].count<0){
//                    alert(1);
                    $scope.showA[0].order[m].count =0;
                }
            }
            if(j=="add"){
                $scope.showA[0].order[m].count++;
            }
        }
        //总数量
//        $scope.counts = 100;
        $scope.counts = function(){
            var total = 0;
            angular.forEach($scope.showA[0].order,function(v){
                total += v.count;
            })
            return total;
        }
        $scope.prices = function(){
            var total = 0;
            angular.forEach($scope.showA[0].order,function(v){
                total += v.count* v.price;
            })
            return total;
        }

})




