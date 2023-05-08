import './App.css';
import HomePage from './components/HomePage';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme();

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
