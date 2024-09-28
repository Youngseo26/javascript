//1주차 과제2
let alexBMI = 75 / (1.75 * 1.75);
//console.log(alexBMI);

let brianBMI = 82 / (1.82 * 1.82);
//console.log(brianBMI);

const alexBMIHigher = () => {
  if (alexBMI > brianBMI) {
    return true;
  } else {
    return false;
  }
};

//console.log(alexBMIHigher());
//this 예제

const asianaAirline = {
  airlineName: "Asiana",
  iataCode: "OZ",
  booking: [],
  book(flightNo, name) {
    console.log(this);
    console.log(
      `${name}님,${this.airlineName}의 ${this.iataCode}${flightNo}을 예약하셨습니다. `
    );
    this.booking.push({
      flight: `${this.iataCode}${flightNo}`,
      name,
    });
  },
};

asianaAirline.book(222, "Kim Youngseo");
asianaAirline.book(222, "Kang Myoung-gon");
