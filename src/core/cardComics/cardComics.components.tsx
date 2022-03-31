import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
// import { useHistory } from 'react-router-dom'
import { BoxCard, BoxDescription, BoxImg, ContainerBottom, DivInfo, IconHeart, SpanInfo } from './styled'
import { TCardComicsView } from './types'

export const CardComicsView: FC<TCardComicsView> = ({ dataComics }: TCardComicsView) => {

    // const history = useHistory()

    console.log(dataComics)

    return (
        <ContainerBottom>
            {dataComics?.data?.results.map((x:any, i:number) => <BoxCard /* onClick={() => history.push(`/comicInfo${ x?.id }`)} */ key={i}>
                <IconHeart><FontAwesomeIcon icon={'heart'} size='1x' color='gray' /></IconHeart>
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
        </ContainerBottom>
    )
}