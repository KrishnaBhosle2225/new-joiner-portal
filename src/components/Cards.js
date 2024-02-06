import React from 'react';
import {data} from './data';
import Card from './Card';
import "./Cards.css";
import Onboarding from './Onboarding';
import Techstack from './Techstack';
import Trainings from './Trainings';
import Gotos from './Gotos';
import WorkdeskReservation from './Workdesk';
import { Routes, Route } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards-container'>
      {data.map(({ id, title }) => (
        
        <Card key={id} title={title} />
      ))}

      <Routes>
        <Route exact path="/" />
        <Route exact path="/Onboarding" element={<Onboarding/>} />
        <Route exact path="/Techstack" element={<Techstack/>} />
        <Route exact path="/Trainings" element={<Trainings/>} />
        <Route exact path="/Gotos" element={<Gotos/>} />
        <Route exact path="/Workdesk" element={<WorkdeskReservation/>} />
      </Routes>
    </div>
  );
}

export default Cards;
