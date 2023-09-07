import './App.css'
import InstagramIcon from './assets/icons/InstgramIcon'
import TwitterIcon from './assets/icons/TwitterIcon'
import NavigationBar from './components/NavigationBar'
import PrimaryHeading from './components/common/PrimaryHeading'
import SecondaryHeading from './components/common/SecondaryHeading'

function App() {
  return (
    <div>

      <section className="bg-hero-bg-img bg-cover bg-no-repeat bg-center w-full h-[100vh] md:h-[170vh]">
        <NavigationBar />

        {/* Heor intro section */}
        <article className="flex flex-col gap-4 md:gap-8 mt-[10%] m-auto w-max h-max">
          <SecondaryHeading content='HIKING guide' />
          <PrimaryHeading content={<span className="text-xl sm:text-3xl md:text-4xl lg:text-7xl">Be prepared for the <br /> Mountains and beyond!</span>} />
          <span className="animate-bounce"> <a href="#content" className="drop-shadow-custom">scroll down </a> <span className="text-3xl">↓</span> </span>
        </article>

        {/* Socila Media Links Section */}
        <ul className="hidden md:flex gap-6 rotate-90 absolute left-4">
          <li><a href="#!">Follow</a></li>
          <li className="rotate-[-90deg]"><a href="#!" className="hover:underline"><TwitterIcon /></a></li>
          <li className="rotate-[-90deg]"><a href="#!" className="hover:underline"><InstagramIcon /></a></li>
        </ul>

      </section >

      <section id="content">
      </section>
    </div >
  )
}

export default App
