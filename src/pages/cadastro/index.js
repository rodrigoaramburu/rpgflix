import React, { useState } from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';
import {Table,Row,TableHeader,TableContent,TableContainer} from './styles'
import Button from '../../components/Button';
import { useAlert } from 'react-alert';


function CadastroVideo(){

    const [values ,setValues] = useState({
        nomeCanal: '',
        idCanal: '',
        linkCanal: '',
        descricaoCanal: '',
        corCanal: '#0000FF'
    });
    

    function setValue( key , value){
        setValues({
            ...values,
            [key]:value
        });
    }

    function handleChange(event){
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        );
    }

    const [canais , setCanais] = useState( [] );
    const [loaded, setLoaded] = useState(false);

    if( !loaded ){
        fetch("https://www.botecodigital.info/react-api/categorias")
        .then(res => res.json())
        .then( (result) => {
                setCanais( result );
                setLoaded( true )
            },
            (error) => {
                console.log(error)
            }
        )
    }
    const alert = useAlert();

    function deletar(event, channel_id){
        alert.show('Deletando...');
        if( window.confirm('Deseja realmente deletar? ') ){
            fetch('https://www.botecodigital.info/react-api/categorias/'+channel_id, {
                method: 'DELETE'
            }).then(response => {
                setLoaded(false);
                alert.show('Deletado');
            });
        }
    }


    function enviar(event){
        event.preventDefault();
        let data ={
            title: values.nomeCanal,
            channelID: values.idCanal,
            extra_title: values.linkCanal,
            extra_link: values.descricaoCanal,
            cor: values.corCanal
        }
        alert.show('Adicionando...');
        fetch('https://www.botecodigital.info/react-api/categorias', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => {
            console.log( response.json() );
            setLoaded(false);
            alert.show(values.nomeCanal+' adicionado');
        })

        setValues({
            nomeCanal: '',
            idCanal: '',
            linkCanal: '',
            descricaoCanal: '',
            corCanal: '#0000FF'
        });
    }
    return (
        <PageDefault>
            <h1>Cadastro de Canal: {values.nomeCanal}</h1>
            

            <form onSubmit={enviar}>
                
                <FormField 
                    label="Nome Canal"
                    name="nomeCanal"
                    type="text"
                    className="input"
                    value={values.nomeCanal}
                    onChange={handleChange}
                />

                <FormField 
                    label="ID do Canal:"
                    name="idCanal"
                    type="text"
                    className="input"
                    value={values.idCanal}
                    onChange={handleChange}
                />

                <FormField 
                    label="Link do Canal:"
                    name="linkCanal"
                    type="text"
                    className="input"
                    value={values.linkCanal}
                    onChange={handleChange}
                />


                <FormField 
                    label="Descrição:"
                    name="descricaoCanal"
                    type="text"
                    className="input"
                    value={values.descricaoCanal}
                    onChange={handleChange}
                />

                <FormField 
                    label="Cor: "
                    name="corCanal"
                    type="color"
                    className="color"
                    value={values.corCanal}
                    onChange={handleChange}
                />
                <div style={{paddingTop: 15+'px' }}>
                    <Button><i className="fas fa-save"></i> Salvar</Button>
                </div>
            </form>
            <TableContainer>
                <Table>
                    <thead>
                        <Row>
                            <TableHeader>Titulo</TableHeader>
                            <TableHeader>ID Canal</TableHeader>
                            <TableHeader>Descrição</TableHeader>
                            <TableHeader>Cor</TableHeader>
                            <TableHeader>Ações</TableHeader>
                        </Row>
                    </thead>
                    <tbody>
                        {canais.map( (canal , index) =>{
                            return (
                                <Row key={index}>
                                    <TableContent>{canal.titulo}</TableContent>
                                    <TableContent>{canal.channel_id}</TableContent>
                                    <TableContent>{canal.link_extra.text}</TableContent>
                                    <TableContent style={{backgroundColor: canal.cor }}>{canal.cor}</TableContent>
                                    <TableContent>
                                        <Button onClick={ (event) =>{ deletar(event, canal.channel_id ) }}>
                                            <i className="fas fa-trash-alt"></i>
                                        </Button>
                                    </TableContent>
                                </Row>
                            );
                        }) }
                    </tbody>
                </Table>
            </TableContainer>
            
           
        </PageDefault>
    );
}


export default CadastroVideo;