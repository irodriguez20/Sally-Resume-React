import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Sally Student Resume</h1>
        <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" className="Portrait" alt="Portrait of Sally Student" />
      </header>
      <main className="Main-content">
      <ul className="Contact-info">
        <h2>Contact Info</h2>
        <h4>Sally Student</h4>
            <li><a className="Email-link" href="mailto:sallystudent@gmail.com"> sallystudent@gmail.com</a></li>
            <li>(303)999-1234</li>
          </ul>
        <section className="Education">
        <ul>
         <h2>Education</h2>
         <li>MSU Denver 2016-2020</li>
         <li>Ponderosa High School 2012-2016</li>
         </ul> 
        </section> 
        <section className="Employment">
         <ul>
           <h2>Employment History</h2>     
           <h3>Mcdonalds</h3>
           <li>Shift lead 6/12/17-present day</li>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           <h3>Dunkin Donuts</h3>         
           <li>Cashier 12/1/16-6/10/17</li>
           <p>Iste eligendi distinctio libero error vitae aliquid aut autem doloribus delectus necessitatibus possimus tempora,ipsam sequi, quae architecto maxime asperiores qui voluptate.</p>
         </ul>
        </section>       
      </main>
    </div>
  );
}

export default App;


