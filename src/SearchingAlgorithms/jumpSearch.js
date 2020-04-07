export function getJumpSearch(array, key) {
    let animations = [];
    return [animations, jumpSearch(array, key, animations)];
}

function jumpSearch(array, key, animations) {
    let n = array.length;
    let step = parseInt(Math.sqrt(n));
    let prev = 0;
    animations.push(prev);

    while (array[Math.min(step, n) - 1] < key) {
        prev = step;
        step = parseInt(step + Math.sqrt(n));

        if (prev >= n) {
            // recalculate prev since prev was updated previously with step
            prev = prev - ((n - 1) % parseInt(Math.sqrt(n)))
            animations.push(prev);
            animations.push(++prev);

            return -1;
        }

        animations.push(prev);
    }
    while (array[prev] < key) {
        prev++;
        animations.push(prev);

        if (prev === Math.min(step, n)) {
            return -1;
        }
    }
    if (array[prev] === key) {
        return prev;
    }
    return -1;
}