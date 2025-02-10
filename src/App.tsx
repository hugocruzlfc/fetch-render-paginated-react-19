import { Suspense } from "react";

import PokemonTable from "./components/pokemon-table";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PokemonTable />
    </Suspense>
  );
}

export default App;
