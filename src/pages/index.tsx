import WordCounter from "@/components/WordCounter";


export default function Home() {
  return (
    <>
      <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto py-8">
        <WordCounter />
      </div>
    </div>
    </>
  )
}
