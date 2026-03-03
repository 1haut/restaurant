import CourseHeader from "./CourseHeader";
import CourseList from "./CourseList";
import type { Menu } from "../../types/types";
import { coursesNames } from "../../utils/constants";

interface CourseProps {
  menuDisplay: Menu;
}

export default function Course({ menuDisplay }: CourseProps) {
  return (
    <section>
      {coursesNames.map((course, idx) => (
        <div
          tabIndex={0}
          key={idx}
          className={`course-container ${course.name}`}
        >
          <CourseHeader courseName={course.nameNo} />
          <CourseList course={Object.values(menuDisplay)[idx]} />
        </div>
      ))}
    </section>
  );
}
