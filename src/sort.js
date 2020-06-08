//冒泡排序
function maopao(arr) {
    var len = arr.length
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                var item = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = item
            }
        }
    }
    return arr
}
var orgarr = [15, 47, 49, 61, 31, 3, 2]
console.log("冒泡：", maopao(orgarr))
//选择排序
function xuanze(arr) {
    var len = arr.length, minIndex, item
    for (var i = 0; i < len - 1; i++) {
        minIndex = i
        for (var j = i; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        item = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = item
    }
    return arr
}
var orgarr = [15, 47, 49, 61, 31, 3, 2]
console.log("选择", xuanze(orgarr))
//插入排序
function insertSort(arr) {
    let temp;
    for (let i = 1; i < arr.length; ++i) {
        for (let j = 0; j <= i; ++j) {
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var arr = [23, 32, 15, 45, 76, 875, 1232]
console.log('插入', insertSort(arr))
function charu(arr) {
    var len = arr.length, preIndex, currnt
    for (var i = 1; i < len; i++) {
        currnt = arr[i]
        preIndex = i - 1
        while (arr[preIndex] >= 0 && arr[preIndex] > currnt) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = currnt
    }

    return arr
}
var orgarr = [15, 47, 49, 61, 31, 3, 2]
console.log("插入", charu(orgarr))
//希尔排序
function shellSort(arr) {
    var len = arr.length
    for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (var i = gap; i < len; i++) {
            var j = i;
            var current = arr[i];
            while (j - gap >= 0 && current < arr[j - gap]) {
                arr[j] = arr[j - gap]
                j = j - gap
            }
            arr[j] = current
        }
    }
    return arr
}
var orgarr = [15, 47, 49, 61, 31, 3, 2]
console.log("希尔排序", shellSort(orgarr))
//快速排序
function quickSort(arr) {
    if (arr.length < 1) {
        return arr
    }
    var pivot = arr[0];
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot).concat(quickSort(right))
}
var orgarr = [15, 47, 49, 61, 31, 3, 2]
console.log("快速排序", quickSort(orgarr))
function kuaisubiaozhun(array) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    function partition(array, left, right) {
        var index = left;
        var pivot = array[right]; // 取最后一个数字当做基准值，这样方便遍历
        for (var i = left; i < right; i++) {
            if (array[i] < pivot) {
                swap(array, index, i);
                index++;
            }
        }
        swap(array, right, index);
        return index;
    }
    function sort(array, left, right) {
        if (left > right) {
            return;
        }
        var storeIndex = partition(array, left, right);
        sort(array, left, storeIndex - 1);
        sort(array, storeIndex + 1, right);
    }
    sort(array, 0, array.length - 1);
    return array;
}
function kuaisu(array) {
    function qiehuan(array, left, right) {
        var temp = array[left]
        array[left] = array[right]
        array[right] = temp
    }
    function parttion(array, left, right) {
        var pivot = array[right]
        var index = left
        for (var i = left; i < right; i++) {
            if (array[i] < pivot) {
                qiehuan(array, index, i)
                index++
            }
        }
        qiehuan(array, right, index)
        return index
    }
    function sort(array, left, right) {
        if (left > right) {
            return;
        }
        var index = parttion(array, left, right)
        sort(array, left, index - 1)
        sort(array, index + 1, right)
    }
    sort(array, 0, array.length - 1)
    return array

}
var arr = [12, 32, 4, 35, 456, 35, 23, 789, 32]
console.log('kuaisu:', kuaisu(arr))
