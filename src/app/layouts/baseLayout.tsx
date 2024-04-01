import { Header } from "@/widgets/header";
import { MainProvider } from "../providers/mainContext";
import { Navbar } from "@/widgets/navbar";

function BaseLayout() {
  return (
    <>
      <MainProvider>
        <Header />
        <div className="flex">
          <Navbar />
        </div>
      </MainProvider>
    </>
  );
}

export default BaseLayout;
