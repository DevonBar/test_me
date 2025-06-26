import Image from "next/image"
const Sidebar = () => {
  return (
    <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="flex flex-col items-center cursor-pointer">
                    <Image src={'/icons8-hamburger-menu-50.png'} alt="hamburger-menu" height={35} width={35}/>
                    Main Menu
                </label>
            </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar