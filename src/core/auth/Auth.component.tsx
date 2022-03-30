import { FC } from 'react'
import { Container, CardLogin, Title, Box, DivLeft, DivRight, BoxISection, TextLink, ButtonIn } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TAuthView } from './types'
import { TextField } from '@mui/material'
// import { useHistory } from 'react-router-dom'

export const AuthView: FC<TAuthView> = ({ handleChange, page }: TAuthView) => {

    // const history = useHistory();

    return (
        <Container>
            <CardLogin>
                <DivLeft id='form' onSubmit={e => console.log(e)}>
                    {page === 1 ?
                        <Box>
                            <Title >Iniciar sesión</Title>
                            <TextField 
                                id="outlined-basic" 
                                label="Correo Electrónico" 
                                variant="outlined" 
                                fullWidth 
                                size="small"
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="Contraseña" 
                                variant="outlined" 
                                fullWidth 
                                size="small"
                            />
                            <ButtonIn /* onClick={() => history?.push('/home')} */ type='button'>Entrar</ButtonIn>
                            <TextLink align='center' color='#000' /* onClick={() => history?.push('/register')} */> ¿Eres nuevo? Crea una cuenta </TextLink>
                        </Box>
                        :
                            <Box gap='2px'>
                                <Title>Registrarse</Title>
                                    <TextField 
                                    id="outlined-basic" 
                                    label="Correo Electrónico" 
                                    variant="outlined" 
                                    fullWidth 
                                    size="small"
                                />
                                <TextField 
                                    id="outlined-basic" 
                                    label="Contraseña" 
                                    variant="outlined" 
                                    fullWidth 
                                    size="small"
                                />
                                <TextField 
                                    id="outlined-basic" 
                                    label="Confirmar contraseña" 
                                    variant="outlined" 
                                    fullWidth 
                                    size="small"
                                />
                                <ButtonIn  type='submit' form='form'><span style={{ marginRight: '10px' }}>Registrarse</span><FontAwesomeIcon icon={'sign-in-alt'}/></ButtonIn>
                                <TextLink top='8px' align='center' color='#000' /* onClick={() => history?.push('/login')} */> Ya tengo cuenta</TextLink>
                            </Box>
                                }
                </DivLeft>
                <DivRight>
                    <BoxISection justify='flex-start'>
                        <Title color='#fff'>Comics</Title>
                    </BoxISection>
                    <BoxISection>
                        <img src='/CompanyLogoLarge.png' alt='Wow' width='530px' height='100px' />
                    </BoxISection>
                    <BoxISection justify='flex-end'>
                            <a href='https://www.linkedin.com/in/jose-gregorio-gonzalez-620966216/' style={{ width: '100%', display: 'flex', alignItems: 'flex-end', textDecoration: 'none' }}>
                                <TextLink align='center' color='#fff'> Desarrollado por Jose Gregorio G</TextLink>
                            </a>
                    </BoxISection>
                </DivRight >
            </CardLogin>
        </Container>
    )
}