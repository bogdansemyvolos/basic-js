module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        applyDouble(arr);
        applyDiscard(arr);
        return arr;
    } else {
        throw new Error();
    }
};

let applyDouble = function (array) {
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case '--double-next':
                if(array[i + 1] === undefined) { array.splice(i, 1); i-=1; } else { array.splice(i, 1, array[i + 1]); i+=1; }
                break;
            case '--double-prev':
                if(array[i - 1] === undefined) { array.splice(i, 1); i-=1; } else { array.splice(i, 1, array[i - 1]) }
                break;
        }
    }
}

let applyDiscard = function (array) {
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case '--discard-next':
                if(array[i + 1] === undefined) { array.splice(i, 1); i-=1; } else { array.splice(i, 2); i-=1; }
                break;
            case '--discard-prev':
                if(array[i - 1] === undefined) { array.splice(i, 1); i-=1; } else { array.splice(i - 1, 2); i-=2;}
                break;
        }
    }
}