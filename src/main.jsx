import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import MovieCard from './components/MovieCard';

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
