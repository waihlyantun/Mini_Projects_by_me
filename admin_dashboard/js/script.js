feather.replace();


// Menu Aside bar

$(".bi-list").click(function () {
        if ($("body").outerWidth() < 768) {
            $("#menu-list").toggleClass("menu-slide-out");
            if ($("#menu-list").hasClass("menu-slide-out")) {
                $("#menu-list").css("transform", "translateX(-180px)");
            } else {
                $("#menu-list").addClass("full-menu");
                $("#menu-list").removeClass("mini-menu");
                $("#menu-list").css("transform", "translateX(0px)");
                $(".menu-text").removeClass("d-none");
                $("#itemManage").html(`<span>ITEM MANAGEMENT</span>`);
                $("#userManage").html(`<span>USER MANAGEMENT</span>`);
                $("#inventory").html(`<span>INVENTORY</span>`);
                $("#yourProfile").html(`<span>YOUR PROFILE</span>`);
            };
        } else {
            $("#menu-list").css("transform", "translateX(0px)");
            $("#menu-list").toggleClass("full-menu");
            $("#menu-list").toggleClass("mini-menu");
            $(".menu-text").toggleClass("d-none");
            $("#logobarDiv").toggleClass("px-1");
            $("#logobarDiv").toggleClass("px-2");
            if ($("#menu-list").hasClass("full-menu")) {
                $(".side-menu-title").removeClass("title-icon");
            } else {
                $(".side-menu-title").addClass("title-icon");
            };
            if ($(".side-menu-title").hasClass("title-icon")) {
                $(".side-menu-title").html(`<div class="side-menu d-flex align-items-center px-1">
                                                <div class="menu-icon d-flex justify-content-center h5 mb-0">
                                                    <i class="bi bi-three-dots"></i>
                                                </div>
                                            </div>`);
            } else {
                $("#itemManage").html(`<span class="ps-1">ITEM MANAGEMENT</span>`);
                $("#userManage").html(`<span class="ps-1">USER MANAGEMENT</span>`);
                $("#inventory").html(`<span class="ps-1">INVENTORY</span>`);
                $("#yourProfile").html(`<span class="ps-1">YOUR PROFILE</span>`);
            };
        };
    });


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

