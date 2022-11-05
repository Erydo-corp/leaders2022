import React from 'react';
import { Pagination, Stack, Box } from '@mui/material';

export const MyPagination = () => {
  return (
    <Box sx={{background: '#cc2222', paddingY: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined"  
        sx={{
          '& .MuiPaginationItem-root': {color: '#fff', borderColor: '#fff'},
          '& .MuiPaginationItem-ellipsis': {color: '#fff'},
          '& .Mui-selected': {color:'red', backgroundColor: '#fff'},
        }}/>
      </Stack>
    </Box>
  );
}
