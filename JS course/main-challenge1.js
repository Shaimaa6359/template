let titleName = "Shaimaa",
  descriptionMy = "shaimaa is a software engineer",
  dateMy = "2025/8";
let cont = `
<div class = "container">
  <div class="card">
    <h3>hello ${titleName}</h3>
    <p>${descriptionMy}</p>
    <span>${dateMy}</span>
  </div>
</div>`;
// document.write(cont, cont, cont, cont);
document.write(cont.repeat(4));
// let cont = cont.repeat(4);
console.log(cont.repeat(4));
//
