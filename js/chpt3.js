/**
 * Created by jing on 2017/2/23.
 */
alert(typeof document.getElementById("purchases"));
alert(document.getElementsByTagName("li").length);
var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
    alert(typeof items[i]);
}

alert(document.getElementsByTagName("*").length);

