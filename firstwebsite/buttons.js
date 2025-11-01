const aboutME = document.getElementById("about-me");
const skills = document.getElementById("skills");
const vision = document.getElementById("vision");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const text =  document.getElementById("text")

text.textContent = "WELCOME!"
text.style.textAlign = "center";

aboutME.onclick = function(){
  text.innerHTML = (`
    <h2>Who Am I ?</h2>
    I'm <strong>Imad Eddine Kahoul</strong>, a web developer and technology enthusiast from Algeria.  
    I'm passionate about coding, design, and creating digital worlds that feel alive — blending technology with imagination.  
    <br><br>
    My goal is to shape the future through innovation and creativity, one project at a time.  
    <br><br>
    <em>In a world of endless data and light, I build what connects them.</em>
    `)
  text.style.textAlign = "left";
  };
  skills.onclick = function(){
  text.innerHTML = (`
  <p>
    I specialize in crafting interactive and responsive web experiences.<br><br>
    <strong>Languages  :</strong><br>
    <ul>
    <li>HTML</li> 
    <li>CSS </li> 
    <li>JavaScript </li> 
    <li>C++</li>
    </ul>
    <br>
    <strong>TOOLS  :</strong>
    <ul>
    
    <br>
    <li>Git </li>
    <li>VS Code </li> 
    <li>Figma</li>
    </ul>
    <br><br>
    <em>Every line of code is a step toward building the future I imagine.</em>
  </p>
</div>
    `)
    text.style.textAlign = "left";
  };
vision.onclick = function(){
  text.innerHTML =(`
    <h2>My Vision</h2>
  <p>
    To reach beyond the ordinary — shaping a digital universe  
    where code breathes life and light travels through imagination.  
  </p>
  <p>
    My vision is to create systems that feel alive,  
    designs that echo the pulse of the cosmos,  
    and experiences that blur the line between reality and the infinite.
  </p>
`)
    };
projects.onclick = function(){
  text.textContent = ("soon")
};
contact.onclick = function(){
  text.innerHTML = (`
    <h2>Contact Me</h2>
  <p>
    Let’s connect across the digital void —  
    whether to build, create, or spark new ideas among the stars.
  </p>
  <h3>Social Media<h3>
  📸 <a href="https://www.instagram.com/imadeddinekaah?igsh=MXR4aTVsMjA0bW13cA==" target="_blank">
  <strong>Instagram</strong> 
  </a>
  <br>
  🌐 <a href="https://www.facebook.com/share/16MQK8BZ7L/" target="_blank">
  <strong>Facebook</strong>
  </a>
  <br>
  👻 <a href="https://www.snapchat.com/add/ikhhack?share_id=qMFgIp3CuaI&locale=en-GB" target="_blank"><strong>snapchat</strong> 
  </a>
  <h3>Other Contact<h3>
  <p>
  📧 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ikhhack22@gmail.com" target="_blank">Gmail</a>
  <br>
 
  💼 <a href="https://www.linkedin.com/in/imad-eddine-0195a6395/" target="_blank">
  <strong>LinkedIn</strong></a><br>
  🛰 <a href="https://github.com/ikhhack22-hub" target="_blank"><strong>GitHub
  </strong></a> 
  </p>
  <br>
  <br>
  <p style="text-align: center; margin-top: 30px; color: #9aa0ff;">
  🔒 Encrypted presence. <span style="color:#caa0ff;">Visible impact.</span>
</p>

`)
text.style.textAlign = "left";
}