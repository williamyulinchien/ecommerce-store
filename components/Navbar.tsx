import Link from "next/link";

import Container from "@/components/ui/Container";
import MainNav from "./Main-Nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/narbar-actions";
import getBillboard from "@/actions/get-billboard";


export const revalidate = 0; // Use it for never cache
const Navbar = async () => {
    const categories = await getCategories();
    const billboard = await getBillboard("f78160bd-b308-4509-812a-f7d963b6d041");
    
  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">{billboard?.label? billboard.label:'Store'}</p>
          </Link>
          <MainNav data={categories}/>
          <NavbarActions/>
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;