import Image from "next/image"

const RegisterSection = () => {
  return (
   <section
    className="w-full h-[460px] bg-cover bg-center relative"
    style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/section-bg/date-international-background.jpg')",
    }}>

        <div >
            <div className="flex justify-evenly items-center h-full mb-6">
                <div>
                    <div className="text-4xl text-white font-bold mb-4 relative z-10">
                        <p className="mt-1">Date International</p>
                        <p className="mt-1">Stunning Foreign Women</p>
                        <p className="mt-1">Looking for Marriage</p>
                    </div> 
                    <div className="mt-10">
                        <p className="text-white text-lg">
                            Searching for the love of your life? Meet beautiful Foreign Women as you take advantage of our singles
                            <br />
                            vacation and the best matchmaking service there is!
                        </p>
                    </div>
                </div>
                <div className="relative w-[475] h-[300px] mt-10">
                    <Image src={'/yt_pic/asia-women10.webp'} alt="asia-women" fill className="object-cover"/>
                </div>
            </div>

            <div className="text-center">
                <a href="#" className="bg-[#660C0C] me-5 text-white text-lg px-8 py-3 rounded-full">Register for FREE</a>
                <a href="#" className="bg-white text-blue-700 me-5 text-lg px-8 py-3 rounded-full">See Our Tour Schedules</a>
            </div>
            <p className="text-center text-lg text-white mt-8">Get Started Today. No credit card required.</p>
        </div>

    </section>

  )
}

export default RegisterSection