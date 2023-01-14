import { IconeAjustes, IconeCasa, IconeNotificacoes } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return(
        <aside>
            <ul>
                <MenuItem url="/" texto="Início" icone={IconeCasa}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
                <MenuItem url="/notificacoes" texto="Novidades" icone={IconeNotificacoes}/>
            </ul>
        </aside>
    )
}