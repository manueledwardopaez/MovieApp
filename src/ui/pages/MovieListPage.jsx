import { Movies } from "../components/Movies";
import { NavBar } from "../components";

export const MovieListPage = () => {
  return (
    <>
      <NavBar />
      <section style={{ backgroundColor: "#19253B", paddingBlockEnd: "20px" }}>
        <h1 className="text-center pt-5 pb-5 text-white">Catalogue</h1>
        <Movies />
      </section>
    </>
  );
};
