import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StateAndEvent from "./StateAndEvent/ClickMe"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateAndEvent />
  </StrictMode>,
);
