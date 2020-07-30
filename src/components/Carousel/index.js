import React, {useState} from 'react';
import { VideoCardGroupContainer, Title, ExtraLink} from './styles';
import VideoCard from './components/VideoCard';
import Slider , {SliderItem} from './components/Slider';


function Carousel({ ignoreFirstVideo, category, }){

  const [videos , setVideos] = useState([]);

  const [loaded , setLoaded] = useState(false)

    if( !loaded ){
      fetch(`https://www.botecodigital.info/react-api/categorias/${category.channel_id}/videos`)
        .then(res => res.json())
        .then( (result) => {
              setVideos(result);
              setLoaded(true)
          },
          (error) => {
            console.log(error)
          }
        );
        return (<p>Carregando ...</p>);
    }
    
        return (
        <VideoCardGroupContainer>
            {category.titulo && (
            <>
                <Title style={{ background: category.cor || 'red' }}>
                    {category.titulo}     
                </Title>
                { category.link_extra && 
                    <ExtraLink href={category.link_extra.url} target="_blank">
                        {category.link_extra.text}
                    </ExtraLink>
                }
            </>
            )}

        <Slider>
            {videos.map( ( video, index )  => {
                if( ignoreFirstVideo && index === 0 ){
                    return null;
                }
                
                return (
                    <SliderItem key={video.titulo}>
                        <VideoCard
                            videoTitle={video.titulo}
                            videoURL={video.url}
                            categoryColor={category.cor}
                        />
                    </SliderItem>
                );            
            })}

        </Slider>

        </VideoCardGroupContainer>
    );
    
}

export default Carousel;