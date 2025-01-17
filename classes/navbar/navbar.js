const navbarPlaceholder = document.getElementById("navbar");

// Voeg de navigatiebalk HTML toe
navbarPlaceholder.innerHTML = `
    <nav id="navbar-placeholder">
    <div class="navbar-container">
            <!-- Logo -->
            <div class="logo">
            <a href="index.html">
                <img src="../../assets/android-chrome-192x192.png" alt="Logo" />
            </div>
            <!-- Navigatiebalk -->
        <ul class="navbar-list">
            <li><a href="about.html">Over Ons</a></li>
            <li><a href="contactpage.html">Contact</a></li>
        </ul>
    </nav>
`;
