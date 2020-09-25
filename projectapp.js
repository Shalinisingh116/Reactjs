import React from 'react';
import Card from './Card';
import "./index.css";
function App()
{
  return(
  <>
  <h1 className="heading">TOP 6 INDIAN CRICKETERS</h1>
  <Card  imgsrc="https://upload.wikimedia.org/wikipedia/commons/e/ed/Sunny_Gavaskar_Sahara.jpg"
  year="1971-1987"
  title="Sunil Gavaskar"
  link="https://en.wikipedia.org/wiki/Sunil_Gavaskar"
  />
  <Card imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Kapil_Dev_at_Equation_sports_auction.jpg/390px-Kapil_Dev_at_Equation_sports_auction.jpg"
   year="1978-1994"
  title="Kapil Dev"
  link="https://en.wikipedia.org/wiki/Kapil_Dev" />
  <Card imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sourav_Ganguly_closeup.jpg/330px-Sourav_Ganguly_closeup.jpg"
   year="1992-2008"
  title="Sourav Ganguly"
  link="https://en.wikipedia.org/wiki/Sourav_Ganguly" />
  <Card imgsrc="https://upload.wikimedia.org/wikipedia/commons/7/70/Mahendra_Singh_Dhoni_January_2016_%28cropped%29.jpg"
  year="2004-2020"
  title="MS Dhoni"
  link="https://en.wikipedia.org/wiki/MS_Dhoni" />
  <Card imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/The_President%2C_Shri_Pranab_Mukherjee_presenting_the_Padma_Shri_Award_to_Shri_Virat_Kohli%2C_at_a_Civil_Investiture_Ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_March_30%2C_2017_%28cropped%29.jpg/390px-thumbnail.jpg"
  year="2008-present"
  title="Virat Kohli"
  link="https://en.wikipedia.org/wiki/Virat_Kohli" /> 
  <Card imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Rohit_Sharma_November_2016_%28cropped%29.jpg/390px-Rohit_Sharma_November_2016_%28cropped%29.jpg"
  year="2007-present"
  title="Rohit Sharma"
  link="https://en.wikipedia.org/wiki/Rohit_Sharma" />
</>
);}
export default App;