const Sidebar = ()=>{
  return(
   <aside className="hidden h-screen w-64 lg:flex bg-gray-600 text-white fixed flex-col items-start gap-4 p-6 ">
      <h2 className="text-2xl">My App</h2>
      
   <ul className="flex flex-col gap-2 text-lg  mt-4 w-full">
    <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-left">Dashboard</li>
    <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-left">Profile</li>
    <li className="hover:bg-gray-700 px-4 py-2 rounded w-full text-left">Setting</li>
   </ul>
  
   </aside>
  )
}
export default Sidebar