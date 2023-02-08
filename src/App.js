import './App.css';
import Row from './Row' 
import requests from './request'
import Banner from './Banner'
import Nav from './Nav'
import { useEffect } from 'react';
import Footer from './Footer'

function App() {
  return (
    <div>
      <Nav/>
      <Banner />
      <Row title='Netflix Originals ' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
      <Footer/>
    </div>
  );
}    

export default App;
