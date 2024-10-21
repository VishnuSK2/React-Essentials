import { useState } from 'react';
import CoreConcept from './Components/CoreConceprt';
import Header from './Components/Header';
import TabButton from './Components/TabButton';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './dataWithExamples'


function App() {
  const [selectTopic, setSelectTopic]=useState()

  function handleSelect(selectedButton){
    // selectedButton =>"components", "jsx" ," props" , "state"
    setSelectTopic(selectedButton)
  }

  let tabContent= <p style={{textAlign:'center',width:'40%',fontWeight:'bold',fontSize:'20px'}}>
    Please Select a Topic </p>
  if(selectTopic){
    tabContent=(
      <div id='tab-content'>
      <h3>{EXAMPLES[selectTopic].title}</h3>
      <p>{EXAMPLES[selectTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectTopic].code}
        </code>
      </pre>
    </div>
    )
  }
  return (
    <>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepets</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>
              <CoreConcept key={conceptItem.title} {...conceptItem}  />
            )}
          </ul>  
        </section>
        
        <section id='examples'>
          <h2>Examples</h2>

          <menu>
          <TabButton 
          isSelcted={selectTopic==='components'} 
          onSelect={()=>handleSelect('components')}>
            Components 
          </TabButton>

          <TabButton 
          isSelcted={selectTopic==='jsx'} 
          onSelect={()=>handleSelect('jsx')}>
            JSX
          </TabButton>

          <TabButton 
          isSelcted={selectTopic==='props'} 
          onSelect={()=>handleSelect('props')}>
            Pros
          </TabButton>

          <TabButton  
          isSelcted={selectTopic==='state'} 
          onSelect={()=>handleSelect('state')}>
            State
          </TabButton>
          </menu>

          {tabContent}

        </section>
      </main>
    </>
  )
}

export default App
