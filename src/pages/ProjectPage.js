import { useState, useEffect } from 'react';

// projects
import { ProjectList } from '../ProjectList';


// styled
import styled from 'styled-components';
import { useParams } from 'react-router';


export default function Blogproject() {

    const { id } = useParams();

    const [ projects , setProjects ] = useState([]);

    useEffect(() => {
        setProjects(ProjectList);
    }, [id])


console.log(id)
    return (
        <Styledproject>
           { 
                projects.filter(projects => projects.id === `${id}`).map((project, key) => {
                    return (
                        <div className="overlay-content" key={key}>
                            <div className="overlay-wrapper">
                                <h4>{project.title}</h4>
                                <img src={project.thumbnail} alt="" />
                                <a href={project.websiteLink} target="_blank" rel="noreferrer">Project Website</a>
                                <a href={project.githubLink} target="_blank" rel="noreferrer">Github</a>
                                <p>{project.paragraph}</p>
                            </div>
                        </div>
                    )
                })
            }
        </Styledproject>
    )
}

const Styledproject = styled.div`
min-height: 20vh;
margin: 2em 0;
width: 100%;
    .overlay-content {
        position: relative;
        width: 90%;
        display: flex;
        flex-direction: column;
        margin:  2em auto;
        border-radius: 20px;
        @media (max-width: 750px){
            width: 90%;
        }
        .overlay-wrapper{
            width: 90%;
            height: 100%;
            margin: auto;
            display: flex;
            flex-direction: column;
            h4{
                font-size: 4em;
                color: #0f4d92;
                margin-bottom: 10px;
                @media (max-width: 750px){
                    font-size: 2.2em;
                    margin-bottom: 1em;
                }
            }
            img {
                width: 50%;
                border-radius: 10px;
                @media (max-width: 750px){
                    width: 90%;
                }
            }
            p {
                font-size: 2em;
                margin: 20px 0;
                letter-spacing: 0.5px;
                line-height: 1.7;
            }
            a {
                font-size: 2em;
                margin: 10px;
                color: #0f4d92;
                &:hover{
                    color: black;
                }
            }
        }
        
    }
`;