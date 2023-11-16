import './LoginScreen.css'; // You can add some styles here

// function download_image_func() {
//     fetch('http://localhost:5000/no_bg_'+image_name)
//     .then(response => response.blob().then(blob => {
//         let url = window.URL.createObjectURL(blob);
//         let a = document.createElement('a');
//         a.href = url;
//         a.download = '"http://localhost:5000/no_bg_"+image_name';
//         a.click();
//     }))
//   }

// const


const LoginScreen = ({ onClose, onLogin }) => {
  return (
    
    <div className="login-screen">
      <h2>Login</h2>
      
      <form action="http://localhost:5000/login" method ="POST">
        {/* <div>
            <input type="text" name="name"/>
            <label> Full Name </label>
        </div> */}
        <div>
            <span> Email: </span>
            <input type="text" name="email"></input>
        </div>

        <div>
            <span> Password: </span>
            <input type="password" name="password"></input>
        </div>
        
        <div>
            <button type="submit" onClick={onLogin}>Login</button>
            <button onClick={onClose}>Close</button>  
        </div>

        </form>




    </div>
  );
};

export default LoginScreen;