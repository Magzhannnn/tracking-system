import { Header } from "@/widgets/header";
import { PopUpProvider } from "../providers/PopUpContext";

function BaseLayout() {
  return (
    <>
      <PopUpProvider>
        <Header />
      </PopUpProvider>
    </>
  );
}

export default BaseLayout;
