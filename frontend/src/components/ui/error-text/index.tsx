import { ReactNode } from "react";

import styles from "./main.module.css";

const ErrorText = ({ children }: { children: ReactNode }) => {
  return <p className={styles.errorText}>{children}</p>;
};

export default ErrorText;
