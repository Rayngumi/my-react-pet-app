import { useState } from 'react'
import './App.css'
import PetList from './components/PetList';


function App() {
  const [pets, setPets] = useState([
    { name: 'Buddy', type: 'Dog', age: 5, image: 'dog.jpg' },
    { name: 'Mittens', type: 'Cat', age: 3, image: 'cat.jpg' },
    { name: 'Goldie', type: 'Fish', age: 1, image: 'fish.jpg' },
  ]);

  return (
    <>
      <PetList pets={pets} />
    </>  
    )
}

export default App
