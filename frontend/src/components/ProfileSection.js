import React from "react";
import { Typography, Box, Avatar } from "@mui/material";
import { useAuth } from "../context/AuthContext"; // AuthContext 사용

const ProfileSection = () => {
  const { userObject } = useAuth(); // 전역 사용자 정보 가져오기

  // userObject가 없을 경우를 대비한 조건 처리
  if (!userObject) {
    return null; // 사용자 정보가 없으면 아무것도 렌더링하지 않음
  }

  const { NICKNAME: nickName, USER_CrtDt: userCrtDt } = userObject;
  const userDate = new Date(userCrtDt);

  // 타임존 영향을 피한 사용자 생성일 (UTC)
  const formattedDate = `${userDate.getUTCFullYear()}.${String(userDate.getUTCMonth() + 1).padStart(2, '0')}.${String(userDate.getUTCDate()).padStart(2, '0')}`;

  // 오늘 날짜와의 차이 계산 (UTC)
  const today = new Date();
  const todayUTC = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  const userDateUTC = Date.UTC(userDate.getUTCFullYear(), userDate.getUTCMonth(), userDate.getUTCDate());
  const dayDifference = Math.ceil((todayUTC - userDateUTC) / (1000 * 60 * 60 * 24)) + 1;

  return (
    <Box bgcolor="#FFD700" py={4} display="flex" flexDirection="column" alignItems="center">
      <Avatar
        sx={{ width: 100, height: 100, bgcolor: 'gray', mb: 2 }}
        alt="Profile"
      />
      <Typography variant="h6">{nickName}</Typography>
      <Typography variant="body2">인증 완료</Typography>
      <Typography variant="body2">{formattedDate}부터 {dayDifference}일간 함께 듣는 중</Typography>
    </Box>
  );
};

export default ProfileSection;
