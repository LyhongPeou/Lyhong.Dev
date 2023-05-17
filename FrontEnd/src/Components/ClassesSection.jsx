import useClassSearch from "../hooks/useClassSearch";
import ClassInfoBox from "./UI/BoxInfo";
import Container from "react-bootstrap/esm/Container";
import Classes from "./ClassesSection.module.css";


const ClassesSection = () => {
  const [Classes, Loading, Error] = useClassSearch();

  return (
    <section className={Classes.section2} id="classes" >
      <Container className="section">
        
          <div>
            <h2 className="">Classes</h2>
            {Loading && <p>Loading...</p>}
            {Classes.map((Class) => (
              <ClassInfoBox className="" class={Class} />
            ))}
          </div>
      </Container>
    </section>
  );
};

export default ClassesSection;
