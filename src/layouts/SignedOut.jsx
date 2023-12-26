import React from "react";
import { Button } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Button onClick={signIn} primary>
        {" "}
        Login{" "}
      </Button>
      <Button primary style={{ marginLeft: "0.5em", marginTop: "0.5em" }}>
        {" "}
        Register{" "}
      </Button>
    </div>
  );
}
