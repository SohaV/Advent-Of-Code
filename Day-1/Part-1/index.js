var arr1 = [3, 4, 2, 1, 3, 3];
var arr2 = [4, 3, 5, 3, 9, 3];
arr1.sort(function (a, b) { return a - b; });
arr2.sort(function (a, b) { return a - b; });
var totalDistance = 0;
for (var i = 0; i < arr1.length; i++) {
    var distance = Math.abs(arr1[i] - arr2[i]);
    totalDistance += distance;
}
console.log("Total Distance: ", totalDistance);
