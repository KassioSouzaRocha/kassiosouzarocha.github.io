// Preloader
$(window).on('load', function() {
    $("#preloader").fadeOut();
    $("#preloader").addClass("hide");

});

// Initialize and configure Materilize and JS functions
$(document).ready(function() {

    $(".sidenav").sidenav();
    $(".parallax").parallax();
    $(".modal").modal();
    $(".dropdown-trigger").dropdown();
    $("select").formSelect();
    $(".collapsible").collapsible();
    $(".tooltipped").tooltip();
    $("input.counter, textarea.counter").characterCounter();
    $(".tabs").tabs();
    $(".tap-target").tapTarget();
    $(".scrollspy").scrollSpy();
    $(".datepicker").datepicker({
        format: "dd/mm/yyyy",
        defaultDate: new Date(),
        setDefaultDate: true,
        showClearBtn: true,
        i18n: {
            cancel: "Voltar",
            clear: "Limpar",
            done: "Enviar",
            months: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ],
            monthsShort: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez"
            ],
            weekdays: [
                "Domingo",
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sábado"
            ],
            weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            weekdaysAbbrev: ["D", "S", "T", "Q", "Q", "S", "S"]
        }
    });
    $(".timepicker").timepicker({
        showClearBtn: true,
        twelveHour: false,
        i18n: {
            cancel: "Voltar",
            clear: "Limpar",
            done: "Enviar"
        }
    });
    $(".nav-search-trigger").click(function() {
        if ($("#nav-search").hasClass("scale-out")) {
            $("#nav-search").removeClass("scale-out");
        } else {
            $("#nav-search").addClass("scale-out");
        }
    });
});
