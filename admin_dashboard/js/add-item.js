const types = ["Hot Drinks", "Cold Drinks", "Cake"];

const category = [
    {name: "Tea", type: 0},
    {name: "Coffee", type: 0},
    {name: "Juices", type: 1},
    {name: "Milkshakes", type: 1},
    {name: "Butter Cakes", type: 2},
    {name: "Foam Cakes", type: 2}
];

const subcategory = [
    {name: "Black Tea", categoryId: 0},
    {name: "Green Tea", categoryId: 0},
    {name: "Herbal Tea", categoryId: 0},
    {name: "Black Coffee", categoryId: 1},
    {name: "Cappuccino", categoryId: 1},
    {name: "Espresso", categoryId: 1},
    {name: "Americano", categoryId: 1},
    {name: "Apple Juice", categoryId: 2},
    {name: "Orange Juice", categoryId: 2},
    {name: "Carrot Juice", categoryId: 2},
    {name: "Avocado Juice", categoryId: 2},
    {name: "Chocolate Milkshake", categoryId: 3},
    {name: "Strawberry Milkshake", categoryId: 3},
    {name: "Waves Butter Cake", categoryId: 4},
    {name: "American Butter Cake", categoryId: 4},
    {name: "Milk Foam Cake", categoryId: 5},
    {name: "Chocolate Foam Cake", categoryId: 5}
];

types.map(function(el,index){
    $("#itemType").append(`<option value="${index}">${el}</option>`);
});

category.map(function(el,index){
    $("#category").append(`<option value="${index}" typeNo="${el.type}">${el.name}</option>`);
});

subcategory.map(function(el,index){
    $("#subCategory").append(`<option value="${index}" categoryNo="${el.categoryId}">${el.name}</option>`);
});

$("#itemType").on("change",function(){
    let typeValue = $(this).val();
    $("#category option").hide();
    $(`[typeNo=${typeValue}]`).show();
});

$("#category").on("change",function(){
    let categoryValue = $(this).val();
    $("#subCategory option").hide();
    $(`[categoryNo=${categoryValue}]`).show();
});