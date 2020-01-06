import React, {Component} from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import YouTubeComp from '../component/YouTubeComp';

class Home extends Component{
    render (){
        return(
            <div>
            <YouTubeComp
            time="7.03"
            title="omae"
            desc="hokuto no ken"
            />
            <YouTubeComp
            time="8.03"
            title="wa"
            desc="hokuto no ken"
            />
            <YouTubeComp
            time="9.03"
            title="mou"
            desc="hokuto no ken"
            />
            <YouTubeComp
            time="4.03"
            title="shindeiru"
            desc="hokuto no ken"
            />
            <YouTubeComp/>
            
            </div>
        )
    }
}

export default Home;