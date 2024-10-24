import React from "react";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // AuthContext 사용

const Header = () => {
  const navigate = useNavigate();
  const { userObject, setUserObject } = useAuth(); // 전역 사용자 정보 가져오기

  const handleLogout = () => {   
    localStorage.clear();
    sessionStorage.clear();
    setUserObject(null); // 전역 상태 초기화
    navigate('/');
  };
  
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>
          H - ear
        </Typography>
        {userObject && (
          <Typography variant="body1">{userObject.NICKNAME}님 환영합니다.</Typography>
        )}
        <Button variant="contained" onClick={handleLogout}>로그아웃</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
