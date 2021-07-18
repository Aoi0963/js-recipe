const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    //test()メソッドは、正規表現と指定した文字列がマッチするかを調べます。 trueかfalseを返します。
    if (n % 3 == 0 || /3/.test(n)) {
      console.log(n + "!!!!!!")
    } else {
      console.log(n)
    }
  }
}
genkiFunction(50)
