function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = "1px";
      star.style.height = "1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();

let a="my name"
console.log(a)
a=23
console.log((typeof a))
console.log(a)
a="cars ,colors, people"
console.log((typeof a))
let b= true
console.log(b)
console.log((typeof b))
b=0
console.log(b)
