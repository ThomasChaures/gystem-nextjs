import { UsersRound, LogOut, Map } from "lucide-react";

import {
  IconCreditCardFilled,
  IconClipboardTextFilled,
  IconSettingsFilled,
  IconLayoutBoardFilled,
  IconBriefcaseFilled,
} from "@tabler/icons-react";
import LinkSidebar2 from "@/components/atoms/LinkSidebar2";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="bg-[#FFFFFE] max-lg:hidden flex flex-col border-[#d1d1d1] border-r justify-between p-7 px-10 w-[290px] fixed h-screen">
      {/* Title */}

      {/* Navigation */}
      <div className="">
        <div className="pb-5 flex items-center pt-1.5 gap-x-2.5 mb-4 text-xl  ">
          <Image alt="Logo" src={"logo.svg"} height={40} width={40} />
          <h1 className="font-semibold font-mono uppercase">Gymstem</h1>
        </div>
        <p className="text-[#c0c0c0] mb-5 text-sm uppercase tracking-[2px]">
          Menu Principal
        </p>
        <nav>
          <ul className="space-y-4 my-4">
            <LinkSidebar2
              icon={IconLayoutBoardFilled}
              route="/panel"
              name="Panel"
            />
            <LinkSidebar2
              icon={IconBriefcaseFilled}
              route="/panel/empleados"
              name="Empleados"
            />
            <LinkSidebar2
              icon={UsersRound}
              route="/panel/clientes"
              name="Clientes"
            />
            <LinkSidebar2
              icon={IconClipboardTextFilled}
              route="/panel/rutinas"
              name="Rutinas"
            />
            <LinkSidebar2
              icon={IconCreditCardFilled}
              route="/panel/caja"
              name="Caja"
            />
          </ul>
        </nav>
        <div className="mt-8">
          <p className="text-[#c0c0c0] text-sm mb-5 uppercase tracking-[2px]">
            Sedes
          </p>

          <ul className="space-y-4 my-4">
            <LinkSidebar2
              icon={Map}
              route="/panel/mapa"
              name="Editor de plano"
            />
            <li className="text-sm flex items-center gap-x-3 px-3 py-3">
              <span className="block bg-blue-600 rounded-full p-1"></span>SkyGym
            </li>
            <li className="text-sm flex items-center gap-x-3 px-3 py-3">
              <span className="block bg-amber-600 rounded-full p-1"></span>
              SkyGym 44
            </li>
          </ul>
        </div>
      </div>

      <div>
        <nav className="pb-5 w-full">
          <ul className="space-y-4 my-4">
            <LinkSidebar2
              name="Configuración"
              route="/ayuda"
              icon={IconSettingsFilled}
            />

            <LinkSidebar2 name="Cerrar sesión" route="/logout" icon={LogOut} />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
