
function SecondaryHeading({ content }: { content: String }) {
  return (
    <p className="relative uppercase tracking-[5px] text-accent w-max text-[13px] md:text-lg
                  before:content-[''] before:bg-accent before:absolute before:h-[2px] before:w-12 before:left-0 before:z-10 before:top-1/2 
                  before:translate-x-[-140%] translate-x-[42%]"
    > {content}</p >
  )
}

export default SecondaryHeading;
