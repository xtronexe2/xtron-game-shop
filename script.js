/* General Styles */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  background-color: #1e1e1e;
  color: #fff;
  text-align: center;
}

.header-content {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
}

.logo {
  height: 120px; /* Adjust logo size */
  width: 120px;
  border-radius: 50%; /* Round shape */
  object-fit: cover; /* Ensures the image fills the circle */
  margin-bottom: 20px; /* Space between logo and text */
}

.brand-name {
  font-size: 32px;
  font-weight: 600;
}

/* Hero Section */
.hero {
  background: url('https://via.placeholder.com/1920x800') no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 100px 20px;
}

.hero h1 {
  font-size: 40px;
  margin-bottom: 20px;
}

.hero .cta-button {
  padding: 15px 30px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
}

.hero .cta-button:hover {
  background-color: #0056b3;
}
