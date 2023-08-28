import React, { useState } from "react"
import "./Home.css"
import styled from 'styled-components';

import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
    const [background, setBackround] = useState(true)

    const Container = styled.div`
        width: 100vw;
        height: 100vh;

        background-color: ${background ? "#292A2D" : "#FFF"}

    `;

    const Header = styled.div`
        width: 100%;
        
        display: flex;
        justify-content: flex-end;
        align-items: center;

        padding: 25px;

    `;

    const ButtonContainer = styled.div`
        padding-top: 5px;
        padding-bottom: 5px;    
        
        padding-inline: 25px;

        display: flex;
        align-items: center;

        gap: 15px;

        border-radius: 15px;

        background-color: #F1F1F1
    `;

    const Button = styled.button`
        background-color: transparent;
        border: none;
    `;

    return (
        <Container>

            <Header>

                <ButtonContainer>

                    <Button onClick={() => setBackround(false)}>
                        <BsFillBrightnessHighFill
                            size={background ? 22 : 29}
                            color={"#FFD700"}
                        />
                    </Button>

                    <Button onClick={() => setBackround(true)}>
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