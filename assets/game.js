$(document).ready(function(){

    //declarar variables
    var randNumberJava = Math.floor(Math.random()*100)+69;
    var resultJava = 0;
    var winsJava = 0;
    var lossesJava = 0;
    var valueAquaJava;
    var valueCitrineJava;
    var valueGemstoneJava;
    var valueQuartzJava;
    var isGameStart = false;

    function initialize(){
        randNumberJava = Math.floor(Math.random()*100)+69;
        $(".randNumber").text(randNumberJava);
        resultJava = 0;
        valueAquaJava = Math.floor(Math.random()*30);
        valueCitrineJava = Math.floor(Math.random()*30);
        valueGemstoneJava = Math.floor(Math.random()*30);
        valueQuartzJava = Math.floor(Math.random()*30);
        isGameStart = true;
    };

    //Empieza el juego
    initialize();
    



    $(".aquamarine").on("click",function(){
        resultJava = resultJava + valueAquaJava;
        if (resultJava==randNumberJava){
            winsJava = winsJava + 1;
            $(".result").text("You Won!!!");
            initialize();
        }
        if (resultJava>randNumberJava){
            lossesJava = lossesJava +1;
            $(".result").text("You Lost!!!");
            initialize();
        }
        $(".userTotalNumber").text(resultJava);
        $(".wins").text(winsJava);
        $(".losses").text(lossesJava);

        if (resultJava == valueAquaJava){
            $(".result").empty();
        }

    });

    $(".citrine").on("click",function(){
        resultJava = resultJava + valueCitrineJava;
        if (resultJava==randNumberJava){
            winsJava = winsJava + 1;
            $(".result").text("You Won!!!");
            initialize();
        }
        if (resultJava>randNumberJava){
            lossesJava = lossesJava +1;
            $(".result").text("You Lost!!!");
            initialize();
        }
        $(".userTotalNumber").text(resultJava);
        $(".wins").text(winsJava);
        $(".losses").text(lossesJava);

        if (resultJava == valueCitrineJava){
            $(".result").empty();
        }

    });

    $(".gemstone").on("click",function(){
        resultJava = resultJava + valueGemstoneJava;
        if (resultJava==randNumberJava){
            winsJava = winsJava + 1;
            $(".result").text("You Won!!!");
            initialize();
        }
        if (resultJava>randNumberJava){
            lossesJava = lossesJava +1;
            $(".result").text("You Lost!!!");
            initialize();
        }
        $(".userTotalNumber").text(resultJava);
        $(".wins").text(winsJava);
        $(".losses").text(lossesJava);

        if (resultJava == valueGemstoneJava){
            $(".result").empty();
        }

    });

    $(".quartz").on("click",function(){
        resultJava = resultJava + valueQuartzJava;
        if (resultJava==randNumberJava){
            winsJava = winsJava + 1;
            $(".result").text("You Won!!!");
            initialize();
        }
        if (resultJava>randNumberJava){
            lossesJava = lossesJava +1;
            $(".result").text("You Lost!!!");
            initialize();
        }
        $(".userTotalNumber").text(resultJava);
        $(".wins").text(winsJava);
        $(".losses").text(lossesJava);

        if (resultJava == valueQuartzJava){
            $(".result").empty();
        }

    });

});



