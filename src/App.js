import {Avatar, Button, FormControlLabel, Grid ,Paper, TextField} from'@material-ui/core';
import AxwInd from './Weather';

function App() {
  const paperStyle={padding :15 ,height:600 , width:350 , margin:'10px auto',background:'#5e94eb'}
  return (
    <Grid>
    <Paper elevation={10} style={paperStyle}>
    
<AxwInd/>

    </Paper>
    </Grid>
  );
}

export default App;
