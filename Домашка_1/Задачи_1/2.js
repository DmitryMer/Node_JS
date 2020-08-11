function array() {
  return [1, 2, 3];
}

function return_object(func, ...keys) {
  let object = {};
  let array = func();

  for (let i = 0; i < keys.length; i++) {
    object[keys[i]] = array[i];
  }

  return function () {
    return object;
  };
}

let funcDecoreted = return_object(array, "one", "two", "three");

let r = funcDecoreted();

console.log(r.one);
console.log(r.two);