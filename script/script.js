$(function(){
 

    
    $(document)
    .on('click','.btn_first',function(){
        $(".it1").css({"display":"block"});
        $(".it2").css({"display":"none"});
        $(".it3").css({"display":"none"});
        $(".it4").css({"display":"none"});
        
    })
    .on('click','.btn_second',function(){
        $(".it1").css({"display":"none"});
        $(".it2").css({"display":"block"});
        $(".it3").css({"display":"none"});
        $(".it4").css({"display":"none"});
        
    })
    .on('click','.btn_three',function(){
        $(".it1").css({"display":"none"});
        $(".it2").css({"display":"none"});
        $(".it3").css({"display":"block"});
        $(".it4").css({"display":"none"});
        
    })
    .on('click','.btn_for',function(){
        $(".it1").css({"display":"none"});
        $(".it2").css({"display":"none"});
        $(".it3").css({"display":"none"});
        $(".it4").css({"display":"block"});
        
    })
    
    
    $(document)
    .on('click','.if_btn1',function(){
        $(".if_div1").css({"display":"block"});
        $(".if_div2").css({"display":"none"});
        $(".if_div3").css({"display":"none"});
        
        $(".if_btn1").css({"border":"none"});
        $(".if_btn1").css({"border-top":"1px solid blue"});
        $(".if_btn1").css({"background-color":"rgba(0,0,0,0)"});
        
        $(".if_btn2").css({"border-top":"none"});
        $(".if_btn2").css({"border-left":"1px solid #999999"});
        $(".if_btn2").css({"border-bottom":"1px solid #999999"});
        $(".if_btn2").css({"background-color":"rgba(0,0,0,0.04)"});
        
        $(".if_btn3").css({"border-top":"none"});
        $(".if_btn3").css({"border-bottom":"1px solid #999999"});
        $(".if_btn3").css({"background-color":"rgba(0,0,0,0.04)"});
    })
    .on('click','.if_btn2',function(){
        $(".if_div1").css({"display":"none"});
        $(".if_div2").css({"display":"block"});
        $(".if_div3").css({"display":"none"});
        
        $(".if_btn2").css({"border":"none"});
        $(".if_btn2").css({"border-top":"1px solid blue"});
        $(".if_btn2").css({"background-color":"rgba(0,0,0,0)"});
        
        $(".if_btn1").css({"border-top":"none"});
        $(".if_btn1").css({"border-right":"1px solid #999999"});
        $(".if_btn1").css({"border-bottom":"1px solid #999999"});
        $(".if_btn1").css({"background-color":"rgba(0,0,0,0.04)"});
        
        
        $(".if_btn3").css({"border-top":"none"});
        $(".if_btn3").css({"border-left":"1px solid #999999"});
        $(".if_btn3").css({"border-bottom":"1px solid #999999"});
        $(".if_btn3").css({"background-color":"rgba(0,0,0,0.04)"});
        
    })
    .on('click','.if_btn3',function(){
        $(".if_div1").css({"display":"none"});
        $(".if_div2").css({"display":"none"});
        $(".if_div3").css({"display":"block"});
        
        $(".if_btn3").css({"border":"none"});
        $(".if_btn3").css({"border-top":"1px solid blue"});
        
        $(".if_btn3").css({"background-color":"rgba(0,0,0,0)"});
        $(".if_btn2").css({"border-left":"1px solid #999999"});
        
        $(".if_btn2").css({"border-top":"none"});
        $(".if_btn2").css({"border-right":"1px solid #999999"});
        $(".if_btn2").css({"border-bottom":"1px solid #999999"});
        $(".if_btn2").css({"background-color":"rgba(0,0,0,0.04)"});
        
        $(".if_btn1").css({"border-top":"none"});
        $(".if_btn1").css({"border-bottom":"1px solid #999999"});
        $(".if_btn1").css({"background-color":"rgba(0,0,0,0.04)"});
    })
    
    

})