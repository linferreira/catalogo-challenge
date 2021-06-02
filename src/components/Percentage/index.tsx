import React from "react";
import { CircleBorder, Container, CircleTotal } from "./styles";

const PercentageComponent: React.FC = () => {
    return (
        <Container>
            <CircleBorder>
                <CircleTotal>
                    <p>70%</p>
                </CircleTotal>
            </CircleBorder>
        </Container>
    );
};

export default PercentageComponent;
