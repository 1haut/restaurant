import CourseHeader from "./CourseHeader";
import CourseList from "./CourseList";
import { type MenyType, coursesNames } from "../../info";

interface CourseProps {
  menuDisplay: MenyType;
}

export default function Course({ menuDisplay }: CourseProps) {
  return (
    <section>
      {coursesNames.map((course, idx) => (
        <div key={idx} className={`course-container ${course.name}`}>
          <CourseHeader courseName={course.nameNo} />
          <CourseList course={Object.values(menuDisplay)[idx]} />
        </div>
      ))}
    </section>
  );
}
