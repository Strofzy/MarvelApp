import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    width:100%;
    background-color:#fff;
    padding:20px;
    border:1px solid #d2d2d2;
    height:80px;
    justify-content:space-between;
    align-items:center;
`

export const BoxInput = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:45px;
    position:relative;
    border-radius:7px;
`
export const Input = styled.input`
    display:flex;
    width:100%;
    height:100%;
    outline:none;
    border:1px solid #d2d2d2;
    padding:0px 5px;
    border-radius:5px;
`
export const DivIconSearch = styled.button`
    width:30px;
    cursor: pointer;
    height:30px;
    border-radius:50%;
    border:none;
    position:absolute;
    right:8px;
    :hover{
        opacity: .8;
    }
`
export const DivSectionsTop = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:33%;
    gap:30px;
`
export const SpanButton = styled.span`
    border-bottom:1px solid transparent;
    width:auto;
    padding: 5px 0;
    transition:.6s;
    cursor:pointer;
    :hover{
        border-bottom:1px solid gray;
    }
`
