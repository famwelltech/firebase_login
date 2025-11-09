import React, { useEffect, useMemo, useRef, useState } from "react";

// Single-file demo of all three screens (no TypeScript). TailwindCSS required.
export default function CreateAccountScreens() {
  const [step, setStep] = useState(1);

  // Step 1 state
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState({});

  // Step 2 state (OTP)
  const OTP_LEN = 6;
  const [otp, setOtp] = useState(Array(OTP_LEN).fill(""));
  const inputsRef = useRef([]);
  const [resendIn, setResendIn] = useState(0);

  // Step 3 state (consent)
  const [consentMedical, setConsentMedical] = useState(false);
  const [consentTerms, setConsentTerms] = useState(false);

  // Validators (step 1)
  const emailValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email), [email]);
  const phoneDigits = useMemo(() => phone.replace(/\D/g, ""), [phone]);
  const phoneValid = useMemo(() => {
    return phone.startsWith('+') && phoneDigits.length >= 10 && phoneDigits.length <= 13;
  }, [phone, phoneDigits]);
  const passwordValid = useMemo(() => password.length >= 8, [password]);
  const passwordsMatch = useMemo(() => password === confirm && confirm.length > 0, [password, confirm]);
  const step1Valid = emailValid && phoneValid && passwordValid && passwordsMatch;

  function handlePhoneChange(e) {
    let value = e.target.value;
    // Auto-add + if user starts typing digits
    if (value && !value.startsWith('+') && /^\d/.test(value)) {
      value = '+91' + value;
    }
    setPhone(value);
  }

  function inputClass(valid) {
    return `w-full rounded-lg border ${valid ? "border-gray-200 focus:border-purple-400" : "border-red-300 focus:border-red-400"} bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition px-3 py-2.5`;
  }


  function handleBlur(name) { setTouched((t) => ({ ...t, [name]: true })); }

  function goNextFrom1(e) {
    e.preventDefault();
    setTouched({ email: true, phone: true, password: true, confirm: true });
    if (!step1Valid) return;
    // Trigger fake OTP send
    setResendIn(30);
    setStep(2);
  }

  // Resend countdown
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
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      inputsRef.current[i - 1]?.focus();
    }
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

  const otpFilled = otp.join("").length === OTP_LEN;

  function verifyOtp() {
    if (!otpFilled) return;
    // Mock verify
    setStep(3);
  }

  const canCreate = consentMedical && consentTerms;
  function createAccount() {
    if (!canCreate) return;
    alert(
      JSON.stringify(
        {
          email,
          phone: phone,
          password: "•".repeat(password.length),
          otp: otp.join(""),
          consentMedical,
          consentTerms,
        },
        null,
        2
      )
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-white to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4 select-none">
          <img src="/static/media/FamWellLogo.3976bc0fcb465972f716.png" alt="FamWell Logo" className="w-35 h-12" />
          {/* <span className="text-2xl font-semibold tracking-tight"><span className="text-gray-800">fam</span><span className="text-purple-500">welt</span><sup className="text-purple-400 align-super text-xs font-bold">+</sup></span> */}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-black/5 p-6">
          <h2 className="text-gray-800 font-semibold">Create Your Account</h2>
          <p className="text-sm text-gray-500 mt-1">Choose your account type to get started</p>

          {/* Stepper */}
          <div className="mt-4 flex items-center gap-6">
            <Step number={1} active={step === 1} />
            <div className={`h-px flex-1 ${step >= 2 ? "bg-purple-400" : "bg-gray-200"}`} />
            <Step number={2} active={step === 2} />
            <div className={`h-px flex-1 ${step >= 3 ? "bg-purple-400" : "bg-gray-200"}`} />
            <Step number={3} active={step === 3} />
          </div>

          {/* Screens */}
          {step === 1 && (
            <form onSubmit={goNextFrom1} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Basic Information</label>
              </div>

              <Field label="Email Address" htmlFor="email">
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={inputClass(!touched.email || emailValid)}
                  autoComplete="email"
                  required
                />
                {touched.email && !emailValid && (
                  <ErrorText>Enter a valid email address.</ErrorText>
                )}
              </Field>

              <Field label="Mobile Number" htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={() => handleBlur("phone")}
                  className={inputClass(!touched.phone || phoneValid)}
                  autoComplete="tel"
                  maxLength={14}
                  required
                />
                {touched.phone && !phoneValid && (
                  <ErrorText>Enter a valid phone number with country code.</ErrorText>
                )}
              </Field>

              <Field label="Password" htmlFor="password">
                <div className="relative">
                  <input
                    id="password"
                    type={showPwd ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur("password")}
                    className={inputClass(!touched.password || passwordValid)}
                    autoComplete="new-password"
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
                {touched.password && !passwordValid && (
                  <ErrorText>Password must be at least 8 characters.</ErrorText>
                )}
              </Field>

              <Field label="Confirm Password" htmlFor="confirm">
                <div className="relative">
                  <input
                    id="confirm"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Re-enter password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    onBlur={() => handleBlur("confirm")}
                    className={inputClass(!touched.confirm || passwordsMatch)}
                    autoComplete="new-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((s) => !s)}
                    className="absolute inset-y-0 right-3 my-auto h-6 w-6 grid place-items-center rounded-md hover:bg-gray-100"
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    {showConfirm ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                {touched.confirm && !passwordsMatch && (
                  <ErrorText>Passwords do not match.</ErrorText>
                )}
              </Field>

              <button
                type="submit"
                disabled={!step1Valid}
                className="w-full mt-2 inline-flex justify-center items-center rounded-lg bg-purple-500 text-white font-medium py-2.5 px-4 shadow-sm hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                Continue
              </button>

              <p className="text-center text-sm text-gray-600 pt-2">
                Already have an account?{' '}
                <button type="button" onClick={() => window.location.href = '/login'} className="text-purple-600 hover:text-purple-700 font-medium underline-offset-2 hover:underline bg-transparent border-none cursor-pointer">Login here</button>
              </p>
            </form>
          )}

          {step === 2 && (
            <div className="mt-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Verify Your Mobile</label>
                <div className="mt-2">
                  <div className="w-full rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-500 px-3 py-2">
                    We've sent a 6-digit code to {phone || "your mobile number"}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Enter OTP</label>
                <div className="flex justify-center gap-2" onPaste={handleOtpPaste}>
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
                <div className="text-center mt-3 text-sm">
                  {resendIn > 0 ? (
                    <span className="text-gray-500">Resend OTP in {resendIn}s</span>
                  ) : (
                    <button className="text-purple-600 hover:text-purple-700 font-medium" onClick={() => setResendIn(30)}>Resend OTP</button>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  className="flex-1 rounded-lg border border-gray-300 bg-white py-2.5 font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button
                  className="flex-1 rounded-lg bg-purple-500 text-white py-2.5 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-600"
                  disabled={!otpFilled}
                  onClick={verifyOtp}
                >
                  Verify & Continue
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 pt-1">
                Already have an account?{' '}
                <button type="button" onClick={() => window.location.href = '/login'} className="text-purple-600 hover:text-purple-700 font-medium underline-offset-2 hover:underline bg-transparent border-none cursor-pointer">Login here</button>
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="mt-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Consent & Terms</label>
              </div>

              <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4" checked={consentMedical} onChange={(e) => setConsentMedical(e.target.checked)} />
                  <div>
                    <p className="font-medium text-gray-800">Medical Records Consent</p>
                    <p className="text-sm text-gray-600">I consent to upload and store my medical records securely on this platform. I understand that this information will be used to provide better healthcare assistance and will only be accessed by authorized healthcare providers.</p>
                  </div>
                </label>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4" checked={consentTerms} onChange={(e) => setConsentTerms(e.target.checked)} />
                  <div>
                    <p className="font-medium text-gray-800">Terms and Conditions</p>
                    <p className="text-sm text-gray-600">I agree to the Health Assist Terms and Conditions, Privacy Policy, and consent to the collection and use of my information as described. I understand that my data will be handled in accordance with applicable healthcare privacy regulations.</p>
                    <a className="text-sm text-purple-600 hover:text-purple-700 font-medium underline-offset-2 hover:underline cursor-pointer">Read full Terms & Conditions</a>
                  </div>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  className="flex-1 rounded-lg border border-gray-300 bg-white py-2.5 font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button
                  className="flex-1 rounded-lg bg-purple-500 text-white py-2.5 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-600"
                  disabled={!canCreate}
                  onClick={createAccount}
                >
                  Create Account
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 pt-1">
                Already have an account?{' '}
                <button type="button" onClick={() => window.location.href = '/login'} className="text-purple-600 hover:text-purple-700 font-medium underline-offset-2 hover:underline bg-transparent border-none cursor-pointer">Login here</button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Step({ number, active }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`size-8 rounded-full grid place-items-center text-sm font-semibold border ${active ? "bg-purple-500 text-white border-purple-500" : "bg-gray-100 text-gray-500 border-gray-200"
        }`}>
        {number}
      </div>
    </div>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-sm text-gray-700">{label}</label>
      {children}
    </div>
  );
}

function ErrorText({ children }) { return <p className="text-xs text-red-600 mt-1">{children}</p>; }

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
