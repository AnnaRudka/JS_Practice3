// 1. Write a function that takes one parameter - any date and returns number of days left till deadline
// (passed parameter). If date is already outdated (older then today), return string 'Date is outdated. 
//You are 2 days late'. Here instead of '2 days' should be real number of days passed from deadline.


function deadLineLeftNew(myDate, deadLineDate) {
    let myDateCorrect = new Date(myDate);
    let deadLineDateCorrect = new Date(deadLineDate);
    let outdated = Math.floor((deadLineDateCorrect.getTime() - myDateCorrect.getTime())/86400000);
    if ((outdated) <= 0){
        console.log('Date is outdated. You are ', outdated, ' days late');
    } else{
        console.log ('Left until the deadline -', outdated, ' days.');
    }
}
deadLineLeftNew('June 1, 2021', '2021-06-03');