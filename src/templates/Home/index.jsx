import React, { useState, useEffect, useRef } from 'react';
import Base from 'templates/Base'
import Hero from '../../components/Hero'
import About from '../../components/About';
import Skills from '../../components/Skills';
import * as S from './styles'
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function HomeTemplate({
  seo,
  header,
  footer,
  data,
  cat
}) {
  const [vantaEf, setVantaEf] = useState(0)
  const vantaRef = useRef(null)
  const [vantaEfB, setVantaEfB] = useState(0)
  const vantaRefB = useRef(null)

  useEffect(() => {
    const fog = FOG({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x0,
      midtoneColor: 0x0,
      lowlightColor: 0x0,
      baseColor: 0xffffff,
      blurFactor: 0.33
    })

    const fogB = FOG({
      el: vantaRefB.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x0,
      midtoneColor: 0x0,
      lowlightColor: 0x0,
      baseColor: 0xffffff,
      blurFactor: 0.33
    })


    if (!vantaEf || !vantaEfB) {
      setVantaEf(fog);
      setVantaEfB(fogB);
    }

    return () => {
      if (vantaEf) vantaEf.destroy();
      if (vantaEfB) vantaEfB.destroy();
    };

  }, [vantaEf, vantaEfB]);


  return (
    <Base seo={seo} header={header} footer={footer}>
      <S.BackWrapper ref={vantaRef}>
        <S.Wrapper>
          <Hero data={data} />
        </S.Wrapper>
      </S.BackWrapper>
      <S.Wrapper>
        <About data={data} />
      </S.Wrapper>
      <S.BackSkills ref={vantaRefB}>
        <S.Wrapper>
          <Skills data={data} cat={cat} />
        </S.Wrapper></S.BackSkills>
    </Base>
  )
}
