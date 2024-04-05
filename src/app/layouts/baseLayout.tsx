import { Header } from "@/widgets/header";
import { MainProvider } from "../providers/mainContext";
import { RouterProvider } from "react-router-dom";
import { router } from "../appRouter";

function BaseLayout() {
  return (
    <>
      <MainProvider>
        <Header />
        <div className="fixed top-[53px] left-0 flex gap-3">
          <RouterProvider router={router} />
        </div>
      </MainProvider>
    </>
  );
}

export default BaseLayout;
