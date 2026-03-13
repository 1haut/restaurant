import type { Dish } from "../../types/types";
import DishItem from "./DishItem";

interface CourseProps {
  name?: string;
  course: Dish[];
}

export default function CourseList({ course }: CourseProps) {
  return (
    <div className="menu-course">
      {course.map(courseItem => (
        <DishItem key={courseItem.id} dish={courseItem} />
      ))}
    </div>
  );
}
