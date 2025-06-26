import Image from "next/image"
import Sidebar from "./Sidebar"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between items-center p-5">
        <div className="flex items-center gap-8 ms-5">
            <Sidebar/>
            <Image src={'/date-international-logo.webp'} alt="date-international-logo" height={63.2} width={250}/>
        </div>
        <div>
            <div>
              <a href="#" className="shadow px-9 py-2 rounded-s-full bg-[#D9D9D926]">Search Women's ID or Use Advance Search</a>
              <a href="#" className="shadow px-3 py-2 rounded-e-full bg-[#D9D9D926] me-5">Go</a>
              <a href="#" className="shadow px-3 py-2 rounded-full bg-[#660C0C] text-white inline-flex items-center space-x-2">
                <span>Sign-up Today, It's Totally Free.</span>
                <svg
                  style={{ animationDuration: '1.5s', marginTop: '-0.6rem' }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-plus fa-bounce animate-bounce"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
              </a>

            </div>
            <div className="flex justify-between gap-5 mt-3">
              <a href="#" className="text-sm">Home</a>
              <a href="#" className="text-sm">Our Services</a>
              <a href="#" className="text-sm">Tour Schedule</a>
              <a href="#" className="text-sm">Date International Profiles</a>
              <a href="#" className="text-sm">All Ladies Profiles</a>
              <a href="#" className="text-sm">Member's Login</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar