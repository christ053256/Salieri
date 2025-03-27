import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // You can use lucide-react for icons or any icon library you prefer.
import "./pages_style/LoginPage.css"; // Add your custom CSS for aesthetics

const LoginPage = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
  const [isDarkMode, setIsDarkMode] = useState(false); // State to toggle dark mode

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    // Implement login, register, or password reset logic here
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`login-page-content ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="user-account-page">
        <h2 className={`page-title ${isDarkMode ? "dark-mode" : ""}`}>{activeForm === "login" ? "Login" : activeForm === "register" ? "Register" : "Forgot Password"}</h2>

        <div className="tabs">
          <button
            className={`tab ${activeForm === "login" ? "active" : ""}`}
            onClick={() => setActiveForm("login")}
          >
            Login
          </button>
          <button
            className={`tab ${activeForm === "register" ? "active" : ""}`}
            onClick={() => setActiveForm("register")}
          >
            Register
          </button>
          <button
            className={`tab ${activeForm === "forgot" ? "active" : ""}`}
            onClick={() => setActiveForm("forgot")}
          >
            Forgot Password
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {activeForm === "login" && (
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        )}

        {activeForm === "register" && (
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="input-group">
              <label>Confirm Password:</label>
              <div className="password-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
          </form>
        )}

        {activeForm === "forgot" && (
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <button type="submit" className="btn">
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
