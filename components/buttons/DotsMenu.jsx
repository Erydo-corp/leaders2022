import React from 'react';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CachedIcon from '@mui/icons-material/Cached';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

export const DotsMenu = ({active, setActive}) => {
  return(
    <Box onClick={() => setActive(false)}
      sx={{
        position: 'absolute',
        top: 40,
        right: 20,
        borderRadius: 2,
        color: '#fff',
        background: "#252A41",
        boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1)," +
            " 0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
        zIndex: 10,
      }}>
      <List onClick={event => event.stopPropagation()}
      sx={{ width: '100%', fontSize: '8px', py: 0}}
      component="nav"
    >
      <ListItemButton>
        <ListItemIcon>
          <ModeOutlinedIcon fontSize='small' color='white'/>
        </ListItemIcon>
        <ListItemText primary="Редактировать" sx={{
            '& .MuiListItemText-primary':{fontSize: '12px'}}}/>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <CachedIcon fontSize='small' color='white'/>
        </ListItemIcon>
        <ListItemText primary="Обновить" sx={{
            '& .MuiListItemText-primary':{fontSize: '12px'}}}/>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <DeleteForeverOutlinedIcon fontSize='small' color='white'/>
        </ListItemIcon>
        <ListItemText primary="Удалить"
                      sx={{'& .MuiListItemText-primary':{fontSize: '12px'}}}/>
      </ListItemButton>
    </List>
    </Box>
  )
}