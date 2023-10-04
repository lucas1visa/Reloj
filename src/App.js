import React from 'react';
//import clock
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
// clock css 
import VideoBg from './assets/video.mp4'
import './styles.css'
const App = () => {
  return <section className='page'>
    {/* overlay */}
    <div className='overlay'></div>
{/* video */}
<video src={VideoBg} autoPlay loop muted></video>
{/* content */}
<div className='page__content'>
  <h1>Lanzaminto</h1>
  <h3>Deja tu correo electrónico y te avisaremos una vez que el sitio esté disponible.</h3>
  {/* clock */}
  <FlipClockCountdown className='flip-clock' to={new Date().getTime() + 24 * 3600 * 1000 + 5000} 
  labels={["DAYS", 'HOURS', 'MINUTES' , 'SECONDS']}
  duration={0.5}/>
  <button className='btn'>Notificarme</button>

</div>
  </section>;
};

export default App;
