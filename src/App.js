import logo from './logo.svg';
import './App.css';
import BrowserRouter from 'react-router-dom';
import Routes from 'react-router-dom';
import Route from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <div className="App">
      <h1>CS 230L</h1>
	<h2>Section 002</h2>
	<p>WVU ID: 800296192</p>
	<p>Hi, I am Brett Finzel</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
