import { Footer, LAteralMenu, Siderbar, TopMenu } from "@/components";
import ToasProvider from "@/context/ToastContex";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {


  return (
      <main className="min-h-screen">
        <ToasProvider>
          <TopMenu />
          <Siderbar />
          <LAteralMenu />
          {children}
          <Footer />
        </ToasProvider>
        <ToastContainer />
      </main>
  );
}