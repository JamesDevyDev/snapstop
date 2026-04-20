import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: any) {
    return (
        <>
       
            {children}
            <Footer />
        </>
    );
}