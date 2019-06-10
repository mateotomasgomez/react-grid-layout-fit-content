import React, { useState, useEffect } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
import { Accordion, Card, Button, ListGroup } from "react-bootstrap";
import styled from 'styled-components'
import _ from 'lodash'
import 'react-grid-layout/css/styles.css' 
import 'react-resizable/css/styles.css' 

const ReactGridLayout = WidthProvider(RGL);

    const rowHeight = 10
    var refs = {}

function DynamicHeightGrid({layout, setLayout}) {
  const [isMobile, setIsMobile] = useState(0)
  useEffect(() => {
    setTimeout(updateLayoutHeight,100)
  }, [isMobile]);
  
  useEffect(() => {
    const handleResize = 
    _.debounce(()=>{
      if (window.innerWidth < 687){
        setIsMobile(1)
      }
      else{
        setIsMobile(0)
      }
        updateLayoutHeight()
      
    },50)
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  const setTextInputRef = (id, element) => {
    refs[id] = element
  }

  const updateLayoutHeight = () => {
    setLayout(freshLayout => {
      return getLayoutWithHeight(freshLayout)
    })
  }

  const getLayoutWithHeight = (_layout) => {
    var nextLayout = []
    for(const k in _layout){
      const item = {..._layout[k]}
      if (refs[item.i]){
        item.h = Math.round((refs[item.i].clientHeight)/(rowHeight+1))+1
      }
      nextLayout.push(item)

    }
    return nextLayout
  }

  const onResize = (_layout, oldLayoutItem, layoutItem, placeholder) => {
    if(refs[layoutItem.i]){
      layoutItem.h = (refs[layoutItem.i].clientHeight/rowHeight);
      placeholder.h = (refs[layoutItem.i].clientHeight/rowHeight);
    }
  }

  const onResizeStop = (_layout, oldLayoutItem, layoutItem, placeholder) => {
    if(refs[layoutItem.i]){
      layoutItem.h = ((refs[layoutItem.i].clientHeight)/rowHeight);
    }
    setTimeout(updateLayoutHeight,100)
  }


  const onLayoutChange = (_layout, _layouts) => {
    // Prevent saving layout of mobile version
    if(!isMobile){
      setLayout(_layout)

    }
  }

  return (
    <GridContainer>
      <StyledResponsiveGridLayout className="layout" 
        layout={layout} 
        rowHeight={rowHeight/10}
        onResize={onResize}
        onResizeStop={onResizeStop}
        cols={isMobile?1:12}
        onLayoutChange={onLayoutChange}>
        <WidgetContainer key="a">
          <WidgetContainerHeight  ref={(element)=> {setTextInputRef("a", element)}}>
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </WidgetContainerHeight>
        </WidgetContainer>
        <WidgetContainerWithBackground key="b">
        </WidgetContainerWithBackground>
        <WidgetContainer key="c">
        <WidgetContainerText  ref={(element)=> {setTextInputRef("c", element)}}>
            Duis rutrum eros eget egestas varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent et pharetra neque. Aenean rutrum quam mollis mauris vestibulum egestas. Donec placerat feugiat est a consequat. Vivamus eros quam, malesuada eget elementum eget, tincidunt quis arcu. Donec sem nisl, eleifend in mi sed, efficitur viverra turpis. Nullam lectus sem, cursus ac scelerisque quis, aliquet in arcu. Quisque nec venenatis justo. Quisque laoreet, ipsum eu congue cursus, dolor nulla interdum sapien, eu semper mauris sapien cursus ex. Sed lobortis, ex eu porta volutpat, odio mauris gravida arcu, sagittis pellentesque nibh sapien et nibh. Donec ut tristique massa. Nunc quis sem ut turpis suscipit tristique at vitae justo. Sed tempor dolor turpis. Aliquam faucibus dui feugiat, consectetur ex nec, iaculis massa. 
          </WidgetContainerText>
        </WidgetContainer>
        <WidgetContainer key="d">
        <WidgetContainerText  ref={(element)=> {setTextInputRef("d", element)}}>
        Duis rutrum eros eget egestas varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent et pharetra neque. Aenean rutrum quam mollis mauris vestibulum egestas. Donec placerat feugiat est a consequat. Vivamus eros quam, malesuada eget elementum eget, tincidunt quis arcu. Donec sem nisl, eleifend in mi sed, efficitur viverra turpis. Nullam lectus sem, cursus ac scelerisque quis, aliquet in arcu. Quisque nec venenatis justo. Quisque laoreet, ipsum eu congue cursus, dolor nulla interdum sapien, eu semper mauris sapien cursus ex. Sed lobortis, ex eu porta volutpat, odio mauris gravida arcu, sagittis pellentesque nibh sapien et nibh. Donec ut tristique massa. Nunc quis sem ut turpis suscipit tristique at vitae justo. Sed tempor dolor turpis. Aliquam faucibus dui feugiat, consectetur ex nec, iaculis massa. 
          </WidgetContainerText>
        </WidgetContainer>

        <WidgetContainer key="e">
        <WidgetContainerText  ref={(element)=> {setTextInputRef("e", element)}}>
          <h1>Duis rutrum eros eget egestas varius. Interdum et malesuada fames ac ante ipsum primis in faucibus.</h1>
          <p>Duis rutrum eros eget egestas varius. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          <p>Praesent et pharetra neque. Aenean rutrum quam mollis mauris vestibulum egestas. Donec placerat feugiat est a consequat. Vivamus eros quam, malesuada eget elementum eget, tincidunt quis arcu. Donec sem nisl, eleifend in mi sed, efficitur viverra turpis. Nullam lectus sem, cursus ac scelerisque quis, aliquet in arcu. Quisque nec venenatis justo.</p>
          <p>Quisque laoreet, ipsum eu congue cursus, dolor nulla interdum sapien, eu semper mauris sapien cursus ex. Sed lobortis, ex eu porta volutpat, odio mauris gravida arcu, sagittis pellentesque nibh sapien et nibh. Donec ut tristique massa. Nunc quis sem ut turpis suscipit tristique at vitae justo. Sed tempor dolor turpis. Aliquam faucibus dui feugiat, consectetur ex nec, iaculis massa. 
          </p>
          <br />
        <Accordion defaultActiveKey="0" 
          onClick={()=>setTimeout(updateLayoutHeight,500)}>
          <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another bodyHello! I'm another bodyHello! I'm another bodyHello! I'm another bodyHello! I'm another bodyHello! I'm another bodyHello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
          </WidgetContainerText>
        </WidgetContainer>

      </StyledResponsiveGridLayout>
    </GridContainer>
  )
}

const WidgetContainer = styled(Card)`
  background:#ccc;
  padding:0px;
  z-index:2;
  box-sizing: border-box;
`

const WidgetContainerHeight = styled.div`

`
const WidgetContainerText = styled.div`
  padding:30px;
`

const WidgetContainerWithBackground = styled.div`
  background:url('https://placeimg.com/1920/200/arch/sepia');
  background-size:cover;
  background-position:center center;
  z-index:2;
`

const GridContainer = styled.div`

`

const StyledResponsiveGridLayout = styled(ReactGridLayout)`

`

export default DynamicHeightGrid