import useClassSearch from "../hooks/useClassSearch";
import ClassInfoBox from "./UI/BoxInfo";
import Container from "react-bootstrap/esm/Container";
import Class from "./ClassesSection.module.css";


const ClassesSection = () => {
  const [Classes, Loading, Error] = useClassSearch();

  return (
    <section className={Class.section2} id="classes" >
      <Container className="section">
          <div>
            <h2>Classes</h2>
            {Loading && <p>Loading...</p>}
            <div className="d-flex flex-wrap gap-2">
              {Classes.map((Class) => (
                <ClassInfoBox className="" class={Class} />
              ))}
            </div>
          </div>
      </Container>
    </section>
  );
};

export default ClassesSection;
