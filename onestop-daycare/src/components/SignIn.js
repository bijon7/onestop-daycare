function SignIn() {
  return (
    <div className="SignIn">
      <div className="Logo">
        <img
          src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          alt="Logo Picture"
        />
        <div>
          <p>the right daycare solutions for you</p>
          <p>extra text and info</p>
        </div>
      </div>
      <div className="UserInfo">
        <form>
          <input type="text" placeholder="email/username"></input>
          <input type="text" placeholder="password"></input>
          <button type="button">SIGN IN</button>
          <p>Don't already have an account?</p>
          <button type="button">CREATE AN ACCOUNT</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
