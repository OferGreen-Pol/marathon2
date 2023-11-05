import './Original.css'

import { useState } from "react";

function Original(props) {
    
    

    return (
        <div className="original_tab">
            {props.image_name? 
            <img src={"http://localhost:5000/no_bg_"+props.image_name}/>
            :
            ""
            }  
        </div>
                  
                     
    )
}

export default Original;