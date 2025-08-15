import { Link } from "react-router-dom";

const saleseader = () => {
  return (
    <div className="flex flex-col bg-slate-800 h-screen">
      <aside className="w-64 text-white shadow-lg p-6 flex flex-col h-full rounded-r-2xl">
        <nav className="flex-1">
          {[
            { name: "Home", path: "/sales/home" },
            { name: "Client Type", path: "/sales/clienttype" },
            { name: "Opportunities", path: "/sales/opportunities" },
            { name: "Proposals", path: "/sales/proposals" },
            { name: "Projects", path: "/sales/projects" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-4 py-2 my-1 rounded-lg hover:bg-slate-200 hover:text-slate-950 transition font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/sales";
          }}
          className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Logout for sales...!
        </button>
      </aside>
    </div>
  );
};

export default saleseader;
