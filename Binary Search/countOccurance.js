function firstOccurance(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            if (mid === 0 || arr[mid - 1] !== x) {
                return mid;
            } else {
                high = mid - 1;
            }
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

function lastOccurance(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            if (mid === arr.length - 1 || arr[mid + 1] !== x) {
                return mid;
            } else {
                low = mid + 1;
            }
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

function occurrencesCount(arr, x) {
    let first = firstOccurance(arr, x);
    let last = lastOccurance(arr, x);

    if (first === -1 || last === -1) {
        return 0;
    } else {
        return last - first + 1;
    }
}
