import { useState, useRef } from "react";
import "./App.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Images from "./images/images.jpg";
import Images2 from "./images/images2.png";
import Images3 from "./images/images.3.png";

function App() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Web Designer", "WordPress Dev"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  const [active, setActive] = useState("home"); // Default active state
  const [menuOpen, setMenuOpen] = useState(false); // Toggle state for mobile menu

  // Refs for different sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    education: educationRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const handleSetActive = (section) => {
    setActive(section);
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on selection
  };

  return (
    <>
     <header>
      <nav>
          <div id="menu-toggle" className={menuOpen ? "open" : ""} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="font-bold text-4xl text-black" id="right1">
          Mohammad <span className="left1"> Hasnain </span>.
        </div>

        {/* Hamburger Menu */}
      

        {/* Navigation Menu */}
        <div className={`right ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><button className={active === "home" ? "active" : ""} onClick={() => handleSetActive("home")}>Home</button></li>
            <li><button className={active === "about" ? "active" : ""} onClick={() => handleSetActive("about")}>About</button></li>
            <li><button className={active === "services" ? "active" : ""} onClick={() => handleSetActive("services")}>Services</button></li>
            <li><button className={active === "education" ? "active" : ""} onClick={() => handleSetActive("education")}>Education</button></li>
            <li><button className={active === "projects" ? "active" : ""} onClick={() => handleSetActive("projects")}>Projects</button></li>
            <li><button className={active === "contact" ? "active" : ""} onClick={() => handleSetActive("contact")}>Contact Me</button></li>
          </ul>
        </div>
      </nav>
    </header>

      {/* Sections */}
      <section ref={homeRef} className="section home">
 <img
        src="https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwBPgOswl-JKASMgdh1NzJBk"
        className="image"
      />
 <div className="leftsection">
              Hi, This Is  <span className="leftsection1">Hasnain</span><span className="leftsection2">Hadi</span> 
  <h4 className="Cursor">
                I am into a{" "}
                <span className="typertext">{text}</span>
                <span>
                  <Cursor />
                </span>  
              </h4>
              <h5 className="paragraph">
               I am passionate Web Developer about creating dynamic <br/>
               and user-friendly websites. My portfolio showcases a<br/>
               variety of projects that highlight my expertise in<br/>
               front-end development, including responsive design<br/> 
               and custom web applications. 
             </h5>
             <div class="social">
            <a href="https://www.facebook.com/profile.php?id=61551869811844"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="social-icon" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a>
<a href="https://github.com/hasnainhadikhan" target="_blank"><svg fill="currentColor" viewBox="0 0 24 24" class="social-icon" width="24" height="24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.385.6.113.793-.262.793-.58 0-.286-.01-1.04-.015-2.04-3.34.725-4.043-1.61-4.043-1.61-.546-1.385-1.333-1.756-1.333-1.756-1.089-.744.083-.728.083-.728 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.809 1.305 3.495.998.107-.776.418-1.305.762-1.605-2.667-.3-5.467-1.334-5.467-5.932 0-1.31.468-2.382 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.526 11.526 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.804 5.628-5.476 5.922.43.372.813 1.102.813 2.222 0 1.605-.015 2.9-.015 3.292 0 .32.192.697.798.578C20.565 21.797 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg></a>
            <a href="#"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="social-icon" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a>
            <a href="https://www.linkedin.com/in/hasnain-hadi-khan-8542532b8/"><svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="social-icon" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg></a>
        </div> 
                <button className="firstbutton">Hire Me</button>{" "}  
                </div>
      </section>   
      <section ref={aboutRef} className="section about">
      <section className="secondSection">
             <div className="about-text">
                <h2>Hasnain Hadi Khan</h2>
                <h2 id="designation">
                    Frontend Developer | Web Designing       
                </h2>
                <p className="about-text1">
                    Over the past year, I have been working as a Frontend Developer | Web Designer.<br />
                    Working on projects, gaining valuable industry insights. In my role as a <br />
                    front-end developer, I bring designs to life on the web, ensuring interfaces <br />
                    are both visually pleasing and functional. My dual expertise allows me to <br />
                    collaborate seamlessly with design and development teams, creating cohesive <br />
                    and engaging web experiences.
                    <br/>
                    I have honed my skills in HTML, CSS, and JavaScript, and I am proficient <br />
                    in using frameworks like Bootstrap and Tailwind CSS. Bootstrap enables me to <br />
                    quickly design responsive, mobile-first sites with pre-designed components <br />
                    and a reliable grid system. Tailwind CSS offers a utility-first approach, <br />
                    allowing me to build custom designs directly in my markup, enhancing code <br />
                    maintainability.
                    <br />
                    React JS allows me to create interactive user interfaces with reusable <br />
                    components, improving project scalability and user engagement. My combined <br />
                    skills in front-end development, along with my growing proficiency in React JS, <br />
                    help me bridge the gap between design and technology.
                    <br />
                    As I continue to grow, I aim to stay updated with the latest trends and <br />
                    technologies, striving to create experiences that leave a lasting impact. My <br />
                    goal is to deliver exceptional value to clients and contribute to the <br />
                    advancement of the digital landscape.
                </p>
                <button id="btn"
                   onClick={() => window.open("https://1drv.ms/b/c/26e00cd628ce5d63/Ea5i5VKeevNAoEeMRoWEQkcB26Z9mnwtm_1NCP3AEcg6lA?e=UWgeIV", "_blank")} 
                >Resume</button>
            </div> 
            <div class="about-mainbg">
  <div class="about-img">
    <img src="https://avatars.githubusercontent.com/u/153942494?v=4" class="about-img-inner" />
  </div>
</div>
    </section>
      </section>
      <section ref={servicesRef} className="section services">
<section className="services-section">
  
    <div className="services-container">
        <div className="services-main">
            <div className="service-box">
                <img className="service-img" src="https://th.bing.com/th/id/R.c2d6e9861f5bb81ecd0231e80adbfbe3?rik=rIv3f1FxqXPIVw&pid=ImgRaw&r=0" />
                <h3 className="service-title">HTML5</h3>
            </div>
            <div className="service-box">
                <img className="service-img" src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" />
                <h3 className="service-title">CSS 3</h3>
            </div>
            <div className="service-box">
                <img className="service-img" src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png" />
                <h3 className="service-title">JavaScript</h3>
            </div>
            <div className="service-box">
                <img className="service-img" src="https://th.bing.com/th/id/R.76984d489016bb78c8c347e661bb8e94?rik=v6h54jhMOjGWxg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f62a76492bd73a4af5c5d4fb9.png&ehk=CCD7CF%2fzwR7i%2bBDVkut8Jbuzx%2bibavojdYkrIJG2PIc%3d&risl=&pid=ImgRaw&r=0" />
                <h3 className="service-title">Bootstrap</h3>
            </div>
            <div className="service-box">
                <img className="service-img" src="https://bk52.github.io/react-tailwind-components/static/media/TailwindCss.da1247e1bbe41267feaf.png" />
                <h3 className="service-title">Tailwind CSS</h3>
            </div>
            <div className="service-box">
                <img className="service-img" src="https://th.bing.com/th/id/R.c3ba82a536fe4983dad4c06b578dcd5d?rik=P4VNxytQXLJSJw&pid=ImgRaw&r=0" />
                <h3 className="service-title">React JS</h3>
            </div>
        </div>
    </div>
</section>
 </section>
      <section ref={educationRef} className="section education">
      <section class="four-section">
    <h1 class="section-title">My Education</h1>
    <div class="education-box">
      

        <div class="education-content">
            <h2 class="education-title">HSC Part Two (2nd Year)</h2>
            <h5 class="education-subtitle">Karachi Board</h5>
            <p class="education-date">Present | 2025</p>
        </div>
        <img src="https://th.bing.com/th/id/R.059f502c4f7f91ed83bc3d768c3eb825?rik=3564g%2f8og1PsbQ&riu=http%3a%2f%2fstbb.edu.pk%2fstyle%2fimages%2flogo.png&ehk=L4DbnLcrdoJKVrtGcalNhEZla6%2fdtxiQfuV2Pf5JKXQ%3d&risl=&pid=ImgRaw&r=0"
            class="education-img" alt="Karachi Board Logo"/>
    </div>

    <div class="education-box reverse">
        <div class="education-content">
            <h2 class="education-title">Saylani Mass IT Training</h2>
            <h5 class="education-subtitle">Web and App Development</h5>
            <p class="education-date">Present | 2025</p>
        </div>

        <img src="https://mir-s3-cdn-cf.behance.net/projects/404/aba3a466532591.Y3JvcCwzNjgyLDI4ODIsMTQ1LDYz.png"
            class="education-img" alt="Saylani Logo"/>
    </div>
</section>

</section>
     
      <section ref={projectsRef} className="section projects">
      <section id="projects">
    <h2 class="section-titletwo">My Projects</h2>
    <div class="project-container">
        
        <div class="project-card">
            <div class="project-image">
                <img src={Images2}/>
                <div class="overlay">
                    <a href="https://green-protocol.vercel.app/" target="_blank" class="btn">Live Demo</a>
                    <a href="https://github.com/hasnainhadikhan/Green-Protocol" target="_blank" class="btn">GitHub</a>
                </div>
            </div>
            <div class="project-info">
                <h3>Green Portocol</h3>
                <p>A portfolio website built with HTML, CSS, and JavaScript.</p>
            </div>
        </div>
        <div class="project-card">
            <div class="project-image">
              <a href="https://e-commere-shop-swift-mini-hakathon.vercel.app" >
                <img src={Images} alt="Project 2"/>
                </a>
                <div class="overlay">
                    <a href="https://e-commere-shop-swift-mini-hakathon.vercel.app" target="_blank" class="btn">Live Demo</a>
                    <a href="https://github.com/hasnainhadikhan/E-commere-ShopSwift-mini-Hakathon-" target="_blank" class="btn">GitHub</a>
                </div>
            </div>
            <div class="project-info">
                <h3>ShopSwift</h3>
                <p>React-based web application with dynamic content.</p>
            </div>
        </div>
        <div class="project-card">
            <div class="project-image">
                <img src={Images3} alt="Project 3"/>
                <div class="overlay">
                    <a href=" https://hasnainhadikhan.github.io/iBlogVenom/" target="_blank" class="btn">Live Demo</a>
                    <a href="https://github.com/hasnainhadikhan/iBlogVenom" target="_blank" class="btn">GitHub</a>
                </div>
            </div>
            <div class="project-info">
                <h3>iBlogVenom</h3>
                <p>A simple and engaging blog website to share ideas and insights.</p>
            </div>
        </div>

    </div>
</section>


      </section>
      <section ref={contactRef} className="section contact">
      <section className="fourthSection">
    
            <div className="bg-white mt-10" id="contact-main">
              <div className="">
                <h2 className="title-main">Contact Me</h2>
                <img
                  className="contact-image"
                  src="https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwBPgOswl-JKASMgdh1NzJBk"
                />
              </div>
              <div className="conatct-inputbg" id="conatct-inputs">
                <h1 className="text-4xl ml-12 -mt-12 mb-12">Get In Touch</h1>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    aria-label="First name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Last name"
                  />
                </div>
              
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                    aria-label="Last name"
                  />
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    id="floatingTextarea2"
                    style={{ height: 103 }}
                    defaultValue={""}
                  />
                  <label htmlFor="floatingTextarea2" />
                </div>
                <button className="ton">Send Message</button>
              </div>
            </div>
          </section>
      </section>
  
    </>
  );
}

export default App;

