//const genkiFunction = function(number) {
for (let n = 1; n <= 100; n++) {
  //test()メソッドは、正規表現と指定した文字列がマッチするかを調べます。 trueかfalseを返します。
  if (n % 3 == 0 || /3/.test(n)) {
    let id = setInterval(function() {
      console.log(n + "!!!!!!")
      clearInterval(id)
    }, n * 1000)
  } else {
    let id2 = setInterval(function() {
      console.log(n)
      clearInterval(id2)
    }, n * 1000)
  }
}
//}
//genkiFunction()

//let id = setInterval(genkiFunction, 10)
//clearInterval(id)
