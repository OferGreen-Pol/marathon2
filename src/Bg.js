import './Bg.css';

function Bg() {
  return (
    <div className="Bg">
        <div className="header">   
            <span className='header_text'> העלאת תמונה בשביל להסיר את הרקע  </span>
            <button className="header_btn"> העלאת תמונה   </button>
            <span className="header_subtext">  פורמטים נתמכים png, jpeg</span>
        </div>

        <div className="main_div">   
            <div className="left_div">   
                LEFT
            </div>
                
            <div className="right_div">   
                <div className="right_div_middle_div">
                    <div className="right_div_top">
                        <div className="right_div_top_text"> תמונה חינם</div>
                        <div className="right_div_top_subtext"> תצוגה מקדימה של תמונה 408x612</div>
                        <button className="right_div_top_btn"> הורד</button>
                    </div>
                    <div className="right_div_bottom"></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Bg;
