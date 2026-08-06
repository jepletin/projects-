import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SideEffectConditions from "./SideEffectsConditions/StopWatch"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < SideEffectConditions />
  </StrictMode>,
);
