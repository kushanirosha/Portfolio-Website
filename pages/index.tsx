import Head from 'next/head';
import Image from 'next/image';
import { Link as ScrollLink, Element } from 'react-scroll';

export default function Home() {
  const handleDownloadCV = () => {
    window.open('/Kushan Dissanayake CV.pdf', '_blank');
  };
  return (
    <div>
      <Head>
        <title>kushandissanayake</title>
        <link rel="icon" href="/profile.jpg" />
      </Head>

      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="text-lg font-bold">KUSHAN DISSANAYAKE</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Me</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact Me</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-20">
          <div className="flex flex-col items-start md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Kushan Dissanayake</h1>
            <h2 className="text-2xl text-blue-600 mb-4">BSc. (Hons) Information Systems</h2>
            <p className="text-lg mb-8">Undergraduate in Rajarata University of Sri Lanka </p>
            <div className="flex space-x-4">
            <button onClick={handleDownloadCV} className="bg-green-500 text-white px-4 py-2 rounded">
            Download CV
          </button>
          <ScrollLink to="contact" smooth={true} duration={500} className="border border-gray-500 px-4 py-2 rounded cursor-pointer">
            Contact Me
          </ScrollLink>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <Image src="/profile.jpg" alt="Your Name" width={300} height={300} className="rounded-full border-4 border-green-500"/>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="flex flex-col md:flex-row items-center p-20 bg-white">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image src="/About me.jpg" alt="About Profile" width={400} height={400} className=""/>
          </div>
          <div className="md:w-1/2 md:pl-20">
            <h3 className="text-lg text-gray-500 mb-2">PERSONAL DETAILS</h3>
            <h2 className="text-4xl font-bold mb-4">ABOUT ME</h2>
            <p className="text-lg mb-8">
            I am hardworking energetic individual, who is willing to take any challenging task with ability to work well both in a team environment as well as using own initiative. I am looking to
            expand my knowledge and skills which I got through my schools, university and institutes.
            </p>
            <a href="https://www.linkedin.com/in/kushan-dissanayake-962b1625b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Full Details</button>
              </a>
            </div>
        </section>

         {/* Skills Section */}
         <section className="py-20 bg-green-900 text-white" id="skills">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2 px-4">
            <h3 className="text-xl font-semibold mb-4 underline">Technical Skills</h3>
            <div className="mt-4 text-left">
              <div className="mb-4">
                <p>JAVA <span className="float-right">90%</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <p>Next.js <span className="float-right">60%</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <p>JavaScript <span className="float-right">85%</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <p>Python <span className="float-right">50%</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <p>React <span className="float-right">75%</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-4 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-4 underline">Professional Skills</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="radial-progress text-blue-500" style={{ '--value': 90 }}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white">90%</div>
                </div>
                <p className="mt-2">Creativity</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="radial-progress text-blue-500" style={{ '--value': 65 }}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white">65%</div>
                </div>
                <p className="mt-2">Communication</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="radial-progress text-blue-500" style={{ '--value': 75 }}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white">75%</div>
                </div>
                <p className="mt-2">Problem Solving</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="radial-progress text-blue-500" style={{ '--value': 85 }}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white">85%</div>
                </div>
                <p className="mt-2">Teamwork</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
        {/* My Offered Services Section */}
<section id="services" className="py-20 bg-white text-center">
  <h2 className="text-4xl font-bold mb-4">My Offered Services</h2>
  <p className="text-gray-500 mb-8">
    "Transforming Concepts into Digital Masterpieces"
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-20">
    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center border-transparent hover:border-blue-500 border-4 transition-colors duration-300 ease-in-out">
      <Image src="/web-design.jpg" alt="Web Design" width={50} height={50} />
      <h3 className="text-2xl font-bold mt-4 mb-2">Web Design</h3>
      <p className="text-gray-500 text-center">I offer professional web design services to create visually stunning, user-friendly, and responsive websites.</p>
    </div>
    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center border-transparent hover:border-blue-500 border-4 transition-colors duration-300 ease-in-out">
      <Image src="/web-development.png" alt="Web Development" width={50} height={50} />
      <h3 className="text-2xl font-bold mt-4 mb-2">Web Development</h3>
      <p className="text-gray-500 text-center">I offer professional web development services, specializing in creating responsive, user-friendly, and visually appealing websites.</p>
    </div>
    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center border-transparent hover:border-blue-500 border-4 transition-colors duration-300 ease-in-out">
      <Image src="/mobile-development.png" alt="Mobile Application Development" width={50} height={50} />
      <h3 className="text-2xl font-bold mt-4 mb-2">Mobile Application Development</h3>
      <p className="text-gray-500 text-center">We specialize in creating custom mobile apps for both iOS and Android platforms.</p>
    </div>
    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center border-transparent hover:border-blue-500 border-4 transition-colors duration-300 ease-in-out">
      <Image src="/software-design.png" alt="Software Design" width={50} height={50} />
      <h3 className="text-2xl font-bold mt-4 mb-2">Software Design</h3>
      <p className="text-gray-500 text-center">Transform your vision into a functional, user-friendly application with our comprehensive software design services.</p>
    </div>
    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center border-transparent hover:border-blue-500 border-4 transition-colors duration-300 ease-in-out">
      <Image src="/app-interface.jpg" alt="Apps Interface" width={50} height={50} />
      <h3 className="text-2xl font-bold mt-4 mb-2">Apps Interface</h3>
      <p className="text-gray-500 text-center">Crafting intuitive and visually appealing app interfaces that enhance user experience and engagement.</p>
    </div>
    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center border-transparent hover:border-blue-500 border-4 transition-colors duration-300 ease-in-out">
      <Image src="/graphic-design.png" alt="Graphic Design" width={50} height={50} />
      <h3 className="text-2xl font-bold mt-4 mb-2">Graphic Design</h3>
      <p className="text-gray-500 text-center">We specialize in creating unique, high-quality designs for branding, marketing materials, and digital content.</p>
    </div>
  </div>
</section>


{/* Projects Section */}
<section id="projects" className="py-20 bg-gray-100 text-center">
  <h2 className="text-4xl font-bold mb-8">My Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-20">
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <Image src="/company we site.png" alt="Company official webpage" width={300} height={200} className="rounded"/>
      <h3 className="text-xl font-bold mt-4">Company official webpage</h3>
      <p className="text-gray-500 text-center">HTML, CSS, JavaScript, MySql</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <Image src="/portfolio web site.png" alt="Portfolio Website" width={300} height={200} className="rounded"/>
      <h3 className="text-xl font-bold mt-4">Portfolio Website</h3>
      <p className="text-gray-500 text-center">Reactjs, Nextjs, Tailwind CSS, Nodejs</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <Image src="/projects/portfolio-react.png" alt="Educa Tution Class website" width={300} height={200} className="rounded"/>
      <h3 className="text-xl font-bold mt-4">Educa Tution Class website</h3>
      <p className="text-gray-500 text-center">Angular, SpringBoot</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <Image src="/projects/ddec.png" alt="Fuel Expenses Recording System" width={300} height={200} className="rounded"/>
      <h3 className="text-xl font-bold mt-4">Fuel Expenses Recording System</h3>
      <p className="text-gray-500 text-center">Java, JavaScript, Firebase</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <Image src="/FERS.png" alt="Fuel Expenses Recording App" width={300} height={200} className="rounded"/>
      <h3 className="text-xl font-bold mt-4">Fuel Expenses Recording App</h3>
      <p className="text-gray-500 text-center">Java, MySql, Figma, Android Studio</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <Image src="/projects/buddhist-flag.png" alt="Translator & Text to Speach Software" width={300} height={200} className="rounded"/>
      <h3 className="text-xl font-bold mt-4">Translator & Text to Speach Software</h3>
      <p className="text-gray-500 text-center">Python, Tkinter</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <Image src="/projects/calculator-react.png" alt="Calculator" width={300} height={200} className="rounded"/>
      <h3 className="text-xl font-bold mt-4">Calculator</h3>
      <p className="text-gray-500 text-center">Java, Kodular</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <Image src="/Tic Tac game.png" alt="Tic-Tac Toy Game App" width={300} height={200} className="rounded"/>
      <h3 className="text-xl font-bold mt-4">Tic-Tac Toy Game App</h3>
      <p className="text-gray-500 text-center">Java, Figma</p>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <Image src="/company webapp.png" alt="Company Webapp" width={300} height={100} className="rounded"/>
      <h3 className="text-xl font-bold mt-4">Company Webapp</h3>
      <p className="text-gray-500 text-center">Java, Android Studio</p>
    </div>
  </div>
</section>

        {/* Contact Me Section */}
        <section id="contact" className="py-20 bg-slate-900 text-white text-center">
          <h2 className="text-4xl font-bold mb-8 underline">Contact Me</h2>
          <div className="flex flex-col md:flex-row justify-around items-center mb-8">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold mb-4">📍 ADDRESS:</h3>
              <p className="text-lg">No: 325,</p>
              <p className="text-lg">Makola North,</p>
              <p className="text-lg">Makola,</p>
              <p className="text-lg">Kadawatha,</p>
              <p className="text-lg">Sri Lanka.</p>
            </div>
            <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">📞 CALL ME:</h3>
            <a href="tel:0710836990" className="text-lg bg-gray-700 px-4 py-2 rounded block">
               071 08 36 990
            </a>
             <br />
            <a href="tel:0705225221" className="text-lg bg-gray-700 px-4 py-2 rounded block">
               070 522 522 1
            </a>
            </div>

            <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
              <h3 className="text-2xl font-bold mb-4">📧 E-MAIL:</h3>
              <a href="mailto:kushandissanayake57@gmail.com" className="text-lg text-blue-400 hover:underline">kushandissanayake57@gmail.com</a>
            </div>
            <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
              <h3 className="text-2xl font-bold mb-4">🔗 FOLLOW ME:</h3>
              <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/kushan-dissanayake-962b1625b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="">
                  <Image src="/linkedin.png" alt="Viber" width={34} height={34}/>
                </a>
                <a href="https://github.com/kushanirosha" className="">
                  <Image src="/github.png" alt="Viber" width={34} height={34}/>
                </a>
                <a href="https://discord.gg/https://discord.gg/fGsjwDgB" className="">
                  <Image src="/discord.png" alt="Facebook" width={34} height={34}/>
                </a>
                <a href="https://www.instagram.com/kushan_dissanayak?igsh=Yzh5Y3ZsbnJtdDEy" className="">
                  <Image src="/instagram.jpg" alt="WhatsApp" width={34} height={34}/>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-black text-center py-4">
        <p className="mb-2">© 2024 All Rights Reserved | <a href="#" className="text-blue-400 hover:underline">Site Map</a>
</p>
      </footer>
    </div>
  );
}
