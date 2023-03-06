import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="absolute inset-0">
      <div className="flex bg-slate-700 text-white items-center h-screen w-screen flex-col font-roboto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
