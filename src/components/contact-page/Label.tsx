type LabelProps = {
  labelFor: string;
  content: string | number;
};

export default function Label({ labelFor, content }: LabelProps) {
  return <label htmlFor={labelFor}>{content}</label>;
}
