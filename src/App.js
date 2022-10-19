import './App.css';
import './index.css';
import AppRoutes from './routes/AppRoutes';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  const customTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'Roboto Mono'
    }
  });

  // const messagingEnabling = async()=>{
  //   const token = await getToken(messaging, { 
  //     vapidKey: "BGyemsmHL0qsNMjq1Cpe1qUsBTNBSPkL7USYbnMyBrqhgoVTVUhFzG6O530UH83gmaG-DP-6TMc87PSRgUXhIdY"
  //    }).catch(error => console.log("Token generation error"))
  //    if (token) console.log("Your Token: ",token);
  //    toast(token)
  //    if(!token) {console.log("There is no token");}
  // }
  // React.useEffect(()=> {
  //   onMessage(messaging, message=> {
  //     console.log(message);
  //     toast(message.notification.title)
  //   })
  // }, [])

  return (
    <>
      <Provider store = {store}>
        <ThemeProvider theme={customTheme}>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
