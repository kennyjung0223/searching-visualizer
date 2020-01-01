export function getLinearSearch(array, key) {
    let animations = [];
    return [animations, linearSearch(array, key, animations)];
}

function linearSearch(array, key, animations) {
    let index;

    for (let i = 0; i < array.length; i++) {
        animations.push(i);
        console.log(i);

        if (array[i] === key) {
            index = i;
            return index;
        }
    }
    return -1;
}