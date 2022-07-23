import { Checkbox } from "./Checkbox";
import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  status: boolean;
  content: string;
  onToggle: () => void;
  onDelete: () => void;
}

export function Task({ status, content, onToggle, onDelete }: TaskProps) {
  return (
    <div className={styles.container}>
      <Checkbox checked={status} label={content} onChange={onToggle} />
      <button onClick={onDelete}>
        <Trash />
      </button>
    </div>
  );
}
