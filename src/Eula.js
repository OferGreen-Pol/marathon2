import './Eula.css'

// import { useState } from "react";

import close from './assets/close.svg'

// props: lifting up, a way to control a parent component's elements
// basically args.
// here a function implementation in the parent is being passed and here we invoke it
function Eula(props) {

    function close_popup() {
        props.close_popup();
    }
    
    return (
        <div className='eula_div'>
            {/* onCLick of 'X' call local 'close_popup' which called parent 'close_popup to affect parent's code */}
            <img src={close} onClick={close_popup}/>
            לורם איפסום דולור סיט אמט, קונסקטטור אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. ושבעגט לבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
        
        </div>
    )
}

export default Eula;