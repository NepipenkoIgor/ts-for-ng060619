var toMatrix = function (data, rowSize) {
    var matrix = [];
    for (var i = 0; i < data.length; i += rowSize) {
        matrix.push(data.slice(i, i + rowSize));
    }
    var lastRow = matrix[matrix.length - 1];
    if (lastRow.length < rowSize) {
        for (var i = rowSize - lastRow.length; i > 0; i--) {
            lastRow.push(0);
        }
    }
    console.log('source: ', data);
    return matrix;
};
console.log('matrix: ', toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log('matrix: ', toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
