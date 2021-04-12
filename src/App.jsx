import React from "react";
import GreetingPage from "./GreetingPage";
import MovieCard from "./MovieCard";
import Sdata from "./Sdata";
import reportWebVitals from "./reportWebVitals";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// console.log("value From Sdata page : ", Sdata[2].sname);
const netflixCardFunction=(value) => {
  return (
     
    <MovieCard
      className="cardClassName "
      key={value.id}
      imgsrc={value.imgsrc}
      title={value.title}
      sname={value.sname}
      link={value.link}
    />
  );
}
const App=()=> (
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2021</h1>
    
    <div className="">

    {Sdata.map(netflixCardFunction)}
    </div>
    
  </>
);
{
  /* <GreetingPage/> */
  /* <MovieCard/> */
}

reportWebVitals();
export default App;