import React from 'react';

const welcome = "Welcome to";
const welcome2 = " my app";
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const image1 = "https://picsum.photos/200/200?random=1";
const image2 = "https://picsum.photos/200/200?random=2";
const image3 = "https://picsum.photos/200/200?random=3";
let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const greetingStyle = {};
if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  greetingStyle.color = 'green';
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Night";
  greetingStyle.color = 'blue';

}
const bodyStyle = {};
bodyStyle.backgroundColor = 'cadetblue';
function GreetingPage(){
    return (
        <>
        <div className="mainDiv " style={bodyStyle}>
          <h1 style={{ textTransform: 'capitalize', textAlign: 'center' }} className="headline mt-3"><span className="spanHead">Hello Everyone ! <span style={greetingStyle}>{greeting}</span> </span> </h1>
          <p className="center" contentEditable="true">{`${welcome} ${welcome2} `}</p>
          <p className="center">current Date is = {currentDate}</p>
          <p className="center">current Time is = {currentTime}</p>
          
          <div className="img_div ">
            <img src={image1} alt="pic" />
            <img src={image2} alt="pic" />
            <img src={image3} alt="pic" />
    
          </div>
        </div>
    
      </>
    );
}
export default GreetingPage;