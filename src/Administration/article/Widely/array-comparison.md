#### js获取两个数组及数组对象中相同和不相同的值
----

##### 1. 获取两个数组中相同的元素
```js
/**
 * 
 * @param {*} arr1 = [0,1,2,3,4,5] 
 * @param {*} arr2 = [0,4,6,1,3,9]
 * @returns 获取两个数组中相同的元素
 */
function getArrEqual(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                newArr.push(arr1[j]);
            }
        }
    }
    return newArr;
}
```

---

##### 2. 获取两个数组中不相同的元素

```js
/**
 * 
 * @param {*} arr1 = [0,1,2,3,4,5] 
 * @param {*} arr2 = [0,4,6,1,3,9] 
 * @returns 获取两个数组中不相同的元素
 */
function getArrDifference(arr1, arr2) {
    return arr1.concat(arr2).filter(function (v, i, arr) {
        return arr.indexOf(v) === arr.lastIndexOf(v);
    });
}
```
----

##### 3. 获取两个数组对象中相同的值

```js
/**
 * 
 * @param {*} arr1 = [ {"id": "A"},{"id": "B"}]; 
 * @param {*} arr2 = [ {"id": "A"}, {"id": "B"},{"id": "C"}];
 * @returns 获取两个数组对象中相同的值
 */
function getSameArrObj(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr2.length; i++) {
        var obj = arr2[i];
        var id = obj.id;
        var isExist = false;
        for (var j = 0; j < arr1.length; j++) {
            var aj = arr1[j];
            var n = aj.id;
            if (n == id) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            result.push(obj);
        }
    }
    return result;
}
```

----

##### 3. 获取两个数组对象中相同的值

```js
/**
 * 
 * @param {*} arr1 = [ {"id": "A"},{"id": "B"}]; 
 * @param {*} arr2 = [ {"id": "A"}, {"id": "B"},{"id": "C"}];
 * @returns 
 */
function getDifArrObj(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr2.length; i++) {
        var obj = arr2[i];
        var id = obj.id;
        var isExist = false;
        for (var j = 0; j < arr1.length; j++) {
            var aj = arr1[j];
            var n = aj.id;
            if (n == id) {
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            result.push(obj);
        }
    }
    return result;
}
```
----
##### 4. 数组对象中更具某个值进行排序

```js
function compare(property) {
	return function (value1, value2) {
		let v1 = value1[property];
		let v2 = value2[property];
		return v1 - v2
	}
}
```



