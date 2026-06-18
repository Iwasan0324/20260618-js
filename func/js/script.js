function sayHello() {
  console.log("こんにちは");
}

sayHello();  // 実行結果: こんにちは

function sayHello(name) {
  console.log("こんにちは、" + name)
}

sayHello("太郎")  // ← "太郎" を引数として渡して関数を呼び出す
sayHello("花子")
sayHello("健太")
sayHello("美咲")

// 演習
function callFunc(elm,price){
    const element = document.querySelector(elm);
    element.textContent = "商品の値段は" + price + "円です";
}

callFunc("p#product1", 3000);
callFunc("p#product2", 5000);
callFunc("p#product3", 7000);
callFunc("p#product4", 10000);
callFunc("p#product5", 13000);