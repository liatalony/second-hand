import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./forms.scss";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:3001/users/login",
				JSON.stringify({ user_email: email, user_pass: pass }),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			console.log(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<form>
			<h1>Login</h1>
			<div className="field">
				<label htmlFor={"email"}>Email</label>
				<input
					id="email"
					name="pass"
					type={"email"}
					required
					placeholder="example@example.com"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				></input>
			</div>
			<div className="field">
				<label htmlFor={"pass"}>Password</label>
				<input
					id="pass"
					name="pass"
					type={"password"}
					required
					placeholder="Your password"
					value={pass}
					onChange={(e) => {
						setPass(e.target.value);
					}}
				></input>
			</div>
			<div className="field">
				<button
					type={"submit"}
					className={"btn btn--primary"}
					onClick={handleSubmit}
				>
					Login
				</button>
			</div>
			<sub>
				Don&apos;t have an account?{" "}
				<Link to={"/dashboard/signup"}>Signup here</Link>
			</sub>
		</form>
	);
};

const SignupForm = () => {
	const ref = useRef();
	const errRef = useRef();

	const [firstName, setFirstName] = useState("");
	const [validFirst, setValidFirst] = useState(false);
	const [firstFocus, setFirstFocus] = useState(false);

	const [lastName, setLastName] = useState("");
	const [validLast, setValidLast] = useState(false);
	const [lastFocus, setLastFocus] = useState(false);

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [phone, setPhone] = useState("");
	const [validPhone, setValidPhone] = useState(false);
	const [phoneFocus, setPhoneFocus] = useState(false);

	const [pass, setPass] = useState("");
	const [validPass, setValidPass] = useState(false);
	const [passFocus, setPassFocus] = useState(false);

	const [conPass, setConPass] = useState("");
	const [validConPass, setValidConPass] = useState(false);
	const [conPassFocus, setConPassFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		ref.current.focus();
	}, []);

	useEffect(() => {
		setValidFirst(firstName.length >= 2);
	}, [firstName]);
	useEffect(() => {
		setValidLast(lastName.length >= 2);
	}, [lastName]);
	useEffect(() => {
		setValidEmail(EMAIL_REGEX.test(email));
	}, [email]);
	useEffect(() => {
		setValidPhone(phone.length == 8);
		console.log(validPhone);
	}, [phone]);
	useEffect(() => {
		setValidPass(PWD_REGEX.test(pass));
		setValidConPass(pass === conPass);
	}, [pass, conPass]);
	useEffect(() => {
		setErrMsg("");
	}, [firstName, lastName, email, phone, pass, conPass]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const check1 = firstName.length >= 2;
		const check2 = lastName.length >= 2;
		const check3 = EMAIL_REGEX.test(email);
		const check4 = PWD_REGEX.test(pass);
		if (!check1 || !check2 || !check3 || !check4) {
			setErrMsg("Invalid Entry");
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:3001/users/register",
				JSON.stringify({
					user_first_name: firstName,
					user_last_name: lastName,
					user_email: email,
					user_con_pass: conPass,
					user_pass: pass,
					user_phone: phone,
				}),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			console.log(response.data);
			setFirstName("");
			setLastName("");
			setEmail("");
			setPass("");
			setConPass("");
			setPhone("");
			setSuccess(false);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 409) {
				setErrMsg("Conflict");
			} else {
				setErrMsg("Registration Failed");
			}
		}
	};

	return (
		<>
			{success ? (
				<h1>Success!</h1>
			) : (
				<form onSubmit={handleSubmit}>
					<p
						ref={errRef}
						className={errMsg ? "errmsg" : "offscreen"}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<h1>Signup</h1>
					<div className="field">
						<label htmlFor={"first_name"}>First Name</label>
						<input
							id="first_name"
							name="first_name"
							type={"text"}
							required
							placeholder="John"
							ref={ref}
							autoComplete="off"
							value={firstName}
							onChange={(e) => {
								setFirstName(e.target.value);
							}}
							aria-invalid={validFirst ? "false" : "true"}
							onFocus={() => setFirstFocus(true)}
							onBlur={() => setFirstFocus(false)}
							aria-describedby="firstnote"
						></input>
						<p
							id="firstnote"
							className={
								firstFocus && !validFirst ? "instructions" : "offscreen"
							}
						>
							Your first name
						</p>
					</div>
					<div className="field">
						<label htmlFor={"last_name"}>Last Name</label>
						<input
							id="last_name"
							name="last_name"
							type={"text"}
							required
							placeholder="Doe"
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value);
							}}
							autoComplete="false"
							aria-invalid={validLast ? "false" : "true"}
							aria-describedby="lastnote"
							onFocus={() => setLastFocus(true)}
							onBlur={() => setLastFocus(false)}
						></input>
						<p
							id="lastnote"
							className={lastFocus && !validLast ? "instructions" : "offscreen"}
						>
							Your last name
						</p>
					</div>
					<div className="field">
						<label htmlFor={"email"}>Email</label>
						<input
							id="email"
							name="pass"
							type={"email"}
							required
							placeholder="example@example.com"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							aria-invalid={validEmail ? "false" : "true"}
							aria-describedby="emailnote"
							onFocus={() => setEmailFocus(true)}
							onBlur={() => setEmailFocus(false)}
						></input>
						<p
							id="emailnote"
							className={
								emailFocus && !validEmail ? "instructions" : "offscreen"
							}
						>
							Your email
						</p>
					</div>
					<div className="field">
						<label htmlFor={"pass"}>Password</label>
						<input
							id="pass"
							name="pass"
							type={"password"}
							required
							placeholder="Your password"
							value={pass}
							onChange={(e) => {
								setPass(e.target.value);
							}}
							aria-invalid={validPass ? "false" : "true"}
							aria-describedby="pwdnote"
							onFocus={() => setPassFocus(true)}
							onBlur={() => setPassFocus(false)}
						></input>
						<p
							id="pwdnote"
							className={passFocus && !validPass ? "instructions" : "offscreen"}
						>
							6 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a number and a
							special character.
							<br />
							Allowed special characters:{" "}
							<span aria-label="exclamation mark">!</span>{" "}
							<span aria-label="at symbol">@</span>{" "}
							<span aria-label="hashtag">#</span>{" "}
							<span aria-label="dollar sign">$</span>{" "}
							<span aria-label="percent">%</span>
						</p>
					</div>
					<div className="field">
						<label htmlFor={"con_pass"}>Confirm Password</label>
						<input
							id="con_pass"
							name="pass"
							type={"password"}
							required
							placeholder="Your password"
							value={conPass}
							onChange={(e) => {
								setConPass(e.target.value);
							}}
							aria-invalid={validConPass ? "false" : "true"}
							aria-describedby="confirmnote"
							onFocus={() => setConPassFocus(true)}
							onBlur={() => setConPassFocus(false)}
						></input>
						<p
							id="confirmnote"
							className={
								conPassFocus && !validConPass ? "instructions" : "offscreen"
							}
						>
							Must match the first password input field.
						</p>
					</div>
					<div className="field">
						<label htmlFor={"tel"}>Mobile Number</label>
						<input
							id="tel"
							name="tel"
							type={"tel"}
							required
							placeholder="12 34 56 78"
							value={phone}
							onChange={(e) => {
								setPhone(e.target.value);
							}}
							aria-invalid={validPhone ? "false" : "true"}
							aria-describedby="phonenote"
							onFocus={() => setPassFocus(true)}
							onBlur={() => setPhoneFocus(false)}
						></input>
						<p
							id="phonenote"
							className={
								phoneFocus && !validPhone ? "instructions" : "offscreen"
							}
						>
							Your number is used for us to send you money through MobilePay
						</p>
					</div>
					<div className="field">
						<button type={"submit"} className={"btn btn--primary"}>
							Signup
						</button>
					</div>
					<sub>
						Already have an account? <Link to={"/dashboard/login"}>Login</Link>
					</sub>
				</form>
			)}
		</>
	);
};

const AccountForm = () => {
	const ref = useRef();
	const errRef = useRef();

	const [firstName, setFirstName] = useState("");
	const [validFirst, setValidFirst] = useState(false);
	const [firstFocus, setFirstFocus] = useState(false);

	const [lastName, setLastName] = useState("");
	const [validLast, setValidLast] = useState(false);
	const [lastFocus, setLastFocus] = useState(false);

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [phone, setPhone] = useState("");
	const [validPhone, setValidPhone] = useState(false);
	const [phoneFocus, setPhoneFocus] = useState(false);

	const [pass, setPass] = useState("");
	const [validPass, setValidPass] = useState(false);
	const [passFocus, setPassFocus] = useState(false);

	const [conPass, setConPass] = useState("");
	const [validConPass, setValidConPass] = useState(false);
	const [conPassFocus, setConPassFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		ref.current.focus();
	}, []);

	useEffect(() => {
		setValidFirst(firstName.length >= 2);
	}, [firstName]);
	useEffect(() => {
		setValidLast(lastName.length >= 2);
	}, [lastName]);
	useEffect(() => {
		setValidEmail(EMAIL_REGEX.test(email));
	}, [email]);
	useEffect(() => {
		setValidPhone(phone.length == 8);
		console.log(validPhone);
	}, [phone]);
	useEffect(() => {
		setValidPass(PWD_REGEX.test(pass));
		setValidConPass(pass === conPass);
	}, [pass, conPass]);
	useEffect(() => {
		setErrMsg("");
	}, [firstName, lastName, email, phone, pass, conPass]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const check1 = firstName.length >= 2;
		const check2 = lastName.length >= 2;
		const check3 = EMAIL_REGEX.test(email);
		const check4 = PWD_REGEX.test(pass);
		if (!check1 || !check2 || !check3 || !check4) {
			setErrMsg("Invalid Entry");
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:3001/users/register",
				JSON.stringify({
					user_first_name: firstName,
					user_last_name: lastName,
					user_email: email,
					user_con_pass: conPass,
					user_pass: pass,
					user_phone: phone,
				}),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			console.log(response.data);
			setFirstName("");
			setLastName("");
			setEmail("");
			setPass("");
			setConPass("");
			setPhone("");
			setSuccess(false);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 409) {
				setErrMsg("Conflict");
			} else {
				setErrMsg("Registration Failed");
			}
		}
	};

	return (
		<>
			{success ? (
				<h1>Success!</h1>
			) : (
				<form onSubmit={handleSubmit}>
					<p
						ref={errRef}
						className={errMsg ? "errmsg" : "offscreen"}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<h1>Account Details</h1>
					<div className="field">
						<label htmlFor={"first_name"}>First Name</label>
						<input
							disabled="true"
							id="first_name"
							name="first_name"
							type={"text"}
							required
							placeholder="John"
							ref={ref}
							autoComplete="off"
							value={firstName}
							onChange={(e) => {
								setFirstName(e.target.value);
							}}
							aria-invalid={validFirst ? "false" : "true"}
							onFocus={() => setFirstFocus(true)}
							onBlur={() => setFirstFocus(false)}
							aria-describedby="firstnote"
						></input>
						<p
							id="firstnote"
							className={
								firstFocus && !validFirst ? "instructions" : "offscreen"
							}
						>
							Your first name
						</p>
					</div>
					<div className="field">
						<label htmlFor={"last_name"}>Last Name</label>
						<input
							disabled="true"
							id="last_name"
							name="last_name"
							type={"text"}
							required
							placeholder="Doe"
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value);
							}}
							autoComplete="false"
							aria-invalid={validLast ? "false" : "true"}
							aria-describedby="lastnote"
							onFocus={() => setLastFocus(true)}
							onBlur={() => setLastFocus(false)}
						></input>
						<p
							id="lastnote"
							className={lastFocus && !validLast ? "instructions" : "offscreen"}
						>
							Your last name
						</p>
					</div>
					<div className="field">
						<label htmlFor={"email"}>Email</label>
						<input
							disabled="true"
							id="email"
							name="pass"
							type={"email"}
							required
							placeholder="example@example.com"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							aria-invalid={validEmail ? "false" : "true"}
							aria-describedby="emailnote"
							onFocus={() => setEmailFocus(true)}
							onBlur={() => setEmailFocus(false)}
						></input>
						<p
							id="emailnote"
							className={
								emailFocus && !validEmail ? "instructions" : "offscreen"
							}
						>
							Your email
						</p>
					</div>
					<div className="field">
						<label htmlFor={"pass"}>Password</label>
						<input
							disabled="true"
							id="pass"
							name="pass"
							type={"password"}
							required
							placeholder="Your password"
							value={pass}
							onChange={(e) => {
								setPass(e.target.value);
							}}
							aria-invalid={validPass ? "false" : "true"}
							aria-describedby="pwdnote"
							onFocus={() => setPassFocus(true)}
							onBlur={() => setPassFocus(false)}
						></input>
						<p
							id="pwdnote"
							className={passFocus && !validPass ? "instructions" : "offscreen"}
						>
							6 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a number and a
							special character.
							<br />
							Allowed special characters:{" "}
							<span aria-label="exclamation mark">!</span>{" "}
							<span aria-label="at symbol">@</span>{" "}
							<span aria-label="hashtag">#</span>{" "}
							<span aria-label="dollar sign">$</span>{" "}
							<span aria-label="percent">%</span>
						</p>
					</div>
					<div className="field">
						<label htmlFor={"con_pass"}>Confirm Password</label>
						<input
							disabled="true"
							id="con_pass"
							name="pass"
							type={"password"}
							required
							placeholder="Your password"
							value={conPass}
							onChange={(e) => {
								setConPass(e.target.value);
							}}
							aria-invalid={validConPass ? "false" : "true"}
							aria-describedby="confirmnote"
							onFocus={() => setConPassFocus(true)}
							onBlur={() => setConPassFocus(false)}
						></input>
						<p
							id="confirmnote"
							className={
								conPassFocus && !validConPass ? "instructions" : "offscreen"
							}
						>
							Must match the first password input field.
						</p>
					</div>
					<div className="field">
						<label htmlFor={"tel"}>Mobile Number</label>
						<input
							disabled="true"
							id="tel"
							name="tel"
							type={"tel"}
							required
							placeholder="12 34 56 78"
							value={phone}
							onChange={(e) => {
								setPhone(e.target.value);
							}}
							aria-invalid={validPhone ? "false" : "true"}
							aria-describedby="phonenote"
							onFocus={() => setPassFocus(true)}
							onBlur={() => setPhoneFocus(false)}
						></input>
						<p
							id="phonenote"
							className={
								phoneFocus && !validPhone ? "instructions" : "offscreen"
							}
						>
							Your number is used for us to send you money through MobilePay
						</p>
					</div>
					<div className="field">
						<button type={"submit"} className={"btn btn--primary"}>
							Update details
						</button>
					</div>
				</form>
			)}
		</>
	);
};

export { LoginForm, SignupForm, AccountForm };
