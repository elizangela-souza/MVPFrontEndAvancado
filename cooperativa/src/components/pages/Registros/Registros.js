import { useLocation } from "react-router-dom";

import  Message  from "../../layout/Message.js";

function Registros() {
  const location = useLocation();
  const message = location.state?.message;

  return (
    <div>
      <h1>Registros da Cooperativa</h1>
      {message && <Message type="sucess" msg={message} />}
    </div>
  );
}

export default Registros;
