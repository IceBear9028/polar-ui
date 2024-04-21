import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface TabProps {
  children: ReactElement<typeof TabPage> | ReactElement<typeof TabPage>[];
}

interface TabPageProps {
  name: string;
  component: ReactElement;
}

interface TabButtonProps {
  focus: boolean;
  tabName: string;
  onClick: () => void;
}

export const Tab = ({ children }: TabProps) => {
  const tabNames = React.Children.map(children, (child) => child.props.name);
  console.log(tabNames);
  return (
    <StyledTabContainer>
      <StyledTabButtonGroups>
        {tabNames.map((tabName, index) => {
          return <TabButton key={`tab-${index}`} focus={true} tabName={tabName} onClick={() => {}} />;
        })}
      </StyledTabButtonGroups>
      {children}
    </StyledTabContainer>
  );
};

export const TabPage = (props: TabPageProps) => {
  return <StyledTabPageContainer>{props.component}</StyledTabPageContainer>;
};

const TabButton = (props: TabButtonProps) => {
  return <StyledTabButton focus={props.focus}>{props.tabName}</StyledTabButton>;
};

const StyledTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
`;

const StyledTabButtonGroups = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 30px;
  gap: 20px;
`;

const StyledTabPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledTabButton = styled.div<Pick<TabButtonProps, 'focus'>>`
  /* 1. Container 에 대한 스타일 지정 */
  display: inline-flex;
  padding: 20px 0;
  border-bottom: ${({ theme, focus }) => {
    const { primary: borderColor } = theme.system.color.systemThemeColor;
    return focus ? `3px solid ${borderColor}` : `none`;
  }};

  /* 2. 내부 text 에 대한 스타일 지정 */
  font-size: ${({ theme }) => theme.system.fontSize.text.lg};
  font-weight: ${({ theme, focus }) => {
    const { regular: unFocusWeight, sbold: focusWeight } = theme.base.fontWeight;
    return focus ? focusWeight : unFocusWeight;
  }};
  color: ${({ theme, focus }) => {
    const { textLow: unFocusColor, text: focusColor } = theme.system.color.common;
    return focus ? focusColor : unFocusColor;
  }};
`;
