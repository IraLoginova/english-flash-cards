const React = require("react");
const Layout = require("./Layout");

function SignUp({}) {
  return (
    <Layout>
      <form >
      <div className="col mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputname"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Login
          </label>
          <input
            type="login"
            className="form-control"
            id="exampleInputLogin"
            aria-describedby="loginHelp"
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Зарегистрироваться
        </button>
      </form>
    </Layout>
  );
}

module.exports = SignUp;
