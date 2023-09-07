import InstagramIcon from "../../assets/icons/InstgramIcon"
import TwitterIcon from "../../assets/icons/TwitterIcon"


function SideRotatedSocialMediaLinks() {
  return (
    <ul className="hidden md:flex gap-6 rotate-90 absolute left-4">
      <li><a href="#!">Follow</a></li>
      <li className="rotate-[-90deg]"><a href="#!" className="hover:underline"><TwitterIcon /></a></li>
      <li className="rotate-[-90deg]"><a href="#!" className="hover:underline"><InstagramIcon /></a></li>
    </ul>
  )
}

export default SideRotatedSocialMediaLinks
