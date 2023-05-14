var days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];
function addZero(num) { if (num >= 0 && num <= 9) {return '0' + num;} else {return num;	}}
date = new Date();
console.log(addZero(date.getMonth()) + '-' + addZero(date.getDate()) + ', ' + date.getHours()+'h')
console.log(Date.parse(date))
console.log(date.getTime())
console.log(new Date('2000-09-08').getDay() + '-' + days[new Date('2000-09-08').getDay()])