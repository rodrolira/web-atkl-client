import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../atoms/Title'

function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id='about' className='p-20'>
      <div className='container mx-auto p-5'>
        <Title>{t('aboutSection.title')}</Title>
        <p className='text-xl text-white'>
          <span dangerouslySetInnerHTML={{ __html: t('aboutSection.text') }} />
        </p>
        {/* Agrega más contenido sobre la sección "About" según sea necesario */}
      </div>
    </section>
  )
}

export default AboutSection
