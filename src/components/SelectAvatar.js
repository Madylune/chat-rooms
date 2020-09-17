import React from 'react'
import map from 'lodash/fp/map'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { AVATARS } from '../helpers/fixtures'

const SelectAvatar = ({ setAvatar, avatar }) => 
  <Select labelId="label" id="select" value={avatar} onChange={e => setAvatar(e.target.value)}>
    {map(avatar => (
      <MenuItem key={avatar} value={avatar}><img src={require(`../assets/avatars/${avatar}.jpg`)} alt={avatar} height="60px"/></MenuItem>
    ), AVATARS)}
  </Select>

export default SelectAvatar
