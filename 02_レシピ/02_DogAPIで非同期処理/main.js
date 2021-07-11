const imageElement = document.getElementById("dog-image")

//指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() //結果をjsonとして読み込み、次のthenに渡す
  })
  .then((data) => {
    imageElement.src = data.message
  })
