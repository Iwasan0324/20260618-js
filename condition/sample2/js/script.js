function adviseClothing (weather) {
    if (weather === "晴れ") {
        console.log("Tシャツがおすすめ");
    } else if (weather === "雨") {
        console.log("傘を忘れずに");
    } else if (weather === "雪") {
        console.log("コートを着ましょう");
    } else {
        console.log("天気の入力が正しくありません");
    }
}

adviseClothing("雨");