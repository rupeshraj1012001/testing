let food = [
{
    title:"biriyani",
    price:300,
    type:"chicken"

},
{
    title:"panir",
    price:250,
    type:"butter"
},
{
    title:"drunken prawns",
    price:500,
    type:"wine"
}


]
food.map((x)=>{
    console.log("The food is ",x.title,"which cost is ",x.price," and type is ",x.type);
})

let res = food.filter((x)=>{
    return x.price>250
})
console.log(res);

let result = food.reduce((sum,x)=>{
    return sum += x.price
},0)
console.log(result);
