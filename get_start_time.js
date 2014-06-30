var date = new Date(data[1].datetime);
var time = date.toLocaleTimeString();
str = time.substring(0, time.length - 3);