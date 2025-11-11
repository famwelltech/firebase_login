I reviewed your code and the error. I’ll outline why the reCAPTCHA Enterprise token mismatch happens and exactly how to fix it, then note a few small code issues I found.

### Why you’re seeing “Failed to verify with reCAPTCHA Enterprise…”
Firebase Phone Auth will try to use reCAPTCHA Enterprise if it’s enabled for your Firebase project. If the web key configured in Firebase Auth doesn’t match the token your page is generating, Firebase can’t validate the token and falls back to reCAPTCHA v2. Common causes:
- The Enterprise site key selected in Firebase Authentication ≠ the key used by the page (wrong project/key).
- Key type mismatch (must be “Website • score” for Enterprise).
- Domains not on the key’s allowlist (needs localhost and your prod domains).
- Config just updated and hasn’t propagated yet (allow 5–10 minutes).

Your code creates an invisible verifier (fine for both v2 and Enterprise). The issue is almost certainly configuration, not how you instantiate it.

```16:23:src/pages/SignUp.jsx
  recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    size: 'invisible',
    callback: () => console.log('reCAPTCHA solved'),
    'expired-callback': () => console.log('reCAPTCHA expired')
  });
  await recaptchaVerifier.render();
```

### Fix checklist (do these in order)
1) In Firebase Console → Authentication → Sign-in method → Phone
- Toggle “reCAPTCHA Enterprise for web”.
- Select your exact Enterprise site key (from the same GCP project as your Firebase project).

2) In Google Cloud Console → reCAPTCHA Enterprise → Keys
- Use a single “Website • score” key for this app.
- Add domains:
  - localhost
  - 127.0.0.1
  - your deployed domain(s) (e.g. famwell-551bc.web.app, custom domain)
- Save and wait 5–10 minutes.

3) Use only that single key in Firebase Auth
- If multiple keys exist (your screenshot shows several), ensure the one selected in Firebase Auth is the same one you intend to use and the others aren’t accidentally referenced.

4) Keep your verifier invisible and stable (your code already does this correctly)
- You’re clearing and recreating the verifier on error; good.

5) Optional (helps Enterprise scoring)
- Provide an action when creating the verifier:
  - Add: action: 'send_otp' to the options object. Enterprise uses action names to build risk signals.

Example:

```javascript
recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
  size: 'invisible',
  action: 'send_otp',
  callback: () => {},
  'expired-callback': () => {}
});
await recaptchaVerifier.render();
```

6) Last resort for local testing
- If you’re blocked locally and just need to test the flow, you can temporarily set:
  - auth.settings.appVerificationDisabledForTesting = true
- Only use this for local dev, not production.

### Small code issues to fix (unrelated to Enterprise but worth addressing)
- Wrong mobile “Sign Up” route in navbar:
```112:117:src/components/Navbar.jsx
<Link
  to="/sign"
  className="px-8 py-[10px] rounded-lg font-medium font-bold text-white bg-[#AF85D9] text-center"
  onClick={() => setIsMenuOpen(false)}
>
  Sign Up
</Link>
```
Change `to="/sign"` → `to="/signup"` to match your router.

- Public API key present in repo; prefer env vars (you already support them). Also fix storage bucket value:
```4:11:src/firebase/config.js
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBLB_lcZXvF0PTOmcdBTNz6ksJfXbSwgQw",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "famwell-551bc.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "famwell-551bc",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "famwell-551bc.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "325951293831",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:325951293831:web:3c29ee2603b76203116b22",
};
```
Use storage bucket `famwell-551bc.appspot.com`.

- Avoid printing secrets to console in production (you log the apiKey/options in `SignUp.jsx`).

- In `Login.jsx`, the logo uses a hashed path that may break across builds. Prefer importing the PNG and using it as a module.

### If you still get the Enterprise token mismatch after the checklist
- Ensure the Enterprise key exists in the exact same Google Cloud project as your Firebase project ID (`famwell-551bc`).
- Remove and re-add the key in Firebase Authentication → Phone sign-in selector, then wait ~10 minutes.
- Try with only one “Website • score” key in the project to avoid confusion.
- Check browser DevTools → Network for the `recaptcha___/anchor`/`enterprise.js` script; with Enterprise enabled you should see enterprise assets load.

