import { ReactNode } from "react"

function PrimaryHeading(props: { content: ReactNode }) {
  return (
    <h1 className="text-7xl">{props.content}</h1>
  )
}

export default PrimaryHeading
