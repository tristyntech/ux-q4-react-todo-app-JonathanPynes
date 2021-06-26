import React from "react";
import styled from "styled-components";

function Sidebar(props) {
  return (
    <EverythingCenter>
      <h2>Hello {props.user.name}!</h2>
      <ProfileImage src={props.user.avatar} />
    </EverythingCenter>
  );
}

const ProfileImage = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const EverythingCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Sidebar;
