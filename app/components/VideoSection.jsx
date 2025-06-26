
const VideoSection = () => {
  return (
    <section className="border h-[300px] mx-44">
        <div className="bg-[#196b77] text-white p-5">Listen to some of our stories..</div>
        <div className="flex justify-evenly items-center gap-5 p-5">
            <div className=" h-[150px] w-[350px] border text-center flex justify-evenly items-center">
                <p>Videos Available Soon</p>
            </div>
            <div className=" h-[150px] w-[350px] border text-center flex justify-evenly items-center">
                <p>Videos Available Soon</p>
            </div>
            <div className=" h-[150px] w-[350px] border text-center flex justify-evenly items-center">
                <p>Videos Available Soon</p>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <a href="#" className="btn btn-sm btn-error">View More Videos</a>
        </div>
    </section>
  )
}

export default VideoSection