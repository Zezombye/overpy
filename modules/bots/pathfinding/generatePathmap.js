
function vect(x,y,z) {
    return ({
        x:x,
        y:y,
        z:z,
        toString: function() {
            return "vect("+this.x+","+this.y+","+this.z+")";
        }
    });
}

var mapNodeData = {
    "necropolis": {
        nodePositions: [vect(26.784, 1, 3.753), vect(26.896, 1, -3.445), vect(18.764, 1, -8.856), vect(18.792, -2, -0.038), vect(19.073, 1, 8.691), vect(12.551, 1.001, -4.252), vect(12.624, 1.004, 3.835), vect(12.923, -3.891, -0.063), vect(3.674, -6, -0.065), vect(12.685, 1.003, -11.521), vect(5.273, 1.007, -11.493), vect(5.356, 1.003, -4.035), vect(5.32, 1.004, 4.264), vect(5.196, 1.007, 11.865), vect(12.686, 1.003, 12.028), vect(17.426, 1, 13.574), vect(21.459, 1, 12.36), vect(29.822, 5.012, 21.441), vect(23.989, 5.012, 27.429), vect(17.285, 1, -13.813), vect(-4.868, 1.005, 4.852), vect(-4.676, 1.006, 12.001), vect(-11.891, 1.002, 12.442), vect(-12.012, 1.002, 4.843), vect(-12.276, 1.004, -5.083), vect(-4.984, 1.007, -5.206), vect(-4.935, 1.006, -11.808), vect(-11.931, 1.002, -11.828), vect(-16.753, 2.064, -0.189), vect(-22.771, 3, 0.009), vect(-23.288, 3, -5.707), vect(-23.272, 3, 5.719), vect(-32.086, 2, 6.225), vect(-31.92, 1.998, -5.993), vect(-31.816, 3, -13.929), vect(-37.703, 3, 0.139), vect(-47.975, 5, 0.11), vect(-47.636, 6, -5.146), vect(-47.404, 6, 5.096), vect(-39.345, 9, 5.897), vect(-34.947, 9, 5.957), vect(-34.897, 9, -6.09), vect(-39.295, 9, -5.982), vect(-35.119, 9, 0.043), vect(-28.769, 9, -0.008), vect(-28.783, 9, 5.632), vect(-28.721, 9, -5.706), vect(-20.466, 10.978, -7.424), vect(-20.307, 10.978, 7.699), vect(-32.051, 3, 13.156), vect(-25.255, 4.643, 27.042), vect(-12.301, 3.01, 23.05), vect(-24.34, 1.562, 14.563), vect(-12.818, 1, 15.27), vect(-16.479, 3.018, 22.829), vect(-25.779, 3.608, 23.021), vect(-17.504, 7.287, 26.544), vect(-12.966, 7.287, 26.442), vect(-9.579, 8.326, 26.39), vect(0.943, 10.02, 26.109), vect(-5.539, 8.336, 16.335), vect(16.055, 8.297, 21.721), vect(13.771, 8.299, 15.282), vect(9.799, 10.021, 25.25), vect(7.708, 10.029, 21.063), vect(6.068, 10.604, 15.443), vect(0.737, 11.516, 15.585), vect(10.282, 3.001, 20.943), vect(-7.561, 3.002, 22.989), vect(0.996, 3.003, 22.301), vect(22.355, 1.001, -12.59), vect(29.012, 5.012, -22.207), vect(24.027, 5.012, -27.688), vect(15.849, 8.296, -21.149), vect(13.939, 8.298, -15.263), vect(10.078, 10.021, -24.604), vect(7.369, 10.032, -21.054), vect(5.598, 10.604, -15.32), vect(1.389, 10.021, -26.009), vect(-12.238, 3.009, -22.92), vect(-25.729, 4.817, -27.695), vect(-24.449, 1.564, -14.44), vect(-24.582, 3.525, -23.054), vect(-16.702, 3.02, -23.118), vect(-13.324, 1, -15.874), vect(-17.012, 7.287, -26.972), vect(-9.313, 8.326, -26.972), vect(-5.306, 8.337, -16.431), vect(-4.847, 8.286, -25.847), vect(-0.514, 10.604, -15.604), vect(-9.424, 10.611, -16.506), vect(-9.042, 10.611, 16.156), vect(-12.815, 7.287, -27.191), vect(-32.036, 9.471, -11.162), vect(-25.648, 9.515, -11.561), vect(-25.533, 9.516, 11.526), vect(-32.118, 9.509, 11.669), vect(-33.003, 2, 0.177), vect(-16.356, -4.002, -0.133), vect(-3.758, -6, -0.026), vect(-16.532, 1, 13.111), vect(-16.514, 1, -13.054)],
        nodeConnections: [[1, 4, 6, 15, 16], [0, 2, 5, 19, 70], [1, 3, 5, 7, 9, 10, 19, 70], [2, 4, 7, 16], [0, 3, 6, 7, 12, 13, 14, 15, 16], [2, 1, 3, 4, 6, 7, 8, 9, 11, 12, 19, 70], [4, 0, 2, 3, 5, 7, 8, 11, 12, 14, 15, 16], [3, 8], [7], [2, 5, 3, 7, 10, 19, 70], [2, 9, 8, 11, 19, 25, 26], [5, 6, 10, 3, 7, 8, 12, 26, 99], [4, 5, 6, 11, 3, 7, 8, 13, 21, 99], [4, 12, 8, 14, 15, 21], [4, 6, 13, 3, 7, 15, 16], [0, 4, 6, 13, 14, 3, 16, 67], [0, 4, 6, 14, 15, 3, 17, 67], [16, 18], [17, 61], [1, 2, 5, 9, 10, 3, 70], [13, 21, 23, 24, 25, 28, 99], [13, 20, 12, 22, 53, 99, 100], [21, 23, 28, 51, 52, 53, 54, 100], [20, 22, 24, 25, 28, 29, 53, 99, 100], [20, 23, 25, 27, 28, 84, 99, 101], [20, 23, 24, 8, 10, 26, 99], [10, 25, 11, 27, 84, 99, 101], [24, 26, 28, 79, 81, 83, 84, 101], [20, 22, 23, 24, 25, 27, 29, 100, 101], [28, 23, 30, 31], [29, 31, 33], [29, 30, 32], [31, 33, 35, 49, 97], [32, 30, 34, 35, 97], [33, 81, 82, 97], [32, 33, 36, 97], [35, 37, 38], [36, 38, 42], [36, 37, 39], [38, 40, 45, 95], [39, 38, 41, 43, 44, 45, 48, 49, 95, 96, 97], [40, 34, 37, 42, 43, 44, 46, 47, 93, 94, 97], [41, 37, 46, 94], [40, 41, 44, 45, 46, 49, 93, 94, 95, 96, 97], [40, 41, 43, 45, 46, 47, 48, 49, 93, 94, 95, 96, 97], [39, 40, 44, 43, 46, 48, 49, 52, 95, 96, 97], [41, 42, 44, 45, 34, 43, 47, 81, 93, 94, 97], [24, 27, 28, 41, 44, 46, 84, 93, 101], [22, 23, 28, 40, 44, 45, 53, 100], [32, 52, 55, 97], [52, 54, 55, 56, 57], [22, 53, 54, 55, 68, 69, 100], [22, 49, 50, 53, 55, 100], [21, 22, 23, 51, 52, 54, 100], [51, 22, 53, 55, 68, 100], [50, 49, 51, 52, 54, 100], [50, 51, 52, 53, 54, 55, 57, 58, 100], [56, 50, 51, 53, 54, 55, 58, 59], [57, 51, 53, 54, 56, 59, 60], [57, 58, 60, 63, 64, 65, 66], [58, 20, 21, 22, 59], [14, 15, 18, 62, 63, 64], [61, 4, 6, 13, 14, 15, 16, 64], [59, 61, 62, 64, 65, 66], [59, 63, 13, 60, 61, 62, 65, 66], [12, 13, 14, 15, 21, 59, 60, 61, 62, 63, 64, 66], [13, 21, 59, 60, 62, 63, 64, 65, 91], [15, 16, 69], [51, 54, 69], [51, 67, 68], [1, 2, 5, 9, 19, 3, 71], [70, 72], [71, 73], [2, 9, 19, 72, 74, 75, 76], [73, 2, 5, 9, 10, 19, 70, 75, 76], [73, 74, 76, 77, 78], [75, 10, 73, 74, 77, 78, 87, 88, 88], [9, 10, 11, 26, 73, 74, 75, 76, 78, 87, 89], [75, 76, 77, 86, 87, 88, 89, 92], [27, 82, 83, 84, 101], [81, 82, 83, 85, 92], [27, 34, 80, 82, 84, 101], [80, 34, 79, 81, 83, 84, 101], [79, 27, 82, 84, 101], [24, 26, 27, 79, 81, 83, 101], [79, 80, 82, 83, 84, 86, 88, 92], [78, 79, 83, 84, 85, 87, 88, 92, 92], [86, 25, 26, 27, 88], [86, 87, 76, 78, 79, 83, 84, 85, 92], [77, 10, 25, 26, 74, 75, 76, 78, 86, 87, 88, 90], [26, 27, 79, 83, 84, 86, 87, 88, 89, 101], [21, 22, 51, 53, 54, 58, 59, 60, 66, 100], [85, 88, 78, 79, 80, 82, 83, 84, 86], [34, 41, 43, 44, 46, 47, 81, 94, 97, 94], [34, 41, 42, 43, 44, 46, 81, 82, 93, 101], [39, 40, 43, 44, 45, 49, 52, 55, 96, 100], [95, 40, 43, 44, 45, 49, 52, 55, 97], [32, 33, 34, 35, 49], [99, 100, 101], [98], [21, 22, 53, 51, 52, 98], [26, 27, 84, 79, 81, 83, 98]],
    },
    "workshopIsland": {
        nodePositions: [vect(-13.791, 0, 14.018), vect(-10.428, 0, 5.54), vect(-9.136, 0, 10.537), vect(-9.47, 0, -1.598), vect(-6.991, 0, 4.102), vect(-2.33, 0, 5.736), vect(-1.982, 0, 9.652), vect(-1.791, 0, 13.24), vect(1.076, 0, 14.206), vect(3.634, 0, 10.997), vect(3.811, 0, 5.626), vect(3.544, 0, 2.339), vect(0.578, 0, -1.241), vect(-4.212, 0, -0.764), vect(-5.939, 0, -6.502), vect(-7.347, 0, -15.126)],
        nodeConnections: [[1, 2, 4, 5, 6, 7, 8], [0, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14], [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 13], [1, 2, 4, 5, 6, 11, 12, 13, 14, 15], [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14], [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13], [0, 1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 13], [0, 1, 2, 4, 5, 6, 7, 9, 10, 11], [2, 4, 5, 6, 7, 8, 10, 11, 12, 13], [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13], [1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14], [1, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14], [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 14, 15], [1, 3, 4, 5, 11, 12, 13, 15], [3, 13, 14]],

    }
}

function distance(a, b) {
    return Math.sqrt(Math.pow(a.x-b.x, 2) + Math.pow(a.y-b.y, 2) + Math.pow(a.z-b.z, 2));
}

var nodeData = mapNodeData["necropolis"];
const MAX_NODES = nodeData.nodePositions.length

var map = {}
for (var i = 0; i < nodeData.nodePositions.length; i++) {
    map[i] = {};
    for (var j = 0; j < nodeData.nodeConnections[i].length; j++) {
        map[i][nodeData.nodeConnections[i][j]] = distance(nodeData.nodePositions[i], nodeData.nodePositions[nodeData.nodeConnections[i][j]]);
    }
}

console.log(map);

var Graph = (function (undefined) {

	var extractKeys = function (obj) {
		var keys = [], key;
		for (key in obj) {
		    Object.prototype.hasOwnProperty.call(obj,key) && keys.push(key);
		}
		return keys;
	}
	var sorter = function (a, b) {
		return parseFloat (a) - parseFloat (b);
	}
	var findPaths = function (map, start, end, infinity) {
		infinity = infinity || Infinity;

		var costs = {},
		    open = {'0': [start]},
		    predecessors = {},
		    keys;

		var addToOpen = function (cost, vertex) {
			var key = "" + cost;
			if (!open[key]) open[key] = [];
			open[key].push(vertex);
		}

		costs[start] = 0;

		while (open) {
			if(!(keys = extractKeys(open)).length) break;

			keys.sort(sorter);

			var key = keys[0],
			    bucket = open[key],
			    node = bucket.shift(),
			    currentCost = parseFloat(key),
			    adjacentNodes = map[node] || {};

			if (!bucket.length) delete open[key];

			for (var vertex in adjacentNodes) {
			    if (Object.prototype.hasOwnProperty.call(adjacentNodes, vertex)) {
					var cost = adjacentNodes[vertex],
					    totalCost = cost + currentCost,
					    vertexCost = costs[vertex];

					if ((vertexCost === undefined) || (vertexCost > totalCost)) {
						costs[vertex] = totalCost;
						addToOpen(totalCost, vertex);
						predecessors[vertex] = node;
					}
				}
			}
		}
		if (costs[end] === undefined) {
			return null;
		} else {
			return predecessors;
		}

	}
	var extractShortest = function (predecessors, end) {
		var nodes = [],
		    u = end;

		while (u !== undefined) {
			nodes.push(u);
			u = predecessors[u];
		}

		nodes.reverse();
		return nodes;
	}
	var findShortestPath = function (map, nodes) {
		var start = nodes.shift(),
		    end,
		    predecessors,
		    path = [],
		    shortest;

		while (nodes.length) {
			end = nodes.shift();
			predecessors = findPaths(map, start, end);

			if (predecessors) {
				shortest = extractShortest(predecessors, end);
				if (nodes.length) {
					path.push.apply(path, shortest.slice(0, -1));
				} else {
					return path.concat(shortest);
				}
			} else {
				return null;
			}

			start = end;
		}
	}
	var toArray = function (list, offset) {
		try {
			return Array.prototype.slice.call(list, offset);
		} catch (e) {
			var a = [];
			for (var i = offset || 0, l = list.length; i < l; ++i) {
				a.push(list[i]);
			}
			return a;
		}
	}
	var Graph = function (map) {
		this.map = map;
	}
	Graph.prototype.findShortestPath = function (start, end) {
		if (Object.prototype.toString.call(start) === '[object Array]') {
			return findShortestPath(this.map, start);
		} else if (arguments.length === 2) {
			return findShortestPath(this.map, [start, end]);
		} else {
			return findShortestPath(this.map, toArray(arguments));
		}
	}
	Graph.findShortestPath = function (map, start, end) {
		if (Object.prototype.toString.call(start) === '[object Array]') {
			return findShortestPath(map, start);
		} else if (arguments.length === 3) {
			return findShortestPath(map, [start, end]);
		} else {
			return findShortestPath(map, toArray(arguments, 1));
		}
	}
	return Graph;
})();



var alphabet = [];

for (var i = 0; i < MAX_NODES+3; i++) {
    if (i === 0) {
        continue;
    }
    if (String.fromCharCode(i) == "{") {
        continue;
    }
    if (String.fromCharCode(i) == "\r") {
        continue;
    }
    alphabet.push(String.fromCharCode(i));
}

var graph = new Graph(map);

var data = [];
for (var i = 0; i < MAX_NODES; i++) {
    nodeData = []
    for (var j = 0; j < MAX_NODES; j++) {
        var nodeToTake = parseInt(graph.findShortestPath(i, j)[1]);
        if (isNaN(nodeToTake)) {
            nodeToTake = i;
        }
        nodeData.push(nodeToTake);
    }
    data.push(nodeData);
}
console.log(data);

var strData = [];
for (var i = 0; i < MAX_NODES; i++) {
    strData[2*i] = "";
    strData[2*i+1] = "";
    for (var j = 0; j < 75; j++) {
        strData[2*i] += alphabet[data[i][j]];
        strData[2*i+1] += alphabet[data[i][j+75]];
    }
}

result = `
globalvar alphabet = [${alphabet.map(x => JSON.stringify(x).replace(/\\t/g, "\\u0009").replace(/\\b/g, "\\u0008").replace(/\\f/g, "\\u000c"))}]
globalvar testStr = ${JSON.stringify(alphabet.join("")).replace(/\\t/g, "\\u0009").replace(/\\b/g, "\\u0008").replace(/\\f/g, "\\u000c")}

globalvar data = ${JSON.stringify(strData).replace(/\\t/g, "\\u0009").replace(/\\b/g, "\\u0008").replace(/\\f/g, "\\u000c")}
`