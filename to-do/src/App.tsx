import { useState } from "react";
import { Task } from "./components/Task";
import { PlusCircle } from "phosphor-react";
import "./global.css";
import { Header } from "./components/Header";
import styles from "./App.module.css";

function App() {
  const [state, setState] = useState(false);
  return (
    <>
      <Header />
      <main>
        <form action="">
          <input type="text" />
          <button type="button">
            Criar <PlusCircle className={styles.iconButton} />
          </button>
        </form>
        <Task
          content="dasndnaudsauduasndjasdas poda siudiasudahsdiasdoasnd oiasb dabdaobh dabdbausdah budobas dasndnaudsauduasndjasdas poda siudiasudahsdiasdoasnd oiasb dabdaobh dabdbausdah budobas dasndnaudsauduasndjasdas poda siudiasudahsdiasdoasnd oiasb dabdaobh dabdbausdah budobas"
          onDelete={() => console.log("dasnd")}
          onToggle={() => setState((old) => !old)}
          status={state}
        />
      </main>
    </>
  );
}

export default App;
