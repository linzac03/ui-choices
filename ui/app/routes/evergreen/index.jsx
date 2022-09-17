import { useState } from 'react'

import { Button, Card, Pane, Tab, Text } from 'evergreen-ui'

import { prefixes } from '~/utils/consts.js'
import genString from '~/utils/genString.js'
import { useNavigate } from "react-router-dom"

export default function Index() {
  const [pfs, setPfs] = useState(prefixes)
  const navigate = useNavigate()
  function addPrefix() {
    const p = genString(3);
    const plan = genString(12); 
    let newP = { display: p, planName: plan }
    setPfs([...pfs, newP])
  }
  return (
    <Pane display="flex" alignItems="center" flexWrap="wrap">
      <Pane elevation={1} flexBasis="100%" marginBottom="40px">
        <Tab onClick={() => navigate('/tailwind')}>Tailwind</Tab>
        <Tab onClick={() => navigate('/baseweb')}>Baseweb</Tab>
        <Tab onClick={() => navigate('/evergreen')}>Evergreen</Tab>
      </Pane>
      <Pane 
        padding="16" 
        display="grid" 
        gridTemplateColumns="repeat(2, 1fr)" 
        alignItems="center"
        justifyItems="center"
        marginX="100px"
      >
        <Pane borderRight="solid 1px" height="100%" alignItems="center" onClick={addPrefix}>
          <Button marginRight="10px">Add prefix</Button>
        </Pane>
        <Pane display="grid" gridTemplateColumns="auto auto auto" gap="15px 10px" justifyItems="center">
        { 
          pfs.map((prefix) => (
            <Card 
              key={JSON.stringify(prefix)} 
              background="skyblue" 
              borderRadius={8} 
              marginBottom={10}
              padding={20}
              elevation={1}
            >
              <Text textAlign="right" display="block">{prefix.display}</Text>
              <Text textAlign="right" display="block">{prefix.planName}</Text>
            </Card>
          ))
        }
        </Pane>
      </Pane>
    </Pane>
  )
}
