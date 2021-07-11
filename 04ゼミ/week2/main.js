const input = document.getElementById("memo-input")
const button = document.getElementById("add-button")
const container = document.getElementById("memo-container")
let memos = []

button.onclick = function() {
  memos.push(input.value)
  console.log(memos)

  container.innerHTML = ""
  for (let i = 0; i < memos.length; i++) {
    const text = memos[i]
    const div = document.createElement("div")
    div.textContent = text
    container.append(div)
  }
}
