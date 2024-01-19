const totalSpent=parseFloat(prompt("enter the sum of your total spent pls: "))
const payment=parseFloat(prompt("enter the sum of your purchase today pls: "))
let discount=parseFloat(0)
if ((totalSpent+payment)<100){
    discount=0
} else if((totalSpent+payment)>=100 && (totalSpent+payment)<1000 ){
    discount=2
} else if((totalSpent+payment)>=1000 && (totalSpent+payment)<5000 ){
    discount=5
} else if((totalSpent+payment)>=5000 ){
    discount=10
}
let result=parseFloat(payment-(payment*(discount*0.01)))
console.log("Сума вашого замовлення без знижки: ", payment);
console.log("Сума вашого замовлення зі знижкою: ", result);
console.log("Ваша знижка: ", discount, "%");