import { Search } from '@mui/icons-material';
import { Paper, IconButton, InputBase } from '@mui/material';
import { useState } from 'react';
import { colors } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setValue('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={submitHandler}
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${colors.secondary}`,
        borderRadius: '5px',
        boxShadow: 'none',
        marginRight: '10px',
        backgroundColor: '#fff',
        '& .search-bar': {
          flex: 1,
          padding: '8px',
        },
      }}
    >
      <InputBase
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px', color: colors.secondary }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
