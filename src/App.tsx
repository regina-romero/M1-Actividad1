//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/Sidebar";
import InfoCard from "./components/InfoCard";
import Nube from "./img/nube.jpeg";
import Mavs from "./img/mavs.jpeg";
import logo from "./img/dogcare.png";

function App() {
 return (
    <div className="flex min-h-screen">
      
      <Sidebar logo = {logo} activePage="My Dogs" />

      <main className="flex-1 bg-gray-50 p-8">
        <h1 className="text-4xl font-bold mb-8">My Dogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard
        dogName="Nube"
        dogAge={3}
        dogBreed="Mixed Breed"
        dogImage={Nube}
        dogDescription="Loves attention and socializing with other dogs"/>
        <InfoCard
          dogName="Mavs"
          dogAge={2}
          dogBreed="Labrador"
          dogImage={Mavs}
          dogDescription="Loves to sleep in the sun and play fetch"/>
        
        
      </div>

      </main>
      
      
    </div>

    
  );
}

export default App;