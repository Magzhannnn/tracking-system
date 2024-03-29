import { Header } from "@/widgets/header";
import { PopUpProvider } from "../providers/PopUpContext";
import { Navbar } from "@/widgets/navbar";

function BaseLayout() {
  return (
    <>
      <PopUpProvider>
        <Header />
        <div className="flex">
          <Navbar />
        </div>
      </PopUpProvider>
    </>
  );
}

export default BaseLayout;
