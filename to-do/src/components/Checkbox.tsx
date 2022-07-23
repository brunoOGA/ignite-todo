import { Check } from "phosphor-react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <div>
      <label className={styles.checkboxLabel}>
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className={styles.checkboxSpan}>
          <Check className={styles.checkboxIcon} />
        </span>
        <span className={styles.checkboxText}>{label}</span>
      </label>
    </div>
  );
}
