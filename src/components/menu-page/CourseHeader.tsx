import ArrowDownIcon from "./ArrowDown";

interface CourseHeaderProps {
  courseName: string;
}

export default function CourseHeader({ courseName }: CourseHeaderProps) {
  return (
    <div className="heading-course">
      <div className="heading-name">
        <h2>{courseName}</h2>
      </div>
      <ArrowDownIcon height={48} fill="#b22222" />
    </div>
  );
}
