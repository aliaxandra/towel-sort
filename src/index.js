module.exports = function towelSort (matrix) {

    if (!matrix) {
        return [];
    }

    let arr = [];

    matrix.map(function (item, index) {
        if (index % 2 !== 0) {
            arr.push(item.reverse());
        } else {
            arr.push(item);
        }
    });

    return arr.flat();
}
