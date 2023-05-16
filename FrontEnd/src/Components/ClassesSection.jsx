import useClassSearch from "../hooks/useClassSearch";
import ClassInfoBox from "./UI/BoxInfo";


const ClassesSection = () => {
  const [Classes, Loading, Error] = useClassSearch();

  return (
    <section>
      <div>
        <div className="">
          <h2 className="">Classes</h2>
        </div>

        <div className="">
          {Loading && <p>Loading...</p>}
          {Classes.map((Class) => (
            <ClassInfoBox className="" class={Class} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
