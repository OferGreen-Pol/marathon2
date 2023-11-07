import './Bg.css';
import { useRef, useState } from 'react';
import Original from './Original';
import No_Bg from './No_bg';
import Eula from './Eula';
import axios from 'axios';

import upload_img from './assets/Upload.png';   

function Bg() {

  const inputElement = useRef();
  
  const [display_no_bg_tab, setdisplay_no_bg_tab] = useState("no");

  const [show_eula, setshow_eula] = useState(false);

  const [image_name, setimage_name] = useState("");

  const [color_to_api, setcolor_to_api] = useState("");
  
  const [show_popup, setshow_popup] = useState(false);

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

  function close_popup_func() {
    setshow_eula(false);
  }

//   Call locahost:5000 (server) "/test" app.get in the server (contains information, doesn't get arguments)
  function send_file_to_back(e) {

    // debugger;
    // axios.get("http://localhost:5000/test")
    //     .then( res => {
    //     console.log(res);
    //     })    

    let data = e.target.files[0];

    if(data.type === 'image/png' || data.type === 'image/jpg') {
        // new Object (struct)
        const formData = new FormData();

        // axios.get("http://localhost:5000/test")
        //     .then(function (response) {
        //         console.log(response);
        // })

        // let axios_debug = axios.get("http://localhost:5000/test");

        

        const config = {
            headers: {'content-type': 'multipart/form-data'}
        }

        formData.append(
            "myFile",
            data,
            data.name,
            color_to_api
        );

        formData.append( "color_to_api", color_to_api );

        axios.post("http://localhost:5000/upload_file", formData, config)
        .then(function (response) {
        console.log(response);
        setimage_name(response.data.image_name);
        })
        

    } else {
        alert('file type not supported');
    }

//     // debug - get message from test module in server
//     axios.get("http://localhost:5000/test")
//   .then(function (response) {
//     console.log(response);
//   }
//   .then(function (response) {
//     console.log(response);
// .then(res => {
//     console.log(res); }
  }

  function send_color(color) {
    // console.log(color);
    setcolor_to_api(color);
  }

  function download_image_func() {
    fetch('http://localhost:5000/no_bg_'+image_name)
    .then(response => response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = '"http://localhost:5000/no_bg_"+image_name';
        a.click();
    }))
  }

  function close_popup(e) {
    // cancel button and download button ref this function
    // if the cancel button is clicked close popup.
    if (e.target.classList.value ==='cancel') {
        setshow_popup(false);
    } else {
        setshow_popup(true);
    }
  }

  return (
    <div className="Bg">
        <div className="header">   
            <span className='header_text'> העלאת תמונה בשביל להסיר את הרקע  </span>
            <button className="header_btn" onClick={upload_file}> העלאת תמונה   </button>

            <input type="file" ref={inputElement} onChange={send_file_to_back} className='input_file'/>"

            <span className="header_subtext">  פורמטים נתמכים png, jpeg</span>
        </div>

        <div className="main_div">   

            
            <div className="left_div">
                
                <div className="main_div_tabs_header">   
                    <span onClick={change_tab} className="no_bg" style={{borderBottom: display_no_bg_tab==="no" ? "1px solid #9C27B0" : ""}}> הסר רקע</span>
                    <span onClick={change_tab} className="original" style={{borderBottom: display_no_bg_tab==="yes" ? "1px solid #9C27B0" : ""}}> מקורי</span>
                </div>

                {display_no_bg_tab==="yes" ? 
                    <Original image_name = {image_name}/>
                    :
                    <No_Bg image_name = {image_name} send_color = {send_color}/>
                }

                <div className="left_div_footer">
                    <button className="eula_btn" onClick={open_eula}>תקנון החברה</button>
                    <span className="eula_text">על ידי העלאת תמונה אתה מסכים לתנאים ולהגבלות</span>
                    {show_eula ? <Eula close_popup={close_popup_func}/> : ""}
                </div>
            </div>
                
            <div className="right_div">   
                <div className="right_div_middle_div">
                    <div className="right_div_top">
                        <div className="right_div_top_text"> תמונה חינם</div>
                        <div className="right_div_top_subtext"> תצוגה מקדימה של תמונה 408x612</div>
                        <button className="right_div_top_btn" onClick={close_popup}> הורד</button>
                    </div>
                    <div className="right_div_bottom"></div>
                        <div className="right_div_top_text"> תמונה חינם</div>
                        <div className="right_div_top_subtext"> תמונה מלאה 1920x1080</div>
                        <button className="right_div_top_btn"> הורד</button>
                </div>
            </div>
        </div>
        
        {show_popup ?
        <div className='download_iamge_popup'>
            <div> <img src={upload_img}/></div>
            <div className='download_image_popup_text'> אישור להורדת תמונה</div>
            <div className='download_image_popup_subtext'> האם להוריד את התמונה?</div>
            <input type='checkbox' className='checkbox' />
            <span> אני לא רובוט </span>
            <button className='cancel' onClick={close_popup}> ביטול </button>
            <button className='approve' onClick={download_image_func}> אישור </button>
        </div>
        : ""}
    </div>
  );
}

export default Bg;
