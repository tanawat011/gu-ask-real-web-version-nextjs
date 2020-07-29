import Link from 'next/link'
import { Button } from 'antd'
import styled from 'styled-components'


const ButtonRed = styled(Button)`
  color: red;
`

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <ButtonRed>About</ButtonRed>
      </Link>
    </p>
  </>
)

export default IndexPage
