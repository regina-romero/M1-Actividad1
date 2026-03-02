interface SidebarProps {
  logo: string;
  activePage: string;
}

function Sidebar(props: SidebarProps) {
  return (
    <div className="w-64 flex h-screen flex-col justify-between border-e border-gray-100 bg-white">
      <div className="px-4 py-6">
        <span className="grid h-20 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          <img src={props.logo} alt="Logo" className="w-32 h-32 object-contain" />
        </span>

        <ul className="mt-6 space-y-2">
          <li className="border-b border-gray-100">
            <a href="#" className={`block rounded-lg px-4 py-2 text-lg font-medium ${props.activePage === "My Dogs" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
              My Dogs
            </a>
          </li>
          <li className="border-b border-gray-100">
            <a href="#" className={`block rounded-lg px-4 py-2 text-lg font-medium ${props.activePage === "Vaccines" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
              Vaccines
            </a>
          </li>
          <li className="border-b border-gray-100">
            <a href="#" className={`block rounded-lg px-4 py-2 text-lg font-medium ${props.activePage === "Appointments" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
              Appointments
            </a>
          </li>
          <li>
            <a href="#" className={`block rounded-lg px-4 py-2 text-lg font-medium ${props.activePage === "Reminders" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
              Reminders
            </a>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 px-4 py-4">
        <a href="#" className={`block rounded-lg px-4 py-2 text-lg font-medium ${props.activePage === "Logout" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
          Logout
        </a>
      </div>
    </div>
  );
}

export default Sidebar;