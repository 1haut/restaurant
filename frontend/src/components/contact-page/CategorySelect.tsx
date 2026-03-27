interface CategorySelectProps {
  categoryValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CategorySelect({
  categoryValue,
  onChange,
}: CategorySelectProps) {
  return (
    <div className="input-field category-field">
      <label htmlFor="select-category">Emne</label>
      <select
        name="category"
        id="select-category"
        value={categoryValue}
        onChange={onChange}
        autoComplete="off"
      >
        <option value="">---Velg emne:---</option>
        <option value="request">Forespørsel</option>
        <option value="contact">Kontakt</option>
        <option value="catering">Catering</option>
      </select>
    </div>
  );
}
