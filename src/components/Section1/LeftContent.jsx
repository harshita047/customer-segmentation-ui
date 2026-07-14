import LeftHeroText from './LeftHeroText'
import LeftArrow from './LeftArrow'


const LeftContent = () => {
  return (
    <div className=' h-full w-1/3 flex flex-col justify-between '>
      <LeftHeroText />
      <LeftArrow />
    </div>
  )
}

export default LeftContent