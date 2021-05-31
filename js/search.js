$(document).ready(function () {
    $(".iconly-Search").click(function () {
        $("#search").toggleClass("active");
        $("input[type='text']").toggleClass("active");
    });
});