import NavLink from "./NabLink"
const Sidebar = ({isOpen})=>{
  return(
   <aside className={`h-screen w-64 flex  bg-gray-600 text-white fixed flex-col items-center z-50
   ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 `}>

      <h2 className="text-2xl p-4">My App</h2>
      
   <ul className="mt-4 space-y-2">
    <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-left">Dashboard</li>
    <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-left">Profile</li>
    <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-left">Setting</li>
   </ul>
  
  <ul className="lg:hidden">
  <NavLink></NavLink>
  </ul>
   </aside>
  )
}
export default Sidebar