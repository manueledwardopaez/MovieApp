
import styled from 'styled-components'

const Header = styled.header`
    background: linear-gradient(66.81deg, #0185FF -1.55%, #36D1DC 101.74%);
    block-size: 120px;
    color: white;
`


export const NavBar = () => {
  return (
    <Header className="d-flex justify-content-start align-items-center p-4">      
        <h1 className='m-0' href="#">LOGO</h1>
        
    </Header>
  )
}

