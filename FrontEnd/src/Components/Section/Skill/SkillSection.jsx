import Container from "react-bootstrap/esm/Container";
import Classes from "./SkillSection.module.css";
import useSkillSearch from "../../../hooks/useSkillSearch";
import SkillBox from "./SkillBox";

const SkillSection = () => {
    const [skills, loading, error] = useSkillSearch();


    return (
        <section className={Classes.section2} id="skills">
            <Container className="section">
                <div>
                    <h2 className="section-title">Skills</h2>
                    {loading && <div>Loading...</div>}
                    {error && <div>Error</div>}
                    {skills && (<SkillBox skills={skills} />)}
                </div>
            </Container>
        </section>
    )
}

export default SkillSection