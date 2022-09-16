import {
  AppNavBar,
  setItemActive
} from 'baseui/app-nav-bar'

import {
  Grid,
  Cell
} from 'baseui/layout-grid'

import { Button } from "baseui/button"

import { Card, StyledBody } from "baseui/card"

import {
  ChevronDown,
  Delete,
  Overflow,
  Upload
} from "baseui/icon"

import {useStyletron} from 'baseui'

import { useNavigate } from "react-router-dom"

import {useState} from 'react'

import {prefixes} from '~/utils/consts.js'

import genString from '~/utils/genString.js'

export default function Index() {
  const [css] = useStyletron()
  const [mainItems, setMainItems] = useState([
    { icon: Upload, label: "Main A" },
    {
      active: true,
      icon: ChevronDown,
      label: "Main B",
      navExitIcon: Delete,
      children: [
        { icon: Upload, label: "Tailwind", path: '/tailwind' },
        { icon: Upload, label: "Baseweb", path: '/baseweb'}
      ]
    }
  ]);
  const [pfs, setPfs] = useState(prefixes)
  const navigate = useNavigate()
  function addPrefix() {
    const p = genString(3);
    const plan = genString(12); 
    let newP = { display: p, planName: plan }
    setPfs([...pfs, newP])
  }
  return (
    <div className="bg-white">
      <AppNavBar
        mainItems={mainItems}
        onMainItemSelect={item => {
          navigate(item.path)
        }}
        username="Test User"
        usernameSubtitle="Org Admin"
        userItems={[
          { icon: Overflow, label: "User A" },
          { icon: Overflow, label: "User B" }
        ]}
        onUserItemSelect={item => console.log(item)}
      /> 
      <div className={css({ marginTop: '20px' })}></div>
      <Grid>
        <Cell span={4}>
          <Button onClick={addPrefix}>Add prefix</Button>
        </Cell>
        <Cell span={8}>
          <Grid>
            {
              pfs.map((prefix) => (
                <Cell 
                  key={JSON.stringify(prefix)} 
                  span={4} 
                  overrides={{
                    Cell: {
                      style: ({$theme}) => ({
                        marginBottom: '20px !important',
                      }),
                    }
                  }}
                >
                  <Card>
                    <StyledBody>{prefix.display}</StyledBody>
                    <StyledBody>{prefix.planName}</StyledBody>
                  </Card>
                </Cell>
              ))
            }
          </Grid>
        </Cell>
      </Grid>
    </div>
  );
}
