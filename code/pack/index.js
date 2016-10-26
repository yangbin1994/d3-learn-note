	var width = 500;
	var height = 500;

	var pack = d3.layout.pack()
	    .size([width, height])
	    .radius(20);

	var svg = d3.select("body").append("svg")
	    .attr("width", width)
	    .attr("height", height)
	    .append("g")
	    .attr("transform", "translate(0,0)");


	// d3.json("city2.json", function(error, root) {

	var nodes = pack.nodes({
	    "name": "中国",
	    "children": [{
	        "name": "浙江",
	        "children": [
	            { "name": "杭州" },
	            { "name": "宁波" },
	            { "name": "温州" },
	            { "name": "绍兴" }
	        ]
	    }, {
	        "name": "广西",
	        "children": [
	            { "name": "桂林" },
	            { "name": "南宁" },
	            { "name": "柳州" },
	            { "name": "防城港" }
	        ]
	    }, {
	        "name": "黑龙江",
	        "children": [
	            { "name": "哈尔滨" },
	            { "name": "齐齐哈尔" },
	            { "name": "牡丹江" },
	            { "name": "大庆" }
	        ]
	    }, {
	        "name": "新疆",
	        "children": [
	            { "name": "乌鲁木齐" },
	            { "name": "克拉玛依" },
	            { "name": "吐鲁番" },
	            { "name": "哈密" }
	        ]
	    }, {
	        "name": "河北",
	        "children": [
	            { "name": "石家庄" },
	            { "name": "唐山" },
	            { "name": "邯郸" },
	            { "name": "秦皇岛" }
	        ]
	    }, {
	        "name": "西藏",
	        "children": [
	            { "name": "拉萨" },
	            { "name": "昌都" },
	            { "name": "林芝" }
	        ]
	    }, {
	        "name": "江苏",
	        "children": [
	            { "name": "南京" },
	            { "name": "无锡" },
	            { "name": "徐州" },
	            { "name": "常州" },
	            { "name": "连云港" },
	            { "name": "淮安" }
	        ]
	    }, {
	        "name": "江苏",
	        "children": [
	            { "name": "南京" },
	            { "name": "无锡" },
	            { "name": "徐州" },
	            { "name": "常州" },
	            { "name": "连云港" },
	            { "name": "淮安" }
	        ]
	    }, {
	        "name": "湖南",
	        "children": [
	            { "name": "长沙" },
	            { "name": "株洲" },
	            { "name": "湘潭" },
	            { "name": "衡阳" },
	            { "name": "邵阳" },
	            { "name": "岳阳" }
	        ]
	    }, {
	        "name": "海南",
	        "children": [
	            { "name": "海口" },
	            { "name": "三亚" },
	            { "name": "三沙" }
	        ]
	    }, {
	        "name": "陕西",
	        "children": [
	            { "name": "西安" },
	            { "name": "咸阳" },
	            { "name": "汉中" },
	            { "name": "安康" },
	            { "name": "榆林" },
	            { "name": "延安" }
	        ]
	    }, {
	        "name": "甘肃",
	        "children": [
	            { "name": "兰州" },
	            { "name": "酒泉" },
	            { "name": "金昌" },
	            { "name": "天水" },
	            { "name": "嘉峪关" },
	            { "name": "武威" }
	        ]
	    }]
	});
	var links = pack.links(nodes);

	console.log(nodes);
	console.log(links);

	svg.selectAll("circle")
	    .data(nodes)
	    .enter()
	    .append("circle")
	    .attr("fill", "rgb(31, 119, 180)")
	    .attr("fill-opacity", "0.4")
	    .attr("cx", function(d) {
	        return d.x;
	    })
	    .attr("cy", function(d) {
	        return d.y;
	    })
	    .attr("r", function(d) {
	        return d.r;
	    })
	    .on("mouseover", function(d, i) {
	        d3.select(this)
	            .attr("fill", "yellow");
	    })
	    .on("mouseout", function(d, i) {
	        d3.select(this)
	            .attr("fill", "rgb(31, 119, 180)");
	    });

	svg.selectAll("text")
	    .data(nodes)
	    .enter()
	    .append("text")
	    .attr("font-size", "10px")
	    .attr("fill", "white")
	    .attr("fill-opacity", function(d) {
	        if (d.depth == 2)
	            return "0.9";
	        else
	            return "0";
	    })
	    .attr("x", function(d) {
	        return d.x;
	    })
	    .attr("y", function(d) {
	        return d.y;
	    })
	    .attr("dx", -12)
	    .attr("dy", 1)
	    .text(function(d) {
	        return d.name;
	    });

	// });
