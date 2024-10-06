import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import defaultStyles from "./main.module.css";

const FileInput = ({
  btnText,
  styles = defaultStyles,
  id,
}: {
  btnText: string;
  styles: ModularStyles;
  id: string;
}) => {
  <>
    <Label htmlFor={id}>{btnText}</Label>
    <Input type="file" id={id} className={styles.hiddenActualInput} />
    <span className={styles.fileSelected}>No File Chosen</span>
  </>;
};

export default FileInput;
