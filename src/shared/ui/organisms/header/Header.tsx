import HeaderLogoLink from "@/shared/ui/organisms/header/HeaderLogoLink";
import ServicesMegaMenu from "@/shared/ui/organisms/header/menu/ServicesMegaMenu";
import HeaderInteractive from "@/shared/ui/organisms/header/HeaderInteractive";
import {cn} from "@/shared/utils/utils";
import SolutionsMegaMenu from "@/shared/ui/organisms/header/menu/SolutionsMegaMenu";
import ResourcesMegaMenu from "@/shared/ui/organisms/header/menu/ResourcesMegaMenu";
import CompanyMegaMenu from "@/shared/ui/organisms/header/menu/CompanyMegaMenu";
import PricingMegaMenu from "@/shared/ui/organisms/header/menu/PricingMegaMenu";
import BusinessMegaMenu from "@/shared/ui/organisms/header/menu/BusinessMegaMenu";

const Header = ({ className = "" }: { className?: string }) => {
    return (
        <header
            className={cn(
                "fixed left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300",
                className
            )}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <HeaderLogoLink />
                <nav className="hidden md:flex items-center space-x-8">
                    <ServicesMegaMenu />
                    <ResourcesMegaMenu />
                    <BusinessMegaMenu />
                    <PricingMegaMenu />
                    <CompanyMegaMenu />
                </nav>
                <HeaderInteractive />
            </div>
        </header>
    );
};

export default Header;