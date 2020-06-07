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
