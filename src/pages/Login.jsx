import React, { useEffect, useMemo, useRef, useState } from "react";

// Drop-in demo: Login + OTP screens with TailwindCSS. No TypeScript.
export default function LoginFlow() {
  const [screen, setScreen] = useState("login"); // 'login' | 'otp'
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  // Simple validation
  const isEmail = /@/.test(emailOrMobile);
  const emailValid = useMemo(() => (isEmail ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailOrMobile) : true), [emailOrMobile, isEmail]);
  const phoneDigits = useMemo(() => emailOrMobile.replace(/\D/g, ""), [emailOrMobile]);
  const phoneValid = useMemo(() => (!isEmail ? phoneDigits.length >= 10 : true), [isEmail, phoneDigits]);
  const passwordValid = password.length >= 6; // loosened for demo
  const canLogin = emailValid && phoneValid && passwordValid;

  function inputClass(valid) {
    return `w-full rounded-lg border ${valid ? "border-gray-200 focus:border-purple-400" : "border-red-300 focus:border-red-400"} bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition px-3 py-2.5`;
  }

  function handleLogin(e) {
    e.preventDefault();
    if (!canLogin) return;
    // Replace with your API call. If success and OTP needed:
    setScreen("otp");
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-white to-green-100 flex items-start justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mt-10 mb-6 select-none">
          <img src="/static/media/FamWellLogo.3976bc0fcb465972f716.png" alt="FamWell Logo" className="w-35 h-12" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-black/5 mx-auto w-full max-w-3xl">
          {screen === "login" ? (
            <LoginForm
              emailOrMobile={emailOrMobile}
              setEmailOrMobile={setEmailOrMobile}
              password={password}
              setPassword={setPassword}
              showPwd={showPwd}
              setShowPwd={setShowPwd}
              inputClass={inputClass}
              canLogin={canLogin}
              onLogin={handleLogin}
            />
          ) : (
            <LoginOtp
              emailOrMobile={emailOrMobile}
              onBack={() => setScreen("login")}
              onVerified={() => alert("Logged in! (mock)")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function LoginForm({ emailOrMobile, setEmailOrMobile, password, setPassword, showPwd, setShowPwd, inputClass, canLogin, onLogin }) {
  return (
    <form onSubmit={onLogin} className="px-6 sm:px-10 py-8 max-w-2xl mx-auto">
      <h1 className="text-center text-lg font-semibold text-gray-800">Welcome Back</h1>
      <p className="text-center text-sm text-gray-500 mb-6">Login to your account</p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Email or Mobile</label>
          <input
            type="text"
            placeholder="Enter email or mobile"
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
            className={inputClass(true)}
            autoComplete="username"
            required
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm text-gray-700">Password</label>
            <a href="#forgot" className="text-sm text-purple-600 hover:text-purple-700">Forgot password?</a>
          </div>
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass(true)}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPwd((s) => !s)}
              className="absolute inset-y-0 right-3 my-auto h-6 w-6 grid place-items-center rounded-md hover:bg-gray-100"
              aria-label={showPwd ? "Hide password" : "Show password"}
            >
              {showPwd ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!canLogin}
          className="w-full inline-flex justify-center items-center rounded-lg bg-purple-500 text-white font-medium py-2.5 px-4 shadow-sm hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        >
          Login
        </button>

        {/* Divider */}
        <div className="relative my-5">
          <div className="h-px bg-gray-200" />
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-xs text-gray-500">OR CONTINUE WITH</span>
        </div>

        {/* Google button (placeholder) */}
        <button type="button" className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-2.5 text-gray-700 hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.272,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.281-7.946l-6.54,5.036C9.568,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.089,5.571c0,0,0,0,0,0l6.19,5.238 C35.402,40.967,44,36,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
          <span>Sign in with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 pt-2">
          Don't have an account? <button onClick={() => window.location.href = '/signup'} className="text-purple-600 hover:text-purple-700 font-medium">Sign up here</button>
        </p>
      </div>
    </form>
  );
}

function LoginOtp({ emailOrMobile, onBack, onVerified }) {
  const OTP_LEN = 6;
  const [otp, setOtp] = useState(Array(OTP_LEN).fill(""));
  const [resendIn, setResendIn] = useState(0);
  const inputsRef = useRef([]);

  const otpFilled = otp.join("").length === OTP_LEN;

  useEffect(() => {
    setResendIn(30); // start countdown when screen opens
  }, []);

  useEffect(() => {
    if (resendIn <= 0) return;
    const id = setInterval(() => setResendIn((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [resendIn]);

  function handleOtpChange(i, val) {
    const only = val.replace(/\D/g, "").slice(0, 1);
    const next = [...otp];
    next[i] = only;
    setOtp(next);
    if (only && i < OTP_LEN - 1) inputsRef.current[i + 1]?.focus();
  }
  function handleOtpKeyDown(i, e) {
    if (e.key === "Backspace" && !otp[i] && i > 0) inputsRef.current[i - 1]?.focus();
    if (e.key === "ArrowLeft" && i > 0) inputsRef.current[i - 1]?.focus();
    if (e.key === "ArrowRight" && i < OTP_LEN - 1) inputsRef.current[i + 1]?.focus();
  }
  function handleOtpPaste(e) {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LEN).split("");
    if (!text.length) return;
    const next = Array(OTP_LEN).fill("");
    text.forEach((ch, idx) => (next[idx] = ch));
    setOtp(next);
    inputsRef.current[Math.min(text.length, OTP_LEN) - 1]?.focus();
  }

  return (
    <div className="px-6 sm:px-10 py-8 max-w-2xl mx-auto">
      <h1 className="text-left text-lg font-semibold text-gray-800">Welcome Back</h1>
      <p className="text-left text-sm text-gray-500 mb-6">Login to your account</p>

      <div className="space-y-6">
        <div>
          <input
            className="w-full rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-500 px-3 py-2"
            value={`Enter the 6-digit code sent to ${emailOrMobile || "your email/number"}`}
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Enter OTP</label>
          <div className="flex justify-start gap-2" onPaste={handleOtpPaste}>
            {otp.map((v, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={v}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(i, e)}
                className="w-10 h-10 sm:w-12 sm:h-12 text-center rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 text-lg"
              />
            ))}
          </div>

          <div className="flex items-center justify-between mt-4 gap-4">
            <button className="flex-1 rounded-lg border border-gray-300 bg-white py-2.5 font-medium text-gray-700 hover:bg-gray-50" onClick={onBack}>Change Number</button>
            {resendIn > 0 ? (
              <span className="text-sm text-gray-500 whitespace-nowrap">Resend OTP in {resendIn}s</span>
            ) : (
              <button className="text-sm text-purple-600 hover:text-purple-700 whitespace-nowrap" onClick={() => setResendIn(30)}>Resend OTP</button>
            )}
          </div>
        </div>

        <button
          onClick={() => otpFilled && onVerified()}
          disabled={!otpFilled}
          className="w-full inline-flex justify-center items-center rounded-lg bg-purple-500 text-white font-medium py-2.5 px-4 shadow-sm hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        >
          Verify & Login
        </button>

        <p className="text-center text-sm text-gray-600 pt-2">
          Don't have an account? <button onClick={() => window.location.href = '/signup'} className="text-purple-600 hover:text-purple-700 font-medium">Sign up here</button>
        </p>
      </div>
    </div>
  );
}

// Minimal icons (no external deps)
function Eye(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function EyeOff(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
      <path d="M3 3l18 18" />
      <path d="M10.58 10.58a3 3 0 0 0 4.24 4.24" />
      <path d="M16.24 7.76C14.86 6.67 13.28 6 12 6 5 6 1 12 1 12c.69.97 2.61 3.34 5.49 4.95" />
      <path d="M9.9 17.94C10.59 18 11.29 18 12 18c7 0 11-6 11-6a20.3 20.3 0 0 0-3.27-3.74" />
    </svg>
  );
}