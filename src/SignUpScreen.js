import './SignUpScreen.css'; // You can add some styles here

const SignUpScreen = ({ onClose }) => {
  return (
    <div className="signup-screen">
      <h2>SignUpScreen</h2>
      {/* Add your login form and logic here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SignUpScreen;