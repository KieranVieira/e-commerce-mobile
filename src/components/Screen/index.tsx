import React from 'react';

import { ScrollContainer, MainContainer, Header, SubHeader} from './styles';

interface Props {
  /** Header of the screen rendered at the top of the screen */
  headerText: string,
  /** Sub Header of the screen rendered under the header */
  subHeaderText: string,
}

/**
 * Base screen used to wrap more complex screen components, most general 
 * screen features should be handled here.
 */
const Screen: React.FC<Props> = ({ headerText, subHeaderText, children}) => {
  return (
    <ScrollContainer keyboardDismissMode='on-drag'>
      <MainContainer>
        <Header>{headerText}</Header>
        <SubHeader>{subHeaderText}</SubHeader>
        {children}
      </MainContainer>
    </ScrollContainer>
  )
}

export default Screen
