import React from 'react';
import Header from '../Header';
import PercentageComponent from '../Percentage';
import TagComponent from '../Tag';
import { Wrapper, Image, Content, Date, Resume } from './styles';

const CardComponent: React.FC = () => {
    return (
        <Wrapper>
            <Image />                
            
            <div>
                <Header label="Thor: Ragnarok" size='small' />
                <Content>
                <PercentageComponent />

                    <Date>
                        25/10/2007
                    </Date>
                    <Resume>
                    Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.
                    </Resume>

                    <TagComponent label='Aventura' />
                    <TagComponent label='Ação' />

                </Content>
            </div>
            
        </Wrapper>
    )
}

export default CardComponent