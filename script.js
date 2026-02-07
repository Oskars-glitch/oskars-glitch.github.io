// basic interaction
const btn = document.querySelector("#btn");
const out = document.querySelector("#out");
btn.addEventListener("click", () => {
  out.textContent = "Hello! You just used JavaScript on your website.";
});

// ===== OPTION A: p5.js =====
// 1) Uncomment the p5.js script tag in index.html
// 2) Uncomment this block
new p5((p) => {
  p.setup = () => {
    const c = p.createCanvas(980, 240);
    c.parent("sketch");
  };
  p.draw = () => {
    p.background(10);
    p.noStroke();
    p.circle(p.mouseX, p.mouseY, 40);
  };
});

// ===== OPTION B: A-Frame =====
// 1) Uncomment the A-Frame script tag in index.html
// 2) Replace the #sketch div content with an <a-scene> by uncommenting below
document.querySelector("#sketch").innerHTML = `
<a-scene embedded style="height:280px">
  <a-assets>
    <a-asset-item id="tree" src="a.glb"></a-asset-item>
  </a-assets>

  <a-entity gltf-model="#tree" size=".2 .2 .2"></a-entity>
</a-scene>
`;
