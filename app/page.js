import ImageSection from "./components/ImageSection"
import Navbar from "./components/Navbar"
import RegisterSection from "./components/RegisterSection"
import FirstSection from "./components/FirstSection"
import SecondSection from "./components/SecondSection"
import VideoSection from "./components/VideoSection"
import ThirdSection from "./components/ThirdSection"
import TestimonialSection from "./components/TestimonialSection"
import FooterSection from "./components/FooterSection"

const page = () => {
  return (
    <>
      <Navbar />
      <ImageSection/>
      <RegisterSection/>
      <FirstSection />
      <SecondSection/>
      <VideoSection/>
      <ThirdSection/>
      <TestimonialSection/>
      <FooterSection/>
      <div>
        asdasdsa
      </div>
    </>
  )
}

export default page