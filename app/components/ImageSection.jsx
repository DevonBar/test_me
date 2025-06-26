import Image from "next/image"
import { image } from "../data/image"

const ImageSection = () => {

    return <div className="flex flex-wrap gap-2 justify-center">
      {image.map((item) => (
        <div key={item.id} className="flex justify-center items-center p-5 relative">
            <Image
            src={`/${item.img}`} 
            alt={`Image ${item.id}`}
            height={200}
            width={110}         
            className="rounded-md"/>
            <span className="h-7 w-7 bg-[#0A5145] rounded-full absolute top-7 right-6 flex justify-center items-center">
                <i className="fa-solid fa-check fa-sm text-white" aria-hidden="true"></i>
            </span>
        </div>
      ))}
    </div>
}


export default ImageSection;