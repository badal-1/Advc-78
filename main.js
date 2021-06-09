var names = ["My Family","Mother","Father","Me"];
var images = ["https://s-media-cache-ak0.pinimg.com/736x/04/f3/0b/04f30bcd40e07ba3e66d0ed539dc7604--love-my-family-two-brothers.jpg","https://tse2.mm.bing.net/th?id=OIP.WSdplCbWMMvjebZIPqz89QHaLa&pid=Api&P=0&w=300&h=300","https://img.pngio.com/father-png-86-images-in-collection-page-1-father-png-400_750.png","https://tse4.mm.bing.net/th?id=OIP.jXQ4-hZ1yLmWWwLSw8jnOQHaO3&pid=Api&P=0&w=300&h=300"];
var i = 0;
function update() {
i++
var numberoffm = 3;
if(i > numberoffm) {
i = 0;
} 
var updateimg = images[i];
var updatename = names[i];
document.getElementById("image").src = updateimg;
document.getElementById("fam").innerHTML = updatename;
}
