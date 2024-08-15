import React from "react";
import LamaIcon from '../../icons/LamaIcon';
import LogoName from "../../icons/LogoName";
import "../HomeLayout/HomeLayout.css"


export default function HomeLayout(){
    return(
        <div className="home_layout">
            <div>
            <LamaIcon width={54.6} height={52.33} stroke="white"/>
            <LogoName width={197} height={43.94} fill={"white"}/>
            </div>

            <div>
                <div>Your podcast will no longer be just a hobby.</div>
                <div>Supercharge Your Distribution using our AI assistant!</div>
            </div>
       
        </div>
       
    )
}