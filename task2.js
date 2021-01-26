// 2. Write a function that takes a date as parameter and returns formatted date. For example we passed 1.02.2021. The result of function should be: Понеділок, 1 лютого.
// Another example: 21.01.2021. The formatted result should be: Четвер, 21 січня



function formattedDate (date){
    let myDate = new Date(date);
    let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
    let months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    console.log (days[myDate.getDay()],',', myDate.getDate(myDate), months[myDate.getMonth()]);
}

formattedDate('01.02.2021');
formattedDate('March 1, 2021');