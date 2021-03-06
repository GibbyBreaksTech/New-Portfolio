
// styled
import styled from "styled-components"

// images
import Git from '../images/githubYaleBlue.png';
import Twitter from '../images/twitterYaleBlue.png';
import Linkedin from '../images/linkedinYaleBlue.png';
import Upwork from '../images/upworkIconYaleBlue.png';
import Fiverr from '../images/fiverrYaleBlue.png';

export default function Footer() {
    return (
        <StyledFooter>
            <h2>Bill Gibson</h2>
            <div className="icon-container">
                    <a href="https://github.com/GibbyBreaksTech" target="_blank" rel="noreferrer"><img src={Git} alt="" /></a>
                    <a href="https://twitter.com/GibbyBreaksTech" target="_blank" rel="noreferrer"><img src={Twitter} alt="" /></a>
                    <a href="https://www.linkedin.com/in/bill-gibson-868182104/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="" /></a>
                    <a href="https://www.fiverr.com/gibby_designs?up_rollout=true" target="_blank" rel="noreferrer"><img src={Fiverr} alt="" /></a>
                    <a href="https://www.upwork.com/freelancers/~01c291154f7c452996" target="_blank" rel="noreferrer"><img src={Upwork} alt="" /></a>
                </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
height: 100%;
border-top: 3px solid #0f4d92;
display: flex;
align-items: center;
flex-direction: column;
margin: auto;
width: 100%;
    h2 {
        font-size: 3em;
        color: #0f4d92;
    }
    .icon-container {
        display: flex;
        width: 30%;
        justify-content: space-between;
        margin: 20px auto;
        @media (max-width: 750px){
            width: 90%;
        }
        a {
            margin-right: 10px;
            img {
                width: 50px;
                opacity: .7;
                transition: 0.2s;
                &:hover{
                    opacity: 1;
                }
                @media (max-width: 750px){
                    width: 35px;
                }
            }
        }
    }
`;
