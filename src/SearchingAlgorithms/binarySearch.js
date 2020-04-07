export function getBinarySearch(array, key) {
    let animations = [];
    return [animations, binarySearch(array, 0, array.length - 1, key, animations)];
}

function binarySearch(array, low, high, key, animations) {
    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        animations.push(mid);

        if (array[mid] === key) {
            return mid;
        }
        else if (array[mid] < key) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}