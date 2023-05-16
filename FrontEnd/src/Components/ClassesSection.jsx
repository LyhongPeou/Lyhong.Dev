import useClassSearch from "../hooks/useClassSearch";
import ClassInfoBox from "./UI/BoxInfo";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";



const ClassesSection = () => {
  const [Classes, Loading, Error] = useClassSearch();

  return (
    <section>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
          <div className="flex flex-row gap-3 justify-center">
            <p className="font-semibold text-title1">My</p>
            <p className="font-semibold text-title2 mt-5 -ml-9 ">Learning</p>
            <p className="font-semibold text-title3 mt-14 -ml-16">Journey</p>
          </div>
        </Animator>
      </ScrollPage>


  
          <div className="flex flex-wrap gap-4 justify-center m-10 md:mx-52 2xl:mx-92">
            {Loading && <p>Loading...</p>}
           
            {Classes.map((Class) => (
              <ClassInfoBox className="" class={Class} />
            ))}
          
          </div>
    

    </section>
  );
};

export default ClassesSection;
