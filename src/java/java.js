/**
 * Created by FERNANDEZGUTJAV on 10/06/2016.
 */
$(document).ready(function () {
    var antes=true, i=true,x=true,xxi=true;
    $("#antes").on("click",function () {
        if(antes==true){
            $("#menu_antes").css("display","block");
            $("#menu_si").css("display","none");
            $("#menu_sx").css("display","none");
            $("#menu_sxx1").css("display","none");
            $(".primeros_siglos").css("display","block");
            $(".mapasi").css("display","none");
            $(".mapasx").css("display","none");
            $(".sxxi").css("display","none");
            antes=false;
            console.log(antes)
        }
        else{
            $("#menu_antes").css("display","none");
            $(".primeros_siglos").css("display","none");
            antes=true;
        }


    });

    $("#i").on("click",function () {
        if(i==true){
            $("#menu_si").css("display","block");
            $(".mapasi").css("display","block");
            $("#menu_antes").css("display","none");
            $("#menu_sx").css("display","none");
            $("#menu_sxx1").css("display","none");
            $(".primeros_siglos").css("display","none");
            $(".mapasx").css("display","none");
            $(".sxxi").css("display","none");
            i=false;
        }
        else{
            $("#menu_si").css("display","none");
            $(".mapasi").css("display","none");
            i=true;
        }

    });

    $("#x").on("click",function () {
        if(x==true){

            $("#menu_sx").css("display","block");
            $(".mapasx").css("display","block");
            $("#menu_antes").css("display","none");
            $("#menu_si").css("display","none");
            $("#menu_sxx1").css("display","none");
            $(".primeros_siglos").css("display","none");
            $(".mapasi").css("display","none");
            $(".sxxi").css("display","none");
            x=false;
            $("#primera").on("click", function () {
                $(".mapasx").css("display","none");
                $(".primera_png").css("display","block");
            })

        }
        else{
            $("#menu_sx").css("display","none");
            $(".mapasx").css("display","none");
            x=true;
        }
    });
    <!--meter para la primera y la segunda guerra-->



    $("#xxi").on("click",function () {
        if(xxi==true){
            $("#menu_sxx1").css("display","block");
            $(".sxxi").css("display","block");
            $("#menu_antes").css("display","none");
            $("#menu_si").css("display","none");
            $("#menu_sx").css("display","none");
            $(".primeros_siglos").css("display","none");
            $(".mapasi").css("display","none");
            $(".mapasx").css("display","none");
            xxi=false;
        }
        else{
            $("#menu_sxx1").css("display","none");
            $(".sxxi").css("display","none");
            xxi=true;
        }

    });
    $("#egipto_enlace").on("click",function () {
        $("#egipto_vs_hicsos_html").css("display","block");
        $("#volver").css("display","block");
        $(".primeros_siglos").css("display","none");
        $("#menu_antes").css("display","none");
        $("#menu").css("display","none");
        $("#volver").on("click",function () {
            $("#egipto_vs_hicsos_html").css("display","none");
            $("#volver").css("display","none");
            $("#menu").css("display","block");
        })
    })

});
