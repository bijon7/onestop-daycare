import "./SignIn.scss";
import SignUp from "./SignUp";

function SignIn() {
  return (
    <div className="Main">
      <div className="SignIn">
        <div className="Logo">
          <img
            className="LogoImg"
            src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
            alt="Logo Picture"
          />
          <div className="Text">
            <p>the right daycare solutions for you</p>
          </div>
        </div>
        <div className="UserInfo">
          <form className="UserInfoForm">
            <input type="text" placeholder="email/username" id="user"></input>
            <input type="text" placeholder="password" id="password"></input>
            <button type="button" id="sign">SIGN IN</button>
            <div className="NoAccount">
              <p>Don't already have an account?</p>
            </div>
            <SignUp />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
