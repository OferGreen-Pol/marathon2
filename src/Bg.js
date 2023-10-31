import './Bg.css';
import { useState } from 'react';

function Bg() {

  const [display_no_bg_tab, setdisplay_no_bg_tab] = useState("no");

//   const change_tab = () => {}

  function change_tab() {
    // debugger;
    if(display_no_bg_tab==='yes') {
        setdisplay_no_bg_tab('no');
    } else {
        setdisplay_no_bg_tab('yes');
    }
  }

  return (
    <div className="Bg">
        <div className="header">   
            <span className='header_text'> העלאת תמונה בשביל להסיר את הרקע  </span>
            <button className="header_btn"> העלאת תמונה   </button>
            <span className="header_subtext">  פורמטים נתמכים png, jpeg</span>
        </div>

        <div className="main_div">   

            
            <div className="left_div">
                
                <div className="main_div_tabs_header">   
                    <span onClick={change_tab}> הסר רקע</span>
                    <span onClick={change_tab}> מקורי</span>
                </div>

                {display_no_bg_tab==="yes" ? 
                <div className="original_tab">original_tab</div>
                :
                <div className="no_bg_tab">no_bg_tab</div>
                }
            </div>
                
            <div className="right_div">   
                <div className="right_div_middle_div">
                    <div className="right_div_top">
                        <div className="right_div_top_text"> תמונה חינם</div>
                        <div className="right_div_top_subtext"> תצוגה מקדימה של תמונה 408x612</div>
                        <button className="right_div_top_btn"> הורד</button>
                    </div>
                    <div className="right_div_bottom"></div>
                        <div className="right_div_top_text"> תמונה חינם</div>
                        <div className="right_div_top_subtext"> תמונה מלאה 1920x1080</div>
                        <button className="right_div_top_btn"> הורד</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Bg;
