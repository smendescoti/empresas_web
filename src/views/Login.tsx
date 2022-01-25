import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import textValidation from '../validations/text-validation';
import passwordValidation from '../validations/password-validation';

export default function Login() {

    //declarando as variáveis do componente
    const [mensagem, setMensagem] = useState('');

    //declarando os objetos para construção do formulário
    const {
        control,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm();

    //função para capturar o evento SUBMIT do formulário
    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <Container maxWidth="sm">
            <Grid item style={{ marginTop: '100px' }}>
                <Paper style={{ padding: '20px' }}>
                    <Grid style={{ marginTop: '20px' }}>
                        <Typography align='center' variant='h5'>
                            Acesso ao Sistema
                        </Typography>
                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Grid style={{ margin: '20px' }}>

                            {/* campo para preenchimento do login */}
                            <Controller
                                control={control}
                                name='login'
                                defaultValue=''
                                rules={{
                                    validate: textValidation
                                }}
                                render={
                                    ({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            id='login'
                                            label='Login de Acesso'
                                            type='text'
                                            fullWidth
                                            autoFocus
                                            variant="standard"
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    )
                                }
                            />

                            {/* mensagem de erro de validação do campo login */}
                            {
                                errors.login && <Typography style={{ color: '#bb2124' }}>
                                    {errors.login.message}
                                </Typography>
                            }

                        </Grid>

                        <Grid style={{ margin: '20px' }}>

                            {/* campo para preenchimento da senha */}
                            <Controller
                                control={control}
                                name='senha'
                                defaultValue=''
                                rules={{
                                    validate: passwordValidation
                                }}
                                render={
                                    ({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            id='senha'
                                            label='Senha de Acesso'
                                            type='password'
                                            fullWidth
                                            variant="standard"
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    )
                                }
                            />

                            {/* mensagem de erro de validação do campo senha */}
                            {
                                errors.senha && <Typography style={{ color: '#bb2124' }}>
                                    {errors.senha.message}
                                </Typography>
                            }

                        </Grid>

                        <Grid style={{ margin: '20px' }}>
                            <Button type="submit" variant='contained' fullWidth color="primary">
                                Entrar
                            </Button>
                        </Grid>

                        <Grid style={{ margin: '20px' }}>
                            <Typography align='center' variant="h6" style={{ color: '#dc3545' }}>
                                {mensagem}
                            </Typography>
                        </Grid>

                    </form>
                </Paper>
            </Grid>
        </Container>
    )
}