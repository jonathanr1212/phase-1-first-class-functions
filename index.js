function receivesAFunction(callback) {
    callback();
};

function returnsANamedFunction() {
    return function named() {
        console.log("This is a named function.")
    }
};

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This function doesn't have a name.")
    }
};
