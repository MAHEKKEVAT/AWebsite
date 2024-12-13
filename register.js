<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCsoet2YlQuE_VCn38JxSLEVTqPcJVoULk",
    authDomain: "mywebsite-3f0a8.firebaseapp.com",
    projectId: "mywebsite-3f0a8",
    storageBucket: "mywebsite-3f0a8.firebasestorage.app",
    messagingSenderId: "683900610906",
    appId: "1:683900610906:web:b4364a57332989b8166b63",
    measurementId: "G-PTTN3M405E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
