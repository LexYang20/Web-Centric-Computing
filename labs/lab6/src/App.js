import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>Sakura Festival</h1>
      </header>

        <img src={logo} className="App-logo" alt="logo" />

      <main className="main-function">
        <section className="event-info">
          <h2>Event information</h2>
          <p><strong>Date:</strong> April 5, 2024</p>
          <p><strong>Location: </strong>Sakura Park in the city center</p>
          <p className="info">Spring is coming and the cherry blossoms are in full bloom. We sincerely invite you and your family to come to Sakura Park to enjoy the beauty of cherry blossoms and feel the breath of spring. During the event, there will be colorful activities such as cherry blossom viewing, food stalls, and artistic performances.</p>
        </section>
      </main>

      <p className="info2">
        Ready to spend your week off to some new cultures?
      </p>

        <a
          className="App-link"
          href="https://www.japan-guide.com/e/e2172.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check your new adventure start form here!
        </a>
  
    </div>
  );
}

export default App;
