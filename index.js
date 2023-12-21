function Switch_off(){
    document.getElementById("bulb-img").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat-img").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switch_status").textContent="Switched Off";
    document.getElementById("switch_off").style.backgroundColor="#cbd2d9";
    document.getElementById("switch_on").style.backgroundColor="#22c55e";
}
function Switch_on(){
    document.getElementById("bulb-img").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat-img").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switch_status").textContent="Switched On";
    document.getElementById("switch_off").style.backgroundColor="#e12d39";
    document.getElementById("switch_on").style.backgroundColor="#cbd2d9";
}