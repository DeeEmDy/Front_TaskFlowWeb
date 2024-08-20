import * as React from 'react';
import classNames from 'classnames';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../style/LoginForm.css'; // Asegúrate de que esta ruta sea correcta

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "login",
            firstName: "",
            lastName: "",
            login: "",
            password: "",
            passwordVisible: false, // Estado para controlar la visibilidad de la contraseña
            onLogin: props.onLogin,
            onRegister: props.onRegister
        };
    }

    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    togglePasswordVisibility = () => {
        this.setState({ passwordVisible: !this.state.passwordVisible });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.state.onLogin(e, this.state.login, this.state.password);
    };

    onSubmitRegister = (e) => {
        e.preventDefault();
        this.state.onRegister(e, this.state.firstName, this.state.lastName, this.state.login, this.state.password);
    };

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-4">
                    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className={classNames("nav-link", this.state.active === "login" ? "active" : "")}
                                id="tab-login"
                                onClick={() => this.setState({ active: "login" })}
                            >
                                Login
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={classNames("nav-link", this.state.active === "register" ? "active" : "")}
                                id="tab-register"
                                onClick={() => this.setState({ active: "register" })}
                            >
                                Register
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div
                            className={classNames("tab-pane", "fade", this.state.active === "login" ? "show active" : "")}
                            id="pills-login"
                        >
                            <form onSubmit={this.onSubmitHandler}>
                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        id="loginName"
                                        name="login"
                                        value={this.state.login}
                                        onChange={this.onChangeHandler}
                                        className="form-control"
                                    />
                                    <label className="form-label" htmlFor="loginName">
                                        Username
                                    </label>
                                </div>

                                <div className="form-outline mb-4 position-relative">
                                    <input
                                        type={this.state.passwordVisible ? "text" : "password"}
                                        id="loginPassword"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChangeHandler}
                                        className="form-control with-icon"
                                    />
                                    <label className="form-label" htmlFor="loginPassword">
                                        Password
                                    </label>
                                    <button
                                        type="button"
                                        className="btn btn-link password-icon"
                                        onClick={this.togglePasswordVisibility}
                                    >
                                        {this.state.passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Sign In
                                </button>
                            </form>
                        </div>

                        <div
                            className={classNames("tab-pane", "fade", this.state.active === "register" ? "show active" : "")}
                            id="pills-register"
                        >
                            <form onSubmit={this.onSubmitRegister}>
                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.onChangeHandler}
                                        className="form-control"
                                    />
                                    <label className="form-label" htmlFor="firstName">
                                        First Name
                                    </label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.onChangeHandler}
                                        className="form-control"
                                    />
                                    <label className="form-label" htmlFor="lastName">
                                        Last Name
                                    </label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        id="login"
                                        name="login"
                                        value={this.state.login}
                                        onChange={this.onChangeHandler}
                                        className="form-control"
                                    />
                                    <label className="form-label" htmlFor="login">
                                        Username
                                    </label>
                                </div>

                                <div className="form-outline mb-4 position-relative">
                                    <input
                                        type={this.state.passwordVisible ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChangeHandler}
                                        className="form-control with-icon"
                                    />
                                    <label className="form-label" htmlFor="password">
                                        Password
                                    </label>
                                    <button
                                        type="button"
                                        className="btn btn-link password-icon"
                                        onClick={this.togglePasswordVisibility}
                                    >
                                        {this.state.passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
