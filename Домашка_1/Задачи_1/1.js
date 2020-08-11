function pause(func, time) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return func.apply(ctx, args);
    }, time * 1000);
  };
}

function someContent(text) {
  console.log('Текущая дата: ' + text);
}

let nowDate = new Date().toString();

let paused  = pause(someContent, 2);
paused(nowDate);