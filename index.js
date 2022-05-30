$("input[type='checkbox']").click(function() {

    $("body").toggleClass("dark")
    $(".card").toggleClass("card-dark")
    $(".content").toggleClass("content-dark");
})