import Link from 'next/link'
import { Button } from 'antd'

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <Button>About</Button>
      </Link>
    </p>
  </>
)

export default IndexPage
