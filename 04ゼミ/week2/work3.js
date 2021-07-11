const input = document.getElementById("memo-input")
const button = document.getElementById("add-button")
const container = document.getElementById("memo-container")
let memos = []

console.log(JSON.stringify(["aaa", "bbb"]))
console.log(["aaa", "bbb"])
console.log(JSON.parse(JSON.stringify(["aaa", "bbb"])))

if (localStorage.memos) {
  const memosJson = localStorage.memos
  memos = JSON.parse(memosJson)
}
container.innerHTML = ""
for (let i = 0; i < memos.length; i++) {
  const text = memos[i]
  const div = document.createElement("div")
  div.textContent = text
  container.append(div)
}

button.onclick = function() {
  memos.push(input.value)
  localStorage.memos = JSON.stringify(memos)
  console.log(memos)
  container.innerHTML = ""
  for (let i = 0; i < memos.length; i++) {
    const text = memos[i]
    const div = document.createElement("div")
    div.textContent = text
    container.append(div)
  }
}
