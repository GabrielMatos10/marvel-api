import { TextField } from '@material-ui/core';
import React, {useState} from 'react'
import styled from 'styled-components';

const Header = styled.div`
padding-left: 800px;
width: auto;
`
const Pesquisa = ({search}) => {
    const [text, setText] = useState('')

    const onSearch= (q)=>{
        setText(q)
        search(q)
    }

    return (
        <Header>
        <TextField 
        variant="outlined"
        label="Pesquisar Herói"
        onChange={(e)=>onSearch(e.target.value)}
        value={text}
        >
        </TextField>
        </Header>
    )
}


export default Pesquisa;