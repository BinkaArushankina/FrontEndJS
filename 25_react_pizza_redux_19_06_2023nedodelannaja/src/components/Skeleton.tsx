import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton:React.FC = () => {
  return (
    <ContentLoader 
    //skorostj animazii saruski ( po umoltschaniu 2)
    speed={2} 
    //sadaet schirinu sagluschki (400)
    width={280} 
    //sadaet wisotu sagluschki (160)
    height={520} 
    //opredelaet prjamougolnuju oblastj prosmotra dlja sagluschki (0 0 400 160)
    viewBox='0 0 280 520' 
    //sadaet zwet fona sagluschki po umoltschaniu( #f3f3f3)
    backgroundColor='#f3f3f3' 
    // sadaet zwet perednego plkana sagluschki ( zwet samoj animazii. po umoltschaniu  #ecebeb)
    foregroundColor='#ecebeb' 
    >
      {/* krug */}
      {/*
        cx - opredelaet gorisontalnuju koordinatu zentra kruga otn werchnego lewogo ugla sagluschki;
        cy - opredelaet wertikalnuju koordinatu zentra kruga otn werchnego lewogo ugla sagluschki;
        r - sadaet radius kruga;
      */}
        <circle cx='139' cy='139' r='139' />
      {/* prjamougolniki */}
      {/* x - sadaem gorisontalnuju posiziu ( otstup) prjamougolnika otnositelno werchnego lewogo ugla sagluschki;
          y - sadaet wertikalnuju posiziu ( otstup) prjamougolnika otnositelno werchnego lewogo ugla sagluschki;
          rx - sadaet radius skruglenia uglow gorisontalnich storon prjamougolnika (border-radius);
          ry - sadaet radius skruglenia uglow wertikalnich storon prjamougolnika (border-radius);
          width - schirina prjamougolnika;
          height - wisota prjamougolnika;
      */}
        <rect x={0} y={315} rx={10} ry={10} width={280} height={24}/>
        <rect x={0} y={355} rx={10} ry={10} width={280} height={88}/>
        <rect x={0} y={480} rx={10} ry={10} width={88} height={27}/>
        <rect x={130} y={470} rx={30} ry={30} width={150} height={47}/>
    </ContentLoader>
  );
};

export default Skeleton;