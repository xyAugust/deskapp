var fs = require("fs");

// 获取按钮和容器的DOM节点
var content = document.getElementById('content'),button = document.getElementById('btn');

/**
 * 注册按钮点击事件
 * 当按钮点击的时候读取当前目录下的 1.text
 * 之后将里面的内容放到content 之中
 */
button.addEventListener('click', (e) => {
    fs.readFile('package.json', 'utf8', function (err, data) {
        content.innerText = data;
    });
});