console.log('Iterators');

function myIterator(values) {
    let nextIndex = 0;
    // return an object
    return {
        next: function () {
            if (nextIndex < values.length)
            // return below object
            {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                //return below object
                return {
                    done: true
                }
            }
        }
    }
}
let abc = [1, 2, 3, 4];
console.log(myIterator(abc));
