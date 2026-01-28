import CourseHeader from "./CourseHeader";
import { menu } from "../../info";
import CourseList from "./CourseList";

export default function Course() {
  return (
    <section>
      <div className="course-container starters">
        <CourseHeader courseName="Forretter" />
        <CourseList course={menu.starters} />
      </div>
      <div className="course-container mains">
        <CourseHeader courseName="Hovedretter" />
        <CourseList course={menu.mains} />
      </div>
      <div className="course-container desserts">
        <CourseHeader courseName="Desserter" />
        <CourseList course={menu.desserts} />
      </div>
    </section>
  );
}
