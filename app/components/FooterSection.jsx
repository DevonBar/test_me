import Image from "next/image"

const FooterSection = () => {
  return (
   <footer className="mt-30">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
      <div className="w-full text-center p-4">
        <h3 className="mb-5 text-2xl text-[#660c0c]">Contact</h3>
        <div className="flex justify-center items-center">
          <Image src={'/footer_images/contact-light-background.png'} 
          alt="contact-light-background" 
          height={280}
          width={280}
          />
        </div>
        <div className="text-center">
          <ul className="text-decoration-none text-[#660c0c] font-bold text-lg flex justify-center items-center flex-row gap-2 my-6">
            <li className="px-3 py-1 bg-base-200 shadow rounded-full">
              <a class="d-flex text-decoration-none align-items-center" target="_blank" href="https://www.facebook.com" aria-label="facebook page link">
                <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
            </li>
            <li className="px-3 py-1 bg-base-200 shadow rounded-full">
              <a class="d-flex text-decoration-none align-items-center" target="_blank" href="https://www.facebook.com" aria-label="facebook page link">
                <i class="fa-brands fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="px-3 py-1 bg-base-200 shadow rounded-full">
              <a class="d-flex text-decoration-none align-items-center" target="_blank" href="https://www.facebook.com" aria-label="facebook page link">
                <i class="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="px-3 py-1 bg-base-200 shadow rounded-full">
              <a class="d-flex text-decoration-none align-items-center" target="_blank" href="https://www.facebook.com" aria-label="facebook page link">
                <i class="fa-brands fa-youtube" aria-hidden="true"></i>
              </a>
            </li>
            <li className="px-3 py-1 bg-base-200 shadow rounded-full">
              <a class="d-flex text-decoration-none align-items-center" target="_blank" href="https://www.facebook.com" aria-label="facebook page link">
                <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="px-3 py-1 bg-base-200 shadow rounded-full">
              <a class="d-flex text-decoration-none align-items-center" target="_blank" href="https://www.facebook.com" aria-label="facebook page link">
                <i class="fa-brands fa-tiktok" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <p className="text-[#660c0c] font-bold text-lg">© Date International</p>
        </div>
      </div>
      <div className="w-full text-center p-4">
        <h3 className="mb-5 text-2xl text-center lg:text-start text-[#660c0c]">General Information</h3>
        <nav className="flex flex-col items-center lg:items-start gap-2 text-sm">
          <ul className="space-y-2 text-center lg:text-start">
            <li><a href="#" className="text-sm">How to Meet Foreign Women</a></li>
            <li><a href="#" className="text-sm">How to Use Our Service</a></li>
            <li><a href="#" className="text-sm">About Date International</a></li>
            <li><a href="#" className="text-sm">Contact Us</a></li>
            <li><a href="#" className="text-sm">Craigslist vs Date International</a></li>
            <li><a href="#" className="text-sm">Traits of Single Foreign Women</a></li>
            <li><a href="#" className="text-sm">Why Date Foreign Women</a></li>
            <li><a href="#" className="text-sm">Why Marry Younger Foreign Women</a></li>
            <li><a href="#" className="text-sm">Foreign Women and Age Gap Relationships</a></li>
            <li><a href="#" className="text-sm">Foreign Brides vs Western Brides</a></li>
            <li><a href="#" className="text-sm">Right International Dating Questions to Ask</a></li>
            <li><a href="#" className="text-sm">International Dating Travel Tips</a></li>
          </ul>
        </nav>

      </div>
      <div className="w-full text-center p-4">
        <h3 className="mb-5 text-2xl text-center lg:text-start text-[#660c0c]">Women, Culture & History</h3>
        <nav className="flex flex-col items-center lg:items-start gap-2 text-sm">
          <ul className="space-y-2 text-center lg:text-start">
            <li><a href="#" className="text-sm">The Culture and Traditions of International Women</a></li>
            <li><a href="#" className="text-sm">International Dating Culture</a></li>
            <li><a href="#" className="text-sm">International Marriage Culture</a></li>
            <li><a href="#" className="text-sm">All About Asia</a></li>
            <li><a href="#" className="text-sm">All About Europe</a></li>
            <li><a href="#" className="text-sm">All About Latin America</a></li>
            <li><a href="#" className="text-sm">History of International Matchmaking</a></li>
          </ul>
        </nav>

      </div>
       <div className="w-full text-center p-4">
        <h3 className="mb-5 text-2xl text-center lg:text-start text-[#660c0c]">Policies</h3>
        <nav className="flex flex-col items-center lg:items-start gap-2 text-sm">
          <ul className="space-y-2 text-center lg:text-start">
            <li><a href="#" className="text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-sm">Terms and Condition</a></li>
          </ul>
        </nav>

      </div>
    </div>
  </footer>

  )
}

export default FooterSection