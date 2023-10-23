import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1' title='Upcoming' fetchURL={requests.requestUpcoming}/>
        <Row rowID='2' title='Popular Movies' fetchURL={requests.requestPopular}/>
        {/* <Row rowID='3' title='Popular Tv Shows' fetchURL={requests.requestTVSHOWS}/> */}
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}/>
        <Row rowID='6' title='Thriller' fetchURL={requests.requestThriller}/>
        <Row rowID='7' title='Animation' fetchURL={requests.requestAnimation}/>
        <Row rowID='8' title='Adventure' fetchURL={requests.requestAdventure}/>
        <Row rowID='9' title='Comedy' fetchURL={requests.requestComedy}/>
        <Row rowID='10' title='Romance' fetchURL={requests.requestRomance}/>
        <Row rowID='11' title='Science Fiction' fetchURL={requests.requestScienceFiction}/>
        <Row rowID='12' title='Mystery' fetchURL={requests.requestMystery}/>
        <Row rowID='13' title='History' fetchURL={requests.requestHistory}/>
        
    </div>
  )
}

export default Home;