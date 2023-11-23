import { Movies } from "../components/Movies";

export const MovieList = () => {
  return (
  <section style={{backgroundColor: "#19253B"}}>
      <h1 className="text-center pt-5 pb-5 text-white">Catalogue</h1>
        <Movies/>
    </section>
  );
};
