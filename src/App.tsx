import './App.css'
import NavigationBar from './components/NavigationBar'
import PrimaryHeading from './components/common/PrimaryHeading'
import SecondaryHeading from './components/common/SecondaryHeading'
import SideRotatedSocialMediaLinks from './components/common/SideRotatedSocialMediaLinks'

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
        <SideRotatedSocialMediaLinks />

      </section >

      <section id="content">
      </section>
    </div >
  )
}

export default App
