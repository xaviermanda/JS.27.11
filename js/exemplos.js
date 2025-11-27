$("#alternar1").show();
$("#alternar2").hide();
$("#alternar3").hide();
$("#alternar4").hide();

$("#alternar1").click(function () {
    $("#link").attr({
        "href": "https://www.cps.sp.gov.br/",
        "title": "CPS"
    });
    $("#link").text("Centro Paula Souza");

    $("#alternar1").hide();
    $("#alternar2").show();
});


$("#alternar2").click(function () {
    $("#link").attr({
        "href": "https://etecitu.cps.sp.gov.br/",
        "title": "Etec Martinho Di Ciero"
    });
    $("#link").text("Etec Martinho Di Ciero");

    $("#alternar2").hide();
    $("#alternar3").show();
});


$("#alternar3").click(function () {
    $("#link").attr({
        "href": "https://fatecitu.cps.sp.gov.br/",
        "title": "Fatec Itu"
    });
    $("#link").text("Fatec Itu");

    $("#alternar3").hide();
    $("#alternar4").show();
});


$("#alternar4").click(function () {
    $("#link").attr({
        "href": "https://www.saopaulo.sp.gov.br/",
        "title": "Governo de São Paulo"
    });
    $("#link").text("Governo do Estado de São Paulo");

    $("#alternar4").hide();
    $("#alternar1").show();
});

