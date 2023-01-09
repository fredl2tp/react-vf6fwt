import React from 'react';
import UserCard from './components/UserCard';
import { useState } from 'react';
import axios from 'axios';

const user = {
  correct_answer: 'Ankara',
  incorrect_answers: 'Istanbul - Izmir - Bursa',

  question: 'What is the name of the capital of Turkey?',

  category: 'Geography',
};

function App() {
  const [people, setPeople] = useState(user);
  console.log(setPeople, 'people');
  const getPeople = () => {
    // Send the request
    axios
      .get('https://apis.wilders.dev/wild-games/games/')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setPeople(data); //.results[0]
      });
  };

  console.log(people, 'people');
  return (
    <div className="App">
      <UserCard
        firstname={people.correct_answer}
        lastname={people.incorrect_answers}
        // .map((t) => <span>{t}</span>)
        // .reduce((prev, curr) => [prev, ', ', curr])}
        image={people.question}
        email={people.category}
      />
      <button type="button" onClick={getPeople}>
        Get people
      </button>
    </div>
  );
}
export default App;
