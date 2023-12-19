import './App.css';

import ReactDOM from "react-dom/client";
import NotUseContext from './demousecontext/NotUseContext';
import DmUseContext from './demousecontext/DmUseContext';
import DmRerender from './demorerender/DmRerender';
import DmUseContextLv1 from './demousecontext/DmUserContextLv1';
import QdmdependUseEfffect from './demouseeffect/dmdepend/QdmdependUseEfffect';
import QdmEmptyDependUseEfffect from './demouseeffect/dmemptydepend/QdmEmptyDependUseEfffect';
import QTodoReducers from './demousereducers/QTodoReducers';
import QUseRef from './demouseref/QUseRef';
import QUseRefElement from './demouseref/QUseRefElement';
import CalcForm from './democomplifecycle/CalcForm';
import AppCallback from './demousecallback/f8/AppCallback';
import THLAppUseCallback from './demousecallback/tunghole/THLAppUseCallback';

function App() {
  return (
    <THLAppUseCallback />
  );
}

export default App;
