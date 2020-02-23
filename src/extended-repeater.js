module.exports = function repeater(str, options) {
    str += repeat(
        options.addition === null ? 'null' : options.addition,
        options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes,
        options.additionSeparator === undefined ? '+' : options.additionSeparator
    );
    return repeat(
        str,
        options.repeatTimes === undefined ? 1 : options.repeatTimes,
        options.separator === undefined ? '+' : options.separator
    );
};

let repeat = function (str, repeatCount, separator) {
    if (str != undefined) {
        return (str + separator).repeat(repeatCount - 1) + str;
    } else {
        return '';
    }
}