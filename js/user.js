$(document).ready(function () {
    $(".iconly-Profile").click(function () {
        $("#me").toggleClass("active");
        $(".dropdown-form").toggleClass("active");
    });
    
});
$(document).ready(function () {
    $(".iconly-Buy").click(function () {
        $("#shop").toggleClass("active");
        $(".dropdown-cart").toggleClass("active");
    });
});

