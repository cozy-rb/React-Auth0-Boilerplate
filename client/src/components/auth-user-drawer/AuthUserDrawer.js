import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import { FlexboxGrid, Drawer, Icon, IconButton } from 'rsuite';

const AuthUserDrawer = props => {
  const {user, logout} = useAuth0();

  return (
    <div>
      {
        user ?
          <Drawer size="xs" placement="right"
                  show={props.show} onHide={props.hideDrawer}
                  className="auth-user-drawer">
            <Drawer.Header>

              <Drawer.Title>

                <FlexboxGrid align="middle" justify="center">
                  <FlexboxGrid.Item>
                    <img src={user.picture} alt="avatar"
                         style={{width:32, height:32,
                                 borderRadius:16, marginRight:"1em"}} />
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item>
                    <p>{user.nickname}</p>
                  </FlexboxGrid.Item>
                </FlexboxGrid>

              </Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>

            </Drawer.Body>
            <Drawer.Footer>
              <IconButton icon={<Icon icon="gear" />} placement="right"
                appearance="ghost" block
                onClick={(e)=>{e.preventDefault();}}>
                Settings
              </IconButton>
              <IconButton icon={<Icon icon="sign-out" />} placement="right"
                appearance="ghost" block
                onClick={(e)=>{e.preventDefault(); logout();}}>
                Sign Out
              </IconButton>
            </Drawer.Footer>

          </Drawer>
        : null
      }
    </div>
  );
}

export default AuthUserDrawer;
