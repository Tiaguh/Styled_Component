import React, { useState } from "react";

import { Container, Header, ButtonContainer, Button } from "./HomeStyled";

import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
    const [background, setBackground] = useState(true);

    

    return (
        <Container background={background}>
            <Header>
                <ButtonContainer>
                    <Button onClick={() => setBackground(false)}>
                        <BsFillBrightnessHighFill
                            size={background ? 22 : 29}
                            color={"#FFD700"}
                        />
                    </Button>
                    <Button onClick={() => setBackground(true)}>
                        <BsFillMoonStarsFill
                            size={background ? 24 : 20}
                            color={"#808080"}
                        />
                    </Button>
                </ButtonContainer>
            </Header>
        </Container>
    )
}