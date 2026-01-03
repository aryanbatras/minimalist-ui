import { DocsNavbar } from "../Navigation/DocsNavbar";
import { DocsSidebarDesktop } from "../Navigation/DocsSidebarDesktop";
import { DocsSidebarMobile } from "../Navigation/DocsSidebarMobile";
import { useSidebar } from "../../../context/SidebarContext";

export function DocsLayout({ children }) {
  const { sideBar } = useSidebar();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <DocsNavbar />      
      
      <div className="flex flex-1 relative">
        <DocsSidebarDesktop />
        {sideBar && <DocsSidebarMobile />}
        
        <div className="flex-1 m-8 md:m-12 lg:ml-72 xl:ml-84 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
