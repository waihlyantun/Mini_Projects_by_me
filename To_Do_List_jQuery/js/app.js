// value from input
$("#inputBox").change(function() {
    console.log($(this).val());
    $(".box").prepend(
        `<div class="item container">
        <i class="far fa-square"></i>
        <i class="fas fa-check-square d-none"></i>
        <p class="text m-0 col-10">` + $(this).val() + `</p>
        <i class="fas fa-trash"></i>
        </div>`
    );
    $(this).val("");
    });


// delete task

$(".box").on("click",".item .fa-trash",function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
});


// checkbox
$(".box").on("click",".item .fa-square",function(){
    $(this).next().removeClass("d-none");
    $(this).siblings(".text").addClass("completed");
});
$(".box").on("click",".item .fa-check-square",function(){
    $(this).addClass("d-none");
    $(this).siblings(".text").removeClass("completed");
});