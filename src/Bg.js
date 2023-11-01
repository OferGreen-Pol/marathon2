import './Bg.css';
import { useRef, useState } from 'react';
import Original from './Original';
import No_Bg from './No_bg';
import Eula from './Eula';

function Bg() {

  const inputElement = useRef();
  
  const [display_no_bg_tab, setdisplay_no_bg_tab] = useState("no");

  const [show_eula, setshow_eula] = useState(false);

//   const change_tab = () => {}

  function change_tab(e) {
    
    // debugger;
    // console.log(e.target);
    if(e.target.className==='no_bg') {
        setdisplay_no_bg_tab('no');
    } else {
        setdisplay_no_bg_tab('yes');
    }
  }

  function upload_file() {
    inputElement.current.click();
  }

  function open_eula() {
    setshow_eula(true);
  }

  return (
    <div className="Bg">
        <div className="header">   
            <span className='header_text'> העלאת תמונה בשביל להסיר את הרקע  </span>
            <button className="header_btn" onClick={upload_file}> העלאת תמונה   </button>

            <input type="file" ref={inputElement} className='input_file'/>"

            <span className="header_subtext">  פורמטים נתמכים png, jpeg</span>
        </div>

        <div className="main_div">   

            
            <div className="left_div">
                
                <div className="main_div_tabs_header">   
                    <span onClick={change_tab} className="no_bg" style={{borderBottom: display_no_bg_tab==="no" ? "1px solid #9C27B0" : ""}}> הסר רקע</span>
                    <span onClick={change_tab} className="original" style={{borderBottom: display_no_bg_tab==="yes" ? "1px solid #9C27B0" : ""}}> מקורי</span>
                </div>

                {display_no_bg_tab==="yes" ? 
                    <Original/>
                    :
                    <No_Bg/>
                }

                <div className="left_div_footer">
                    <button className="eula_btn" onClick={open_eula}>תקנון החברה</button>
                    <span className="eula_text">על ידי העלאת תמונה אתה מסכים לתנאים ולהגבלות</span>
                    {show_eula ? <Eula/> : ""}
                </div>
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
