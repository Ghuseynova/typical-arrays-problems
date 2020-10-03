exports.min = function min(array) {
    if (arguments.length !== 0 && !Array.isArray(arguments[0])) {
        return Math.min(...Array.from(arguments));
    } else if (Array.isArray(array) && array.length !== 0) {
        return Math.min(...array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (arguments.length !== 0 && !Array.isArray(arguments[0])) {
        return Math.max(...Array.from(arguments));
    } else if (Array.isArray(array) && array.length !== 0) {
        return Math.max(...array);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (arguments.length !== 0 && !Array.isArray(arguments[0])) {
        return (
            Array.from(arguments).reduce((a, b) => a + b, 0) /
            Array.from(arguments).length
        );
    } else if (Array.isArray(array) && array.length !== 0) {
        return array.reduce((a, b) => a + b, 0) / array.length;
    } else {
        return 0;
    }
};
