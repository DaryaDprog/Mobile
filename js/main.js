$(function(){
    $(".tabs__option").on("click", function(event) {
        event.preventDefault();
        $(".tabs__option").removeClass("active");
        $(this).addClass("active");
        $(".tabs__panel").removeClass("active");
        $(".tabs__panel").eq($(this).index()).addClass("active");
    });

   $("[data-collapse]").on("click", function(event) {
    $(this).toggleClass("active");
    event.preventDefault();
    var blockId = $(this).data('collapse');
    $(blockId).slideToggle();

});
});