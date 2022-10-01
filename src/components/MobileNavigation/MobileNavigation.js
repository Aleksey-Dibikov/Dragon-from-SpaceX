import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import s from "../../style/Navigation.module.css";
import AuthNav from "../AuthNav";
import AuthSelector from "../../hooks/authSelector";
import UserMenu from "../UserMenu";
import Navigation from "../Navigation";

function MobileNavigation() {
    const { isAuth } = AuthSelector();
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <IoMdLogIn className={s.navMenu}
        size='40px'
        onClick={() => setOpen(!open)}
    />;
    
    const closeIcon = <CgClose className={s.navMenu}
        size='40px'
        onClick={() => setOpen(!open)}
    />;

    function closeMobileMenu() {
        setOpen(false)
    }

    return (
        <header className={s.mobileNavigation}>
            <Navigation/>
            {open ? closeIcon : hamburgerIcon}
            {open &&
                <div>
                    {isAuth
                        ? <UserMenu />
                        : <AuthNav isMobile={true} closeMobileMenu={closeMobileMenu} />}
                </div>
            }
        </header>
    )
}

export default MobileNavigation;