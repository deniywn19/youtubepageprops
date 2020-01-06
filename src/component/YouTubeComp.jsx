//test
import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/dNQs_Bef_V8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLADzdCLbFB3AZ1C9MEBV1s3cMKF2w" alt="omae wa mou shindeiru"/>
                <p className="title">{props.time}</p>
            </div>
            <p className ="title">{props.title}</p>
            <p className ="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps={
    time: '00.00',
    title: 'Naanii!?',
    desc: 'hokuton no ken'
}

export default YouTubeComp;