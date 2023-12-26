import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media.licdn.com/dms/image/D4E03AQH2zKm3-9Ct0g/profile-displayphoto-shrink_800_800/0/1686843202459?e=1709164800&v=beta&t=HjD93U4JjiZ1qvsZKL6f89WAg_qUs9ydxE2BzXMxK_s"
        />
        <Dropdown pointing="top left" text="Mehmet">
          <Dropdown.Menu>
            <Dropdown.Item text="MyInfo" icon="info" />
            <Dropdown.Item onClick={signOut} text="Logout" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
