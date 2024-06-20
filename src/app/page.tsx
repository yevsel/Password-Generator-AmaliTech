"use client"


import React,{ useEffect, useState} from 'react'
import { Container } from '@/components/Container.style'
import { Text } from '@/components/Text.style'
import { SubContainer } from '@/components/SubContainer.style'
import copy from "../../assets/images/icon-copy.svg"
import { FlexContainer } from '@/components/FlexContainer.style'
import { IconStyle } from '@/components/IconStyle.style'
import { Slider } from '@/components/Slider.style'
import { Ball } from '@/components/Ball.style'
import { Checked, Unchecked } from '@/components/Check.style'
import check from "../../assets/images/icon-check.svg"
import { PasswordStrengthMainComponent,PasswordStrengthPercentage } from '@/components/PasswordStrength'
import { GenerateButton } from '@/components/GenerateButton.style'
import { EmptyMeasure } from '@/components/PasswordStrenghtComponents.style'
import { FaArrowRight } from "react-icons/fa6";
interface ICharacters{
  id:number,
  activate:boolean,
  characters:string,
  label:string
}



const MainPage = ()=> {
  
    const [generatedPassword,setGeneratedPassword] = useState<string>("")
    const [characterLength,setCharacterLength] = useState<any>(0)
    const [ballPosition,setBallPosition] = useState<number>(0)
    const [canDrag,setCanDrag] = useState<boolean>(false)
    const [showCopied,setShowCopied] = useState<boolean>(false)
    const [active,setActive] = useState<boolean>(false)
    const [sliderPosLeft,setSliderPosLeft] = useState<number>(0)
    
    // const jet_brains = JetBrains_Mono({subsets:["latin"]})

    
    let [characters,setCharacters] = useState<Array<ICharacters>>([
      {  
        id:0,
        activate:false,
        characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        label:"Include Uppercase Letters"
      },
      {
        id:1,
        activate:false,
        characters:"abcdefghijklmnopqrstuvwxyz",
        label:"Include Lowercase Letters"
      },
      {
        id:2,
        activate:false,
        characters:"0123456789",
        label:"Include Numbers"
      },
      {
        id:3,
        activate:false,
        characters:"!@#$%^&*()-_=+[]{};':|\\,.<>/?`~",
        label:"Include Symbols"
      }
    ])
    
    useEffect(()=>{
      let slider = document.getElementById("slider")?.getBoundingClientRect().left
      if(slider){
        setSliderPosLeft(slider)
      }
    },[])
    
    const handleMouseDown = (event:any) => {
      
      if(canDrag){
        const mouseXPosition = sliderPosLeft?event.clientX - sliderPosLeft:0
        if(mouseXPosition>=475){
          setBallPosition(475)
        }
        else if(mouseXPosition<=1){
          setBallPosition(0)
        }
        else{
                const a = (mouseXPosition)/475
                setBallPosition(mouseXPosition-10)
              setCharacterLength((a*15).toFixed(0))
              }
      }
        
      // if(canDrag){
      //   const mouseX = event.clientX;
        
      //   if(mouseX>=870){
      //     setBallPosition(870-407)
      //     }
      //   else if(mouseX<=407){
      //     setBallPosition(0)
      //   }
      //   else{
      //       const a = (mouseX-397)/474
      //       setBallPosition(mouseX-407)
      //     setCharacterLength((a*15).toFixed(0))
      //     }
      // }
      
      
  };

  const handleChecked = (idx:number,activeState:boolean)=>{
    const updatedCharacters = [...characters];
    let toChange = updatedCharacters[idx]
    let newChange = {...toChange,activate:!activeState}
    updatedCharacters[idx] = newChange
    setCharacters(updatedCharacters)
  }
  
  const handleGeneratePassword = ()=>{
    setActive(true)
    const charactersToUse = characters.filter(item=>item.activate===true).map(item=>item.characters)
    let allChar = ""
    for (let char of charactersToUse){
      allChar+=char
    }
    let randomPassword = ""
    for (let i=0;i<characterLength;i++){
      randomPassword+=allChar[Math.floor(Math.random()*allChar.length)]
    }
    if(randomPassword===undefined){
      setGeneratedPassword("")
    }else{
      setGeneratedPassword(randomPassword)
    }
    setShowCopied(false)
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(generatedPassword);
    setShowCopied(true)
  }

  return (
    
      <Container >
          <Text 
            fontSize="24" 
            color='var(---primary-color-gray)'
            textAlign='center'
            >Password Generator</Text>
            
            <SubContainer height='80' marginTop='30'>
              <FlexContainer width='90'>
                  <div style={{flex:1}}>
                    {active?<Text fontSize='32' color='var(---primary-color-white)' textAlign='left'>{generatedPassword}</Text>:<Text fontSize='32' color='var(---primary-color-gray)' textAlign='left'>P4$5W0rD!</Text>}
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    {showCopied&&<Text fontSize='18' textAlign='left' color='var( ---secondary-color-green)'>COPIED</Text>}
                    <IconStyle onClick={handleCopy} src={copy} width={20} height={10} alt="Copy icon"/>
                  </div>
              </FlexContainer>
            </SubContainer>
            
            <SubContainer id="mainContainer" marginTop='30' height='528'>
              <FlexContainer height='18'  width='90' justifyContent='between'>
                <div style={{flex:1}}>
                  <Text fontSize='18' color='var(---primary-color-white)' textAlign='left'>Character Length</Text>
                </div>
                <div>
                  <Text fontSize='32' color='var(---secondary-color-green)' textAlign='right'>{characterLength}</Text>
                </div>
              </FlexContainer>
              
              <Slider id="slider" ballPosition={ballPosition}  onMouseMove={canDrag?handleMouseDown:()=>{}}>
                <Ball onMouseUp={()=>setCanDrag(false)} onMouseDown={()=>setCanDrag(true)}  ballPosition={ballPosition}/>
              </Slider>
              
              
              <div style={{marginTop:30,marginBottom:30}}>
                {
                  characters.map((item:ICharacters,idx:number)=>{
                    return(
                      <FlexContainer key={idx} height='10'  marginTop="15" width='90'>
                        <button onClick={()=>handleChecked(idx,item.activate)}>
                          {item.activate?<Checked src={check} alt="Check icon" width={15} height={15}></Checked>:<Unchecked></Unchecked>}
                        </button>
                        <div style={{marginLeft:"20px"}}>
                          <Text fontSize='18' color='var(---primary-color-white)' textAlign='left'>{item.label}</Text>
                        </div>
                      </FlexContainer>
                    )
                  })
                }
              </div>
            
              <FlexContainer height='15' width='90'  backgroundColor='var(---primary-color-deep-black)'>
                <div style={{marginLeft:20,flex:1}}>
                  <Text fontSize='18' color='var(---primary-color-gray)' textAlign='left'>STRENGTH</Text>
                </div>
                <div style={{marginRight:20}}>
                  {active?PasswordStrengthMainComponent(PasswordStrengthPercentage(generatedPassword)):
                  <div style={{display:"flex",gap:10,alignItems:"center"}}>
                      <EmptyMeasure/>
                      <EmptyMeasure/>
                      <EmptyMeasure/>
                      <EmptyMeasure/>
                  </div>
                  }
                </div>
              </FlexContainer>
            
              <GenerateButton onClick={handleGeneratePassword}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <p style={{fontSize:"18px"}}>GENERATE</p>
                    <FaArrowRight />
                    {/* <svg width="12"  height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg> */}
                  </div>
              </GenerateButton>
            
            </SubContainer>
      </Container>
  )
}

export default MainPage