import { IconeAjustes, IconeCasa, IconeNotificacoes, IconeSair } from "../icons";
import MenuItem from "./MenuItem";
import Logo from "./Logo";

export default function MenuLateral() {
    return(
        <aside className={`flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900`}>
            <div className={` flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-gray-700 to-purple-800 h-20 w-20`}>
                    <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
                <MenuItem url="/notificacoes" texto="Novidades" icone={IconeNotificacoes}/>
            </ul>
            <ul>
                <MenuItem onClick={() => console.log('logout')} 
                            texto="Sair" icone={IconeSair} 
                            className={`text-red-600 dark:text-red-400 dark:hover:text-white
                                         hover:bg-red-500 hover:text-white `}/>
            </ul>
        </aside>
    )
}