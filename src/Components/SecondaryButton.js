import Clickable from "./Clickable";
import styled from "styled-components";

function IconOnlyButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background: #FFFFFF;
        border: 1px solid #64748B;
        border-radius: 24px;
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            background: linear-gradient(180deg, #DFEAF1 0%, #CFDDE8 100%);
        }
        &:active {
            background: #FFFFFF;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default IconOnlyButton;