function onTimeForTheExam(input) {
    let hour = Number(input.shift());
    let minutes = Number(input.shift());
    let hours1 = Number(input.shift());
    let minutes1 = Number(input.shift());
    let isOnTime = false;
    let isLate = false;
    let isEarly = false;
    let exam = hour * 60 + minutes;
    let student = hours1 * 60 + minutes1;
    let diff = Math.abs(exam - student);
   
    if (exam === student) {
      isOnTime = true;
    }
   
    if (exam > student) {
      if (exam - student <= 30) {
        isOnTime = true;
      } else {
        isEarly = true;
      }
    } else {
      isLate = true;
    }
   
    if (diff >= 60) {
      if (diff % 60 < 10) {
        diff = `${Math.floor(diff / 60)}:0${diff % 60} hours`;
      } else {
        diff = `${Math.floor(diff / 60)}:${diff % 60} hours`;
      }
    } else {
      diff = `${diff % 60} minutes`;
    }
   
    switch (true) {
      case isOnTime:
        console.log("On time");
        if (exam - student <= 30) {
          console.log(`${diff} before the start`);
        }
        break;
      case isEarly:
        console.log("Early");
        console.log(`${diff} before the start`);
        break;
      case isLate:
        console.log("Late");
        console.log(`${diff} after the start`);
    }
  }

onTimeForTheExam(["9","30","9","50"]);