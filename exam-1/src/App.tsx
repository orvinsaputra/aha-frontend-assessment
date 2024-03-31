import './App.css';
import { MuiTextField } from './components/MuiTextField';
import { createTheme , ThemeProvider } from '@mui/material';
// import { MuiTypography } from './components/MuiTypography';

const theme = createTheme({
  palette:{
    primary:{
      main: '#00A3FF',
    },
    grey:{
      "700":'#565656'
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MuiTextField/>
      </div>
    </ThemeProvider>
  );
}

export default App;
