import { Footer, LAteralMenu, Siderbar, TopMenu } from "@/components";

export default function LoginLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
        <TopMenu />
        <LAteralMenu />
        <Siderbar />
        {children}
        <Footer />
    </main>
  );
}