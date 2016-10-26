var dataset = [3, 6, 9, 12, 15];

//选择body中的p元素
var p = d3.select("body").selectAll("p");

//获取update部分
var update = p.data(dataset);

//获取enter部分
var enter = update.enter();

var exit = update.exit();

//update部分的处理：更新属性值
update.text(function(d) {
    return "update " + d;
});

//enter部分的处理：添加元素后赋予属性值
enter.append("p")
    .text(function(d) {
        return "enter " + d;
    });
    
exit.remove()