import './App.css';
import {Divider} from '@mui/material';
import {CountDown} from './CountDown/CountDown';
import { Images } from './Images';

function App() {
  return (
    <div className="App">
      <div className='countdown-root'>
        <div className='wedding-invite-section'>
          <img src='Invite.jpg' className='image'/>
        </div>
        <div className='wedding-template-section'>
            <div className='text-section'>
              Our Wedding December 30th, 2024 
              <br/>
              At 5 P.M. Sir Francis Xavier church 
            </div>
            <Divider className='divider'>x</Divider>
            <CountDown /> 
            <Divider className='divider'>x</Divider>
            <Images/>
        </div>
      </div>
    </div>
  );
}

export default App;
