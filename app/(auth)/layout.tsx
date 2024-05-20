import Footer from "@/components/ui/footer";
import HeaderGetApp from "@/components/ui/header-getapp";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderGetApp />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
