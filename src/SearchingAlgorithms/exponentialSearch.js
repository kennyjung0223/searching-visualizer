export function getExponentialSearch(array, key) {
    let animations = [];
    return [animations, exponentialSearch(array, key, animations)];
}

function exponentialSearch(array, key, animations) {
    if (array[0] === key) {
        animations.push(0);
        return 0;
    }
    let i = 1;
    while (i < array.length - 1 && array[i] <= key) {
        i = i * 2;
    }
    return binarySearch(array, i/2, Math.min(i, array.length - 1), key, animations);
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
