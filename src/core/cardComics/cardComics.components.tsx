import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { BoxCard, BoxDescription, BoxImg, Container, DivInfo, IconHeart, SpanInfo } from './styled'
import { TCardComicsView } from './types'

export const CardComicsView: FC<TCardComicsView> = ({ dataComics, handleAddFavorites }: TCardComicsView) => {

    const navigate = useNavigate()
    const handleClick = (event: MouseEvent<HTMLDivElement>, favorite: any) => {
        event.stopPropagation()
        handleAddFavorites(favorite)
    }
    return (
        <Container>
            {dataComics.map((x:any, i:number) => <BoxCard onClick={() => navigate(`/comicInfo/${ x?.id }`)} key={i}>
                <IconHeart onClick={e => handleClick(e, x)}><FontAwesomeIcon icon={'heart'} size='1x' color='gray' /></IconHeart>
                <BoxImg>
                    <img src={`${ x?.thumbnail.path }.${ x?.thumbnail?.extension }`} width='100%' alt='IMG' />
                </BoxImg>
                <BoxDescription>
                    <DivInfo>
                        <SpanInfo>Comic</SpanInfo>
                        <SpanInfo>{x?.title}</SpanInfo>
                    </DivInfo>
                    <DivInfo>
                        <SpanInfo>Numero de paginas</SpanInfo>
                        <SpanInfo>{x?.pageCount}</SpanInfo>
                    </DivInfo>
                    <DivInfo>
                        <SpanInfo>Variantes</SpanInfo>
                        <SpanInfo>{x?.variants.length}</SpanInfo>
                    </DivInfo>
                </BoxDescription>
            </BoxCard>
            )}
        </Container>
    )
}
