const Sidebar = ()=>{
  return(
   <aside className="hidden h-screen w-64 lg:flex bg-gray-600 text-white fixed flex-col   ">
      <h2 className="text-2xl p-4">My App</h2>
      
   <ul className="mt-4 space-y-2">
    <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-left">Dashboard</li>
    <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-left">Profile</li>
    <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-left">Setting</li>
   </ul>
  
   </aside>
  )
}
export default Sidebar