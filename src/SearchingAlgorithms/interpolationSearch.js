export function getInterpolationSearch(array, key) {
    let animations = [];
    return [animations, interpolationSearch(array, key, animations)];
}

function interpolationSearch(array, key, animations) {
    let l = 0;
    let h = array.length - 1;

    while (l <= h && key >= array[l] && key <= array[h]) {
        if (l === h) {
            if (array[l] === key) {
                animations.push(l);
                return l;
            }
            return -1;
        }
        // this formula determines whether the algorithm will search closer to the front or to the back, also suggesting where key is
        let pos = parseInt(l + (((h - l)/(array[h] - array[l])) * (key - array[l])));
        
        animations.push(pos);
        
        if (array[pos] === key) {
            return pos;
        }
        if (array[pos] < key) {
            l = pos + 1;
        }
        else {
            h = pos - 1;
        }
    }

    if (key < 0) {
        animations.push(0);
    }
    else {
        animations.push(array.length - 1);
    }

    return -1;
}