var width = 500,
    height = 500;

var cluster = d3.layout.cluster()
    .size([width, height - 200]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) {
        return [d.y, d.x];
    });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(40,0)");



// d3.json("city.json", function(error, root) {



    var nodes = cluster.nodes({
        "name": "中国",
        "children": [{
                "name": "浙江",
                "children": [
                    { "name": "杭州" },
                    { "name": "宁波" },
                    { "name": "温州" },
                    { "name": "绍兴" }
                ]
            },

            {
                "name": "广西",
                "children": [
                    { "name": "桂林" },
                    { "name": "南宁" },
                    { "name": "柳州" },
                    { "name": "防城港" }
                ]
            },

            {
                "name": "黑龙江",
                "children": [
                    { "name": "哈尔滨" },
                    { "name": "齐齐哈尔" },
                    { "name": "牡丹江" },
                    { "name": "大庆" }
                ]
            },

            {
                "name": "新疆",
                "children": [
                    { "name": "乌鲁木齐" },
                    { "name": "克拉玛依" },
                    { "name": "吐鲁番" },
                    { "name": "哈密" }
                ]
            }
        ]
    });
    var links = cluster.links(nodes);

    console.log(nodes);
    console.log(links);

    var link = svg.selectAll(".link")
        .data(links)
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("d", diagonal);

    var node = svg.selectAll(".node")
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.y + "," + d.x + ")";
        })

    node.append("circle")
        .attr("r", 4.5);

    node.append("text")
        .attr("dx", function(d) {
            return d.children ? -8 : 8;
        })
        .attr("dy", 3)
        .style("text-anchor", function(d) {
            return d.children ? "end" : "start";
        })
        .text(function(d) {
            return d.name;
        });
// });
