import { useLocation } from "react-router-dom";

export default function Footer(){

    const location = useLocation();
    const isBuyMeACoffeePage = location.pathname === "/buy-me-a-coffee";
    return(
        <footer className={`bg-black p-4 w-full ${isBuyMeACoffeePage ? 'fixed bottom-0' : ''}`}>
            <p className="text-white text-center">&copy; Todos os direitos reservados - 2025. JoaoHBatistaLeal's Social</p>
        </footer>
    );
}   