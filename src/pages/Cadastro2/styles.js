import styled from 'styled-components';

export const TableContainer = styled.div`
    overflow-x:auto;
    margin:10px;
`;

export const Table = styled.table`
    border: 1px solid #FFF;
    border-radius:5px;
    margin: 5px;
    min-width: 800px;
`;


export const Row = styled.tr`
&:nth-child(even) {
    background-color:#222;
}
`;

export const TableHeader = styled.th`
    background-color:#FFF;
    font-size:1.1em;
    color:#000;
    padding:15px;
`;

export const TableContent = styled.td`
    font-size:.9em;
    padding:10px;
    
`;
