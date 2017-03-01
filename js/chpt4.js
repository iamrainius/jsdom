/**
 * Created by jing on 2017/3/1.
 */

function showPic(pic) {
    var source =pic.getAttribute("href");
    var placeholder =document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
}
